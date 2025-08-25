# 420 Nation Platform - Security & Compliance Framework

## Overview

This document outlines the comprehensive security and compliance framework for the 420 Nation cannabis wellness platform, addressing both general web application security and cannabis industry-specific regulatory requirements.

## Security Principles

### Defense in Depth
- Multiple layers of security controls
- Fail-secure design principles
- Zero-trust architecture approach
- Continuous monitoring and improvement

### Security by Design
- Security considerations from initial design
- Regular security reviews and audits
- Automated security testing in CI/CD
- Proactive threat modeling

---

## Authentication & Authorization

### Multi-Factor Authentication (MFA)

#### Implementation Strategy
```typescript
interface MFAConfig {
  enabled: boolean
  methods: MFAMethod[]
  requiredForRoles: UserRole[]
  backupCodes: number
}

enum MFAMethod {
  EMAIL = 'email',
  SMS = 'sms', 
  AUTHENTICATOR = 'authenticator',
  HARDWARE_KEY = 'hardware_key'
}

// Example MFA flow
const enableMFA = async (userId: string, method: MFAMethod) => {
  const secret = generateSecret()
  const qrCode = generateQRCode(secret)
  
  return {
    secret: encryptSecret(secret),
    qrCode,
    backupCodes: generateBackupCodes(8)
  }
}
```

#### Requirements
- **Mandatory for Admin/Vendor roles**
- **Optional for Consumer roles** (encouraged)
- **Backup codes** for account recovery
- **Time-based OTP** (TOTP) support

### JWT Token Security

#### Token Structure
```typescript
interface AccessToken {
  sub: string        // User ID
  role: UserRole     // User role
  iat: number        // Issued at
  exp: number        // Expires (15 minutes)
  jti: string        // JWT ID for revocation
}

interface RefreshToken {
  sub: string        // User ID
  iat: number        // Issued at
  exp: number        // Expires (30 days)
  jti: string        // JWT ID
  fingerprint: string // Device fingerprint
}
```

#### Security Measures
- **Short-lived access tokens** (15 minutes)
- **Rotating refresh tokens** (30 days)
- **Token blacklisting** via Redis
- **Device fingerprinting** for additional security
- **Secure cookie storage** (HttpOnly, Secure, SameSite)

### Role-Based Access Control (RBAC)

#### Role Hierarchy
```typescript
enum UserRole {
  CONSUMER = 'consumer',           // Level 1: Basic access
  VENDOR = 'vendor',              // Level 2: Store management
  PROFESSIONAL = 'professional',   // Level 3: Medical services
  ADMIN = 'admin'                 // Level 4: System administration
}

interface Permission {
  resource: string
  actions: string[]
  conditions?: object
}

const rolePermissions: Record<UserRole, Permission[]> = {
  [UserRole.CONSUMER]: [
    { resource: 'profile', actions: ['read', 'update'] },
    { resource: 'orders', actions: ['create', 'read'] },
    { resource: 'reviews', actions: ['create', 'read', 'update'] }
  ],
  [UserRole.VENDOR]: [
    // Inherits consumer permissions
    { resource: 'store', actions: ['create', 'read', 'update'] },
    { resource: 'inventory', actions: ['create', 'read', 'update', 'delete'] },
    { resource: 'orders', actions: ['read', 'update'] }
  ]
  // ... other roles
}
```

#### Permission Middleware
```typescript
const requirePermission = (resource: string, action: string) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const userPermissions = getUserPermissions(req.user.role)
    
    if (!hasPermission(userPermissions, resource, action)) {
      return res.status(403).json({ error: 'Insufficient permissions' })
    }
    
    next()
  }
}

// Usage
router.post('/stores', requirePermission('store', 'create'), createStore)
```

---

## Data Protection & Privacy

### Data Encryption

#### Encryption at Rest
```typescript
// Database field encryption
const encryptPII = (data: string): string => {
  const algorithm = 'aes-256-gcm'
  const key = Buffer.from(process.env.ENCRYPTION_KEY, 'hex')
  const iv = crypto.randomBytes(16)
  
  const cipher = crypto.createCipher(algorithm, key)
  cipher.setAAD(Buffer.from('additional-data'))
  
  let encrypted = cipher.update(data, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  
  const authTag = cipher.getAuthTag()
  
  return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`
}

