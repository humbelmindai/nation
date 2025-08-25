
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  emailVerified: 'emailVerified',
  passwordHash: 'passwordHash',
  role: 'role',
  firstName: 'firstName',
  lastName: 'lastName',
  phone: 'phone',
  dateOfBirth: 'dateOfBirth',
  status: 'status',
  lastLoginAt: 'lastLoginAt',
  failedLoginAttempts: 'failedLoginAttempts',
  lockedUntil: 'lockedUntil',
  ageVerified: 'ageVerified',
  ageVerificationMethod: 'ageVerificationMethod',
  ageVerifiedAt: 'ageVerifiedAt',
  ageVerifiedBy: 'ageVerifiedBy',
  termsAcceptedAt: 'termsAcceptedAt',
  privacyAcceptedAt: 'privacyAcceptedAt',
  marketingConsent: 'marketingConsent',
  gdprConsent: 'gdprConsent',
  ccpaOptOut: 'ccpaOptOut',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  createdBy: 'createdBy',
  updatedBy: 'updatedBy'
};

exports.Prisma.UserAddressScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  addressLine1: 'addressLine1',
  addressLine2: 'addressLine2',
  city: 'city',
  state: 'state',
  postalCode: 'postalCode',
  country: 'country',
  latitude: 'latitude',
  longitude: 'longitude',
  isDefault: 'isDefault',
  verified: 'verified',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserSessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  refreshTokenHash: 'refreshTokenHash',
  deviceFingerprint: 'deviceFingerprint',
  ipAddress: 'ipAddress',
  userAgent: 'userAgent',
  locationCountry: 'locationCountry',
  locationRegion: 'locationRegion',
  locationCity: 'locationCity',
  isActive: 'isActive',
  expiresAt: 'expiresAt',
  lastUsedAt: 'lastUsedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StoreScalarFieldEnum = {
  id: 'id',
  ownerId: 'ownerId',
  name: 'name',
  slug: 'slug',
  description: 'description',
  email: 'email',
  phone: 'phone',
  website: 'website',
  addressLine1: 'addressLine1',
  addressLine2: 'addressLine2',
  city: 'city',
  state: 'state',
  postalCode: 'postalCode',
  latitude: 'latitude',
  longitude: 'longitude',
  businessType: 'businessType',
  licenseNumber: 'licenseNumber',
  licenseType: 'licenseType',
  licenseState: 'licenseState',
  licenseExpiresAt: 'licenseExpiresAt',
  features: 'features',
  paymentMethods: 'paymentMethods',
  deliveryRadius: 'deliveryRadius',
  minimumOrder: 'minimumOrder',
  deliveryFee: 'deliveryFee',
  operatingHours: 'operatingHours',
  status: 'status',
  verified: 'verified',
  verifiedAt: 'verifiedAt',
  verifiedBy: 'verifiedBy',
  logoUrl: 'logoUrl',
  coverImageUrl: 'coverImageUrl',
  galleryImages: 'galleryImages',
  metaTitle: 'metaTitle',
  metaDescription: 'metaDescription',
  socialMedia: 'socialMedia',
  metrcLicenseId: 'metrcLicenseId',
  metrcLastSync: 'metrcLastSync',
  complianceStatus: 'complianceStatus',
  trackTraceSystem: 'trackTraceSystem',
  totalProducts: 'totalProducts',
  averageRating: 'averageRating',
  totalReviews: 'totalReviews',
  totalOrders: 'totalOrders',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  createdBy: 'createdBy',
  updatedBy: 'updatedBy'
};

exports.Prisma.StoreStaffScalarFieldEnum = {
  id: 'id',
  storeId: 'storeId',
  userId: 'userId',
  role: 'role',
  permissions: 'permissions',
  employeeId: 'employeeId',
  startDate: 'startDate',
  endDate: 'endDate',
  hourlyWage: 'hourlyWage',
  commissionRate: 'commissionRate',
  status: 'status',
  canAccessPos: 'canAccessPos',
  canManageInventory: 'canManageInventory',
  canProcessOrders: 'canProcessOrders',
  complianceTrainingCompleted: 'complianceTrainingCompleted',
  trainingCompletedAt: 'trainingCompletedAt',
  trainingExpiresAt: 'trainingExpiresAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  createdBy: 'createdBy'
};

exports.Prisma.ProductCategoryScalarFieldEnum = {
  id: 'id',
  parentId: 'parentId',
  name: 'name',
  slug: 'slug',
  description: 'description',
  iconName: 'iconName',
  colorHex: 'colorHex',
  sortOrder: 'sortOrder',
  productType: 'productType',
  thcCategory: 'thcCategory',
  consumptionMethod: 'consumptionMethod',
  metaTitle: 'metaTitle',
  metaDescription: 'metaDescription',
  isActive: 'isActive',
  requiresCompliance: 'requiresCompliance',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  storeId: 'storeId',
  categoryId: 'categoryId',
  name: 'name',
  slug: 'slug',
  description: 'description',
  shortDescription: 'shortDescription',
  strainName: 'strainName',
  strainType: 'strainType',
  brand: 'brand',
  manufacturer: 'manufacturer',
  thcPercentage: 'thcPercentage',
  cbdPercentage: 'cbdPercentage',
  thcaPercentage: 'thcaPercentage',
  cbdaPercentage: 'cbdaPercentage',
  totalCannabinoids: 'totalCannabinoids',
  basePrice: 'basePrice',
  salePrice: 'salePrice',
  costPrice: 'costPrice',
  weightGrams: 'weightGrams',
  sku: 'sku',
  barcode: 'barcode',
  stockQuantity: 'stockQuantity',
  reservedQuantity: 'reservedQuantity',
  lowStockThreshold: 'lowStockThreshold',
  metrcId: 'metrcId',
  batchNumber: 'batchNumber',
  harvestDate: 'harvestDate',
  packageDate: 'packageDate',
  expirationDate: 'expirationDate',
  labTested: 'labTested',
  labTestResults: 'labTestResults',
  testedDate: 'testedDate',
  testingLab: 'testingLab',
  featuredImageUrl: 'featuredImageUrl',
  galleryImages: 'galleryImages',
  status: 'status',
  isFeatured: 'isFeatured',
  isMedicalOnly: 'isMedicalOnly',
  ageRestriction: 'ageRestriction',
  metaTitle: 'metaTitle',
  metaDescription: 'metaDescription',
  tags: 'tags',
  searchKeywords: 'searchKeywords',
  viewCount: 'viewCount',
  averageRating: 'averageRating',
  reviewCount: 'reviewCount',
  salesCount: 'salesCount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  createdBy: 'createdBy',
  updatedBy: 'updatedBy'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  orderNumber: 'orderNumber',
  userId: 'userId',
  storeId: 'storeId',
  orderType: 'orderType',
  fulfillmentStatus: 'fulfillmentStatus',
  deliveryAddress: 'deliveryAddress',
  deliveryInstructions: 'deliveryInstructions',
  deliveryTimeRequested: 'deliveryTimeRequested',
  deliveryTimeActual: 'deliveryTimeActual',
  deliveryPersonId: 'deliveryPersonId',
  subtotal: 'subtotal',
  taxAmount: 'taxAmount',
  deliveryFee: 'deliveryFee',
  serviceFee: 'serviceFee',
  discountAmount: 'discountAmount',
  tipAmount: 'tipAmount',
  totalAmount: 'totalAmount',
  paymentStatus: 'paymentStatus',
  paymentMethod: 'paymentMethod',
  paymentProvider: 'paymentProvider',
  paymentIntentId: 'paymentIntentId',
  ageVerifiedAtDelivery: 'ageVerifiedAtDelivery',
  idCheckedBy: 'idCheckedBy',
  customerNotes: 'customerNotes',
  internalNotes: 'internalNotes',
  metrcTransferManifest: 'metrcTransferManifest',
  complianceCheckPassed: 'complianceCheckPassed',
  complianceCheckedAt: 'complianceCheckedAt',
  complianceCheckedBy: 'complianceCheckedBy',
  cancelledAt: 'cancelledAt',
  cancelledBy: 'cancelledBy',
  cancellationReason: 'cancellationReason',
  refundAmount: 'refundAmount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrderItemScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  productId: 'productId',
  quantity: 'quantity',
  unitPrice: 'unitPrice',
  totalPrice: 'totalPrice',
  productName: 'productName',
  productSku: 'productSku',
  productBrand: 'productBrand',
  thcPercentage: 'thcPercentage',
  cbdPercentage: 'cbdPercentage',
  weightGrams: 'weightGrams',
  metrcPackageId: 'metrcPackageId',
  batchNumber: 'batchNumber',
  customerNotes: 'customerNotes',
  createdAt: 'createdAt'
};

