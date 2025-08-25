# 420 Nation Platform - API Documentation

## Overview

This document outlines the comprehensive REST API for the 420 Nation cannabis wellness platform. The API follows RESTful principles, uses JSON for data exchange, and implements modern authentication and security practices.

## API Design Principles

### REST Architecture
- **Resource-based URLs**: `/api/v1/stores`, `/api/v1/products`
- **HTTP Methods**: GET (read), POST (create), PUT/PATCH (update), DELETE (remove)
- **Status Codes**: Appropriate HTTP status codes for all responses
- **Stateless**: Each request contains all necessary information

### Response Format
All API responses follow a consistent structure:

```json
{
  "success": true,
  "data": {}, // Response data
  "message": "Success message",
  "meta": {   // Pagination, etc.
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

### Error Format
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": [
      {
        "field": "email",
        "message": "Email is required"
      }
    ]
  },
  "requestId": "req_123456789"
}
```

---

## Authentication & Authorization

### JWT Token Authentication

#### Authentication Flow
```typescript
// Request headers for authenticated endpoints
{
  "Authorization": "Bearer <access_token>",
  "Content-Type": "application/json"
}

// Token structure
interface AccessToken {
  sub: string        // User ID
  role: UserRole     // User role
  iat: number        // Issued at
  exp: number        // Expires (15 minutes)
  jti: string        // JWT ID
}
```

#### Authentication Endpoints

##### POST `/api/v1/auth/register`
Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "firstName": "John",
  "lastName": "Doe",
  "dateOfBirth": "1990-01-01",
  "phone": "+1234567890",
  "termsAccepted": true,
  "privacyAccepted": true
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "usr_123456789",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "role": "consumer",
      "status": "active",
      "ageVerified": false
    },
    "tokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiIs...",
      "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
      "expiresIn": 900
    }
  },
  "message": "Account created successfully"
}
```

##### POST `/api/v1/auth/login`
Authenticate user and receive tokens.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "usr_123456789",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "role": "consumer",
      "ageVerified": true,
      "lastLoginAt": "2025-08-23T10:30:00Z"
    },
    "tokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiIs...",
      "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
      "expiresIn": 900
    }
  }
}
```

##### POST `/api/v1/auth/refresh`
Refresh access token using refresh token.

**Request Body:**
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

##### POST `/api/v1/auth/logout`
Invalidate current session.

**Headers:** `Authorization: Bearer <access_token>`

---

## User Management

### User Profile Endpoints

##### GET `/api/v1/users/profile`
Get current user's profile information.

**Headers:** `Authorization: Bearer <access_token>`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "usr_123456789",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+1234567890",
    "dateOfBirth": "1990-01-01",
    "role": "consumer",
    "status": "active",
    "ageVerified": true,
    "ageVerificationMethod": "id_scan",
    "createdAt": "2025-08-01T10:00:00Z",
    "addresses": [
      {
        "id": "addr_123",
        "type": "primary",
        "addressLine1": "123 Main St",
        "city": "Los Angeles",
        "state": "CA",
        "postalCode": "90210",
        "isDefault": true
      }
    ],
    "preferences": {
      "marketingConsent": false,
      "notifications": {
        "email": true,
        "sms": false,
        "push": true
      }
    }
  }
}
```

##### PUT `/api/v1/users/profile`
Update user profile information.

**Headers:** `Authorization: Bearer <access_token>`

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "phone": "+1234567890",
  "preferences": {
    "marketingConsent": false,
    "notifications": {
      "email": true,
      "sms": false,
      "push": true
    }
  }
}
```

### Age Verification

##### POST `/api/v1/users/age-verification`
Submit age verification documents.

**Headers:** `Authorization: Bearer <access_token>`

**Request Body (multipart/form-data):**
```
document: File (image of ID)
documentType: "drivers_license" | "passport" | "state_id"
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "verificationId": "ver_123456789",
    "status": "pending",
    "submittedAt": "2025-08-23T10:30:00Z",
    "estimatedProcessingTime": "1-2 business days"
  },
  "message": "Age verification documents submitted successfully"
}
```

---

## Store Management

### Store Discovery

##### GET `/api/v1/stores`
Search and filter stores with location-based results.

**Query Parameters:**
- `lat` (number): Latitude for location search
- `lng` (number): Longitude for location search
- `radius` (number): Search radius in kilometers (default: 50)
- `businessType` (string): Filter by business type
- `features` (string[]): Filter by store features
- `deliveryAvailable` (boolean): Filter by delivery availability
- `page` (number): Page number (default: 1)
- `limit` (number): Results per page (default: 20)

