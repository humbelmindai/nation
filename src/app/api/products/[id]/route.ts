// Individual product CRUD endpoints
import { NextRequest } from 'next/server'
import { prisma } from '../../../../lib/db'
import { requireVendorOrAdmin, rateLimit } from '../../../../lib/middleware'
import { validateInput, updateProductSchema, ValidationError } from '../../../../lib/validation'
import { successResponse, errorResponse, notFoundResponse, validationErrorResponse, serverErrorResponse } from '../../../../lib/api-response'
import type { JWTPayload } from '../../../../lib/auth'

// GET /api/products/[id] - Get single product
async function getProductHandler(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: params.id },
      include: {
        store: {
          select: {
            id: true,
            name: true,
            slug: true,
            businessType: true,
            averageRating: true,
            verified: true
          }
        },
        category: {
          select: {
            id: true,
            name: true,
            slug: true
          }
        }
      }
    })

    if (!product) {
      return notFoundResponse('Product not found')
    }

    // Increment view count
    await prisma.product.update({
      where: { id: params.id },
      data: { viewCount: { increment: 1 } }
    })

    return successResponse(product)

  } catch (error) {
    console.error('Get product error:', error)
    return serverErrorResponse('Failed to fetch product')
  }
}

// PUT /api/products/[id] - Update product (vendors and admins only)
async function updateProductHandler(request: NextRequest, user: JWTPayload, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const validatedData = validateInput(updateProductSchema, body)

    // Check if product exists
    const existingProduct = await prisma.product.findUnique({
      where: { id: params.id },
      include: { store: true }
    })

    if (!existingProduct) {
      return notFoundResponse('Product not found')
    }

    // For vendors, ensure they can only update their own products
    if (user.role === 'vendor') {
      const store = await prisma.store.findFirst({
        where: { ownerId: user.userId }
      })
      
      if (!store || existingProduct.storeId !== store.id) {
        return errorResponse('You can only update your own products', 'FORBIDDEN', 403)
      }
    }

    const product = await prisma.product.update({
      where: { id: params.id },
      data: {
        ...validatedData,
        updatedAt: new Date()
      },
      include: {
        store: {
          select: {
            id: true,
            name: true,
            slug: true
          }
        },
        category: {
          select: {
            id: true,
            name: true,
            slug: true
          }
        }
      }
    })

    return successResponse(product, 'Product updated successfully')

  } catch (error) {
    console.error('Update product error:', error)
    
    if (error instanceof ValidationError) {
      return validationErrorResponse(error.errors)
    }
    
    return serverErrorResponse('Failed to update product')
  }
}

// DELETE /api/products/[id] - Delete product (vendors and admins only)
async function deleteProductHandler(request: NextRequest, user: JWTPayload, { params }: { params: { id: string } }) {
  try {
    // Check if product exists
    const existingProduct = await prisma.product.findUnique({
      where: { id: params.id },
      include: { store: true }
    })

    if (!existingProduct) {
      return notFoundResponse('Product not found')
    }

    // For vendors, ensure they can only delete their own products
    if (user.role === 'vendor') {
      const store = await prisma.store.findFirst({
        where: { ownerId: user.userId }
      })
      
      if (!store || existingProduct.storeId !== store.id) {
        return errorResponse('You can only delete your own products', 'FORBIDDEN', 403)
      }
    }

    // Soft delete by updating status
    await prisma.product.update({
      where: { id: params.id },
      data: { 
        status: 'discontinued',
        updatedAt: new Date()
      }
    })

    return successResponse(null, 'Product deleted successfully')

  } catch (error) {
    console.error('Delete product error:', error)
    return serverErrorResponse('Failed to delete product')
  }
}

// Wrapper functions for Next.js route handlers
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  return getProductHandler(request, { params })
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  return requireVendorOrAdmin((req, user) => updateProductHandler(req, user, { params }))(request)
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  return requireVendorOrAdmin((req, user) => deleteProductHandler(req, user, { params }))(request)
}