// Product categories endpoints
import { NextRequest } from 'next/server'
import { prisma } from '../../../lib/db'
import { requireAdmin, rateLimit } from '../../../lib/middleware'
import { successResponse, serverErrorResponse } from '../../../lib/api-response'
import type { JWTPayload } from '../../../lib/auth'

// GET /api/categories - List all product categories
async function getCategoriesHandler(request: NextRequest) {
  try {
    const categories = await prisma.productCategory.findMany({
      where: { isActive: true },
      orderBy: [
        { sortOrder: 'asc' },
        { name: 'asc' }
      ],
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        sortOrder: true,
        parentId: true
      }
    })

    // Organize categories into hierarchy
    const parentCategories = categories.filter(cat => !cat.parentId)
    const childCategories = categories.filter(cat => cat.parentId)
    
    const hierarchicalCategories = parentCategories.map(parent => ({
      ...parent,
      subcategories: childCategories.filter(child => child.parentId === parent.id)
    }))

    return successResponse(hierarchicalCategories)

  } catch (error) {
    console.error('Get categories error:', error)
    return serverErrorResponse('Failed to fetch categories')
  }
}

// POST /api/categories - Create new category (admins only)
async function createCategoryHandler(request: NextRequest, user: JWTPayload) {
  try {
    const body = await request.json()
    
    const category = await prisma.productCategory.create({
      data: {
        name: body.name,
        slug: body.slug || body.name.toLowerCase().replace(/\s+/g, '-'),
        description: body.description,
        parentId: body.parentId,
        sortOrder: body.sortOrder || 0,
        productType: body.productType || 'other',
        isActive: true,
        metaTitle: body.name,
        metaDescription: body.description
      }
    })

    return successResponse(category, 'Category created successfully', 201)

  } catch (error) {
    console.error('Create category error:', error)
    return serverErrorResponse('Failed to create category')
  }
}

export const GET = rateLimit(100, 15 * 60 * 1000, getCategoriesHandler)
export const POST = requireAdmin(createCategoryHandler)