**Example Request:**
```
GET /api/v1/stores?lat=34.0522&lng=-118.2437&radius=25&businessType=dispensary&features=delivery,parking&page=1&limit=10
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "stores": [
      {
        "id": "str_123456789",
        "name": "Green Valley Dispensary",
        "slug": "green-valley-dispensary",
        "businessType": "dispensary",
        "description": "Premium cannabis products in the heart of LA",
        "address": {
          "addressLine1": "456 Cannabis Ave",
          "city": "Los Angeles",
          "state": "CA",
          "postalCode": "90210",
          "latitude": 34.0522,
          "longitude": -118.2437
        },
        "contact": {
          "phone": "+1234567890",
          "email": "info@greenvalley.com",
          "website": "https://greenvalley.com"
        },
        "features": ["delivery", "pickup", "curbside", "atm", "parking"],
        "paymentMethods": ["cash", "debit", "credit"],
        "operatingHours": {
          "monday": { "open": "09:00", "close": "22:00" },
          "tuesday": { "open": "09:00", "close": "22:00" }
        },
        "stats": {
          "averageRating": 4.5,
          "totalReviews": 128,
          "totalProducts": 456
        },
        "images": {
          "logo": "https://cdn.420nation.com/stores/logo_123.jpg",
          "cover": "https://cdn.420nation.com/stores/cover_123.jpg"
        },
        "distance": 2.5,
        "verified": true,
        "status": "active"
      }
    ]
  },
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 45,
    "totalPages": 5,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

##### GET `/api/v1/stores/{storeId}`
Get detailed information about a specific store.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "str_123456789",
    "name": "Green Valley Dispensary",
    "slug": "green-valley-dispensary",
    "description": "Premium cannabis products...",
    "longDescription": "Full detailed description...",
    "businessType": "dispensary",
    "licenseNumber": "C10-0000123",
    "licenseType": "Retail",
    "licenseState": "CA",
    "address": {
      "addressLine1": "456 Cannabis Ave",
      "city": "Los Angeles",
      "state": "CA",
      "postalCode": "90210",
      "latitude": 34.0522,
      "longitude": -118.2437
    },
    "contact": {
      "phone": "+1234567890",
      "email": "info@greenvalley.com",
      "website": "https://greenvalley.com"
    },
    "features": ["delivery", "pickup", "curbside", "atm", "parking"],
    "paymentMethods": ["cash", "debit", "credit"],
    "deliveryInfo": {
      "available": true,
      "radius": 15,
      "minimumOrder": 25.00,
      "fee": 5.00,
      "freeDeliveryThreshold": 75.00
    },
    "operatingHours": {
      "monday": { "open": "09:00", "close": "22:00" },
      "tuesday": { "open": "09:00", "close": "22:00" }
    },
    "images": {
      "logo": "https://cdn.420nation.com/stores/logo_123.jpg",
      "cover": "https://cdn.420nation.com/stores/cover_123.jpg",
      "gallery": [
        "https://cdn.420nation.com/stores/gallery_123_1.jpg"
      ]
    },
    "socialMedia": {
      "instagram": "greenvalleydispensary",
      "facebook": "https://facebook.com/greenvalley"
    },
    "stats": {
      "averageRating": 4.5,
      "totalReviews": 128,
      "totalProducts": 456,
      "totalOrders": 2341,
      "joinedDate": "2024-01-15"
    },
    "verified": true,
    "status": "active",
    "complianceStatus": "compliant",
    "metrcLastSync": "2025-08-23T08:00:00Z"
  }
}
```

### Store Management (Vendor Access)

##### POST `/api/v1/stores`
Create a new store (requires vendor role).

**Headers:** `Authorization: Bearer <access_token>`

**Request Body:**
```json
{
  "name": "Green Valley Dispensary",
  "description": "Premium cannabis products",
  "businessType": "dispensary",
  "licenseNumber": "C10-0000123",
  "licenseType": "Retail",
  "licenseState": "CA",
  "address": {
    "addressLine1": "456 Cannabis Ave",
    "city": "Los Angeles",
    "state": "CA",
    "postalCode": "90210",
    "latitude": 34.0522,
    "longitude": -118.2437
  },
  "contact": {
    "phone": "+1234567890",
    "email": "info@greenvalley.com",
    "website": "https://greenvalley.com"
  },
  "features": ["delivery", "pickup", "curbside"],
  "paymentMethods": ["cash", "debit"],
  "operatingHours": {
    "monday": { "open": "09:00", "close": "22:00" }
  }
}
```

