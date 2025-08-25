// Products CRUD endpoints
import { NextRequest } from 'next/server'
import { prisma } from '../../../lib/db'
import { requireVendorOrAdmin, rateLimit } from '../../../lib/middleware'
import { validateInput, productSchema, productSearchSchema, ValidationError } from '../../../lib/validation'
import { successResponse, errorResponse, validationErrorResponse, serverErrorResponse } from '../../../lib/api-response'
import type { JWTPayload } from '../../../lib/auth'
import { generateSlug } from '../../../lib/utils'

// GET /api/products - List products with filtering and pagination
async function getProductsHandler(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const params = Object.fromEntries(searchParams)
    const validatedParams = validateInput(productSearchSchema, params)

    const {
      page = 1,
      limit = 20,
      q,
      categoryId,
      storeId,
      strainType,
      productType,
      priceMin,
      priceMax,
      thcMin,
      thcMax,
      inStock,
      featured,
      labTested,
      sortBy,
      sortOrder
    } = validatedParams

    const skip = (page - 1) * limit
    
    // Build where clause
    const where: any = {
      status: 'active'
    }

    if (q) {
      where.OR = [
        { name: { contains: q, mode: 'insensitive' } },
        { description: { contains: q, mode: 'insensitive' } },
        { strainName: { contains: q, mode: 'insensitive' } },
        { brand: { contains: q, mode: 'insensitive' } },
        { searchKeywords: { contains: q, mode: 'insensitive' } }
      ]
    }

    if (categoryId) where.categoryId = categoryId
    if (storeId) where.storeId = storeId
    if (strainType) where.strainType = strainType
    if (productType) where.productType = productType
    if (priceMin !== undefined || priceMax !== undefined) {
      where.price = {}
      if (priceMin !== undefined) where.price.gte = priceMin
      if (priceMax !== undefined) where.price.lte = priceMax
    }
    if (thcMin !== undefined || thcMax !== undefined) {
      where.thcPercentage = {}
      if (thcMin !== undefined) where.thcPercentage.gte = thcMin
      if (thcMax !== undefined) where.thcPercentage.lte = thcMax
    }
    if (inStock) where.inventoryQuantity = { gt: 0 }
    if (featured !== undefined) where.featured = featured
    if (labTested !== undefined) where.labTested = labTested

    // Build orderBy
    let orderBy: any = { createdAt: 'desc' }
    if (sortBy) {
      orderBy = { [sortBy]: sortOrder }
    }

    // Execute queries
    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        orderBy,
        skip,
        take: limit,
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
      }),
      prisma.product.count({ where })
    ])

    const totalPages = Math.ceil(total / limit)
    const hasNextPage = page < totalPages
    const hasPrevPage = page > 1

    return successResponse({
      data: products,
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
    console.error('Get products error:', error)
    
    if (error instanceof ValidationError) {
      return validationErrorResponse(error.errors)
    }
    
    return serverErrorResponse('Failed to fetch products')
  }
}

// POST /api/products - Create new product (vendors and admins only)
async function createProductHandler(request: NextRequest, user: JWTPayload) {
  try {
    const body = await request.json()
    const validatedData = validateInput(productSchema, body)

    // For vendors, ensure they can only create products for their own store
    if (user.role === 'vendor') {
      const store = await prisma.store.findFirst({
        where: { ownerId: user.userId }
      })
      
      if (!store) {
        return errorResponse('No store found for vendor', 'NO_STORE_FOUND', 403)
      }
      
      validatedData.storeId = store.id
    }

    // Generate slug from name
    const slug = generateSlug(validatedData.name)

    const { inventoryQuantity, price, featured, ...productData } = validatedData
    
    const product = await prisma.product.create({
      data: {
        ...productData,
        slug,
        status: 'active',
        averageRating: 0,
        reviewCount: 0,
        viewCount: 0,
        salesCount: 0,
        stockQuantity: inventoryQuantity,
        basePrice: price,
        isFeatured: featured || false,
        metaTitle: validatedData.name,
        metaDescription: validatedData.shortDescription || validatedData.description
      },
      include: {
        store: {
          select: {
            id: true,
            name: true,
            slug: true
          }
        }
      }
    })

    return successResponse(product, 'Product created successfully', 201)

  } catch (error) {
    console.error('Create product error:', error)
    
    if (error instanceof ValidationError) {
      return validationErrorResponse(error.errors)
    }
    
    return serverErrorResponse('Failed to create product')
  }
}

export const GET = rateLimit(100, 15 * 60 * 1000, getProductsHandler)
export const POST = requireVendorOrAdmin(createProductHandler)