// Sensitive fields requiring encryption
interface EncryptedUserData {
  email: string           // Encrypted
  phone?: string         // Encrypted
  address?: string       // Encrypted
  license_number?: string // Encrypted (vendors)
  ssn?: string          // Encrypted (professionals)
}
```

#### Encryption in Transit
- **TLS 1.3** for all communications
- **HSTS headers** to enforce HTTPS
- **Certificate pinning** for mobile apps
- **End-to-end encryption** for sensitive communications

### Privacy Compliance

#### GDPR Compliance (EU Users)
```typescript
interface GDPRCompliance {
  dataProcessingBasis: 'consent' | 'contract' | 'legal_obligation' | 'vital_interests' | 'public_task' | 'legitimate_interests'
  consentTimestamp?: Date
  dataRetentionPeriod: number // days
  rightsExercised: {
    access?: Date[]
    rectification?: Date[]
    erasure?: Date[]
    portability?: Date[]
    objection?: Date[]
  }
}

// Right to erasure implementation
const deleteUserData = async (userId: string, reason: string) => {
  await Promise.all([
    // Anonymize user data
    db.users.update(userId, {
      email: `deleted-${uuid()}@example.com`,
      name: 'Deleted User',
      phone: null,
      address: null
    }),
    
    // Remove from external services
    emailService.unsubscribe(userId),
    analyticsService.deleteUser(userId),
    
    // Log deletion for compliance
    auditLog.create({
      action: 'USER_DATA_DELETION',
      userId,
      reason,
      timestamp: new Date()
    })
  ])
}
```

#### CCPA Compliance (California Users)
```typescript
interface CCPACompliance {
  personalInfoCollected: string[]
  personalInfoSold: boolean
  personalInfoDisclosed: string[]
  optOutRequests: Date[]
  dataPortabilityRequests: Date[]
}

// Do Not Sell implementation
const handleDoNotSellRequest = async (userId: string) => {
  await db.users.update(userId, {
    ccpa_opt_out: true,
    opt_out_timestamp: new Date()
  })
  
  // Notify third-party services
  await thirdPartyServices.forEach(service => 
    service.optOut(userId)
  )
}
```

### Data Minimization
- Collect only necessary data
- Regular data purging schedules
- Automated data retention policies
- Clear data collection purposes

---

## Cannabis Industry Compliance

### Age Verification

#### Multi-Step Verification Process
```typescript
interface AgeVerificationProcess {
  step1: 'self_declaration'    // User claims 21+
  step2: 'document_upload'     // ID document upload
  step3: 'manual_review'       // Human verification
  step4: 'continuous_monitoring' // Ongoing compliance
}

interface AgeVerificationRecord {
  userId: string
  verificationMethod: 'id_scan' | 'manual_review' | 'third_party'
  documentType: 'drivers_license' | 'passport' | 'state_id'
  documentNumber: string       // Encrypted
  issuingState: string
  expirationDate: Date
  verifiedAt: Date
  verifiedBy: string          // System or admin user
  status: 'pending' | 'verified' | 'rejected'
  rejectionReason?: string
}

// Age verification implementation
const verifyAge = async (userId: string, document: DocumentUpload): Promise<AgeVerificationRecord> => {
  // Step 1: OCR document extraction
  const extractedData = await ocrService.extractData(document.buffer)
  
  // Step 2: Validate document authenticity
  const isValid = await documentValidator.validate(extractedData)
  
  if (!isValid) {
    throw new Error('Invalid or fraudulent document detected')
  }
  
  // Step 3: Check age requirement
  const birthDate = new Date(extractedData.dateOfBirth)
  const age = calculateAge(birthDate)
  
  if (age < 21) {
    await db.ageVerification.create({
      userId,
      status: 'rejected',
      rejectionReason: 'Under 21 years of age'
    })
    throw new Error('Must be 21 or older')
  }
  
  // Step 4: Store verification record
  return await db.ageVerification.create({
    userId,
    verificationMethod: 'id_scan',
    documentType: extractedData.documentType,
    documentNumber: encrypt(extractedData.documentNumber),
    issuingState: extractedData.issuingState,
    verifiedAt: new Date(),
    status: 'verified'
  })
}
```

### Track & Trace Integration

#### Metrc Integration
```typescript
interface MetrcIntegration {
  licenseNumber: string
  apiKey: string          // Encrypted
  facilityId: string
  lastSync: Date
  compliance_status: 'compliant' | 'warning' | 'violation'
}

