// Store and business types
import { Address, MediaUrls, OperatingHours, SocialMedia, SeoData } from './index'

export interface Store {
  id: string
  name: string
  slug: string
  description: string
  shortDescription?: string
  businessType: 'dispensary' | 'delivery' | 'cultivation' | 'manufacturing'
  status: 'pending' | 'active' | 'suspended' | 'closed'
  
  // Contact information
  email: string
  phone: string
  website?: string
  
  // Location
  address: Address
  deliveryRadius?: number
  servesDelivery: boolean
  servesPickup: boolean
  
  // Media
  media: MediaUrls
  
  // Business details
  licenseNumber: string
  licenseType: string
  licenseExpiry?: Date
  operatingHours: OperatingHours
  socialMedia?: SocialMedia
  
  // Features and services
  features: string[]
  services: string[]
  paymentMethods: string[]
  
  // SEO and marketing
  seo: SeoData
  featured: boolean
  verified: boolean
  
  // Statistics
  rating: number
  reviewCount: number
  productCount: number
  orderCount: number
  viewCount: number
  
  // Timestamps
  createdAt: Date
  updatedAt: Date
  lastActiveAt?: Date
}

export interface StoreFilter {
  businessType?: string[]
  services?: string[]
  features?: string[]
  deliveryRadius?: number
  rating?: number
  verified?: boolean
  open?: boolean
}

export interface StoreSearchParams {
  query?: string
  location?: {
    latitude: number
    longitude: number
    radius?: number
  }
  filters?: StoreFilter
  sortBy?: 'distance' | 'rating' | 'name' | 'reviews'
  sortOrder?: 'asc' | 'desc'
}