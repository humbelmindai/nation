// API response utilities
import { NextResponse } from 'next/server'
import { ApiResponse, ApiError } from '../types/api'

export function successResponse<T>(
  data: T, 
  message?: string, 
  status: number = 200
): NextResponse<ApiResponse<T>> {
  return NextResponse.json({
    success: true,
    data,
    message
  }, { status })
}

export function errorResponse(
  message: string,
  code: string,
  status: number = 400,
  details?: any
): NextResponse<ApiError> {
  return NextResponse.json({
    success: false,
    error: {
      code,
      message,
      details
    },
    requestId: generateRequestId(),
    timestamp: new Date().toISOString()
  }, { status })
}

export function validationErrorResponse(errors: any[]): NextResponse<ApiError> {
  return errorResponse(
    'Validation failed',
    'VALIDATION_ERROR',
    422,
    errors
  )
}

export function unauthorizedResponse(message: string = 'Authentication required'): NextResponse<ApiError> {
  return errorResponse(message, 'UNAUTHORIZED', 401)
}

export function forbiddenResponse(message: string = 'Insufficient permissions'): NextResponse<ApiError> {
  return errorResponse(message, 'FORBIDDEN', 403)
}

export function notFoundResponse(message: string = 'Resource not found'): NextResponse<ApiError> {
  return errorResponse(message, 'NOT_FOUND', 404)
}

export function serverErrorResponse(message: string = 'Internal server error'): NextResponse<ApiError> {
  return errorResponse(message, 'INTERNAL_ERROR', 500)
}

function generateRequestId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}