exports.Prisma.ReviewScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  reviewableType: 'reviewableType',
  reviewableId: 'reviewableId',
  rating: 'rating',
  title: 'title',
  content: 'content',
  qualityRating: 'qualityRating',
  valueRating: 'valueRating',
  serviceRating: 'serviceRating',
  effectsRating: 'effectsRating',
  effects: 'effects',
  medicalBenefits: 'medicalBenefits',
  sideEffects: 'sideEffects',
  images: 'images',
  status: 'status',
  moderatedAt: 'moderatedAt',
  moderatedBy: 'moderatedBy',
  moderationReason: 'moderationReason',
  verifiedPurchase: 'verifiedPurchase',
  orderId: 'orderId',
  helpfulCount: 'helpfulCount',
  totalVotes: 'totalVotes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProfessionalScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  professionalType: 'professionalType',
  licenseNumber: 'licenseNumber',
  licenseState: 'licenseState',
  licenseExpiresAt: 'licenseExpiresAt',
  specializations: 'specializations',
  certifications: 'certifications',
  practiceName: 'practiceName',
  practiceAddress: 'practiceAddress',
  practicePhone: 'practicePhone',
  practiceWebsite: 'practiceWebsite',
  cannabisExperienceYears: 'cannabisExperienceYears',
  cannabisCertifications: 'cannabisCertifications',
  preferredProducts: 'preferredProducts',
  treatmentApproaches: 'treatmentApproaches',
  consultationTypes: 'consultationTypes',
  hourlyRate: 'hourlyRate',
  acceptsInsurance: 'acceptsInsurance',
  insuranceProviders: 'insuranceProviders',
  verified: 'verified',
  verifiedAt: 'verifiedAt',
  verifiedBy: 'verifiedBy',
  verificationDocuments: 'verificationDocuments',
  consultationCount: 'consultationCount',
  averageRating: 'averageRating',
  reviewCount: 'reviewCount',
  status: 'status',
  acceptingNewPatients: 'acceptingNewPatients',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ConsultationScalarFieldEnum = {
  id: 'id',
  patientId: 'patientId',
  professionalId: 'professionalId',
  consultationType: 'consultationType',
  sessionType: 'sessionType',
  scheduledAt: 'scheduledAt',
  durationMinutes: 'durationMinutes',
  timezone: 'timezone',
  status: 'status',
  meetingUrl: 'meetingUrl',
  meetingId: 'meetingId',
  meetingPassword: 'meetingPassword',
  chiefComplaint: 'chiefComplaint',
  symptoms: 'symptoms',
  currentMedications: 'currentMedications',
  cannabisExperience: 'cannabisExperience',
  previousCannabisUse: 'previousCannabisUse',
  assessment: 'assessment',
  recommendations: 'recommendations',
  prescribedProducts: 'prescribedProducts',
  followUpNeeded: 'followUpNeeded',
  followUpDate: 'followUpDate',
  consultationFee: 'consultationFee',
  paymentStatus: 'paymentStatus',
  paymentId: 'paymentId',
  medicalConsentSigned: 'medicalConsentSigned',
  privacyConsentSigned: 'privacyConsentSigned',
  consultationAgreementSigned: 'consultationAgreementSigned',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BlogPostScalarFieldEnum = {
  id: 'id',
  authorId: 'authorId',
  title: 'title',
  slug: 'slug',
  excerpt: 'excerpt',
  content: 'content',
  featuredImageUrl: 'featuredImageUrl',
  category: 'category',
  tags: 'tags',
  metaTitle: 'metaTitle',
  metaDescription: 'metaDescription',
  metaKeywords: 'metaKeywords',
  status: 'status',
  publishedAt: 'publishedAt',
  scheduledFor: 'scheduledFor',
  viewCount: 'viewCount',
  likeCount: 'likeCount',
  commentCount: 'commentCount',
  shareCount: 'shareCount',
  factChecked: 'factChecked',
  factCheckedBy: 'factCheckedBy',
  factCheckedAt: 'factCheckedAt',
  medicalDisclaimer: 'medicalDisclaimer',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AuditLogScalarFieldEnum = {
  id: 'id',
  action: 'action',
  resourceType: 'resourceType',
  resourceId: 'resourceId',
  userId: 'userId',
  sessionId: 'sessionId',
  ipAddress: 'ipAddress',
  userAgent: 'userAgent',
  oldValues: 'oldValues',
  newValues: 'newValues',
  requestId: 'requestId',
  endpoint: 'endpoint',
  httpMethod: 'httpMethod',
  riskLevel: 'riskLevel',
  complianceRelevant: 'complianceRelevant',
  result: 'result',
  errorMessage: 'errorMessage',
  timestamp: 'timestamp'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.UserRole = exports.$Enums.UserRole = {
  consumer: 'consumer',
  vendor: 'vendor',
  professional: 'professional',
  admin: 'admin'
};

exports.UserStatus = exports.$Enums.UserStatus = {
  active: 'active',
  suspended: 'suspended',
  deleted: 'deleted'
};

exports.AgeVerificationMethod = exports.$Enums.AgeVerificationMethod = {
  self_declaration: 'self_declaration',
  id_scan: 'id_scan',
  manual_review: 'manual_review'
};

exports.AddressType = exports.$Enums.AddressType = {
  billing: 'billing',
  shipping: 'shipping',
  primary: 'primary'
};

exports.BusinessType = exports.$Enums.BusinessType = {
  dispensary: 'dispensary',
  delivery: 'delivery',
  cultivation: 'cultivation',
  manufacturing: 'manufacturing'
};

exports.StoreStatus = exports.$Enums.StoreStatus = {
  pending: 'pending',
  active: 'active',
  suspended: 'suspended',
  closed: 'closed'
};

exports.ComplianceStatus = exports.$Enums.ComplianceStatus = {
  compliant: 'compliant',
  warning: 'warning',
  violation: 'violation'
};

exports.TrackTraceSystem = exports.$Enums.TrackTraceSystem = {
  metrc: 'metrc',
  leafdata: 'leafdata',
  biotrack: 'biotrack',
  other: 'other'
};

exports.ProductType = exports.$Enums.ProductType = {
  flower: 'flower',
  edibles: 'edibles',
  concentrates: 'concentrates',
  topicals: 'topicals',
  accessories: 'accessories',
  other: 'other'
};

exports.StrainType = exports.$Enums.StrainType = {
  sativa: 'sativa',
  indica: 'indica',
  hybrid: 'hybrid',
  cbd: 'cbd',
  unknown: 'unknown'
};

exports.ProductStatus = exports.$Enums.ProductStatus = {
  draft: 'draft',
  active: 'active',
  out_of_stock: 'out_of_stock',
  discontinued: 'discontinued',
  pending_approval: 'pending_approval'
};

exports.OrderType = exports.$Enums.OrderType = {
  pickup: 'pickup',
  delivery: 'delivery',
  curbside: 'curbside'
};

exports.OrderStatus = exports.$Enums.OrderStatus = {
  pending: 'pending',
  confirmed: 'confirmed',
  preparing: 'preparing',
  ready: 'ready',
  out_for_delivery: 'out_for_delivery',
  delivered: 'delivered',
  completed: 'completed',
  cancelled: 'cancelled'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  pending: 'pending',
  processing: 'processing',
  paid: 'paid',
  failed: 'failed',
  refunded: 'refunded',
  partially_refunded: 'partially_refunded'
};

exports.PaymentMethod = exports.$Enums.PaymentMethod = {
  cash: 'cash',
  debit: 'debit',
  credit: 'credit',
  bank_transfer: 'bank_transfer',
  cryptocurrency: 'cryptocurrency'
};

exports.ReviewableType = exports.$Enums.ReviewableType = {
  store: 'store',
  product: 'product',
  order: 'order'
};

exports.ReviewStatus = exports.$Enums.ReviewStatus = {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected',
  flagged: 'flagged'
};

exports.ProfessionalType = exports.$Enums.ProfessionalType = {
  doctor: 'doctor',
  psychologist: 'psychologist',
  therapist: 'therapist',
  nutritionist: 'nutritionist',
  pharmacist: 'pharmacist',
  researcher: 'researcher'
};

exports.ConsultationType = exports.$Enums.ConsultationType = {
  initial: 'initial',
  follow_up: 'follow_up',
  emergency: 'emergency',
  second_opinion: 'second_opinion'
};

exports.SessionType = exports.$Enums.SessionType = {
  in_person: 'in_person',
  video: 'video',
  phone: 'phone',
  chat: 'chat'
};

exports.BlogCategory = exports.$Enums.BlogCategory = {
  news: 'news',
  education: 'education',
  research: 'research',
  lifestyle: 'lifestyle',
  medical: 'medical',
  legal: 'legal',
  industry: 'industry'
};

exports.BlogStatus = exports.$Enums.BlogStatus = {
  draft: 'draft',
  published: 'published',
  archived: 'archived',
  scheduled: 'scheduled'
};

exports.Prisma.ModelName = {
  User: 'User',
  UserAddress: 'UserAddress',
  UserSession: 'UserSession',
  Store: 'Store',
  StoreStaff: 'StoreStaff',
  ProductCategory: 'ProductCategory',
  Product: 'Product',
  Order: 'Order',
  OrderItem: 'OrderItem',
  Review: 'Review',
  Professional: 'Professional',
  Consultation: 'Consultation',
  BlogPost: 'BlogPost',
  AuditLog: 'AuditLog'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/amrishseunarain/nation/src/database/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/Users/amrishseunarain/nation/src/database/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../..",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// 420 Nation Platform - Prisma Database Schema\n// This schema defines the database structure for the cannabis wellness platform\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"./generated/client\"\n}\n\ndatasource db {\n  provider  = \"postgresql\"\n  url       = env(\"DATABASE_URL\")\n  directUrl = env(\"DIRECT_URL\")\n}\n\n// =============================================================================\n// ENUMS\n// =============================================================================\n\nenum UserRole {\n  consumer\n  vendor\n  professional\n  admin\n}\n\nenum UserStatus {\n  active\n  suspended\n  deleted\n}\n\nenum AgeVerificationMethod {\n  self_declaration\n  id_scan\n  manual_review\n}\n\nenum AddressType {\n  billing\n  shipping\n  primary\n}\n\nenum BusinessType {\n  dispensary\n  delivery\n  cultivation\n  manufacturing\n}\n\nenum StoreStatus {\n  pending\n  active\n  suspended\n  closed\n}\n\nenum ComplianceStatus {\n  compliant\n  warning\n  violation\n}\n\nenum TrackTraceSystem {\n  metrc\n  leafdata\n  biotrack\n  other\n}\n\nenum ProductType {\n  flower\n  edibles\n  concentrates\n  topicals\n  accessories\n  other\n}\n\nenum StrainType {\n  sativa\n  indica\n  hybrid\n  cbd\n  unknown\n}\n\nenum ProductStatus {\n  draft\n  active\n  out_of_stock\n  discontinued\n  pending_approval\n}\n\nenum OrderType {\n  pickup\n  delivery\n  curbside\n}\n\nenum OrderStatus {\n  pending\n  confirmed\n  preparing\n  ready\n  out_for_delivery\n  delivered\n  completed\n  cancelled\n}\n\nenum PaymentStatus {\n  pending\n  processing\n  paid\n  failed\n  refunded\n  partially_refunded\n}\n\nenum PaymentMethod {\n  cash\n  debit\n  credit\n  bank_transfer\n  cryptocurrency\n}\n\nenum ReviewStatus {\n  pending\n  approved\n  rejected\n  flagged\n}\n\nenum ReviewableType {\n  store\n  product\n  order\n}\n\nenum ProfessionalType {\n  doctor\n  psychologist\n  therapist\n  nutritionist\n  pharmacist\n  researcher\n}\n\nenum ConsultationType {\n  initial\n  follow_up\n  emergency\n  second_opinion\n}\n\nenum SessionType {\n  in_person\n  video\n  phone\n  chat\n}\n\nenum BlogCategory {\n  news\n  education\n  research\n  lifestyle\n  medical\n  legal\n  industry\n}\n\nenum BlogStatus {\n  draft\n  published\n  archived\n  scheduled\n}\n\n// =============================================================================\n// USER MANAGEMENT\n// =============================================================================\n\nmodel User {\n  id            String   @id @default(cuid())\n  email         String   @unique @db.VarChar(254)\n  emailVerified Boolean  @default(false)\n  passwordHash  String   @db.VarChar(255)\n  role          UserRole @default(consumer)\n\n  // Personal Information\n  firstName   String?   @db.VarChar(100)\n  lastName    String?   @db.VarChar(100)\n  phone       String?   @db.VarChar(20)\n  dateOfBirth DateTime? @db.Date\n\n  // Account Status\n  status              UserStatus @default(active)\n  lastLoginAt         DateTime?\n  failedLoginAttempts Int        @default(0)\n  lockedUntil         DateTime?\n\n  // Age Verification\n  ageVerified           Boolean                @default(false)\n  ageVerificationMethod AgeVerificationMethod?\n  ageVerifiedAt         DateTime?\n  ageVerifiedBy         String?\n\n  // Privacy & Compliance\n  termsAcceptedAt   DateTime?\n  privacyAcceptedAt DateTime?\n  marketingConsent  Boolean   @default(false)\n  gdprConsent       Boolean   @default(false)\n  ccpaOptOut        Boolean   @default(false)\n\n  // Audit Fields\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  createdBy String?\n  updatedBy String?\n\n  // Relations\n  addresses              UserAddress[]\n  sessions               UserSession[]\n  stores                 Store[]\n  orders                 Order[]\n  reviews                Review[]\n  professional           Professional?\n  storeStaff             StoreStaff[]\n  consultationsAsPatient Consultation[] @relation(\"PatientConsultations\")\n  ageVerifier            User?          @relation(\"AgeVerifier\", fields: [ageVerifiedBy], references: [id])\n  ageVerifications       User[]         @relation(\"AgeVerifier\")\n  blogPosts              BlogPost[]\n  factCheckedPosts       BlogPost[]     @relation(\"FactChecker\")\n\n  @@map(\"users\")\n}\n\nmodel UserAddress {\n  id     String      @id @default(cuid())\n  userId String\n  type   AddressType\n\n  // Address Information\n  addressLine1 String  @db.VarChar(255)\n  addressLine2 String? @db.VarChar(255)\n  city         String  @db.VarChar(100)\n  state        String  @db.VarChar(50)\n  postalCode   String  @db.VarChar(20)\n  country      String  @default(\"US\") @db.VarChar(50)\n\n  // Geolocation\n  latitude  Decimal? @db.Decimal(10, 8)\n  longitude Decimal? @db.Decimal(11, 8)\n\n  // Status\n  isDefault Boolean @default(false)\n  verified  Boolean @default(false)\n\n  // Audit Fields\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  // Relations\n  user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@map(\"user_addresses\")\n}\n\nmodel UserSession {\n  id                String  @id @default(cuid())\n  userId            String\n  refreshTokenHash  String  @unique @db.VarChar(255)\n  deviceFingerprint String? @db.VarChar(255)\n\n  // Session Information\n  ipAddress       String? @db.VarChar(45)\n  userAgent       String? @db.Text\n  locationCountry String? @db.VarChar(50)\n  locationRegion  String? @db.VarChar(100)\n  locationCity    String? @db.VarChar(100)\n\n  // Status and Expiry\n  isActive   Boolean  @default(true)\n  expiresAt  DateTime\n  lastUsedAt DateTime @default(now())\n\n  // Audit Fields\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  // Relations\n  user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@map(\"user_sessions\")\n}\n\n// =============================================================================\n// STORE MANAGEMENT\n// =============================================================================\n\nmodel Store {\n  id          String  @id @default(cuid())\n  ownerId     String\n  name        String  @db.VarChar(200)\n  slug        String  @unique @db.VarChar(200)\n  description String? @db.Text\n\n  // Contact Information\n  email   String? @db.VarChar(254)\n  phone   String? @db.VarChar(20)\n  website String? @db.VarChar(500)\n\n  // Address and Location\n  addressLine1 String  @db.VarChar(255)\n  addressLine2 String? @db.VarChar(255)\n  city         String  @db.VarChar(100)\n  state        String  @db.VarChar(50)\n  postalCode   String  @db.VarChar(20)\n  latitude     Decimal @db.Decimal(10, 8)\n  longitude    Decimal @db.Decimal(11, 8)\n\n  // Business Information\n  businessType     BusinessType\n  licenseNumber    String       @unique @db.VarChar(100)\n  licenseType      String       @db.VarChar(100)\n  licenseState     String       @db.VarChar(50)\n  licenseExpiresAt DateTime     @db.Date\n\n  // Store Features (JSON)\n  features       Json? // ['delivery', 'pickup', 'curbside', 'atm', 'parking']\n  paymentMethods Json? // ['cash', 'debit', 'credit', 'cryptocurrency']\n  deliveryRadius Int? // in kilometers\n  minimumOrder   Decimal? @db.Decimal(10, 2)\n  deliveryFee    Decimal? @db.Decimal(10, 2)\n\n  // Operating Hours (JSON)\n  operatingHours Json? // { \"monday\": { \"open\": \"09:00\", \"close\": \"22:00\" } }\n\n  // Store Status and Verification\n  status     StoreStatus @default(pending)\n  verified   Boolean     @default(false)\n  verifiedAt DateTime?\n  verifiedBy String?\n\n  // Media\n  logoUrl       String? @db.VarChar(500)\n  coverImageUrl String? @db.VarChar(500)\n  galleryImages Json? // Array of image URLs\n\n  // SEO and Marketing\n  metaTitle       String? @db.VarChar(60)\n  metaDescription String? @db.VarChar(160)\n  socialMedia     Json? // { \"instagram\": \"handle\", \"facebook\": \"url\" }\n\n  // Compliance and Tracking\n  metrcLicenseId   String?           @db.VarChar(100)\n  metrcLastSync    DateTime?\n  complianceStatus ComplianceStatus  @default(compliant)\n  trackTraceSystem TrackTraceSystem?\n\n  // Statistics (denormalized for performance)\n  totalProducts Int     @default(0)\n  averageRating Decimal @default(0.00) @db.Decimal(3, 2)\n  totalReviews  Int     @default(0)\n  totalOrders   Int     @default(0)\n\n  // Audit Fields\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  createdBy String?\n  updatedBy String?\n\n  // Relations\n  owner    User         @relation(fields: [ownerId], references: [id])\n  staff    StoreStaff[]\n  products Product[]\n  orders   Order[]\n  reviews  Review[]\n\n  @@map(\"stores\")\n}\n\nmodel StoreStaff {\n  id          String @id @default(cuid())\n  storeId     String\n  userId      String\n  role        String @db.VarChar(50) // 'owner', 'manager', 'budtender', 'delivery', 'admin'\n  permissions Json? // Array of specific permissions\n\n  // Employment Details\n  employeeId     String?   @db.VarChar(50)\n  startDate      DateTime  @db.Date\n  endDate        DateTime? @db.Date\n  hourlyWage     Decimal?  @db.Decimal(8, 2)\n  commissionRate Decimal?  @db.Decimal(5, 2)\n\n  // Status\n  status             String  @default(\"active\") @db.VarChar(20) // 'active', 'inactive', 'terminated'\n  canAccessPos       Boolean @default(false)\n  canManageInventory Boolean @default(false)\n  canProcessOrders   Boolean @default(false)\n\n  // Compliance Training\n  complianceTrainingCompleted Boolean   @default(false)\n  trainingCompletedAt         DateTime?\n  trainingExpiresAt           DateTime? @db.Date\n\n  // Audit Fields\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  createdBy String?\n\n  // Relations\n  store Store @relation(fields: [storeId], references: [id], onDelete: Cascade)\n  user  User  @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([storeId, userId])\n  @@map(\"store_staff\")\n}\n\n// =============================================================================\n// PRODUCT CATALOG\n// =============================================================================\n\nmodel ProductCategory {\n  id          String  @id @default(cuid())\n  parentId    String?\n  name        String  @db.VarChar(100)\n  slug        String  @unique @db.VarChar(100)\n  description String? @db.Text\n\n  // Category Properties\n  iconName  String? @db.VarChar(50)\n  colorHex  String? @db.VarChar(7)\n  sortOrder Int     @default(0)\n\n  // Cannabis-specific properties\n  productType       ProductType\n  thcCategory       String?     @db.VarChar(20) // 'high_thc', 'low_thc', 'cbd_dominant', 'balanced', 'no_thc'\n  consumptionMethod String?     @db.VarChar(20) // 'smoking', 'vaping', 'edible', 'topical', 'sublingual', 'other'\n\n  // SEO\n  metaTitle       String? @db.VarChar(60)\n  metaDescription String? @db.VarChar(160)\n\n  // Status\n  isActive           Boolean @default(true)\n  requiresCompliance Boolean @default(true)\n\n  // Audit Fields\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  // Relations\n  parent   ProductCategory?  @relation(\"CategoryHierarchy\", fields: [parentId], references: [id])\n  children ProductCategory[] @relation(\"CategoryHierarchy\")\n  products Product[]\n\n  @@map(\"product_categories\")\n}\n\nmodel Product {\n  id         String @id @default(cuid())\n  storeId    String\n  categoryId String\n\n  // Product Information\n  name             String  @db.VarChar(200)\n  slug             String  @db.VarChar(200)\n  description      String? @db.Text\n  shortDescription String? @db.VarChar(500)\n\n  // Cannabis-specific Information\n  strainName   String?     @db.VarChar(100)\n  strainType   StrainType?\n  brand        String?     @db.VarChar(100)\n  manufacturer String?     @db.VarChar(100)\n\n  // THC/CBD Information\n  thcPercentage     Decimal? @db.Decimal(5, 2)\n  cbdPercentage     Decimal? @db.Decimal(5, 2)\n  thcaPercentage    Decimal? @db.Decimal(5, 2)\n  cbdaPercentage    Decimal? @db.Decimal(5, 2)\n  totalCannabinoids Decimal? @db.Decimal(5, 2)\n\n  // Product Variants and Pricing\n  basePrice   Decimal  @db.Decimal(10, 2)\n  salePrice   Decimal? @db.Decimal(10, 2)\n  costPrice   Decimal? @db.Decimal(10, 2)\n  weightGrams Decimal? @db.Decimal(8, 3)\n\n  // Inventory\n  sku               String  @db.VarChar(100)\n  barcode           String? @db.VarChar(100)\n  stockQuantity     Int     @default(0)\n  reservedQuantity  Int     @default(0)\n  lowStockThreshold Int     @default(5)\n\n  // Track and Trace\n  metrcId        String?   @db.VarChar(100)\n  batchNumber    String?   @db.VarChar(100)\n  harvestDate    DateTime? @db.Date\n  packageDate    DateTime? @db.Date\n  expirationDate DateTime? @db.Date\n\n  // Lab Testing\n  labTested      Boolean   @default(false)\n  labTestResults Json? // Store test results\n  testedDate     DateTime? @db.Date\n  testingLab     String?   @db.VarChar(200)\n\n  // Media\n  featuredImageUrl String? @db.VarChar(500)\n  galleryImages    Json? // Array of image URLs\n\n  // Product Status\n  status         ProductStatus @default(draft)\n  isFeatured     Boolean       @default(false)\n  isMedicalOnly  Boolean       @default(false)\n  ageRestriction Int           @default(21)\n\n  // SEO\n  metaTitle       String? @db.VarChar(60)\n  metaDescription String? @db.VarChar(160)\n\n  // Tags and Search\n  tags           Json? // Array of tags for filtering\n  searchKeywords String? @db.Text\n\n  // Statistics (denormalized)\n  viewCount     Int     @default(0)\n  averageRating Decimal @default(0.00) @db.Decimal(3, 2)\n  reviewCount   Int     @default(0)\n  salesCount    Int     @default(0)\n\n  // Audit Fields\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  createdBy String?\n  updatedBy String?\n\n  // Relations\n  store      Store           @relation(fields: [storeId], references: [id], onDelete: Cascade)\n  category   ProductCategory @relation(fields: [categoryId], references: [id])\n  reviews    Review[]\n  orderItems OrderItem[]\n\n  @@unique([storeId, sku])\n  @@map(\"products\")\n}\n\n// =============================================================================\n// ORDERS & TRANSACTIONS\n// =============================================================================\n\nmodel Order {\n  id          String @id @default(cuid())\n  orderNumber String @unique @db.VarChar(50)\n  userId      String\n  storeId     String\n\n  // Order Type and Fulfillment\n  orderType         OrderType\n  fulfillmentStatus OrderStatus @default(pending)\n\n  // Delivery Information\n  deliveryAddress       Json? // Full address object\n  deliveryInstructions  String?   @db.Text\n  deliveryTimeRequested DateTime?\n  deliveryTimeActual    DateTime?\n  deliveryPersonId      String?\n\n  // Order Totals\n  subtotal       Decimal @db.Decimal(10, 2)\n  taxAmount      Decimal @default(0.00) @db.Decimal(10, 2)\n  deliveryFee    Decimal @default(0.00) @db.Decimal(10, 2)\n  serviceFee     Decimal @default(0.00) @db.Decimal(10, 2)\n  discountAmount Decimal @default(0.00) @db.Decimal(10, 2)\n  tipAmount      Decimal @default(0.00) @db.Decimal(10, 2)\n  totalAmount    Decimal @db.Decimal(10, 2)\n\n  // Payment\n  paymentStatus   PaymentStatus @default(pending)\n  paymentMethod   PaymentMethod\n  paymentProvider String?       @db.VarChar(50)\n  paymentIntentId String?       @db.VarChar(100)\n\n  // Age Verification\n  ageVerifiedAtDelivery DateTime?\n  idCheckedBy           String?\n\n  // Special Instructions\n  customerNotes String? @db.Text\n  internalNotes String? @db.Text\n\n  // Compliance and Tracking\n  metrcTransferManifest String?   @db.VarChar(100)\n  complianceCheckPassed Boolean   @default(false)\n  complianceCheckedAt   DateTime?\n  complianceCheckedBy   String?\n\n  // Cancellation/Return\n  cancelledAt        DateTime?\n  cancelledBy        String?\n  cancellationReason String?   @db.Text\n  refundAmount       Decimal   @default(0.00) @db.Decimal(10, 2)\n\n  // Audit Fields\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  // Relations\n  user    User        @relation(fields: [userId], references: [id])\n  store   Store       @relation(fields: [storeId], references: [id])\n  items   OrderItem[]\n  reviews Review[]\n\n  @@map(\"orders\")\n}\n\nmodel OrderItem {\n  id        String @id @default(cuid())\n  orderId   String\n  productId String\n\n  // Item Details\n  quantity   Int\n  unitPrice  Decimal @db.Decimal(10, 2)\n  totalPrice Decimal @db.Decimal(10, 2)\n\n  // Product snapshot (for historical accuracy)\n  productName   String   @db.VarChar(200)\n  productSku    String?  @db.VarChar(100)\n  productBrand  String?  @db.VarChar(100)\n  thcPercentage Decimal? @db.Decimal(5, 2)\n  cbdPercentage Decimal? @db.Decimal(5, 2)\n  weightGrams   Decimal? @db.Decimal(8, 3)\n\n  // Track and Trace\n  metrcPackageId String? @db.VarChar(100)\n  batchNumber    String? @db.VarChar(100)\n\n  // Special requests\n  customerNotes String? @db.Text\n\n  // Audit Fields\n  createdAt DateTime @default(now())\n\n  // Relations\n  order   Order   @relation(fields: [orderId], references: [id], onDelete: Cascade)\n  product Product @relation(fields: [productId], references: [id])\n\n  @@map(\"order_items\")\n}\n\n// =============================================================================\n// REVIEWS & RATINGS\n// =============================================================================\n\nmodel Review {\n  id             String         @id @default(cuid())\n  userId         String\n  reviewableType ReviewableType\n  reviewableId   String\n\n  // Review Content\n  rating  Int // 1-5\n  title   String? @db.VarChar(200)\n  content String  @db.Text\n\n  // Review Categories (cannabis-specific)\n  qualityRating Int? // 1-5\n  valueRating   Int? // 1-5\n  serviceRating Int? // 1-5\n  effectsRating Int? // 1-5\n\n  // Cannabis Product Effects (for product reviews)\n  effects         Json? // ['relaxed', 'happy', 'euphoric', 'creative']\n  medicalBenefits Json? // ['pain_relief', 'anxiety', 'insomnia']\n  sideEffects     Json? // ['dry_mouth', 'dry_eyes', 'paranoia']\n\n  // Media\n  images Json? // Array of image URLs\n\n  // Moderation\n  status           ReviewStatus @default(pending)\n  moderatedAt      DateTime?\n  moderatedBy      String?\n  moderationReason String?      @db.Text\n\n  // Verification\n  verifiedPurchase Boolean @default(false)\n  orderId          String?\n\n  // Helpfulness\n  helpfulCount Int @default(0)\n  totalVotes   Int @default(0)\n\n  // Audit Fields\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  // Relations\n  user  User   @relation(fields: [userId], references: [id])\n  order Order? @relation(fields: [orderId], references: [id])\n\n  // Polymorphic relations\n  store   Store?   @relation(fields: [reviewableId], references: [id], map: \"review_store_fkey\")\n  product Product? @relation(fields: [reviewableId], references: [id], map: \"review_product_fkey\")\n\n  @@unique([userId, reviewableType, reviewableId])\n  @@map(\"reviews\")\n}\n\n// =============================================================================\n// PROFESSIONAL NETWORK\n// =============================================================================\n\nmodel Professional {\n  id     String @id @default(cuid())\n  userId String @unique\n\n  // Professional Information\n  professionalType ProfessionalType\n  licenseNumber    String           @db.VarChar(100)\n  licenseState     String           @db.VarChar(50)\n  licenseExpiresAt DateTime         @db.Date\n\n  // Specializations (JSON)\n  specializations Json? // ['chronic_pain', 'anxiety', 'ptsd', 'cancer']\n  certifications  Json? // Array of certification objects\n\n  // Practice Information\n  practiceName    String? @db.VarChar(200)\n  practiceAddress Json? // Address object\n  practicePhone   String? @db.VarChar(20)\n  practiceWebsite String? @db.VarChar(500)\n\n  // Cannabis Specific\n  cannabisExperienceYears Int?\n  cannabisCertifications  Json? // Array of cannabis certifications\n  preferredProducts       Json? // Product categories they recommend\n  treatmentApproaches     Json? // ['micro_dosing', 'full_spectrum', 'cbd_only']\n\n  // Availability\n  consultationTypes  Json? // ['in_person', 'video', 'phone', 'chat']\n  hourlyRate         Decimal? @db.Decimal(8, 2)\n  acceptsInsurance   Boolean  @default(false)\n  insuranceProviders Json? // Array of insurance providers\n\n  // Verification\n  verified              Boolean   @default(false)\n  verifiedAt            DateTime?\n  verifiedBy            String?\n  verificationDocuments Json? // Array of document references\n\n  // Statistics\n  consultationCount Int     @default(0)\n  averageRating     Decimal @default(0.00) @db.Decimal(3, 2)\n  reviewCount       Int     @default(0)\n\n  // Status\n  status               String  @default(\"pending\") @db.VarChar(20) // 'pending', 'active', 'suspended', 'inactive'\n  acceptingNewPatients Boolean @default(true)\n\n  // Audit Fields\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  // Relations\n  user          User           @relation(fields: [userId], references: [id], onDelete: Cascade)\n  consultations Consultation[]\n\n  @@map(\"professionals\")\n}\n\nmodel Consultation {\n  id             String @id @default(cuid())\n  patientId      String\n  professionalId String\n\n  // Consultation Details\n  consultationType ConsultationType\n  sessionType      SessionType\n\n  // Scheduling\n  scheduledAt     DateTime\n  durationMinutes Int      @default(60)\n  timezone        String   @db.VarChar(50)\n\n  // Status\n  status String @default(\"scheduled\") @db.VarChar(20) // 'scheduled', 'confirmed', 'in_progress', 'completed', 'cancelled', 'no_show'\n\n  // Meeting Information\n  meetingUrl      String? @db.VarChar(500)\n  meetingId       String? @db.VarChar(100)\n  meetingPassword String? @db.VarChar(50)\n\n  // Consultation Notes\n  chiefComplaint      String? @db.Text\n  symptoms            Json? // Array of symptoms\n  currentMedications  Json? // Array of current medications\n  cannabisExperience  String? @db.VarChar(20) // 'none', 'beginner', 'intermediate', 'experienced'\n  previousCannabisUse String? @db.Text\n\n  // Professional Notes (encrypted)\n  assessment         String?   @db.Text\n  recommendations    String?   @db.Text\n  prescribedProducts Json? // Array of recommended products\n  followUpNeeded     Boolean   @default(false)\n  followUpDate       DateTime? @db.Date\n\n  // Payment\n  consultationFee Decimal @db.Decimal(8, 2)\n  paymentStatus   String  @default(\"pending\") @db.VarChar(20) // 'pending', 'paid', 'refunded'\n  paymentId       String? @db.VarChar(100)\n\n  // Compliance\n  medicalConsentSigned        Boolean @default(false)\n  privacyConsentSigned        Boolean @default(false)\n  consultationAgreementSigned Boolean @default(false)\n\n  // Audit Fields\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  // Relations\n  patient      User         @relation(\"PatientConsultations\", fields: [patientId], references: [id])\n  professional Professional @relation(fields: [professionalId], references: [id])\n\n  @@map(\"consultations\")\n}\n\n// =============================================================================\n// CONTENT MANAGEMENT\n// =============================================================================\n\nmodel BlogPost {\n  id       String @id @default(cuid())\n  authorId String\n\n  // Content\n  title            String  @db.VarChar(255)\n  slug             String  @unique @db.VarChar(255)\n  excerpt          String? @db.Text\n  content          String  @db.Text\n  featuredImageUrl String? @db.VarChar(500)\n\n  // Categorization\n  category BlogCategory\n  tags     Json? // Array of tags\n\n  // SEO\n  metaTitle       String? @db.VarChar(60)\n  metaDescription String? @db.VarChar(160)\n  metaKeywords    String? @db.VarChar(255)\n\n  // Publishing\n  status       BlogStatus @default(draft)\n  publishedAt  DateTime?\n  scheduledFor DateTime?\n\n  // Engagement\n  viewCount    Int @default(0)\n  likeCount    Int @default(0)\n  commentCount Int @default(0)\n  shareCount   Int @default(0)\n\n  // Compliance\n  factChecked       Boolean   @default(false)\n  factCheckedBy     String?\n  factCheckedAt     DateTime?\n  medicalDisclaimer Boolean   @default(true)\n\n  // Audit Fields\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  // Relations\n  author      User  @relation(fields: [authorId], references: [id])\n  factChecker User? @relation(\"FactChecker\", fields: [factCheckedBy], references: [id])\n\n  @@map(\"blog_posts\")\n}\n\n// =============================================================================\n// COMPLIANCE & AUDIT TABLES\n// =============================================================================\n\nmodel AuditLog {\n  id String @id @default(cuid())\n\n  // Event Information\n  action       String  @db.VarChar(100)\n  resourceType String  @db.VarChar(50)\n  resourceId   String?\n\n  // User and Session\n  userId    String?\n  sessionId String?\n  ipAddress String? @db.VarChar(45)\n  userAgent String? @db.Text\n\n  // Change Details\n  oldValues Json?\n  newValues Json?\n\n  // Request Context\n  requestId  String? @db.VarChar(36)\n  endpoint   String? @db.VarChar(255)\n  httpMethod String? @db.VarChar(10)\n\n  // Risk and Compliance\n  riskLevel          String  @default(\"low\") @db.VarChar(10) // 'low', 'medium', 'high', 'critical'\n  complianceRelevant Boolean @default(false)\n\n  // Result\n  result       String  @db.VarChar(10) // 'success', 'failure', 'error'\n  errorMessage String? @db.Text\n\n  // Timestamp\n  timestamp DateTime @default(now())\n\n  @@map(\"audit_logs\")\n}\n",
  "inlineSchemaHash": "60530abbd075049502df26ede93be6cb4aa0839e79c5732d7712e94f18549d49",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/database/generated/client",
    "database/generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":\"users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserRole\",\"default\":\"consumer\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateOfBirth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"active\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastLoginAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"failedLoginAttempts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lockedUntil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ageVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ageVerificationMethod\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AgeVerificationMethod\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ageVerifiedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ageVerifiedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"termsAcceptedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"privacyAcceptedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"marketingConsent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gdprConsent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ccpaOptOut\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addresses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserAddress\",\"relationName\":\"UserToUserAddress\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserSession\",\"relationName\":\"UserToUserSession\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stores\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Store\",\"relationName\":\"StoreToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Order\",\"relationName\":\"OrderToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviews\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Review\",\"relationName\":\"ReviewToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"professional\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Professional\",\"relationName\":\"ProfessionalToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"storeStaff\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StoreStaff\",\"relationName\":\"StoreStaffToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"consultationsAsPatient\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Consultation\",\"relationName\":\"PatientConsultations\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ageVerifier\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"AgeVerifier\",\"relationFromFields\":[\"ageVerifiedBy\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ageVerifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"AgeVerifier\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"blogPosts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BlogPost\",\"relationName\":\"BlogPostToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"factCheckedPosts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BlogPost\",\"relationName\":\"FactChecker\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserAddress\":{\"dbName\":\"user_addresses\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AddressType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressLine1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressLine2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postalCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"US\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"latitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"longitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isDefault\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserToUserAddress\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserSession\":{\"dbName\":\"user_sessions\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refreshTokenHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deviceFingerprint\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userAgent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locationCountry\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locationRegion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locationCity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastUsedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserToUserSession\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Store\":{\"dbName\":\"stores\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ownerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"website\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressLine1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressLine2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postalCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"latitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"longitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"businessType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licenseNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licenseType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licenseState\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licenseExpiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"features\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentMethods\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deliveryRadius\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minimumOrder\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deliveryFee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operatingHours\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"StoreStatus\",\"default\":\"pending\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verifiedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verifiedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logoUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coverImageUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"galleryImages\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metaTitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metaDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"socialMedia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metrcLicenseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metrcLastSync\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"complianceStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ComplianceStatus\",\"default\":\"compliant\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trackTraceSystem\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TrackTraceSystem\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalProducts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"averageRating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalReviews\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalOrders\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"StoreToUser\",\"relationFromFields\":[\"ownerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StoreStaff\",\"relationName\":\"StoreToStoreStaff\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"ProductToStore\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Order\",\"relationName\":\"OrderToStore\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviews\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Review\",\"relationName\":\"ReviewToStore\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StoreStaff\":{\"dbName\":\"store_staff\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"storeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permissions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"employeeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hourlyWage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commissionRate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"active\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"canAccessPos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"canManageInventory\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"canProcessOrders\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"complianceTrainingCompleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trainingCompletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trainingExpiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Store\",\"relationName\":\"StoreToStoreStaff\",\"relationFromFields\":[\"storeId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"StoreStaffToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"storeId\",\"userId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"storeId\",\"userId\"]}],\"isGenerated\":false},\"ProductCategory\":{\"dbName\":\"product_categories\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iconName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"colorHex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sortOrder\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thcCategory\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"consumptionMethod\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metaTitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metaDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requiresCompliance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"parent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductCategory\",\"relationName\":\"CategoryHierarchy\",\"relationFromFields\":[\"parentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"children\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductCategory\",\"relationName\":\"CategoryHierarchy\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"ProductToProductCategory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Product\":{\"dbName\":\"products\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"storeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoryId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shortDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"strainName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"strainType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StrainType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brand\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manufacturer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thcPercentage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cbdPercentage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thcaPercentage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cbdaPercentage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalCannabinoids\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"basePrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"salePrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"costPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weightGrams\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sku\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"barcode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockQuantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservedQuantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lowStockThreshold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":5,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metrcId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"batchNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"harvestDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packageDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expirationDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"labTested\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"labTestResults\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"testedDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"testingLab\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"featuredImageUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"galleryImages\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ProductStatus\",\"default\":\"draft\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isFeatured\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isMedicalOnly\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ageRestriction\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":21,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metaTitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metaDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"searchKeywords\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"viewCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"averageRating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviewCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"salesCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Store\",\"relationName\":\"ProductToStore\",\"relationFromFields\":[\"storeId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductCategory\",\"relationName\":\"ProductToProductCategory\",\"relationFromFields\":[\"categoryId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviews\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Review\",\"relationName\":\"ProductToReview\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderItems\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OrderItem\",\"relationName\":\"OrderItemToProduct\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"storeId\",\"sku\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"storeId\",\"sku\"]}],\"isGenerated\":false},\"Order\":{\"dbName\":\"orders\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"storeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OrderType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fulfillmentStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"OrderStatus\",\"default\":\"pending\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deliveryAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deliveryInstructions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deliveryTimeRequested\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deliveryTimeActual\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deliveryPersonId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subtotal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taxAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deliveryFee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serviceFee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discountAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PaymentStatus\",\"default\":\"pending\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentMethod\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PaymentMethod\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentProvider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentIntentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ageVerifiedAtDelivery\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idCheckedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customerNotes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"internalNotes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metrcTransferManifest\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"complianceCheckPassed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"complianceCheckedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"complianceCheckedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancelledAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancelledBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancellationReason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refundAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"OrderToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Store\",\"relationName\":\"OrderToStore\",\"relationFromFields\":[\"storeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OrderItem\",\"relationName\":\"OrderToOrderItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviews\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Review\",\"relationName\":\"OrderToReview\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OrderItem\":{\"dbName\":\"order_items\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unitPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productSku\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productBrand\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thcPercentage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cbdPercentage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weightGrams\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metrcPackageId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"batchNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customerNotes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Order\",\"relationName\":\"OrderToOrderItem\",\"relationFromFields\":[\"orderId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"OrderItemToProduct\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Review\":{\"dbName\":\"reviews\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviewableType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ReviewableType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviewableId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qualityRating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valueRating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serviceRating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"effectsRating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"effects\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"medicalBenefits\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sideEffects\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"images\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ReviewStatus\",\"default\":\"pending\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"moderatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"moderatedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"moderationReason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verifiedPurchase\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"helpfulCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalVotes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ReviewToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Order\",\"relationName\":\"OrderToReview\",\"relationFromFields\":[\"orderId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Store\",\"relationName\":\"ReviewToStore\",\"relationFromFields\":[\"reviewableId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"ProductToReview\",\"relationFromFields\":[\"reviewableId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"reviewableType\",\"reviewableId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"reviewableType\",\"reviewableId\"]}],\"isGenerated\":false},\"Professional\":{\"dbName\":\"professionals\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"professionalType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProfessionalType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licenseNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licenseState\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licenseExpiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specializations\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"certifications\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"practiceName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"practiceAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"practicePhone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"practiceWebsite\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cannabisExperienceYears\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cannabisCertifications\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preferredProducts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"treatmentApproaches\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"consultationTypes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hourlyRate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"acceptsInsurance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insuranceProviders\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verifiedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verifiedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verificationDocuments\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"consultationCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"averageRating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviewCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"pending\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"acceptingNewPatients\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ProfessionalToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"consultations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Consultation\",\"relationName\":\"ConsultationToProfessional\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Consultation\":{\"dbName\":\"consultations\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"patientId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"professionalId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"consultationType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ConsultationType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessionType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SessionType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scheduledAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"durationMinutes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":60,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timezone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"scheduled\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meetingUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meetingId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meetingPassword\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chiefComplaint\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"symptoms\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentMedications\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cannabisExperience\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"previousCannabisUse\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assessment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recommendations\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prescribedProducts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"followUpNeeded\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"followUpDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"consultationFee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentStatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"pending\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"medicalConsentSigned\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"privacyConsentSigned\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"consultationAgreementSigned\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"patient\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"PatientConsultations\",\"relationFromFields\":[\"patientId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"professional\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Professional\",\"relationName\":\"ConsultationToProfessional\",\"relationFromFields\":[\"professionalId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BlogPost\":{\"dbName\":\"blog_posts\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"excerpt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"featuredImageUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BlogCategory\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metaTitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metaDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metaKeywords\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BlogStatus\",\"default\":\"draft\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publishedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scheduledFor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"viewCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likeCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commentCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shareCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"factChecked\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"factCheckedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"factCheckedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"medicalDisclaimer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"BlogPostToUser\",\"relationFromFields\":[\"authorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"factChecker\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"FactChecker\",\"relationFromFields\":[\"factCheckedBy\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AuditLog\":{\"dbName\":\"audit_logs\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resourceType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resourceId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userAgent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oldValues\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newValues\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requestId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endpoint\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"httpMethod\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"riskLevel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"low\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"complianceRelevant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"result\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"errorMessage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"UserRole\":{\"values\":[{\"name\":\"consumer\",\"dbName\":null},{\"name\":\"vendor\",\"dbName\":null},{\"name\":\"professional\",\"dbName\":null},{\"name\":\"admin\",\"dbName\":null}],\"dbName\":null},\"UserStatus\":{\"values\":[{\"name\":\"active\",\"dbName\":null},{\"name\":\"suspended\",\"dbName\":null},{\"name\":\"deleted\",\"dbName\":null}],\"dbName\":null},\"AgeVerificationMethod\":{\"values\":[{\"name\":\"self_declaration\",\"dbName\":null},{\"name\":\"id_scan\",\"dbName\":null},{\"name\":\"manual_review\",\"dbName\":null}],\"dbName\":null},\"AddressType\":{\"values\":[{\"name\":\"billing\",\"dbName\":null},{\"name\":\"shipping\",\"dbName\":null},{\"name\":\"primary\",\"dbName\":null}],\"dbName\":null},\"BusinessType\":{\"values\":[{\"name\":\"dispensary\",\"dbName\":null},{\"name\":\"delivery\",\"dbName\":null},{\"name\":\"cultivation\",\"dbName\":null},{\"name\":\"manufacturing\",\"dbName\":null}],\"dbName\":null},\"StoreStatus\":{\"values\":[{\"name\":\"pending\",\"dbName\":null},{\"name\":\"active\",\"dbName\":null},{\"name\":\"suspended\",\"dbName\":null},{\"name\":\"closed\",\"dbName\":null}],\"dbName\":null},\"ComplianceStatus\":{\"values\":[{\"name\":\"compliant\",\"dbName\":null},{\"name\":\"warning\",\"dbName\":null},{\"name\":\"violation\",\"dbName\":null}],\"dbName\":null},\"TrackTraceSystem\":{\"values\":[{\"name\":\"metrc\",\"dbName\":null},{\"name\":\"leafdata\",\"dbName\":null},{\"name\":\"biotrack\",\"dbName\":null},{\"name\":\"other\",\"dbName\":null}],\"dbName\":null},\"ProductType\":{\"values\":[{\"name\":\"flower\",\"dbName\":null},{\"name\":\"edibles\",\"dbName\":null},{\"name\":\"concentrates\",\"dbName\":null},{\"name\":\"topicals\",\"dbName\":null},{\"name\":\"accessories\",\"dbName\":null},{\"name\":\"other\",\"dbName\":null}],\"dbName\":null},\"StrainType\":{\"values\":[{\"name\":\"sativa\",\"dbName\":null},{\"name\":\"indica\",\"dbName\":null},{\"name\":\"hybrid\",\"dbName\":null},{\"name\":\"cbd\",\"dbName\":null},{\"name\":\"unknown\",\"dbName\":null}],\"dbName\":null},\"ProductStatus\":{\"values\":[{\"name\":\"draft\",\"dbName\":null},{\"name\":\"active\",\"dbName\":null},{\"name\":\"out_of_stock\",\"dbName\":null},{\"name\":\"discontinued\",\"dbName\":null},{\"name\":\"pending_approval\",\"dbName\":null}],\"dbName\":null},\"OrderType\":{\"values\":[{\"name\":\"pickup\",\"dbName\":null},{\"name\":\"delivery\",\"dbName\":null},{\"name\":\"curbside\",\"dbName\":null}],\"dbName\":null},\"OrderStatus\":{\"values\":[{\"name\":\"pending\",\"dbName\":null},{\"name\":\"confirmed\",\"dbName\":null},{\"name\":\"preparing\",\"dbName\":null},{\"name\":\"ready\",\"dbName\":null},{\"name\":\"out_for_delivery\",\"dbName\":null},{\"name\":\"delivered\",\"dbName\":null},{\"name\":\"completed\",\"dbName\":null},{\"name\":\"cancelled\",\"dbName\":null}],\"dbName\":null},\"PaymentStatus\":{\"values\":[{\"name\":\"pending\",\"dbName\":null},{\"name\":\"processing\",\"dbName\":null},{\"name\":\"paid\",\"dbName\":null},{\"name\":\"failed\",\"dbName\":null},{\"name\":\"refunded\",\"dbName\":null},{\"name\":\"partially_refunded\",\"dbName\":null}],\"dbName\":null},\"PaymentMethod\":{\"values\":[{\"name\":\"cash\",\"dbName\":null},{\"name\":\"debit\",\"dbName\":null},{\"name\":\"credit\",\"dbName\":null},{\"name\":\"bank_transfer\",\"dbName\":null},{\"name\":\"cryptocurrency\",\"dbName\":null}],\"dbName\":null},\"ReviewStatus\":{\"values\":[{\"name\":\"pending\",\"dbName\":null},{\"name\":\"approved\",\"dbName\":null},{\"name\":\"rejected\",\"dbName\":null},{\"name\":\"flagged\",\"dbName\":null}],\"dbName\":null},\"ReviewableType\":{\"values\":[{\"name\":\"store\",\"dbName\":null},{\"name\":\"product\",\"dbName\":null},{\"name\":\"order\",\"dbName\":null}],\"dbName\":null},\"ProfessionalType\":{\"values\":[{\"name\":\"doctor\",\"dbName\":null},{\"name\":\"psychologist\",\"dbName\":null},{\"name\":\"therapist\",\"dbName\":null},{\"name\":\"nutritionist\",\"dbName\":null},{\"name\":\"pharmacist\",\"dbName\":null},{\"name\":\"researcher\",\"dbName\":null}],\"dbName\":null},\"ConsultationType\":{\"values\":[{\"name\":\"initial\",\"dbName\":null},{\"name\":\"follow_up\",\"dbName\":null},{\"name\":\"emergency\",\"dbName\":null},{\"name\":\"second_opinion\",\"dbName\":null}],\"dbName\":null},\"SessionType\":{\"values\":[{\"name\":\"in_person\",\"dbName\":null},{\"name\":\"video\",\"dbName\":null},{\"name\":\"phone\",\"dbName\":null},{\"name\":\"chat\",\"dbName\":null}],\"dbName\":null},\"BlogCategory\":{\"values\":[{\"name\":\"news\",\"dbName\":null},{\"name\":\"education\",\"dbName\":null},{\"name\":\"research\",\"dbName\":null},{\"name\":\"lifestyle\",\"dbName\":null},{\"name\":\"medical\",\"dbName\":null},{\"name\":\"legal\",\"dbName\":null},{\"name\":\"industry\",\"dbName\":null}],\"dbName\":null},\"BlogStatus\":{\"values\":[{\"name\":\"draft\",\"dbName\":null},{\"name\":\"published\",\"dbName\":null},{\"name\":\"archived\",\"dbName\":null},{\"name\":\"scheduled\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "src/database/generated/client/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/database/generated/client/schema.prisma")
