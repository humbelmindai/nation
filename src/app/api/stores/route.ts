// Stores CRUD endpoints
import { NextRequest } from 'next/server'
import { prisma } from '../../../lib/db'
import { requireVendorOrAdmin, rateLimit } from '../../../lib/middleware'
import { validateInput, storeSchema, paginationSchema, ValidationError } from '../../../lib/validation'
import { successResponse, errorResponse, validationErrorResponse, serverErrorResponse } from '../../../lib/api-response'
import type { JWTPayload } from '../../../lib/auth'
import { generateSlug } from '../../../lib/utils'

// GET /api/stores - List stores with filtering and pagination
async function getStoresHandler(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const params = Object.fromEntries(searchParams)
    
    const { page = 1, limit = 20 } = validateInput(paginationSchema, params)
    const skip = (page - 1) * limit

    // Build where clause
    const where: any = {
      status: 'active'
    }

    // Add search functionality
    if (params.q) {
      where.OR = [
        { name: { contains: params.q, mode: 'insensitive' } },
        { description: { contains: params.q, mode: 'insensitive' } },
        { businessType: { contains: params.q, mode: 'insensitive' } }
      ]
    }

    if (params.businessType) where.businessType = params.businessType
    if (params.verified !== undefined) where.verified = params.verified === 'true'
    if (params.featured !== undefined) where.featured = params.featured === 'true'

    // Location-based filtering (if coordinates provided)
    if (params.lat && params.lng) {
      // For now, we'll implement basic filtering
      // In production, you'd want to use PostGIS or similar for proper geospatial queries
    }

    // Execute queries
    const [stores, total] = await Promise.all([
      prisma.store.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
        select: {
          id: true,
          name: true,
          slug: true,
          description: true,
          businessType: true,
          status: true,
          email: true,
          phone: true,
          website: true,
          addressLine1: true,
          addressLine2: true,
          city: true,
          state: true,
          postalCode: true,
          logoUrl: true,
          coverImageUrl: true,
          features: true,
          averageRating: true,
          totalReviews: true,
          totalProducts: true,
          verified: true,
          operatingHours: true,
          createdAt: true
        }
      }),
      prisma.store.count({ where })
    ])

    const totalPages = Math.ceil(total / limit)
    const hasNextPage = page < totalPages
    const hasPrevPage = page > 1

    return successResponse({
      data: stores,
      meta: {
        page,
        limit,
        total,
        totalPages,
        hasNextPage,
        hasPrevPage
      }
    })

  } catch (error) {
    console.error('Get stores error:', error)
    
    if (error instanceof ValidationError) {
      return validationErrorResponse(error.errors)
    }
    
    return serverErrorResponse('Failed to fetch stores')
  }
}

// POST /api/stores - Create new store (vendors and admins only)
async function createStoreHandler(request: NextRequest, user: JWTPayload) {
  try {
    const body = await request.json()
    const validatedData = validateInput(storeSchema, body)

    // Check if user already has a store (for vendors)
    if (user.role === 'vendor') {
      const existingStore = await prisma.store.findFirst({
        where: { ownerId: user.userId }
      })
      
      if (existingStore) {
        return errorResponse('Vendor already has a store', 'STORE_EXISTS', 409)
      }
    }

    // Generate slug from name
    const slug = generateSlug(validatedData.name)

    // Check if slug already exists
    const existingSlug = await prisma.store.findUnique({
      where: { slug }
    })

    const finalSlug = existingSlug ? `${slug}-${Date.now()}` : slug

    const store = await prisma.store.create({
      data: {
        ...validatedData,
        slug: finalSlug,
        ownerId: user.userId,
        status: user.role === 'admin' ? 'active' : 'pending', // Admin stores are auto-approved
        averageRating: 0,
        totalReviews: 0,
        totalProducts: 0,
        totalOrders: 0,
        verified: user.role === 'admin',
        // Address fields
        addressLine1: body.addressLine1 || '',
        addressLine2: body.addressLine2,
        city: body.city || '',
        state: body.state || '',
        postalCode: body.postalCode || '',
        latitude: body.latitude || 0,
        longitude: body.longitude || 0,
        licenseNumber: validatedData.licenseNumber,
        licenseType: validatedData.licenseType,
        licenseState: body.licenseState || body.state || '',
        licenseExpiresAt: body.licenseExpiresAt || new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
        // SEO fields
        metaTitle: validatedData.name,
        metaDescription: validatedData.shortDescription || validatedData.description,
        operatingHours: body.operatingHours || {},
        socialMedia: body.socialMedia || {}
      }
    })

    return successResponse(store, 'Store created successfully', 201)

  } catch (error) {
    console.error('Create store error:', error)
    
    if (error instanceof ValidationError) {
      return validationErrorResponse(error.errors)
    }
    
    return serverErrorResponse('Failed to create store')
  }
}

export const GET = rateLimit(100, 15 * 60 * 1000, getStoresHandler)
export const POST = requireVendorOrAdmin(createStoreHandler)