##### PUT `/api/v1/stores/{storeId}`
Update store information (requires store ownership or admin).

---

## Product Catalog

### Product Search and Listing

##### GET `/api/v1/products`
Search and filter products across all stores.

**Query Parameters:**
- `q` (string): Search query
- `storeId` (string): Filter by store
- `categoryId` (string): Filter by category
- `strainType` (string): Filter by strain type
- `thcMin` (number): Minimum THC percentage
- `thcMax` (number): Maximum THC percentage
- `cbdMin` (number): Minimum CBD percentage
- `cbdMax` (number): Maximum CBD percentage
- `priceMin` (number): Minimum price
- `priceMax` (number): Maximum price
- `inStock` (boolean): Only show in-stock products
- `featured` (boolean): Only show featured products
- `labTested` (boolean): Only show lab-tested products
- `sortBy` (string): Sort field (price, rating, name, thc, cbd)
- `sortOrder` (string): Sort order (asc, desc)
- `page` (number): Page number
- `limit` (number): Results per page

**Example Request:**
```
GET /api/v1/products?q=og&strainType=indica&thcMin=20&priceMax=50&inStock=true&sortBy=price&sortOrder=asc&page=1&limit=20
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "products": [
      {
        "id": "prd_123456789",
        "name": "OG Kush",
        "slug": "og-kush",
        "description": "Classic indica strain...",
        "shortDescription": "Relaxing indica perfect for evening use",
        "strainName": "OG Kush",
        "strainType": "indica",
        "brand": "Premium Growers",
        "manufacturer": "Green Labs",
        "category": {
          "id": "cat_123",
          "name": "Flower",
          "slug": "flower"
        },
        "store": {
          "id": "str_123456789",
          "name": "Green Valley Dispensary",
          "slug": "green-valley-dispensary",
          "verified": true
        },
        "cannabinoids": {
          "thc": 24.5,
          "cbd": 0.8,
          "thca": 0.5,
          "cbda": 0.1,
          "totalCannabinoids": 25.9
        },
        "pricing": {
          "basePrice": 45.00,
          "salePrice": 40.00,
          "variants": [
            {
              "size": "1g",
              "price": 12.00,
              "salePrice": 10.00
            },
            {
              "size": "3.5g",
              "price": 40.00,
              "salePrice": 35.00
            },
            {
              "size": "7g",
              "price": 75.00
            }
          ]
        },
        "inventory": {
          "sku": "GV-OGK-001",
          "stockQuantity": 25,
          "inStock": true,
          "lowStockThreshold": 5
        },
        "trackTrace": {
          "metrcId": "1A4FF0100000022000000123",
          "batchNumber": "BATCH-2025-001",
          "harvestDate": "2025-07-15",
          "packageDate": "2025-08-01"
        },
        "labTesting": {
          "tested": true,
          "testDate": "2025-07-20",
          "testingLab": "Green Scientific Labs",
          "results": {
            "pesticides": "pass",
            "residualSolvents": "pass",
            "heavyMetals": "pass",
            "microbials": "pass",
            "moisture": "pass"
          }
        },
        "images": {
          "featured": "https://cdn.420nation.com/products/featured_123.jpg",
          "gallery": [
            "https://cdn.420nation.com/products/gallery_123_1.jpg"
          ]
        },
        "effects": ["relaxed", "happy", "euphoric", "sleepy"],
        "medicalBenefits": ["pain_relief", "insomnia", "anxiety"],
        "tags": ["indica", "premium", "organic"],
        "stats": {
          "averageRating": 4.7,
          "reviewCount": 89,
          "salesCount": 567,
          "viewCount": 2341
        },
        "status": "active",
        "isFeatured": false,
        "isMedicalOnly": false,
        "ageRestriction": 21,
        "createdAt": "2025-08-01T10:00:00Z",
        "updatedAt": "2025-08-23T09:15:00Z"
      }
    ]
  },
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 156,
    "totalPages": 8,
    "hasNextPage": true,
    "hasPrevPage": false
  },
  "filters": {
    "strainTypes": ["indica", "sativa", "hybrid"],
    "priceRange": { "min": 5.00, "max": 150.00 },
    "thcRange": { "min": 0.0, "max": 35.0 },
    "cbdRange": { "min": 0.0, "max": 25.0 },
    "brands": ["Premium Growers", "Green Labs", "Top Shelf"]
  }
}
```

