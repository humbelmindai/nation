// User login endpoint
import { NextRequest } from 'next/server'
import { prisma } from '../../../../lib/db'
import { verifyPassword, generateAccessToken, generateRefreshToken } from '../../../../lib/auth'
import { validateInput, loginSchema, ValidationError } from '../../../../lib/validation'
import { successResponse, errorResponse, validationErrorResponse, serverErrorResponse } from '../../../../lib/api-response'
import { rateLimit } from '../../../../lib/middleware'

async function loginHandler(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = validateInput(loginSchema, body)

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email: validatedData.email },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        status: true,
        passwordHash: true,
        emailVerified: true,
        failedLoginAttempts: true,
        lockedUntil: true,
        lastLoginAt: true
      }
    })

    if (!user) {
      return errorResponse('Invalid credentials', 'INVALID_CREDENTIALS', 401)
    }

    // Check if account is locked
    if (user.lockedUntil && user.lockedUntil > new Date()) {
      return errorResponse('Account temporarily locked due to too many failed attempts', 'ACCOUNT_LOCKED', 423)
    }

    // Check if account is suspended
    if (user.status === 'suspended') {
      return errorResponse('Account suspended', 'ACCOUNT_SUSPENDED', 403)
    }

    if (user.status === 'deleted') {
      return errorResponse('Account not found', 'ACCOUNT_NOT_FOUND', 404)
    }

    // Verify password
    const isPasswordValid = await verifyPassword(validatedData.password, user.passwordHash)
    
    if (!isPasswordValid) {
      // Increment failed login attempts
      const failedAttempts = user.failedLoginAttempts + 1
      const shouldLock = failedAttempts >= 5
      
      await prisma.user.update({
        where: { id: user.id },
        data: {
          failedLoginAttempts: failedAttempts,
          lockedUntil: shouldLock ? new Date(Date.now() + 30 * 60 * 1000) : null // Lock for 30 minutes
        }
      })

      if (shouldLock) {
        return errorResponse('Account locked due to too many failed attempts', 'ACCOUNT_LOCKED', 423)
      }

      return errorResponse('Invalid credentials', 'INVALID_CREDENTIALS', 401)
    }

    // Reset failed login attempts and update last login
    await prisma.user.update({
      where: { id: user.id },
      data: {
        failedLoginAttempts: 0,
        lockedUntil: null,
        lastLoginAt: new Date()
      }
    })

    // Generate tokens
    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)

    // Store refresh token
    await prisma.userSession.create({
      data: {
        userId: user.id,
        refreshTokenHash: refreshToken,
        isActive: true,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        lastUsedAt: new Date(),
        ipAddress: request.ip,
        userAgent: request.headers.get('user-agent')
      }
    })

    // Remove sensitive data
    const { passwordHash, failedLoginAttempts, lockedUntil, ...safeUser } = user

    return successResponse({
      user: safeUser,
      tokens: {
        accessToken,
        refreshToken,
        expiresIn: 7 * 24 * 60 * 60 // 7 days in seconds
      }
    }, 'Login successful')

  } catch (error) {
    console.error('Login error:', error)
    
    if (error instanceof ValidationError) {
      return validationErrorResponse(error.errors)
    }
    
    return serverErrorResponse('Login failed')
  }
}

export const POST = rateLimit(10, 15 * 60 * 1000, loginHandler) // 10 requests per 15 minutes