interface TrackTraceRecord {
  metrcId: string         // Metrc package ID
  productId: string       // Internal product ID
  batchNumber: string
  harvestDate: Date
  testResults: LabResult[]
  currentLocation: string
  statusHistory: StatusChange[]
  compliance_flags: string[]
}

// Sync with Metrc API
const syncWithMetrc = async (vendorId: string) => {
  const vendor = await db.vendors.findById(vendorId)
  const metrcClient = new MetrcClient(vendor.metrc_api_key)
  
  try {
    // Fetch current inventory from Metrc
    const metrcInventory = await metrcClient.getInventory()
    
    // Sync with internal inventory
    for (const item of metrcInventory) {
      await db.inventory.upsert({
        vendor_id: vendorId,
        metrc_id: item.id,
        product_name: item.name,
        quantity: item.quantity,
        last_updated: item.lastModified,
        compliance_status: item.complianceStatus
      })
    }
    
    // Update vendor compliance status
    await db.vendors.update(vendorId, {
      last_metrc_sync: new Date(),
      compliance_status: 'compliant'
    })
    
  } catch (error) {
    // Log compliance violation
    await auditLog.create({
      action: 'METRC_SYNC_FAILURE',
      vendorId,
      error: error.message,
      timestamp: new Date()
    })
    
    await db.vendors.update(vendorId, {
      compliance_status: 'violation'
    })
  }
}
```

### Regulatory Compliance Monitoring

#### Automated Compliance Checks
```typescript
interface ComplianceRule {
  id: string
  name: string
  description: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  checkFunction: (data: any) => boolean
  autoRemediation?: () => Promise<void>
}

const complianceRules: ComplianceRule[] = [
  {
    id: 'age_verification_required',
    name: 'Age Verification Required',
    description: 'All users must be age verified before accessing products',
    severity: 'critical',
    checkFunction: (user) => user.age_verified === true
  },
  {
    id: 'inventory_tracking',
    name: 'Inventory Tracking',
    description: 'All inventory must be tracked in Metrc system',
    severity: 'high',
    checkFunction: (product) => product.metrc_id !== null
  },
  {
    id: 'lab_testing_required',
    name: 'Lab Testing Required',
    description: 'All products must have valid lab test results',
    severity: 'high',
    checkFunction: (product) => product.lab_results?.length > 0
  }
]

// Compliance monitoring service
const runComplianceCheck = async () => {
  const violations: ComplianceViolation[] = []
  
  for (const rule of complianceRules) {
    try {
      const data = await getRelevantData(rule.id)
      const isCompliant = rule.checkFunction(data)
      
      if (!isCompliant) {
        violations.push({
          ruleId: rule.id,
          severity: rule.severity,
          description: rule.description,
          detectedAt: new Date(),
          status: 'active'
        })
        
        // Auto-remediation if available
        if (rule.autoRemediation) {
          await rule.autoRemediation()
        }
      }
    } catch (error) {
      logger.error(`Compliance check failed for rule ${rule.id}:`, error)
    }
  }
  
  // Alert on critical violations
  const criticalViolations = violations.filter(v => v.severity === 'critical')
  if (criticalViolations.length > 0) {
    await alertService.sendCriticalComplianceAlert(criticalViolations)
  }
  
  return violations
}
```

---

## Payment Security

### PCI DSS Compliance

#### Payment Processing Strategy
```typescript
// Never store payment data directly
interface PaymentIntent {
  id: string
  amount: number
  currency: string
  customer_id: string
  status: 'requires_payment_method' | 'processing' | 'succeeded' | 'canceled'
  metadata: {
    order_id: string
    vendor_id: string
  }
}

// Secure payment processing
const processPayment = async (paymentData: PaymentRequest): Promise<PaymentResult> => {
  // Use Stripe for secure payment processing
  const paymentIntent = await stripe.paymentIntents.create({
    amount: paymentData.amount,
    currency: 'usd',
    customer: paymentData.customerId,
    payment_method: paymentData.paymentMethodId,
    confirmation_method: 'manual',
    confirm: true,
    metadata: {
      order_id: paymentData.orderId,
      vendor_id: paymentData.vendorId
    }
  })
  
  // Store only non-sensitive payment record
  await db.payments.create({
    id: paymentIntent.id,
    order_id: paymentData.orderId,
    amount: paymentIntent.amount,
    status: paymentIntent.status,
    created_at: new Date()
  })
  
  return {
    success: paymentIntent.status === 'succeeded',
    paymentId: paymentIntent.id,
    status: paymentIntent.status
  }
}
```

#### Bank Secrecy Act (BSA) Compliance
```typescript
interface BSACompliance {
  transactionMonitoring: boolean
  suspiciousActivityReporting: boolean
  recordKeeping: boolean
  customerIdentification: boolean
}