##### GET `/api/v1/products/{productId}`
Get detailed product information.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "prd_123456789",
    "name": "OG Kush",
    "description": "Classic indica strain known for its relaxing effects...",
    "longDescription": "Full detailed description with growing information...",
    "strainName": "OG Kush",
    "strainType": "indica",
    "brand": "Premium Growers",
    "manufacturer": "Green Labs",
    "category": {
      "id": "cat_123",
      "name": "Flower",
      "slug": "flower",
      "parentCategory": null
    },
    "store": {
      "id": "str_123456789",
      "name": "Green Valley Dispensary",
      "slug": "green-valley-dispensary",
      "address": {
        "city": "Los Angeles",
        "state": "CA"
      },
      "contact": {
        "phone": "+1234567890"
      },
      "verified": true,
      "averageRating": 4.5
    },
    "cannabinoids": {
      "thc": 24.5,
      "cbd": 0.8,
      "thca": 0.5,
      "cbda": 0.1,
      "totalCannabinoids": 25.9,
      "terpeneProfile": {
        "myrcene": 0.8,
        "limonene": 0.6,
        "caryophyllene": 0.4
      }
    },
    "pricing": {
      "basePrice": 45.00,
      "salePrice": 40.00,
      "costPrice": 25.00, // Only visible to store owner
      "variants": [
        {
          "id": "var_123",
          "size": "1g",
          "weightGrams": 1.0,
          "price": 12.00,
          "salePrice": 10.00,
          "sku": "GV-OGK-001-1G",
          "stockQuantity": 50
        }
      ]
    },
    "inventory": {
      "sku": "GV-OGK-001",
      "barcode": "123456789012",
      "stockQuantity": 25,
      "reservedQuantity": 3,
      "availableQuantity": 22,
      "inStock": true,
      "lowStockThreshold": 5,
      "lastRestocked": "2025-08-20T10:00:00Z"
    },
    "trackTrace": {
      "metrcId": "1A4FF0100000022000000123",
      "batchNumber": "BATCH-2025-001",
      "harvestDate": "2025-07-15",
      "packageDate": "2025-08-01",
      "expirationDate": "2026-08-01",
      "sourceStrain": "OG Kush Phenotype #3",
      "cultivationMethod": "Indoor Hydroponic"
    },
    "labTesting": {
      "tested": true,
      "testDate": "2025-07-20",
      "testingLab": "Green Scientific Labs",
      "certificateUrl": "https://cdn.420nation.com/coa/cert_123.pdf",
      "results": {
        "potency": {
          "thc": 24.5,
          "thca": 0.5,
          "cbd": 0.8,
          "cbda": 0.1
        },
        "pesticides": {
          "status": "pass",
          "tested": 47,
          "detected": 0
        },
        "residualSolvents": {
          "status": "pass",
          "tested": 12,
          "detected": 0
        },
        "heavyMetals": {
          "status": "pass",
          "lead": "<LOQ",
          "cadmium": "<LOQ",
          "mercury": "<LOQ",
          "arsenic": "<LOQ"
        },
        "microbials": {
          "status": "pass",
          "yeastMold": "<100 CFU/g",
          "coliforms": "<100 CFU/g"
        },
        "moisture": {
          "status": "pass",
          "content": "11.2%"
        }
      }
    },
    "images": {
      "featured": "https://cdn.420nation.com/products/featured_123.jpg",
      "gallery": [
        "https://cdn.420nation.com/products/gallery_123_1.jpg",
        "https://cdn.420nation.com/products/gallery_123_2.jpg"
      ]
    },
    "effects": {
      "positive": ["relaxed", "happy", "euphoric", "sleepy"],
      "medical": ["pain_relief", "insomnia", "anxiety", "stress"],
      "sideEffects": ["dry_mouth", "dry_eyes"]
    },
    "growingInfo": {
      "difficulty": "moderate",
      "floweringTime": "8-9 weeks",
      "yield": "moderate",
      "climate": "indoor/outdoor"
    },
    "tags": ["indica", "premium", "organic", "evening", "couch-lock"],
    "seo": {
      "metaTitle": "OG Kush - Premium Indica Strain | Green Valley",
      "metaDescription": "High-quality OG Kush indica strain..."
    },
    "stats": {
      "averageRating": 4.7,
      "reviewCount": 89,
      "salesCount": 567,
      "viewCount": 2341,
      "wishlistCount": 45
    },
    "status": "active",
    "isFeatured": false,
    "isMedicalOnly": false,
    "ageRestriction": 21,
    "complianceFlags": [],
    "createdAt": "2025-08-01T10:00:00Z",
    "updatedAt": "2025-08-23T09:15:00Z"
  }
}
```

### Product Management (Vendor Access)

##### POST `/api/v1/stores/{storeId}/products`
Create a new product for a store.

**Headers:** `Authorization: Bearer <access_token>`

**Request Body:**
```json
{
  "name": "Blue Dream",
  "description": "Popular sativa-dominant hybrid...",
  "categoryId": "cat_123",
  "strainName": "Blue Dream",
  "strainType": "hybrid",
  "brand": "Premium Growers",
  "cannabinoids": {
    "thc": 18.5,
    "cbd": 2.1
  },
  "basePrice": 40.00,
  "variants": [
    {
      "size": "1g",
      "price": 12.00,
      "weightGrams": 1.0
    }
  ],
  "sku": "GV-BD-001",
  "stockQuantity": 30,
  "metrcId": "1A4FF0100000022000000124",
  "batchNumber": "BATCH-2025-002",
  "effects": ["uplifted", "creative", "energetic"],
  "tags": ["hybrid", "daytime", "creative"]
}
```

---

## Order Management

### Order Creation and Processing

##### POST `/api/v1/orders`
Create a new order.

**Headers:** `Authorization: Bearer <access_token>`

**Request Body:**
```json
{
  "storeId": "str_123456789",
  "orderType": "delivery",
  "items": [
    {
      "productId": "prd_123456789",
      "variantId": "var_123",
      "quantity": 2,
      "unitPrice": 10.00
    }
  ],
  "deliveryAddress": {
    "addressLine1": "789 Customer St",
    "city": "Los Angeles",
    "state": "CA",
    "postalCode": "90210",
    "latitude": 34.0522,
    "longitude": -118.2437
  },
  "deliveryInstructions": "Ring doorbell twice",
  "requestedDeliveryTime": "2025-08-23T18:00:00Z",
  "paymentMethod": "debit",
  "customerNotes": "First-time customer"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "ord_123456789",
    "orderNumber": "420N-2025-000123",
    "status": "pending",
    "orderType": "delivery",
    "store": {
      "id": "str_123456789",
      "name": "Green Valley Dispensary",
      "phone": "+1234567890"
    },
    "items": [
      {
        "id": "itm_123",
        "product": {
          "id": "prd_123456789",
          "name": "OG Kush",
          "sku": "GV-OGK-001-1G"
        },
        "quantity": 2,
        "unitPrice": 10.00,
        "totalPrice": 20.00
      }
    ],
    "totals": {
      "subtotal": 20.00,
      "taxAmount": 2.60,
      "deliveryFee": 5.00,
      "serviceFee": 1.00,
      "total": 28.60
    },
    "deliveryInfo": {
      "address": {
        "addressLine1": "789 Customer St",
        "city": "Los Angeles",
        "state": "CA",
        "postalCode": "90210"
      },
      "instructions": "Ring doorbell twice",
      "requestedTime": "2025-08-23T18:00:00Z",
      "estimatedTime": "2025-08-23T18:30:00Z"
    },
    "paymentMethod": "debit",
    "paymentStatus": "pending",
    "ageVerificationRequired": true,
    "createdAt": "2025-08-23T15:30:00Z"
  },
  "message": "Order created successfully"
}
```

##### GET `/api/v1/orders`
Get user's order history.

**Headers:** `Authorization: Bearer <access_token>`

**Query Parameters:**
- `status` (string): Filter by order status
- `storeId` (string): Filter by store
- `dateFrom` (string): Start date filter
- `dateTo` (string): End date filter
- `page` (number): Page number
- `limit` (number): Results per page

##### GET `/api/v1/orders/{orderId}`
Get detailed order information.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "ord_123456789",
    "orderNumber": "420N-2025-000123",
    "status": "delivered",
    "fulfillmentStatus": "completed",
    "paymentStatus": "paid",
    "orderType": "delivery",
    "store": {
      "id": "str_123456789",
      "name": "Green Valley Dispensary",
      "address": {
        "addressLine1": "456 Cannabis Ave",
        "city": "Los Angeles",
        "state": "CA"
      },
      "contact": {
        "phone": "+1234567890"
      }
    },
    "customer": {
      "id": "usr_123456789", // Only visible to store/admin
      "firstName": "John",
      "lastName": "D.",
      "phone": "+1***-***-7890"
    },
    "items": [
      {
        "id": "itm_123",
        "product": {
          "id": "prd_123456789",
          "name": "OG Kush",
          "brand": "Premium Growers",
          "sku": "GV-OGK-001-1G",
          "thc": 24.5,
          "cbd": 0.8,
          "image": "https://cdn.420nation.com/products/featured_123.jpg"
        },
        "variant": {
          "id": "var_123",
          "size": "1g",
          "weightGrams": 1.0
        },
        "quantity": 2,
        "unitPrice": 10.00,
        "totalPrice": 20.00,
        "trackTrace": {
          "metrcPackageId": "1A4FF0100000022000000123",
          "batchNumber": "BATCH-2025-001"
        }
      }
    ],
    "totals": {
      "subtotal": 20.00,
      "taxAmount": 2.60,
      "deliveryFee": 5.00,
      "serviceFee": 1.00,
      "tipAmount": 3.00,
      "total": 30.60
    },
    "deliveryInfo": {
      "address": {
        "addressLine1": "789 Customer St",
        "city": "Los Angeles",
        "state": "CA",
        "postalCode": "90210"
      },
      "instructions": "Ring doorbell twice",
      "requestedTime": "2025-08-23T18:00:00Z",
      "deliveryTime": "2025-08-23T17:45:00Z",
      "deliveryPerson": {
        "name": "Mike D.",
        "phone": "+1***-***-1234",
        "vehicle": "Honda Civic - CA 1ABC234"
      }
    },
    "payment": {
      "method": "debit",
      "status": "paid",
      "transactionId": "txn_123456789",
      "paidAt": "2025-08-23T15:35:00Z"
    },
    "ageVerification": {
      "required": true,
      "verifiedAt": "2025-08-23T17:45:00Z",
      "verifiedBy": "Mike D.",
      "idType": "drivers_license"
    },
    "compliance": {
      "metrcTransferManifest": "MF-2025-000456",
      "complianceCheckPassed": true,
      "complianceCheckedAt": "2025-08-23T15:32:00Z"
    },
    "timeline": [
      {
        "status": "pending",
        "timestamp": "2025-08-23T15:30:00Z",
        "note": "Order received"
      },
      {
        "status": "confirmed",
        "timestamp": "2025-08-23T15:35:00Z",
        "note": "Payment confirmed, preparing order"
      },
      {
        "status": "preparing",
        "timestamp": "2025-08-23T16:00:00Z",
        "note": "Order being prepared"
      },
      {
        "status": "out_for_delivery",
        "timestamp": "2025-08-23T17:00:00Z",
        "note": "Out for delivery with Mike D."
      },
      {
        "status": "delivered",
        "timestamp": "2025-08-23T17:45:00Z",
        "note": "Order delivered and age verified"
      }
    ],
    "customerNotes": "First-time customer",
    "internalNotes": "Customer was very friendly", // Only visible to store
    "createdAt": "2025-08-23T15:30:00Z",
    "updatedAt": "2025-08-23T17:45:00Z"
  }
}
```

