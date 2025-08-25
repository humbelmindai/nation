// Health check endpoint
import { NextRequest } from 'next/server'
import { prisma } from '../../../lib/db'
import { successResponse, serverErrorResponse } from '../../../lib/api-response'

export async function GET(request: NextRequest) {
  try {
    // Test database connection
    await prisma.$queryRaw`SELECT 1`
    
    const health = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: process.env.npm_package_version || '1.0.0',
      database: 'connected',
      environment: process.env.NODE_ENV || 'development'
    }

    return successResponse(health)

  } catch (error) {
    console.error('Health check failed:', error)
    
    const health = {
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: process.env.npm_package_version || '1.0.0',
      database: 'disconnected',
      environment: process.env.NODE_ENV || 'development',
      error: error instanceof Error ? error.message : 'Unknown error'
    }

    return new Response(JSON.stringify({
      success: false,
      error: { code: 'UNHEALTHY', message: 'Service unhealthy' },
      data: health
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}