// Transaction monitoring
const monitorTransaction = async (transaction: Transaction) => {
  const flags: string[] = []
  
  // Check for suspicious patterns
  if (transaction.amount > 10000) {
    flags.push('LARGE_TRANSACTION')
  }
  
  const recentTransactions = await getRecentTransactions(transaction.customer_id, 24)
  const dailyTotal = recentTransactions.reduce((sum, t) => sum + t.amount, 0)
  
  if (dailyTotal > 25000) {
    flags.push('STRUCTURING_PATTERN')
  }
  
  if (flags.length > 0) {
    await createSuspiciousActivityReport({
      transaction_id: transaction.id,
      customer_id: transaction.customer_id,
      flags,
      reported_at: new Date()
    })
  }
}
```

---

## API Security

### Rate Limiting
```typescript
interface RateLimitConfig {
  windowMs: number
  max: number
  message: string
  standardHeaders: boolean
  legacyHeaders: boolean
}

const rateLimitConfigs: Record<string, RateLimitConfig> = {
  auth: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // 5 attempts per window
    message: 'Too many authentication attempts',
    standardHeaders: true,
    legacyHeaders: false
  },
  api: {
    windowMs: 60 * 1000, // 1 minute
    max: 100, // 100 requests per minute
    message: 'Too many requests',
    standardHeaders: true,
    legacyHeaders: false
  },
  search: {
    windowMs: 60 * 1000, // 1 minute
    max: 200, // 200 searches per minute
    message: 'Search rate limit exceeded',
    standardHeaders: true,
    legacyHeaders: false
  }
}
```

### Input Validation & Sanitization
```typescript
import { z } from 'zod'

// Validation schemas
const userRegistrationSchema = z.object({
  email: z.string().email().max(254),
  password: z.string().min(8).max(128).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/),
  name: z.string().min(1).max(100).regex(/^[a-zA-Z\s'-]+$/),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/).optional(),
  dateOfBirth: z.string().datetime()
})

const storeUpdateSchema = z.object({
  name: z.string().min(1).max(200),
  description: z.string().max(1000),
  address: z.string().min(1).max(500),
  hours: z.array(z.object({
    day: z.enum(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']),
    open: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/),
    close: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/)
  }))
})

// Validation middleware
const validateRequest = (schema: z.ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = schema.parse(req.body)
      req.body = validated
      next()
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: 'Validation failed',
          details: error.errors
        })
      }
      next(error)
    }
  }
}
```

### SQL Injection Prevention
```typescript
// Use parameterized queries with Sequelize/Prisma
const getUserByEmail = async (email: string): Promise<User | null> => {
  // Safe - parameterized query
  return await db.user.findUnique({
    where: { email }
  })
}

// Dangerous - string concatenation (DON'T DO THIS)
const unsafeQuery = async (email: string) => {
  return await db.raw(`SELECT * FROM users WHERE email = '${email}'`)
}

// Safe - parameterized raw query if needed
const safeRawQuery = async (email: string) => {
  return await db.raw('SELECT * FROM users WHERE email = ?', [email])
}
```

### XSS Prevention
```typescript
import DOMPurify from 'isomorphic-dompurify'

// Sanitize user-generated content
const sanitizeContent = (content: string): string => {
  return DOMPurify.sanitize(content, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'ul', 'ol', 'li'],
    ALLOWED_ATTR: []
  })
}

// Content Security Policy headers
const cspDirectives = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", 'https://js.stripe.com'],
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'img-src': ["'self'", 'data:', 'https:'],
  'connect-src': ["'self'", 'https://api.stripe.com'],
  'font-src': ["'self'", 'https://fonts.gstatic.com'],
  'frame-src': ["'self'", 'https://js.stripe.com']
}
```

---

## Monitoring & Incident Response

### Security Monitoring

#### Audit Logging
```typescript
interface AuditLogEntry {
  id: string
  timestamp: Date
  userId?: string
  sessionId?: string
  action: string
  resource: string
  resourceId?: string
  ipAddress: string
  userAgent: string
  result: 'success' | 'failure' | 'error'
  details?: object
  risk_level: 'low' | 'medium' | 'high' | 'critical'
}

