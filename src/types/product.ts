// Product-related types
import { MediaUrls, LabResults, SeoData } from './index'

export interface Product {
  id: string
  storeId: string
  categoryId: string
  
  // Basic info
  name: string
  slug: string
  description: string
  shortDescription?: string
  
  // Cannabis details
  strainName?: string
  strainType?: 'indica' | 'sativa' | 'hybrid' | 'cbd' | 'unknown'
  brand: string
  manufacturer?: string
  
  // Potency
  thcPercentage?: number
  cbdPercentage?: number
  totalCannabinoids?: number
  
  // Product details
  productType: 'flower' | 'edibles' | 'concentrates' | 'topicals' | 'accessories' | 'other'
  weight?: number
  weightUnit?: string
  servingSize?: string
  servingsPerPackage?: number
  
  // Pricing
  price: number
  compareAtPrice?: number
  costPerGram?: number
  
  // Inventory
  sku: string
  barcode?: string
  inventoryQuantity: number
  lowStockThreshold?: number
  trackQuantity: boolean
  
  // Status and availability
  status: 'draft' | 'active' | 'out_of_stock' | 'discontinued' | 'pending_approval'
  availableForDelivery: boolean
  availableForPickup: boolean
  
  // Media and marketing
  media: MediaUrls
  featured: boolean
  
  // Lab testing and compliance
  labTested: boolean
  labResults?: LabResults
  batchNumber?: string
  harvestDate?: Date
  expiryDate?: Date
  
  // SEO
  seo: SeoData
  searchKeywords?: string
  
  // Statistics
  rating: number
  reviewCount: number
  viewCount: number
  purchaseCount: number
  wishlistCount: number
  
  // Timestamps
  createdAt: Date
  updatedAt: Date
}

export interface ProductCategory {
  id: string
  name: string
  slug: string
  description?: string
  parentId?: string
  image?: string
  productCount: number
  order: number
  isActive: boolean
  seo: SeoData
  createdAt: Date
  updatedAt: Date
}

export interface ProductFilter {
  categoryId?: string[]
  storeId?: string[]
  strainType?: string[]
  productType?: string[]
  priceRange?: [number, number]
  thcRange?: [number, number]
  cbdRange?: [number, number]
  inStock?: boolean
  featured?: boolean
  labTested?: boolean
  rating?: number
  brand?: string[]
}

export interface ProductSearchParams {
  query?: string
  filters?: ProductFilter
  sortBy?: 'price' | 'rating' | 'name' | 'thc' | 'cbd' | 'created' | 'popularity'
  sortOrder?: 'asc' | 'desc'
  page?: number
  limit?: number
}

export interface ProductReview {
  id: string
  productId: string
  userId: string
  rating: number
  title: string
  content: string
  verified: boolean
  helpful: number
  unhelpful: number
  createdAt: Date
  updatedAt: Date
}