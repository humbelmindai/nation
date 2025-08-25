// API-related types and interfaces
import { PaginationMeta } from './index'

export interface ApiResponse<T = any> {
  success: boolean
  data: T
  message?: string
  meta?: PaginationMeta
}

export interface ApiError {
  success: false
  error: {
    code: string
    message: string
    details?: any[]
    field?: string
  }
  requestId?: string
  timestamp: string
}

export interface ApiRequest {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  url: string
  headers?: Record<string, string>
  params?: Record<string, any>
  data?: any
}

export interface ApiEndpoint {
  path: string
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  auth?: boolean
  rateLimit?: {
    requests: number
    window: number
  }
}

export interface PaginationParams {
  page?: number
  limit?: number
  offset?: number
}

export interface SortParams {
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export interface FilterParams {
  [key: string]: any
}

export interface SearchParams extends PaginationParams, SortParams {
  q?: string
  filters?: FilterParams
}

// HTTP Status codes
export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
  SERVICE_UNAVAILABLE = 503
}

// API Error codes
export enum ApiErrorCode {
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  AUTHENTICATION_REQUIRED = 'AUTHENTICATION_REQUIRED',
  INSUFFICIENT_PERMISSIONS = 'INSUFFICIENT_PERMISSIONS',
  RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND',
  RESOURCE_CONFLICT = 'RESOURCE_CONFLICT',
  RATE_LIMIT_EXCEEDED = 'RATE_LIMIT_EXCEEDED',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE'
}

export interface ValidationError {
  field: string
  message: string
  code: string
  value?: any
}

export interface RateLimitInfo {
  limit: number
  remaining: number
  reset: number
  retryAfter?: number
}