const auditActions = {
  // Authentication events
  LOGIN_SUCCESS: 'login_success',
  LOGIN_FAILURE: 'login_failure',
  LOGOUT: 'logout',
  PASSWORD_RESET: 'password_reset',
  MFA_ENABLED: 'mfa_enabled',
  
  // Data access events
  USER_DATA_ACCESS: 'user_data_access',
  SENSITIVE_DATA_EXPORT: 'sensitive_data_export',
  ADMIN_ACTION: 'admin_action',
  
  // Compliance events
  AGE_VERIFICATION: 'age_verification',
  METRC_SYNC: 'metrc_sync',
  COMPLIANCE_VIOLATION: 'compliance_violation',
  
  // Financial events
  PAYMENT_PROCESSED: 'payment_processed',
  REFUND_ISSUED: 'refund_issued',
  SUSPICIOUS_TRANSACTION: 'suspicious_transaction'
}

// Audit logging service
const auditLog = {
  create: async (entry: Omit<AuditLogEntry, 'id' | 'timestamp'>) => {
    const logEntry = {
      id: generateId(),
      timestamp: new Date(),
      ...entry
    }
    
    await db.auditLogs.create(logEntry)
    
    // Real-time alerting for critical events
    if (entry.risk_level === 'critical') {
      await securityAlertService.send(logEntry)
    }
    
    return logEntry
  },
  
  search: async (criteria: AuditSearchCriteria) => {
    return await db.auditLogs.findMany({
      where: criteria,
      orderBy: { timestamp: 'desc' },
      take: criteria.limit || 100
    })
  }
}
```

#### Intrusion Detection
```typescript
interface SecurityAlert {
  id: string
  type: SecurityAlertType
  severity: 'info' | 'warning' | 'critical'
  message: string
  source: string
  timestamp: Date
  resolved: boolean
  falsePositive: boolean
}

enum SecurityAlertType {
  BRUTE_FORCE_ATTEMPT = 'brute_force_attempt',
  SUSPICIOUS_LOGIN = 'suspicious_login',
  DATA_BREACH_ATTEMPT = 'data_breach_attempt',
  COMPLIANCE_VIOLATION = 'compliance_violation',
  UNUSUAL_TRANSACTION = 'unusual_transaction'
}

// Real-time security monitoring
const securityMonitor = {
  detectBruteForce: async (ipAddress: string, timeWindow: number = 300000) => {
    const attempts = await auditLog.search({
      action: auditActions.LOGIN_FAILURE,
      ipAddress,
      timestamp: { gte: new Date(Date.now() - timeWindow) }
    })
    
    if (attempts.length >= 10) {
      await securityAlerts.create({
        type: SecurityAlertType.BRUTE_FORCE_ATTEMPT,
        severity: 'critical',
        message: `Brute force attack detected from IP ${ipAddress}`,
        source: ipAddress
      })
      
      // Auto-block IP
      await ipBlocklist.add(ipAddress, '1 hour')
    }
  },
  
  detectSuspiciousLogin: async (userId: string, loginData: LoginAttempt) => {
    const user = await db.users.findById(userId)
    const recentLogins = await auditLog.search({
      userId,
      action: auditActions.LOGIN_SUCCESS,
      timestamp: { gte: new Date(Date.now() - 86400000) } // 24 hours
    })
    
    // Check for unusual login patterns
    const isNewLocation = !recentLogins.some(login => 
      login.ipAddress === loginData.ipAddress
    )
    
    const isNewDevice = !recentLogins.some(login =>
      login.userAgent === loginData.userAgent
    )
    
    if (isNewLocation && isNewDevice) {
      await securityAlerts.create({
        type: SecurityAlertType.SUSPICIOUS_LOGIN,
        severity: 'warning',
        message: `Suspicious login for user ${userId} from new location/device`,
        source: userId
      })
      
      // Require additional verification
      await requireAdditionalVerification(userId, loginData)
    }
  }
}
```

### Incident Response

#### Incident Response Plan
```typescript
interface SecurityIncident {
  id: string
  type: IncidentType
  severity: IncidentSeverity
  status: IncidentStatus
  description: string
  detectedAt: Date
  reportedBy: string
  assignedTo?: string
  timeline: IncidentTimelineEntry[]
  affectedSystems: string[]
  affectedUsers: string[]
  containmentActions: string[]
  resolutionActions: string[]
  postIncidentReview?: string
}