##### PATCH `/api/v1/orders/{orderId}/status`
Update order status (store staff only).

**Headers:** `Authorization: Bearer <access_token>`

**Request Body:**
```json
{
  "status": "confirmed",
  "note": "Order confirmed, preparing items",
  "estimatedTime": "2025-08-23T18:00:00Z"
}
```

---

## Reviews & Ratings

### Review Management

##### GET `/api/v1/reviews`
Get reviews with filtering options.

**Query Parameters:**
- `reviewableType` (string): 'store' | 'product' | 'order'
- `reviewableId` (string): ID of the reviewed item
- `rating` (number): Filter by rating
- `verified` (boolean): Only verified purchase reviews
- `sortBy` (string): Sort by date, rating, helpfulness
- `page` (number): Page number
- `limit` (number): Results per page

##### POST `/api/v1/reviews`
Create a new review.

**Headers:** `Authorization: Bearer <access_token>`

**Request Body:**
```json
{
  "reviewableType": "product",
  "reviewableId": "prd_123456789",
  "orderId": "ord_123456789", // For verification
  "rating": 5,
  "title": "Excellent product!",
  "content": "Great quality OG Kush, very relaxing effects...",
  "qualityRating": 5,
  "valueRating": 4,
  "effectsRating": 5,
  "effects": ["relaxed", "happy", "sleepy"],
  "medicalBenefits": ["pain_relief", "insomnia"],
  "sideEffects": ["dry_mouth"]
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "rev_123456789",
    "user": {
      "id": "usr_123456789",
      "firstName": "John",
      "lastName": "D.",
      "avatar": "https://cdn.420nation.com/avatars/default.jpg"
    },
    "reviewableType": "product",
    "reviewableId": "prd_123456789",
    "rating": 5,
    "title": "Excellent product!",
    "content": "Great quality OG Kush...",
    "ratings": {
      "quality": 5,
      "value": 4,
      "effects": 5
    },
    "effects": ["relaxed", "happy", "sleepy"],
    "medicalBenefits": ["pain_relief", "insomnia"],
    "verifiedPurchase": true,
    "status": "approved",
    "helpfulCount": 0,
    "totalVotes": 0,
    "createdAt": "2025-08-23T16:00:00Z"
  },
  "message": "Review submitted successfully"
}
```

