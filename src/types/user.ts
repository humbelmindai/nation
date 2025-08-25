// User-related types

import type { Address, UserPreferences, Id } from './index'

export type UserRole = 'consumer' | 'vendor' | 'professional' | 'admin'
export type UserStatus = 'active' | 'suspended' | 'deleted'
export type AgeVerificationMethod = 'self_declaration' | 'id_scan' | 'manual_review'

export interface User {
  id: Id
  email: string
  emailVerified: boolean
  role: UserRole
  firstName?: string
  lastName?: string
  phone?: string
  dateOfBirth?: Date
  status: UserStatus
  lastLoginAt?: Date
  failedLoginAttempts: number
  lockedUntil?: Date
  ageVerified: boolean
  ageVerificationMethod?: AgeVerificationMethod
  ageVerifiedAt?: Date
  ageVerifiedBy?: string
  termsAcceptedAt?: Date
  privacyAcceptedAt?: Date
  marketingConsent: boolean
  gdprConsent: boolean
  ccpaOptOut: boolean
  createdAt: Date
  updatedAt: Date
  createdBy?: string
  updatedBy?: string
}

export interface UserProfile extends User {
  addresses: UserAddress[]
  preferences: UserPreferences
  stats?: UserStats
}

export interface UserAddress {
  id: Id
  userId: Id
  type: 'billing' | 'shipping' | 'primary'
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  postalCode: string
  country: string
  latitude?: number
  longitude?: number
  isDefault: boolean
  verified: boolean
  createdAt: Date
  updatedAt: Date
}

export interface UserSession {
  id: Id
  userId: Id
  refreshTokenHash: string
  deviceFingerprint?: string
  ipAddress?: string
  userAgent?: string
  locationCountry?: string
  locationRegion?: string
  locationCity?: string
  isActive: boolean
  expiresAt: Date
  lastUsedAt: Date
  createdAt: Date
  updatedAt: Date
}

export interface UserStats {
  totalOrders: number
  totalSpent: number
  averageOrderValue: number
  favoriteStore?: string
  favoriteCategory?: string
  reviewsCount: number
  averageRating?: number
  joinDate: Date
  lastOrderDate?: Date
}

export interface AuthTokens {
  accessToken: string
  refreshToken: string
  expiresIn: number
}

// Age verification types
export interface AgeVerificationData {
  documentType: 'drivers_license' | 'passport' | 'state_id'
  documentImage: File
  selfieImage?: File
}

export interface AgeVerificationRecord {
  id: Id
  userId: Id
  verificationMethod: AgeVerificationMethod
  documentType?: string
  documentNumber?: string // Encrypted
  issuingState?: string
  expirationDate?: Date
  verifiedAt?: Date
  verifiedBy?: string
  status: 'pending' | 'verified' | 'rejected'
  rejectionReason?: string
  createdAt: Date
}

// User preferences and settings
export interface NotificationSettings {
  email: {
    orderUpdates: boolean
    promotions: boolean
    newsletter: boolean
    security: boolean
  }
  sms: {
    orderUpdates: boolean
    deliveryUpdates: boolean
    promotions: boolean
  }
  push: {
    orderUpdates: boolean
    deliveryUpdates: boolean
    promotions: boolean
    newProducts: boolean
  }
}

export interface PrivacySettings {
  profileVisibility: 'public' | 'private'
  showPurchaseHistory: boolean
  showLocation: boolean
  shareDataForAnalytics: boolean
  allowPersonalizedAds: boolean
}

export interface DisplaySettings {
  theme: 'light' | 'dark' | 'system'
  language: string
  timezone: string
  currency: string
  measurementUnit: 'metric' | 'imperial'
}

// User actions and activities
export interface UserActivity {
  id: Id
  userId: Id
  action: string
  resourceType: string
  resourceId?: string
  metadata?: Record<string, any>
  ipAddress?: string
  userAgent?: string
  timestamp: Date
}

// Professional user types
export interface Professional {
  id: Id
  userId: Id
  professionalType: 'doctor' | 'psychologist' | 'therapist' | 'nutritionist' | 'pharmacist' | 'researcher'
  licenseNumber: string
  licenseState: string
  licenseExpiresAt: Date
  specializations: string[]
  certifications: any[]
  practiceName?: string
  practiceAddress?: Address
  practicePhone?: string
  practiceWebsite?: string
  cannabisExperienceYears?: number
  cannabisCertifications?: any[]
  preferredProducts?: string[]
  treatmentApproaches?: string[]
  consultationTypes: string[]
  hourlyRate?: number
  acceptsInsurance: boolean
  insuranceProviders?: string[]
  verified: boolean
  verifiedAt?: Date
  verifiedBy?: string
  verificationDocuments?: any[]
  consultationCount: number
  averageRating: number
  reviewCount: number
  status: string
  acceptingNewPatients: boolean
  createdAt: Date
  updatedAt: Date
}

// Form types for user management
export interface UserRegistrationForm {
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  phone: string
  dateOfBirth: string
  termsAccepted: boolean
  privacyAccepted: boolean
  marketingConsent: boolean
}

export interface UserProfileForm {
  firstName: string
  lastName: string
  phone: string
  dateOfBirth: string
  preferences: UserPreferences
}

export interface AddressForm {
  type: 'billing' | 'shipping' | 'primary'
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  postalCode: string
  country: string
  isDefault: boolean
}