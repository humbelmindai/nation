// User logout endpoint
import { NextRequest } from 'next/server'
import { prisma } from '../../../../lib/db'
import { requireAuth } from '../../../../lib/middleware'
import { successResponse, serverErrorResponse } from '../../../../lib/api-response'
import type { JWTPayload } from '../../../../lib/auth'

async function logoutHandler(request: NextRequest, user: JWTPayload) {
  try {
    // Invalidate all user sessions (or just current one if you store session IDs)
    await prisma.userSession.updateMany({
      where: { 
        userId: user.userId,
        isActive: true
      },
      data: { isActive: false }
    })

    return successResponse(null, 'Logged out successfully')

  } catch (error) {
    console.error('Logout error:', error)
    return serverErrorResponse('Logout failed')
  }
}

export const POST = requireAuth(logoutHandler)