
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