enum IncidentType {
  DATA_BREACH = 'data_breach',
  UNAUTHORIZED_ACCESS = 'unauthorized_access',
  SYSTEM_COMPROMISE = 'system_compromise',
  COMPLIANCE_VIOLATION = 'compliance_violation',
  PAYMENT_FRAUD = 'payment_fraud'
}

enum IncidentSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

enum IncidentStatus {
  DETECTED = 'detected',
  INVESTIGATING = 'investigating',
  CONTAINING = 'containing',
  RESOLVING = 'resolving',
  MONITORING = 'monitoring',
  CLOSED = 'closed'
}

// Incident response automation
const incidentResponse = {
  create: async (incident: Omit<SecurityIncident, 'id' | 'timeline'>) => {
    const incidentId = generateId()
    
    const newIncident = {
      ...incident,
      id: incidentId,
      timeline: [{
        timestamp: new Date(),
        action: 'INCIDENT_CREATED',
        description: 'Security incident detected and created',
        actor: 'system'
      }]
    }
    
    await db.securityIncidents.create(newIncident)
    
    // Auto-escalation for critical incidents
    if (incident.severity === IncidentSeverity.CRITICAL) {
      await escalateToCISO(newIncident)
    }
    
    return newIncident
  },
  
  containData: async (incidentId: string, affectedData: string[]) => {
    // Immediate containment actions
    await Promise.all([
      // Revoke access tokens
      revokeAllUserTokens(affectedData),
      
      // Lock affected accounts
      lockAffectedAccounts(affectedData),
      
      // Alert affected users
      notifyAffectedUsers(affectedData),
      
      // Preserve evidence
      preserveAuditLogs(incidentId)
    ])
    
    await updateIncidentTimeline(incidentId, {
      action: 'DATA_CONTAINED',
      description: 'Affected data and accounts secured',
      actor: 'security_team'
    })
  }
}
```

---

## Security Testing

### Automated Security Testing

#### Static Application Security Testing (SAST)
```yaml
# GitHub Actions - Security Pipeline
name: Security Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  security-tests:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Run CodeQL Analysis
      uses: github/codeql-action/init@v2
      with:
        languages: javascript, typescript
        
    - name: Run Semgrep SAST
      run: |
        python -m pip install semgrep
        semgrep --config=auto --error --json --output=semgrep.json .
        
    - name: Run npm audit
      run: |
        npm audit --audit-level=high --production
        
    - name: Check for secrets
      uses: trufflesecurity/trufflehog@main
      with:
        path: ./
```

#### Dynamic Application Security Testing (DAST)
```typescript
// Security test suite
describe('Security Tests', () => {
  describe('Authentication', () => {
    it('should prevent brute force attacks', async () => {
      const promises = Array.from({ length: 10 }, () =>
        request(app)
          .post('/auth/login')
          .send({ email: 'test@example.com', password: 'wrong' })
      )
      
      const responses = await Promise.all(promises)
      const lastResponse = responses[responses.length - 1]
      
      expect(lastResponse.status).toBe(429) // Rate limited
    })
    
    it('should require strong passwords', async () => {
      const weakPasswords = ['123456', 'password', 'qwerty']
      
      for (const password of weakPasswords) {
        const response = await request(app)
          .post('/auth/register')
          .send({
            email: 'test@example.com',
            password,
            name: 'Test User'
          })
        
        expect(response.status).toBe(400)
        expect(response.body.error).toContain('password')
      }
    })
  })
  
  describe('Input Validation', () => {
    it('should prevent SQL injection', async () => {
      const maliciousInputs = [
        "'; DROP TABLE users; --",
        "' OR '1'='1",
        "1; DELETE FROM users WHERE id=1; --"
      ]
      
      for (const input of maliciousInputs) {
        const response = await request(app)
          .get(`/api/users/search?q=${encodeURIComponent(input)}`)
          .set('Authorization', `Bearer ${authToken}`)
        
        expect(response.status).not.toBe(200)
      }
    })
    
    it('should sanitize XSS attempts', async () => {
      const xssPayloads = [
        '<script>alert("xss")</script>',
        '<img src="x" onerror="alert(1)">',
        'javascript:alert("xss")'
      ]
      
      for (const payload of xssPayloads) {
        const response = await request(app)
          .post('/api/stores')
          .set('Authorization', `Bearer ${vendorToken}`)
          .send({
            name: payload,
            description: 'Test store'
          })
        
        if (response.status === 201) {
          const store = response.body
          expect(store.name).not.toContain('<script>')
          expect(store.name).not.toContain('javascript:')
        }
      }
    })
  })
})
```

### Penetration Testing

#### Regular Penetration Testing Schedule
- **Quarterly**: Internal security team assessment
- **Bi-annually**: Third-party penetration testing
- **Annually**: Comprehensive security audit
- **Ad-hoc**: After major feature releases

#### Bug Bounty Program
```typescript
interface BugBountyProgram {
  scope: string[]
  outOfScope: string[]
  rewards: {
    critical: number    // $5,000 - $10,000
    high: number       // $1,000 - $5,000
    medium: number     // $500 - $1,000
    low: number        // $100 - $500
  }
  requirements: string[]
  disclosure: string
}