---

## Professional Network

### Professional Services

##### GET `/api/v1/professionals`
Search for cannabis professionals.

**Query Parameters:**
- `type` (string): Professional type
- `specialization` (string[]): Filter by specializations
- `location` (string): Location search
- `acceptingPatients` (boolean): Only accepting new patients
- `consultationType` (string[]): Filter by consultation types
- `insuranceAccepted` (boolean): Accepts insurance

##### GET `/api/v1/professionals/{professionalId}`
Get detailed professional profile.

##### POST `/api/v1/consultations`
Book a consultation.

**Headers:** `Authorization: Bearer <access_token>`

**Request Body:**
```json
{
  "professionalId": "prof_123456789",
  "consultationType": "initial",
  "sessionType": "video",
  "scheduledAt": "2025-08-25T14:00:00Z",
  "duration": 60,
  "timezone": "America/Los_Angeles",
  "chiefComplaint": "Chronic pain management",
  "symptoms": ["chronic_pain", "insomnia", "anxiety"],
  "currentMedications": ["ibuprofen", "melatonin"],
  "cannabisExperience": "beginner",
  "previousCannabisUse": "Tried CBD oil once"
}
```

---

## Content Management

### Blog and News

##### GET `/api/v1/blog/posts`
Get blog posts with filtering and search.

