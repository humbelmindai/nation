// Get current user profile endpoint
import { NextRequest } from 'next/server'
import { prisma } from '../../../../lib/db'
import { requireAuth } from '../../../../lib/middleware'
import { successResponse, notFoundResponse, serverErrorResponse } from '../../../../lib/api-response'
import type { JWTPayload } from '../../../../lib/auth'

async function getCurrentUserHandler(request: NextRequest, user: JWTPayload) {
  try {
    const userData = await prisma.user.findUnique({
      where: { id: user.userId },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        dateOfBirth: true,
        role: true,
        status: true,
        emailVerified: true,
        ageVerified: true,
        lastLoginAt: true,
        createdAt: true,
        updatedAt: true
      }
    })

    if (!userData) {
      return notFoundResponse('User not found')
    }

    return successResponse(userData)

  } catch (error) {
    console.error('Get current user error:', error)
    return serverErrorResponse('Failed to get user data')
  }
}

export const GET = requireAuth(getCurrentUserHandler)