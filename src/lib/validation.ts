// Input validation utilities
import { z } from 'zod'

// User validation schemas
export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  dateOfBirth: z.string().refine((date) => {
    const birthDate = new Date(date)
    const today = new Date()
    const age = today.getFullYear() - birthDate.getFullYear()
    return age >= 21
  }, 'Must be at least 21 years old'),
  acceptTerms: z.boolean().refine(val => val === true, 'Must accept terms and conditions'),
  subscribeNewsletter: z.boolean().optional()
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword']
})

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional()
})

export const passwordResetSchema = z.object({
  email: z.string().email('Invalid email address')
})

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string()
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword']
})

// Product validation schemas
export const productSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  description: z.string().min(1, 'Description is required'),
  shortDescription: z.string().optional(),
  storeId: z.string().optional(), // Optional because it may be set by the API based on vendor
  categoryId: z.string().min(1, 'Category is required'),
  strainName: z.string().optional(),
  strainType: z.enum(['indica', 'sativa', 'hybrid', 'cbd', 'unknown']).optional(),
  brand: z.string().min(1, 'Brand is required'),
  manufacturer: z.string().optional(),
  thcPercentage: z.number().min(0).max(100).optional(),
  cbdPercentage: z.number().min(0).max(100).optional(),
  totalCannabinoids: z.number().min(0).max(100).optional(),
  productType: z.enum(['flower', 'edibles', 'concentrates', 'topicals', 'accessories', 'other']),
  price: z.number().min(0, 'Price must be positive'),
  compareAtPrice: z.number().min(0).optional(),
  sku: z.string().min(1, 'SKU is required'),
  inventoryQuantity: z.number().min(0, 'Inventory must be non-negative'),
  availableForDelivery: z.boolean().default(true),
  availableForPickup: z.boolean().default(true),
  featured: z.boolean().default(false),
  labTested: z.boolean().default(false)
})

export const updateProductSchema = productSchema.partial()

// Store validation schemas
export const storeSchema = z.object({
  name: z.string().min(1, 'Store name is required'),
  description: z.string().min(1, 'Description is required'),
  shortDescription: z.string().optional(),
  businessType: z.enum(['dispensary', 'delivery', 'cultivation', 'manufacturing']),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  website: z.string().url().optional().or(z.literal('')),
  licenseNumber: z.string().min(1, 'License number is required'),
  licenseType: z.string().min(1, 'License type is required'),
  servesDelivery: z.boolean().default(false),
  servesPickup: z.boolean().default(true),
  features: z.array(z.string()).default([]),
  services: z.array(z.string()).default([]),
  paymentMethods: z.array(z.string()).default([])
})

export const updateStoreSchema = storeSchema.partial()

// Query parameter validation
export const paginationSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20)
})

export const productSearchSchema = z.object({
  q: z.string().optional(),
  categoryId: z.string().optional(),
  storeId: z.string().optional(),
  strainType: z.string().optional(),
  productType: z.string().optional(),
  priceMin: z.coerce.number().min(0).optional(),
  priceMax: z.coerce.number().min(0).optional(),
  thcMin: z.coerce.number().min(0).max(100).optional(),
  thcMax: z.coerce.number().min(0).max(100).optional(),
  inStock: z.coerce.boolean().optional(),
  featured: z.coerce.boolean().optional(),
  labTested: z.coerce.boolean().optional(),
  sortBy: z.enum(['price', 'rating', 'name', 'thc', 'cbd', 'created']).default('created'),
  sortOrder: z.enum(['asc', 'desc']).default('desc')
}).merge(paginationSchema)

export function validateInput<T>(schema: z.ZodSchema<T>, data: unknown) {
  const result = schema.safeParse(data)
  if (!result.success) {
    const errors = result.error.errors.map(err => ({
      field: err.path.join('.'),
      message: err.message,
      code: err.code
    }))
    throw new ValidationError('Validation failed', errors)
  }
  return result.data
}

export class ValidationError extends Error {
  constructor(message: string, public errors: any[]) {
    super(message)
    this.name = 'ValidationError'
  }
}