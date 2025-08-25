// Authentication and authorization types
export interface AuthUser {
  id: string
  email: string
  username: string
  firstName: string
  lastName: string
  role: 'consumer' | 'vendor' | 'professional' | 'admin'
  status: 'active' | 'suspended' | 'deleted'
  profilePicture?: string
  emailVerified: boolean
  phoneVerified: boolean
  ageVerified: boolean
  createdAt: Date
  lastLoginAt?: Date
}

export interface LoginCredentials {
  email: string
  password: string
  rememberMe?: boolean
}

export interface RegisterData {
  email: string
  username: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  dateOfBirth: string
  phone?: string
  acceptTerms: boolean
  subscribeNewsletter?: boolean
}

export interface AuthState {
  user: AuthUser | null
  token: string | null
  refreshToken: string | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

export interface AuthResponse {
  user: AuthUser
  token: string
  refreshToken: string
  expiresIn: number
}

export interface PasswordResetRequest {
  email: string
}

export interface PasswordReset {
  token: string
  password: string
  confirmPassword: string
}

export interface ChangePasswordRequest {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}