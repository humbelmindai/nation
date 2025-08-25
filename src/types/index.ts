// 420 Nation Platform - Type Definitions
// Core types used throughout the application

export * from './auth'
export * from './store'
export * from './product'
export * from './user'
export * from './api'

// Common utility types
export type Id = string

export interface PaginationParams {
  page?: number
  limit?: number
}

export interface PaginationMeta {
  page: number
  limit: number
  total: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  meta?: PaginationMeta
}

export interface ApiError {
  success: false
  error: {
    code: string
    message: string
    details?: any[]
  }
  requestId?: string
}

// Location types
export interface Coordinates {
  latitude: number
  longitude: number
}

export interface Address {
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  postalCode: string
  country?: string
  latitude?: number
  longitude?: number
}

// Cannabis-specific types
export type StrainType = 'indica' | 'sativa' | 'hybrid' | 'cbd' | 'unknown'

export interface Cannabinoids {
  thc?: number
  cbd?: number
  thca?: number
  cbda?: number
  totalCannabinoids?: number
}

export interface LabResults {
  potency?: Cannabinoids
  pesticides?: {
    status: 'pass' | 'fail'
    tested: number
    detected: number
  }
  residualSolvents?: {
    status: 'pass' | 'fail'
    tested: number
    detected: number
  }
  heavyMetals?: {
    status: 'pass' | 'fail'
    lead?: string
    cadmium?: string
    mercury?: string
    arsenic?: string
  }
  microbials?: {
    status: 'pass' | 'fail'
    yeastMold?: string
    coliforms?: string
  }
  moisture?: {
    status: 'pass' | 'fail'
    content?: string
  }
}

// Media types
export interface MediaUrls {
  featured?: string
  gallery?: string[]
  logo?: string
  cover?: string
}

// SEO types
export interface SeoData {
  metaTitle?: string
  metaDescription?: string
  metaKeywords?: string
}

// Operating hours
export interface OperatingHours {
  [key: string]: {
    open: string
    close: string
  } | null
}

// Social media links
export interface SocialMedia {
  instagram?: string
  facebook?: string
  twitter?: string
  youtube?: string
  tiktok?: string
}

// Search and filter types
export interface SearchParams {
  q?: string
  category?: string
  strainType?: StrainType
  priceMin?: number
  priceMax?: number
  thcMin?: number
  thcMax?: number
  cbdMin?: number
  cbdMax?: number
  inStock?: boolean
  featured?: boolean
  labTested?: boolean
  sortBy?: 'price' | 'rating' | 'name' | 'thc' | 'cbd' | 'created'
  sortOrder?: 'asc' | 'desc'
}

// Location-based search
export interface LocationSearchParams {
  lat?: number
  lng?: number
  radius?: number
  address?: string
}

// Form validation
export interface ValidationError {
  field: string
  message: string
  code?: string
}

export interface FormState<T = any> {
  data: T
  errors: ValidationError[]
  isSubmitting: boolean
  isValid: boolean
}

// Theme and UI
export type Theme = 'light' | 'dark' | 'system'

export interface UIState {
  theme: Theme
  sidebarOpen: boolean
  mobileMenuOpen: boolean
  searchOpen: boolean
  cartOpen: boolean
}

// Notification types
export interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  timestamp: Date
  read: boolean
  actions?: NotificationAction[]
}

export interface NotificationAction {
  label: string
  action: () => void
  primary?: boolean
}

// Feature flags
export interface FeatureFlags {
  enableEcommerce: boolean
  enableProfessionalNetwork: boolean
  enableLiveChat: boolean
  enablePushNotifications: boolean
  enableLiveEvents: boolean
  enableBlogComments: boolean
  enableUserReviews: boolean
  enableAgeVerification: boolean
  enableEmailVerification: boolean
}

// Compliance types
export type ComplianceStatus = 'compliant' | 'warning' | 'violation'

export interface ComplianceInfo {
  status: ComplianceStatus
  lastChecked?: Date
  violations?: string[]
  warnings?: string[]
}

// Analytics and tracking
export interface AnalyticsEvent {
  event: string
  category: string
  label?: string
  value?: number
  userId?: string
  sessionId?: string
  metadata?: Record<string, any>
}

// File upload
export interface FileUpload {
  file: File
  progress: number
  status: 'pending' | 'uploading' | 'completed' | 'error'
  url?: string
  error?: string
}

export interface UploadedFile {
  id: string
  filename: string
  originalName: string
  mimeType: string
  size: number
  url: string
  thumbnailUrl?: string
  uploadedAt: Date
}

// Settings and preferences
export interface UserPreferences {
  notifications: {
    email: boolean
    sms: boolean
    push: boolean
    marketing: boolean
  }
  privacy: {
    profileVisibility: 'public' | 'private' | 'friends'
    showLocation: boolean
    showPurchaseHistory: boolean
  }
  display: {
    theme: Theme
    language: string
    timezone: string
    currency: string
  }
}

// Error handling
export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500,
    public details?: any
  ) {
    super(message)
    this.name = 'AppError'
  }
}

// Loading states
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

export interface AsyncState<T = any> {
  data: T | null
  loading: boolean
  error: string | null
  lastFetch?: Date
}

// Generic CRUD operations
export interface CrudOperations<T> {
  create: (data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>) => Promise<T>
  read: (id: string) => Promise<T | null>
  update: (id: string, data: Partial<T>) => Promise<T>
  delete: (id: string) => Promise<boolean>
  list: (params?: PaginationParams) => Promise<{ data: T[]; meta: PaginationMeta }>
}

// Utility types for form handling
export type FormData<T> = Omit<T, 'id' | 'createdAt' | 'updatedAt'>
export type PartialFormData<T> = Partial<FormData<T>>

// Status types
export type UserStatus = 'active' | 'suspended' | 'deleted'
export type StoreStatus = 'pending' | 'active' | 'suspended' | 'closed'
export type ProductStatus = 'draft' | 'active' | 'out_of_stock' | 'discontinued' | 'pending_approval'
export type OrderStatus = 'pending' | 'confirmed' | 'preparing' | 'ready' | 'out_for_delivery' | 'delivered' | 'completed' | 'cancelled'

// Business types
export type BusinessType = 'dispensary' | 'delivery' | 'cultivation' | 'manufacturing'
export type ProductType = 'flower' | 'edibles' | 'concentrates' | 'topicals' | 'accessories' | 'other'