**Query Parameters:**
- `category` (string): Filter by category
- `tags` (string[]): Filter by tags
- `author` (string): Filter by author
- `search` (string): Search in title and content
- `published` (boolean): Only published posts
- `featured` (boolean): Only featured posts
- `page` (number): Page number
- `limit` (number): Results per page

##### GET `/api/v1/blog/posts/{slug}`
Get detailed blog post by slug.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "post_123456789",
    "title": "The Benefits of CBD for Anxiety Management",
    "slug": "benefits-cbd-anxiety-management",
    "excerpt": "Recent research shows promising results...",
    "content": "Full article content in HTML format...",
    "featuredImage": "https://cdn.420nation.com/blog/featured_123.jpg",
    "category": "medical",
    "tags": ["cbd", "anxiety", "research", "medical"],
    "author": {
      "id": "usr_author123",
      "name": "Dr. Sarah Johnson",
      "avatar": "https://cdn.420nation.com/authors/sarah.jpg",
      "bio": "Cannabis researcher and physician"
    },
    "seo": {
      "metaTitle": "CBD for Anxiety: Latest Research and Benefits",
      "metaDescription": "Discover how CBD can help manage anxiety..."
    },
    "stats": {
      "viewCount": 1534,
      "likeCount": 89,
      "commentCount": 23,
      "shareCount": 45
    },
    "factChecked": true,
    "factCheckedBy": "Dr. Michael Chen",
    "factCheckedAt": "2025-08-20T10:00:00Z",
    "medicalDisclaimer": true,
    "status": "published",
    "publishedAt": "2025-08-22T08:00:00Z",
    "createdAt": "2025-08-20T15:00:00Z",
    "updatedAt": "2025-08-22T08:00:00Z"
  }
}
```

---

## Error Handling

### Standard Error Codes

#### Authentication Errors (401)
```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or expired access token"
  }
}
```

#### Validation Errors (400)
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Request validation failed",
    "details": [
      {
        "field": "email",
        "message": "Email is required",
        "code": "required"
      },
      {
        "field": "password",
        "message": "Password must be at least 8 characters",
        "code": "min_length"
      }
    ]
  }
}
```

#### Compliance Errors (403)
```json
{
  "success": false,
  "error": {
    "code": "COMPLIANCE_ERROR",
    "message": "Age verification required to access this resource",
    "details": {
      "requiresVerification": true,
      "verificationMethods": ["id_scan", "manual_review"]
    }
  }
}
```

#### Rate Limiting (429)
```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests",
    "details": {
      "limit": 100,
      "remaining": 0,
      "resetAt": "2025-08-23T17:00:00Z"
    }
  }
}
```

