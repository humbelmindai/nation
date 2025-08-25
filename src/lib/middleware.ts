// API middleware for authentication and request handling
import { NextRequest } from 'next/server'
import { verifyToken, extractTokenFromHeader, JWTPayload } from './auth'
import { prisma } from './db'
import { unauthorizedResponse, forbiddenResponse, serverErrorResponse } from './api-response'

export interface AuthenticatedRequest extends NextRequest {
  user?: JWTPayload
}

export async function authenticateRequest(request: NextRequest): Promise<JWTPayload | null> {
  try {
    const authHeader = request.headers.get('authorization')
    const token = extractTokenFromHeader(authHeader)
    
    if (!token) {
      return null
    }

    const payload = verifyToken(token)
    if (!payload) {
      return null
    }

    // Verify user still exists and is active
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: { id: true, status: true, role: true }
    })

    if (!user || user.status !== 'active') {
      return null
    }

    return payload
  } catch (error) {
    console.error('Authentication error:', error)
    return null
  }
}

export function requireAuth(handler: (request: NextRequest, user: JWTPayload) => Promise<Response>) {
  return async (request: NextRequest) => {
    try {
      const user = await authenticateRequest(request)
      if (!user) {
        return unauthorizedResponse()
      }
      return handler(request, user)
    } catch (error) {
      console.error('Auth middleware error:', error)
      return serverErrorResponse()
    }
  }
}

export function requireRole(roles: string[], handler: (request: NextRequest, user: JWTPayload) => Promise<Response>) {
  return requireAuth(async (request: NextRequest, user: JWTPayload) => {
    if (!roles.includes(user.role)) {
      return forbiddenResponse('Insufficient permissions for this action')
    }
    return handler(request, user)
  })
}

export function requireAdmin(handler: (request: NextRequest, user: JWTPayload) => Promise<Response>) {
  return requireRole(['admin'], handler)
}

export function requireVendorOrAdmin(handler: (request: NextRequest, user: JWTPayload) => Promise<Response>) {
  return requireRole(['vendor', 'admin'], handler)
}

// Rate limiting (simple in-memory implementation)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

export function rateLimit(
  maxRequests: number = 100,
  windowMs: number = 15 * 60 * 1000, // 15 minutes
  handler: (request: NextRequest) => Promise<Response>
) {
  return async (request: NextRequest) => {
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    const now = Date.now()
    const windowStart = now - windowMs

    // Clean up old entries
    for (const [key, value] of rateLimitMap.entries()) {
      if (value.resetTime < windowStart) {
        rateLimitMap.delete(key)
      }
    }

    const current = rateLimitMap.get(ip)
    if (!current) {
      rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    } else if (current.resetTime < now) {
      rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    } else if (current.count >= maxRequests) {
      return new Response(
        JSON.stringify({
          success: false,
          error: {
            code: 'RATE_LIMIT_EXCEEDED',
            message: 'Too many requests, please try again later'
          }
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': Math.ceil((current.resetTime - now) / 1000).toString()
          }
        }
      )
    } else {
      current.count++
    }

    return handler(request)
  }
}

// CORS middleware
export function corsMiddleware(handler: (request: NextRequest) => Promise<Response>) {
  return async (request: NextRequest) => {
    const response = await handler(request)
    
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 200, headers: response.headers })
    }
    
    return response
  }
}