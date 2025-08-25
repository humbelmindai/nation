// User registration endpoint
import { NextRequest } from 'next/server'
import { prisma } from '../../../../lib/db'
import { hashPassword, generateAccessToken, generateRefreshToken } from '../../../../lib/auth'
import { validateInput, registerSchema, ValidationError } from '../../../../lib/validation'
import { successResponse, errorResponse, validationErrorResponse, serverErrorResponse } from '../../../../lib/api-response'
import { rateLimit } from '../../../../lib/middleware'

async function registerHandler(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = validateInput(registerSchema, body)

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email }
    })

    if (existingUser) {
      return errorResponse('Email already registered', 'USER_EXISTS', 409)
    }

    // Hash password
    const hashedPassword = await hashPassword(validatedData.password)

    // Create user
    const user = await prisma.user.create({
      data: {
        email: validatedData.email,
        passwordHash: hashedPassword,
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        dateOfBirth: new Date(validatedData.dateOfBirth),
        role: 'consumer',
        status: 'active',
        emailVerified: false,
        ageVerified: false,
        failedLoginAttempts: 0,
        marketingConsent: validatedData.subscribeNewsletter || false,
        gdprConsent: validatedData.acceptTerms,
        ccpaOptOut: false,
        termsAcceptedAt: new Date(),
        privacyAcceptedAt: new Date()
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        status: true,
        emailVerified: true,
        createdAt: true
      }
    })

    // Generate tokens
    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)

    // Store refresh token (optional: save to database for revocation)
    await prisma.userSession.create({
      data: {
        userId: user.id,
        refreshTokenHash: refreshToken,
        isActive: true,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        lastUsedAt: new Date()
      }
    })

    return successResponse({
      user,
      tokens: {
        accessToken,
        refreshToken,
        expiresIn: 7 * 24 * 60 * 60 // 7 days in seconds
      }
    }, 'Registration successful', 201)

  } catch (error) {
    console.error('Registration error:', error)
    
    if (error instanceof ValidationError) {
      return validationErrorResponse(error.errors)
    }
    
    return serverErrorResponse('Registration failed')
  }
}

export const POST = rateLimit(5, 15 * 60 * 1000, registerHandler) // 5 requests per 15 minutes