### Cannabis-Specific Error Codes

- `AGE_VERIFICATION_REQUIRED`: User must complete age verification
- `LOCATION_RESTRICTED`: Service not available in user's location
- `PRODUCT_OUT_OF_STOCK`: Requested product is out of stock
- `DELIVERY_UNAVAILABLE`: Delivery not available to user's location
- `COMPLIANCE_VIOLATION`: Action violates cannabis regulations
- `METRC_SYNC_ERROR`: Track and trace system error
- `LAB_RESULTS_MISSING`: Product missing required lab test results

---

## Rate Limiting

### Rate Limit Tiers

#### By Endpoint Type
```
Authentication: 5 requests per 15 minutes
Search/Browse: 200 requests per minute
Order Creation: 10 requests per minute
File Upload: 5 requests per minute
Admin Actions: 100 requests per hour
```

#### By User Role
```
Consumer: 100 requests per minute
Vendor: 500 requests per minute
Professional: 200 requests per minute
Admin: 1000 requests per minute
```

### Rate Limit Headers
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 85
X-RateLimit-Reset: 1692808800
X-RateLimit-RetryAfter: 60
```

---

## Webhooks

### Webhook Events

#### Order Events
- `order.created`: New order placed
- `order.confirmed`: Order confirmed by store
- `order.cancelled`: Order cancelled
- `order.delivered`: Order delivered
- `order.payment_failed`: Payment processing failed

#### Store Events
- `store.verified`: Store verification approved
- `store.suspended`: Store suspended for violations
- `inventory.low_stock`: Product stock below threshold

#### Compliance Events
- `compliance.violation`: Compliance rule violated
- `age_verification.completed`: User age verification completed
- `metrc.sync_failed`: Track and trace sync failed

### Webhook Payload Example
```json
{
  "id": "evt_123456789",
  "type": "order.created",
  "created": "2025-08-23T15:30:00Z",
  "data": {
    "object": {
      "id": "ord_123456789",
      "orderNumber": "420N-2025-000123",
      "storeId": "str_123456789",
      "userId": "usr_123456789",
      "status": "pending",
      "total": 28.60
    }
  },
  "request": {
    "id": "req_123456789",
    "idempotencyKey": "idem_123456789"
  }
}
```

---

## API Versioning

### Version Strategy
- **URL Versioning**: `/api/v1/`, `/api/v2/`
- **Backward Compatibility**: Maintained for at least 12 months
- **Deprecation Notice**: 6 months advance notice for breaking changes
- **Version Headers**: `API-Version: 2025-08-23` for date-based versioning

### Current Version: v1
- Initial release supporting core functionality
- Cannabis-specific features included
- Compliance and track-and-trace integration

---

## SDK and Client Libraries

### Official SDKs
- **JavaScript/TypeScript**: `@420nation/api-client`
- **Python**: `nation-api-python`
- **PHP**: `420nation/api-php`
- **cURL Examples**: Available in documentation

### Example TypeScript Usage
```typescript
import { NationAPI } from '@420nation/api-client';

const api = new NationAPI({
  apiKey: 'your_api_key',
  baseURL: 'https://api.420nation.com',
  version: 'v1'
});

// Search stores
const stores = await api.stores.search({
  lat: 34.0522,
  lng: -118.2437,
  radius: 25
});

// Create order
const order = await api.orders.create({
  storeId: 'str_123456789',
  items: [{ productId: 'prd_123', quantity: 1 }],
  orderType: 'delivery'
});
```

---

## Testing and Development

### API Testing
- **Swagger/OpenAPI**: Interactive API documentation at `/api-docs`
- **Postman Collection**: Available for download
- **Test Environment**: `https://api-staging.420nation.com`
- **Mock Data**: Comprehensive test data available

### Development Tools
- **API Keys**: Separate keys for development/staging/production
- **Logging**: Request/response logging in development
- **Debugging**: Debug headers and extended error information
- **Monitoring**: API performance and usage analytics

---

## Conclusion

This API provides comprehensive access to all 420 Nation platform features while maintaining security, compliance, and performance standards. The RESTful design ensures consistency and ease of integration, while cannabis-specific features address the unique requirements of the cannabis industry.

Regular updates and improvements will be made based on user feedback and evolving cannabis regulations. All changes will be properly versioned and documented to maintain compatibility and developer experience.

---

**Document Version:** 1.0  
**Last Updated:** 2025-08-23  
**Next Review:** 2025-09-23  
**Owner:** API Team  
**Stakeholders:** Engineering, Product, Frontend, Mobile, Partners