const bugBountyConfig: BugBountyProgram = {
  scope: [
    '*.420nation.com',
    'mobile applications',
    'API endpoints'
  ],
  outOfScope: [
    'Physical attacks',
    'Social engineering',
    'DoS attacks',
    'Third-party services'
  ],
  rewards: {
    critical: 10000,
    high: 5000,
    medium: 1000,
    low: 500
  },
  requirements: [
    'Responsible disclosure',
    'No data destruction',
    'No privacy violations',
    'Detailed report required'
  ],
  disclosure: '90 days'
}
```

---

## Compliance Documentation

### Regulatory Documentation

#### Cannabis Compliance Documentation
```typescript
interface ComplianceDocumentation {
  // License and permits
  business_license: {
    number: string
    issuing_authority: string
    expiration_date: Date
    status: 'active' | 'suspended' | 'expired'
  }
  
  cannabis_license: {
    number: string
    type: 'cultivation' | 'manufacturing' | 'retail' | 'distribution'
    issuing_state: string
    expiration_date: Date
    restrictions: string[]
  }
  
  // Compliance records
  track_trace_records: TrackTraceRecord[]
  lab_test_results: LabTestResult[]
  inventory_audits: InventoryAudit[]
  employee_training: TrainingRecord[]
  
  // Regulatory filings
  tax_filings: TaxFiling[]
  regulatory_reports: RegulatoryReport[]
  inspection_records: InspectionRecord[]
}
```

#### Data Protection Documentation
```typescript
interface DataProtectionDocumentation {
  privacy_policy: {
    version: string
    last_updated: Date
    next_review: Date
    approved_by: string
  }
  
  data_processing_records: {
    purposes: string[]
    legal_basis: string
    data_categories: string[]
    recipients: string[]
    retention_period: number
    security_measures: string[]
  }
  
  privacy_impact_assessments: PrivacyImpactAssessment[]
  breach_notifications: DataBreachNotification[]
  consent_records: ConsentRecord[]
}
```

### Audit Trail Requirements

#### Immutable Audit Logs
```typescript
// Blockchain-based audit trail for critical operations
interface BlockchainAuditEntry {
  id: string
  previous_hash: string
  timestamp: Date
  data_hash: string
  operation: string
  user_id: string
  signature: string
}

const createAuditBlock = async (operation: string, data: any, userId: string): Promise<BlockchainAuditEntry> => {
  const previousBlock = await getLatestAuditBlock()
  const dataHash = generateHash(JSON.stringify(data))
  
  const block: BlockchainAuditEntry = {
    id: generateId(),
    previous_hash: previousBlock?.id || '0',
    timestamp: new Date(),
    data_hash: dataHash,
    operation,
    user_id: userId,
    signature: signData(dataHash, privateKey)
  }
  
  await storeAuditBlock(block)
  return block
}
```

---

## Conclusion

This security and compliance framework provides comprehensive protection for the 420 Nation platform, addressing both general web application security threats and cannabis industry-specific regulatory requirements. Regular review and updates of these security measures are essential to maintain protection against evolving threats and changing regulations.

The framework emphasizes:
- **Defense in depth** with multiple security layers
- **Compliance automation** to reduce human error
- **Continuous monitoring** for real-time threat detection
- **Incident response** for rapid containment and resolution
- **Audit trails** for accountability and regulatory compliance

---

**Document Version:** 1.0  
**Last Updated:** 2025-08-23  
**Next Review:** 2025-09-23  
**Owner:** Security Team  
**Stakeholders:** Legal, Compliance, Engineering, Product