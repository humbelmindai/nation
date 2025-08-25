// Individual store CRUD endpoints
import { NextRequest } from 'next/server'
import { prisma } from '../../../../lib/db'
import { requireVendorOrAdmin, rateLimit } from '../../../../lib/middleware'
import { validateInput, updateStoreSchema, ValidationError } from '../../../../lib/validation'
import { successResponse, errorResponse, notFoundResponse, validationErrorResponse, serverErrorResponse } from '../../../../lib/api-response'
import type { JWTPayload } from '../../../../lib/auth'

// GET /api/stores/[id] - Get single store
async function getStoreHandler(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const store = await prisma.store.findUnique({
      where: { id: params.id },
      include: {
        owner: {
          select: {
            id: true,
            firstName: true,
            lastName: true
          }
        },
        products: {
          where: { status: 'active' },
          take: 10,
          orderBy: { createdAt: 'desc' },
          select: {
            id: true,
            name: true,
            slug: true,
            shortDescription: true,
            basePrice: true,
            featuredImageUrl: true,
            averageRating: true,
            reviewCount: true,
            isFeatured: true
          }
        }
      }
    })

    if (!store) {
      return notFoundResponse('Store not found')
    }

    // Note: Store view count tracking would go here if added to schema

    return successResponse(store)

  } catch (error) {
    console.error('Get store error:', error)
    return serverErrorResponse('Failed to fetch store')
  }
}

// PUT /api/stores/[id] - Update store (vendors and admins only)
async function updateStoreHandler(request: NextRequest, user: JWTPayload, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const validatedData = validateInput(updateStoreSchema, body)

    // Check if store exists
    const existingStore = await prisma.store.findUnique({
      where: { id: params.id }
    })

    if (!existingStore) {
      return notFoundResponse('Store not found')
    }

    // For vendors, ensure they can only update their own store
    if (user.role === 'vendor' && existingStore.ownerId !== user.userId) {
      return errorResponse('You can only update your own store', 'FORBIDDEN', 403)
    }

    const store = await prisma.store.update({
      where: { id: params.id },
      data: {
        ...validatedData,
        updatedAt: new Date(),
        // Allow admins to update address fields individually
        ...(body.operatingHours && { operatingHours: body.operatingHours }),
        ...(body.socialMedia && { socialMedia: body.socialMedia }),
        ...(body.logoUrl && { logoUrl: body.logoUrl }),
        ...(body.coverImageUrl && { coverImageUrl: body.coverImageUrl })
      }
    })

    return successResponse(store, 'Store updated successfully')

  } catch (error) {
    console.error('Update store error:', error)
    
    if (error instanceof ValidationError) {
      return validationErrorResponse(error.errors)
    }
    
    return serverErrorResponse('Failed to update store')
  }
}

// DELETE /api/stores/[id] - Delete store (admins only)
async function deleteStoreHandler(request: NextRequest, user: JWTPayload, { params }: { params: { id: string } }) {
  try {
    // Only admins can delete stores
    if (user.role !== 'admin') {
      return errorResponse('Only administrators can delete stores', 'FORBIDDEN', 403)
    }

    // Check if store exists
    const existingStore = await prisma.store.findUnique({
      where: { id: params.id }
    })

    if (!existingStore) {
      return notFoundResponse('Store not found')
    }

    // Soft delete by updating status
    await prisma.store.update({
      where: { id: params.id },
      data: { 
        status: 'closed',
        updatedAt: new Date()
      }
    })

    // Also update related products
    await prisma.product.updateMany({
      where: { storeId: params.id },
      data: { status: 'discontinued' }
    })

    return successResponse(null, 'Store deleted successfully')

  } catch (error) {
    console.error('Delete store error:', error)
    return serverErrorResponse('Failed to delete store')
  }
}

// Wrapper functions for Next.js route handlers
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  return getStoreHandler(request, { params })
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  return requireVendorOrAdmin((req, user) => updateStoreHandler(req, user, { params }))(request)
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  return requireVendorOrAdmin((req, user) => deleteStoreHandler(req, user, { params }))(request)
}