# 420 Nation Platform - Database Schema Design

## Overview

This document outlines the comprehensive database schema for the 420 Nation cannabis wellness platform, designed for MariaDB 11+ with support for high performance, compliance tracking, and scalability.

## Database Design Principles

### Core Principles
- **Normalization**: 3NF structure with strategic denormalization for performance
- **Referential Integrity**: Foreign keys and constraints maintain data consistency
- **Audit Trails**: Complete tracking of all data changes
- **Compliance Ready**: Built-in support for cannabis regulations and track-and-trace
- **Scalability**: Optimized indexes and partitioning strategies
- **Security**: Encrypted sensitive fields and role-based access

### Naming Conventions
- **Tables**: snake_case, plural nouns (e.g., `users`, `store_products`)
- **Columns**: snake_case, descriptive names (e.g., `created_at`, `license_number`)
- **Indexes**: `idx_tablename_columnname` (e.g., `idx_users_email`)
- **Foreign Keys**: `fk_tablename_referenced_table` (e.g., `fk_orders_users`)
- **Constraints**: `chk_tablename_description` (e.g., `chk_users_age_verified`)

---

## Core Database Schema

### User Management

#### users
```sql
CREATE TABLE users (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    email VARCHAR(254) NOT NULL UNIQUE,
    email_verified BOOLEAN DEFAULT FALSE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('consumer', 'vendor', 'professional', 'admin') NOT NULL DEFAULT 'consumer',
    
    -- Personal Information (encrypted)
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone VARCHAR(20),
    date_of_birth DATE,
    
    -- Account Status
    status ENUM('active', 'suspended', 'deleted') DEFAULT 'active',
    last_login_at TIMESTAMP NULL,
    failed_login_attempts INT DEFAULT 0,
    locked_until TIMESTAMP NULL,
    
    -- Age Verification
    age_verified BOOLEAN DEFAULT FALSE,
    age_verification_method ENUM('self_declaration', 'id_scan', 'manual_review'),
    age_verified_at TIMESTAMP NULL,
    age_verified_by CHAR(36) NULL,
    
    -- Privacy & Compliance
    terms_accepted_at TIMESTAMP NULL,
    privacy_accepted_at TIMESTAMP NULL,
    marketing_consent BOOLEAN DEFAULT FALSE,
    gdpr_consent BOOLEAN DEFAULT FALSE,
    ccpa_opt_out BOOLEAN DEFAULT FALSE,
    
    -- Audit Fields
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by CHAR(36),
    updated_by CHAR(36),
    
    -- Indexes
    INDEX idx_users_email (email),
    INDEX idx_users_role (role),
    INDEX idx_users_status (status),
    INDEX idx_users_age_verified (age_verified),
    INDEX idx_users_created_at (created_at),
    
    -- Constraints
    CONSTRAINT chk_users_age_verification CHECK (
        (age_verified = FALSE) OR 
        (age_verified = TRUE AND age_verification_method IS NOT NULL AND age_verified_at IS NOT NULL)
    ),
    CONSTRAINT chk_users_terms_privacy CHECK (
        (status = 'active' AND terms_accepted_at IS NOT NULL AND privacy_accepted_at IS NOT NULL) OR
        (status != 'active')
    )
);
```

#### user_addresses
```sql
CREATE TABLE user_addresses (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id CHAR(36) NOT NULL,
    type ENUM('billing', 'shipping', 'primary') NOT NULL,
    
    -- Address Information (encrypted)
    address_line_1 VARCHAR(255) NOT NULL,
    address_line_2 VARCHAR(255),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(50) NOT NULL,
    postal_code VARCHAR(20) NOT NULL,
    country VARCHAR(50) NOT NULL DEFAULT 'US',
    
    -- Geolocation
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    
    -- Status
    is_default BOOLEAN DEFAULT FALSE,
    verified BOOLEAN DEFAULT FALSE,
    
    -- Audit Fields
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY fk_user_addresses_users (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_addresses_user_id (user_id),
    INDEX idx_user_addresses_type (type),
    INDEX idx_user_addresses_location (latitude, longitude)
);
```

#### user_sessions
```sql
CREATE TABLE user_sessions (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id CHAR(36) NOT NULL,
    refresh_token_hash VARCHAR(255) NOT NULL UNIQUE,
    device_fingerprint VARCHAR(255),
    
    -- Session Information
    ip_address INET6,
    user_agent TEXT,
    location_country VARCHAR(50),
    location_region VARCHAR(100),
    location_city VARCHAR(100),
    
    -- Status and Expiry
    is_active BOOLEAN DEFAULT TRUE,
    expires_at TIMESTAMP NOT NULL,
    last_used_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Audit Fields
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY fk_user_sessions_users (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_sessions_user_id (user_id),
    INDEX idx_user_sessions_token_hash (refresh_token_hash),
    INDEX idx_user_sessions_expires_at (expires_at),
    INDEX idx_user_sessions_ip_address (ip_address)
);
```

### Store Management

#### stores
```sql
CREATE TABLE stores (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    owner_id CHAR(36) NOT NULL,
    name VARCHAR(200) NOT NULL,
    slug VARCHAR(200) UNIQUE NOT NULL,
    description TEXT,
    
    -- Contact Information
    email VARCHAR(254),
    phone VARCHAR(20),
    website VARCHAR(500),
    
    -- Address and Location
    address_line_1 VARCHAR(255) NOT NULL,
    address_line_2 VARCHAR(255),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(50) NOT NULL,
    postal_code VARCHAR(20) NOT NULL,
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL,
    
    -- Business Information
    business_type ENUM('dispensary', 'delivery', 'cultivation', 'manufacturing') NOT NULL,
    license_number VARCHAR(100) NOT NULL UNIQUE,
    license_type VARCHAR(100) NOT NULL,
    license_state VARCHAR(50) NOT NULL,
    license_expires_at DATE NOT NULL,
    
    -- Store Features
    features JSON, -- ['delivery', 'pickup', 'curbside', 'atm', 'parking', 'wheelchair_accessible']
    payment_methods JSON, -- ['cash', 'debit', 'credit', 'cryptocurrency']
    delivery_radius INT, -- in kilometers
    minimum_order DECIMAL(10, 2),
    delivery_fee DECIMAL(10, 2),
    
    -- Operating Hours (JSON format for flexibility)
    operating_hours JSON, -- { "monday": { "open": "09:00", "close": "22:00" }, ... }
    
    -- Store Status and Verification
    status ENUM('pending', 'active', 'suspended', 'closed') DEFAULT 'pending',
    verified BOOLEAN DEFAULT FALSE,
    verified_at TIMESTAMP NULL,
    verified_by CHAR(36) NULL,
    
    -- Media
    logo_url VARCHAR(500),
    cover_image_url VARCHAR(500),
    gallery_images JSON, -- Array of image URLs
    
    -- SEO and Marketing
    meta_title VARCHAR(60),
    meta_description VARCHAR(160),
    social_media JSON, -- { "instagram": "handle", "facebook": "url", ... }
    
    -- Compliance and Tracking
    metrc_license_id VARCHAR(100),
    metrc_last_sync TIMESTAMP,
    compliance_status ENUM('compliant', 'warning', 'violation') DEFAULT 'compliant',
    track_trace_system ENUM('metrc', 'leafdata', 'biotrack', 'other'),
    
    -- Statistics (denormalized for performance)
    total_products INT DEFAULT 0,
    average_rating DECIMAL(3, 2) DEFAULT 0.00,
    total_reviews INT DEFAULT 0,
    total_orders INT DEFAULT 0,
    
    -- Audit Fields
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by CHAR(36),
    updated_by CHAR(36),
    
    FOREIGN KEY fk_stores_users (owner_id) REFERENCES users(id),
    FOREIGN KEY fk_stores_verified_by (verified_by) REFERENCES users(id),
    
    -- Indexes for performance
    INDEX idx_stores_owner_id (owner_id),
    INDEX idx_stores_location (latitude, longitude),
    INDEX idx_stores_status (status),
    INDEX idx_stores_verified (verified),
    INDEX idx_stores_license_number (license_number),
    INDEX idx_stores_business_type (business_type),
    INDEX idx_stores_state (state),
    INDEX idx_stores_created_at (created_at),
    FULLTEXT idx_stores_search (name, description),
    
    -- Constraints
    CONSTRAINT chk_stores_license_valid CHECK (license_expires_at > CURRENT_DATE),
    CONSTRAINT chk_stores_coordinates CHECK (
        latitude BETWEEN -90 AND 90 AND longitude BETWEEN -180 AND 180
    ),
    CONSTRAINT chk_stores_verification CHECK (
        (verified = FALSE) OR 
        (verified = TRUE AND verified_at IS NOT NULL AND verified_by IS NOT NULL)
    )
);
```

#### store_staff
```sql
CREATE TABLE store_staff (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    store_id CHAR(36) NOT NULL,
    user_id CHAR(36) NOT NULL,
    role ENUM('owner', 'manager', 'budtender', 'delivery', 'admin') NOT NULL,
    permissions JSON, -- Array of specific permissions
    
    -- Employment Details
    employee_id VARCHAR(50),
    start_date DATE NOT NULL,
    end_date DATE NULL,
    hourly_wage DECIMAL(8, 2),
    commission_rate DECIMAL(5, 2),
    
    -- Status
    status ENUM('active', 'inactive', 'terminated') DEFAULT 'active',
    can_access_pos BOOLEAN DEFAULT FALSE,
    can_manage_inventory BOOLEAN DEFAULT FALSE,
    can_process_orders BOOLEAN DEFAULT FALSE,
    
    -- Compliance Training
    compliance_training_completed BOOLEAN DEFAULT FALSE,
    training_completed_at TIMESTAMP NULL,
    training_expires_at DATE NULL,
    
    -- Audit Fields
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by CHAR(36),
    
    FOREIGN KEY fk_store_staff_stores (store_id) REFERENCES stores(id) ON DELETE CASCADE,
    FOREIGN KEY fk_store_staff_users (user_id) REFERENCES users(id) ON DELETE CASCADE,
    
    -- Unique constraint to prevent duplicate staff assignments
    UNIQUE KEY uk_store_staff_store_user (store_id, user_id),
    INDEX idx_store_staff_store_id (store_id),
    INDEX idx_store_staff_user_id (user_id),
    INDEX idx_store_staff_role (role),
    INDEX idx_store_staff_status (status)
);
```

### Product Catalog

#### product_categories
```sql
CREATE TABLE product_categories (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    parent_id CHAR(36) NULL,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    
    -- Category Properties
    icon_name VARCHAR(50),
    color_hex VARCHAR(7),
    sort_order INT DEFAULT 0,
    
    -- Cannabis-specific properties
    product_type ENUM('flower', 'edibles', 'concentrates', 'topicals', 'accessories', 'other') NOT NULL,
    thc_category ENUM('high_thc', 'low_thc', 'cbd_dominant', 'balanced', 'no_thc') NULL,
    consumption_method ENUM('smoking', 'vaping', 'edible', 'topical', 'sublingual', 'other') NULL,
    
    -- SEO
    meta_title VARCHAR(60),
    meta_description VARCHAR(160),
    
    -- Status
    is_active BOOLEAN DEFAULT TRUE,
    requires_compliance BOOLEAN DEFAULT TRUE,
    
    -- Audit Fields
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY fk_product_categories_parent (parent_id) REFERENCES product_categories(id),
    INDEX idx_product_categories_parent_id (parent_id),
    INDEX idx_product_categories_product_type (product_type),
    INDEX idx_product_categories_sort_order (sort_order),
    INDEX idx_product_categories_is_active (is_active)
);
```

#### products
```sql
CREATE TABLE products (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    store_id CHAR(36) NOT NULL,
    category_id CHAR(36) NOT NULL,
    
    -- Product Information
    name VARCHAR(200) NOT NULL,
    slug VARCHAR(200) NOT NULL,
    description TEXT,
    short_description VARCHAR(500),
    
    -- Cannabis-specific Information
    strain_name VARCHAR(100),
    strain_type ENUM('sativa', 'indica', 'hybrid', 'cbd', 'unknown'),
    brand VARCHAR(100),
    manufacturer VARCHAR(100),
    
    -- THC/CBD Information
    thc_percentage DECIMAL(5, 2),
    cbd_percentage DECIMAL(5, 2),
    thca_percentage DECIMAL(5, 2),
    cbda_percentage DECIMAL(5, 2),
    total_cannabinoids DECIMAL(5, 2),
    
    -- Product Variants and Pricing
    base_price DECIMAL(10, 2) NOT NULL,
    sale_price DECIMAL(10, 2),
    cost_price DECIMAL(10, 2),
    weight_grams DECIMAL(8, 3),
    
    -- Inventory
    sku VARCHAR(100) UNIQUE,
    barcode VARCHAR(100),
    stock_quantity INT DEFAULT 0,
    reserved_quantity INT DEFAULT 0,
    low_stock_threshold INT DEFAULT 5,
    
    -- Track and Trace
    metrc_id VARCHAR(100),
    batch_number VARCHAR(100),
    harvest_date DATE,
    package_date DATE,
    expiration_date DATE,
    
    -- Lab Testing
    lab_tested BOOLEAN DEFAULT FALSE,
    lab_test_results JSON, -- Store test results
    tested_date DATE,
    testing_lab VARCHAR(200),
    
    -- Media
    featured_image_url VARCHAR(500),
    gallery_images JSON,
    
    -- Product Status
    status ENUM('draft', 'active', 'out_of_stock', 'discontinued', 'pending_approval') DEFAULT 'draft',
    is_featured BOOLEAN DEFAULT FALSE,
    is_medical_only BOOLEAN DEFAULT FALSE,
    age_restriction INT DEFAULT 21,
    
    -- SEO
    meta_title VARCHAR(60),
    meta_description VARCHAR(160),
    
    -- Tags and Search
    tags JSON, -- Array of tags for filtering
    search_keywords TEXT,
    
    -- Statistics (denormalized)
    view_count INT DEFAULT 0,
    average_rating DECIMAL(3, 2) DEFAULT 0.00,
    review_count INT DEFAULT 0,
    sales_count INT DEFAULT 0,
    
    -- Audit Fields
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by CHAR(36),
    updated_by CHAR(36),
    
    FOREIGN KEY fk_products_stores (store_id) REFERENCES stores(id) ON DELETE CASCADE,
    FOREIGN KEY fk_products_categories (category_id) REFERENCES product_categories(id),
    
    -- Indexes
    INDEX idx_products_store_id (store_id),
    INDEX idx_products_category_id (category_id),
    INDEX idx_products_sku (sku),
    INDEX idx_products_status (status),
    INDEX idx_products_strain_type (strain_type),
    INDEX idx_products_brand (brand),
    INDEX idx_products_metrc_id (metrc_id),
    INDEX idx_products_lab_tested (lab_tested),
    INDEX idx_products_is_featured (is_featured),
    INDEX idx_products_created_at (created_at),
    FULLTEXT idx_products_search (name, description, strain_name, brand, search_keywords),
    
    -- Unique constraint for store-specific SKUs
    UNIQUE KEY uk_products_store_sku (store_id, sku),
    
    -- Constraints
    CONSTRAINT chk_products_percentages CHECK (
        thc_percentage >= 0 AND thc_percentage <= 100 AND
        cbd_percentage >= 0 AND cbd_percentage <= 100
    ),
    CONSTRAINT chk_products_pricing CHECK (
        base_price >= 0 AND (sale_price IS NULL OR sale_price >= 0)
    ),
    CONSTRAINT chk_products_inventory CHECK (
        stock_quantity >= 0 AND reserved_quantity >= 0 AND
        reserved_quantity <= stock_quantity
    )
);
```

### Orders & Transactions

#### orders
```sql
CREATE TABLE orders (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    order_number VARCHAR(50) UNIQUE NOT NULL,
    user_id CHAR(36) NOT NULL,
    store_id CHAR(36) NOT NULL,
    
    -- Order Type and Fulfillment
    order_type ENUM('pickup', 'delivery', 'curbside') NOT NULL,
    fulfillment_status ENUM('pending', 'confirmed', 'preparing', 'ready', 'out_for_delivery', 'delivered', 'completed', 'cancelled') DEFAULT 'pending',
    
    -- Delivery Information
    delivery_address JSON, -- Full address object
    delivery_instructions TEXT,
    delivery_time_requested TIMESTAMP,
    delivery_time_actual TIMESTAMP,
    delivery_person_id CHAR(36),
    
    -- Order Totals
    subtotal DECIMAL(10, 2) NOT NULL,
    tax_amount DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    delivery_fee DECIMAL(10, 2) DEFAULT 0.00,
    service_fee DECIMAL(10, 2) DEFAULT 0.00,
    discount_amount DECIMAL(10, 2) DEFAULT 0.00,
    tip_amount DECIMAL(10, 2) DEFAULT 0.00,
    total_amount DECIMAL(10, 2) NOT NULL,
    
    -- Payment
    payment_status ENUM('pending', 'processing', 'paid', 'failed', 'refunded', 'partially_refunded') DEFAULT 'pending',
    payment_method ENUM('cash', 'debit', 'credit', 'bank_transfer', 'cryptocurrency') NOT NULL,
    payment_provider VARCHAR(50), -- stripe, square, etc.
    payment_intent_id VARCHAR(100),
    
    -- Age Verification
    age_verified_at_delivery TIMESTAMP,
    id_checked_by CHAR(36),
    
    -- Special Instructions
    customer_notes TEXT,
    internal_notes TEXT,
    
    -- Compliance and Tracking
    metrc_transfer_manifest VARCHAR(100),
    compliance_check_passed BOOLEAN DEFAULT FALSE,
    compliance_checked_at TIMESTAMP,
    compliance_checked_by CHAR(36),
    
    -- Cancellation/Return
    cancelled_at TIMESTAMP NULL,
    cancelled_by CHAR(36) NULL,
    cancellation_reason TEXT,
    refund_amount DECIMAL(10, 2) DEFAULT 0.00,
    
    -- Audit Fields
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY fk_orders_users (user_id) REFERENCES users(id),
    FOREIGN KEY fk_orders_stores (store_id) REFERENCES stores(id),
    FOREIGN KEY fk_orders_delivery_person (delivery_person_id) REFERENCES users(id),
    
    -- Indexes
    INDEX idx_orders_order_number (order_number),
    INDEX idx_orders_user_id (user_id),
    INDEX idx_orders_store_id (store_id),
    INDEX idx_orders_fulfillment_status (fulfillment_status),
    INDEX idx_orders_payment_status (payment_status),
    INDEX idx_orders_order_type (order_type),
    INDEX idx_orders_created_at (created_at),
    INDEX idx_orders_delivery_time (delivery_time_requested),
    
    -- Constraints
    CONSTRAINT chk_orders_amounts CHECK (
        subtotal >= 0 AND tax_amount >= 0 AND total_amount >= 0 AND
        tip_amount >= 0 AND discount_amount >= 0
    )
);
```

#### order_items
```sql
CREATE TABLE order_items (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    order_id CHAR(36) NOT NULL,
    product_id CHAR(36) NOT NULL,
    
    -- Item Details
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    
    -- Product snapshot (for historical accuracy)
    product_name VARCHAR(200) NOT NULL,
    product_sku VARCHAR(100),
    product_brand VARCHAR(100),
    thc_percentage DECIMAL(5, 2),
    cbd_percentage DECIMAL(5, 2),
    weight_grams DECIMAL(8, 3),
    
    -- Track and Trace
    metrc_package_id VARCHAR(100),
    batch_number VARCHAR(100),
    
    -- Special requests
    customer_notes TEXT,
    
    -- Audit Fields
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY fk_order_items_orders (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY fk_order_items_products (product_id) REFERENCES products(id),
    
    INDEX idx_order_items_order_id (order_id),
    INDEX idx_order_items_product_id (product_id),
    
    -- Constraints
    CONSTRAINT chk_order_items_quantity CHECK (quantity > 0),
    CONSTRAINT chk_order_items_pricing CHECK (unit_price >= 0 AND total_price >= 0)
);
```

### Reviews & Ratings

#### reviews
```sql
CREATE TABLE reviews (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id CHAR(36) NOT NULL,
    reviewable_type ENUM('store', 'product', 'order') NOT NULL,
    reviewable_id CHAR(36) NOT NULL,
    
    -- Review Content
    rating INT NOT NULL,
    title VARCHAR(200),
    content TEXT NOT NULL,
    
    -- Review Categories (cannabis-specific)
    quality_rating INT, -- 1-5
    value_rating INT,   -- 1-5
    service_rating INT, -- 1-5
    effects_rating INT, -- 1-5 (for products)
    
    -- Cannabis Product Effects (for product reviews)
    effects JSON, -- ['relaxed', 'happy', 'euphoric', 'creative', 'focused', 'sleepy']
    medical_benefits JSON, -- ['pain_relief', 'anxiety', 'insomnia', 'appetite', 'nausea']
    side_effects JSON, -- ['dry_mouth', 'dry_eyes', 'paranoia', 'dizziness']
    
    -- Media
    images JSON, -- Array of image URLs
    
    -- Moderation
    status ENUM('pending', 'approved', 'rejected', 'flagged') DEFAULT 'pending',
    moderated_at TIMESTAMP NULL,
    moderated_by CHAR(36) NULL,
    moderation_reason TEXT,
    
    -- Verification
    verified_purchase BOOLEAN DEFAULT FALSE,
    order_id CHAR(36) NULL,
    
    -- Helpfulness
    helpful_count INT DEFAULT 0,
    total_votes INT DEFAULT 0,
    
    -- Audit Fields
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY fk_reviews_users (user_id) REFERENCES users(id),
    FOREIGN KEY fk_reviews_orders (order_id) REFERENCES orders(id),
    
    -- Indexes
    INDEX idx_reviews_user_id (user_id),
    INDEX idx_reviews_reviewable (reviewable_type, reviewable_id),
    INDEX idx_reviews_rating (rating),
    INDEX idx_reviews_status (status),
    INDEX idx_reviews_verified_purchase (verified_purchase),
    INDEX idx_reviews_created_at (created_at),
    
    -- Constraints
    CONSTRAINT chk_reviews_rating CHECK (rating BETWEEN 1 AND 5),
    CONSTRAINT chk_reviews_sub_ratings CHECK (
        (quality_rating IS NULL OR quality_rating BETWEEN 1 AND 5) AND
        (value_rating IS NULL OR value_rating BETWEEN 1 AND 5) AND
        (service_rating IS NULL OR service_rating BETWEEN 1 AND 5) AND
        (effects_rating IS NULL OR effects_rating BETWEEN 1 AND 5)
    ),
    
    -- Unique constraint to prevent duplicate reviews
    UNIQUE KEY uk_reviews_user_reviewable (user_id, reviewable_type, reviewable_id)
);
```

### Content Management

#### blog_posts
```sql
CREATE TABLE blog_posts (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    author_id CHAR(36) NOT NULL,
    
    -- Content
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT,
    content LONGTEXT NOT NULL,
    featured_image_url VARCHAR(500),
    
    -- Categorization
    category ENUM('news', 'education', 'research', 'lifestyle', 'medical', 'legal', 'industry') NOT NULL,
    tags JSON, -- Array of tags
    
    -- SEO
    meta_title VARCHAR(60),
    meta_description VARCHAR(160),
    meta_keywords VARCHAR(255),
    
    -- Publishing
    status ENUM('draft', 'published', 'archived', 'scheduled') DEFAULT 'draft',
    published_at TIMESTAMP NULL,
    scheduled_for TIMESTAMP NULL,
    
    -- Engagement
    view_count INT DEFAULT 0,
    like_count INT DEFAULT 0,
    comment_count INT DEFAULT 0,
    share_count INT DEFAULT 0,
    
    -- Compliance
    fact_checked BOOLEAN DEFAULT FALSE,
    fact_checked_by CHAR(36) NULL,
    fact_checked_at TIMESTAMP NULL,
    medical_disclaimer BOOLEAN DEFAULT TRUE,
    
    -- Audit Fields
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY fk_blog_posts_author (author_id) REFERENCES users(id),
    FOREIGN KEY fk_blog_posts_fact_checker (fact_checked_by) REFERENCES users(id),
    
    -- Indexes
    INDEX idx_blog_posts_author_id (author_id),
    INDEX idx_blog_posts_category (category),
    INDEX idx_blog_posts_status (status),
    INDEX idx_blog_posts_published_at (published_at),
    INDEX idx_blog_posts_view_count (view_count),
    FULLTEXT idx_blog_posts_search (title, excerpt, content)
);
```

### Professional Network

#### professionals
```sql
CREATE TABLE professionals (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id CHAR(36) NOT NULL UNIQUE,
    
    -- Professional Information
    professional_type ENUM('doctor', 'psychologist', 'therapist', 'nutritionist', 'pharmacist', 'researcher') NOT NULL,
    license_number VARCHAR(100) NOT NULL,
    license_state VARCHAR(50) NOT NULL,
    license_expires_at DATE NOT NULL,
    
    -- Specializations
    specializations JSON, -- ['chronic_pain', 'anxiety', 'ptsd', 'cancer', 'epilepsy', etc.]
    certifications JSON, -- Array of certification objects
    
    -- Practice Information
    practice_name VARCHAR(200),
    practice_address JSON,
    practice_phone VARCHAR(20),
    practice_website VARCHAR(500),
    
    -- Cannabis Specific
    cannabis_experience_years INT,
    cannabis_certifications JSON,
    preferred_products JSON, -- Product categories they recommend
    treatment_approaches JSON, -- ['micro_dosing', 'full_spectrum', 'cbd_only', etc.]
    
    -- Availability
    consultation_types JSON, -- ['in_person', 'video', 'phone', 'chat']
    hourly_rate DECIMAL(8, 2),
    accepts_insurance BOOLEAN DEFAULT FALSE,
    insurance_providers JSON,
    
    -- Verification
    verified BOOLEAN DEFAULT FALSE,
    verified_at TIMESTAMP NULL,
    verified_by CHAR(36) NULL,
    verification_documents JSON,
    
    -- Statistics
    consultation_count INT DEFAULT 0,
    average_rating DECIMAL(3, 2) DEFAULT 0.00,
    review_count INT DEFAULT 0,
    
    -- Status
    status ENUM('pending', 'active', 'suspended', 'inactive') DEFAULT 'pending',
    accepting_new_patients BOOLEAN DEFAULT TRUE,
    
    -- Audit Fields
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY fk_professionals_users (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY fk_professionals_verified_by (verified_by) REFERENCES users(id),
    
    -- Indexes
    INDEX idx_professionals_user_id (user_id),
    INDEX idx_professionals_type (professional_type),
    INDEX idx_professionals_license_number (license_number),
    INDEX idx_professionals_verified (verified),
    INDEX idx_professionals_status (status),
    INDEX idx_professionals_accepting_patients (accepting_new_patients)
);
```

#### consultations
```sql
CREATE TABLE consultations (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    patient_id CHAR(36) NOT NULL,
    professional_id CHAR(36) NOT NULL,
    
    -- Consultation Details
    consultation_type ENUM('initial', 'follow_up', 'emergency', 'second_opinion') NOT NULL,
    session_type ENUM('in_person', 'video', 'phone', 'chat') NOT NULL,
    
    -- Scheduling
    scheduled_at TIMESTAMP NOT NULL,
    duration_minutes INT NOT NULL DEFAULT 60,
    timezone VARCHAR(50) NOT NULL,
    
    -- Status
    status ENUM('scheduled', 'confirmed', 'in_progress', 'completed', 'cancelled', 'no_show') DEFAULT 'scheduled',
    
    -- Meeting Information
    meeting_url VARCHAR(500), -- For video consultations
    meeting_id VARCHAR(100),
    meeting_password VARCHAR(50),
    
    -- Consultation Notes
    chief_complaint TEXT,
    symptoms JSON,
    current_medications JSON,
    cannabis_experience ENUM('none', 'beginner', 'intermediate', 'experienced'),
    previous_cannabis_use TEXT,
    
    -- Professional Notes (encrypted)
    assessment TEXT,
    recommendations TEXT,
    prescribed_products JSON,
    follow_up_needed BOOLEAN DEFAULT FALSE,
    follow_up_date DATE,
    
    -- Payment
    consultation_fee DECIMAL(8, 2) NOT NULL,
    payment_status ENUM('pending', 'paid', 'refunded') DEFAULT 'pending',
    payment_id VARCHAR(100),
    
    -- Compliance
    medical_consent_signed BOOLEAN DEFAULT FALSE,
    privacy_consent_signed BOOLEAN DEFAULT FALSE,
    consultation_agreement_signed BOOLEAN DEFAULT FALSE,
    
    -- Audit Fields
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY fk_consultations_patients (patient_id) REFERENCES users(id),
    FOREIGN KEY fk_consultations_professionals (professional_id) REFERENCES professionals(id),
    
    -- Indexes
    INDEX idx_consultations_patient_id (patient_id),
    INDEX idx_consultations_professional_id (professional_id),
    INDEX idx_consultations_scheduled_at (scheduled_at),
    INDEX idx_consultations_status (status),
    INDEX idx_consultations_session_type (session_type)
);
```

---

## Compliance & Audit Tables

### Audit Logs

#### audit_logs
```sql
CREATE TABLE audit_logs (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    
    -- Event Information
    action VARCHAR(100) NOT NULL,
    resource_type VARCHAR(50) NOT NULL,
    resource_id CHAR(36),
    
    -- User and Session
    user_id CHAR(36),
    session_id CHAR(36),
    ip_address INET6,
    user_agent TEXT,
    
    -- Change Details
    old_values JSON,
    new_values JSON,
    
    -- Request Context
    request_id CHAR(36),
    endpoint VARCHAR(255),
    http_method VARCHAR(10),
    
    -- Risk and Compliance
    risk_level ENUM('low', 'medium', 'high', 'critical') DEFAULT 'low',
    compliance_relevant BOOLEAN DEFAULT FALSE,
    
    -- Result
    result ENUM('success', 'failure', 'error') NOT NULL,
    error_message TEXT,
    
    -- Timestamp
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Indexes for performance
    INDEX idx_audit_logs_user_id (user_id),
    INDEX idx_audit_logs_resource (resource_type, resource_id),
    INDEX idx_audit_logs_action (action),
    INDEX idx_audit_logs_timestamp (timestamp),
    INDEX idx_audit_logs_risk_level (risk_level),
    INDEX idx_audit_logs_compliance (compliance_relevant),
    INDEX idx_audit_logs_ip_address (ip_address)
);

-- Partition by month for performance
ALTER TABLE audit_logs PARTITION BY RANGE (YEAR(timestamp) * 100 + MONTH(timestamp)) (
    PARTITION p202508 VALUES LESS THAN (202509),
    PARTITION p202509 VALUES LESS THAN (202510),
    PARTITION p202510 VALUES LESS THAN (202511),
    PARTITION p202511 VALUES LESS THAN (202512),
    PARTITION p202512 VALUES LESS THAN (202601),
    PARTITION p_future VALUES LESS THAN MAXVALUE
);
```

#### compliance_reports
```sql
CREATE TABLE compliance_reports (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    
    -- Report Information
    report_type ENUM('monthly', 'quarterly', 'annual', 'incident', 'audit') NOT NULL,
    reporting_period_start DATE NOT NULL,
    reporting_period_end DATE NOT NULL,
    
    -- Regulatory Information
    regulatory_body VARCHAR(100) NOT NULL, -- 'DEA', 'State Cannabis Board', etc.
    regulation_reference VARCHAR(100),
    submission_deadline DATE,
    
    -- Report Content
    summary TEXT,
    findings JSON, -- Structured findings data
    violations JSON, -- Any compliance violations found
    remediation_actions JSON, -- Actions taken to address issues
    
    -- Attachments
    supporting_documents JSON, -- Array of document URLs/references
    
    -- Status
    status ENUM('draft', 'pending_review', 'approved', 'submitted', 'accepted', 'rejected') DEFAULT 'draft',
    generated_by CHAR(36) NOT NULL,
    reviewed_by CHAR(36),
    approved_by CHAR(36),
    submitted_at TIMESTAMP NULL,
    
    -- Audit Fields
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY fk_compliance_reports_generated_by (generated_by) REFERENCES users(id),
    FOREIGN KEY fk_compliance_reports_reviewed_by (reviewed_by) REFERENCES users(id),
    FOREIGN KEY fk_compliance_reports_approved_by (approved_by) REFERENCES users(id),
    
    INDEX idx_compliance_reports_type (report_type),
    INDEX idx_compliance_reports_period (reporting_period_start, reporting_period_end),
    INDEX idx_compliance_reports_status (status),
    INDEX idx_compliance_reports_regulatory_body (regulatory_body)
);
```

---

## Performance Optimization

### Indexing Strategy

#### Composite Indexes for Common Queries
```sql
-- Store search with location and filters
CREATE INDEX idx_stores_search_location ON stores (status, verified, business_type, latitude, longitude);

-- Product search and filtering
CREATE INDEX idx_products_store_status_category ON products (store_id, status, category_id);
CREATE INDEX idx_products_search_filters ON products (status, strain_type, thc_percentage, cbd_percentage);

-- Order management
CREATE INDEX idx_orders_store_status_date ON orders (store_id, fulfillment_status, created_at);
CREATE INDEX idx_orders_user_date ON orders (user_id, created_at DESC);

-- Performance monitoring
CREATE INDEX idx_audit_logs_performance ON audit_logs (timestamp, action, user_id);
```

#### Covering Indexes
```sql
-- User authentication (covers password check without table lookup)
CREATE INDEX idx_users_auth_covering ON users (email, password_hash, status, role) WHERE status = 'active';

-- Product listing (covers common product display data)
CREATE INDEX idx_products_listing_covering ON products 
  (store_id, status, category_id, name, base_price, thc_percentage, cbd_percentage, featured_image_url)
  WHERE status = 'active';
```

### Database Partitioning

#### Partition Large Tables by Date
```sql
-- Partition audit logs by month
ALTER TABLE audit_logs PARTITION BY RANGE (YEAR(timestamp) * 100 + MONTH(timestamp));

-- Partition orders by quarter
ALTER TABLE orders PARTITION BY RANGE (YEAR(created_at) * 100 + QUARTER(created_at) * 25);
```

### Caching Strategy

#### Redis Caching Keys
```sql
-- Cache frequently accessed data
-- Store details: store:{store_id}
-- Product details: product:{product_id}
-- User session: session:{session_id}
-- Search results: search:{hash_of_params}
-- Category tree: categories:tree
-- Popular products: products:popular:{timeframe}
```

---

## Data Migration & Seeding

### Initial Data Setup

#### Default Categories
```sql
INSERT INTO product_categories (id, name, slug, product_type, description) VALUES
  (UUID(), 'Flower', 'flower', 'flower', 'Dried cannabis flower products'),
  (UUID(), 'Edibles', 'edibles', 'edibles', 'Cannabis-infused food and beverages'),
  (UUID(), 'Concentrates', 'concentrates', 'concentrates', 'Cannabis extracts and concentrates'),
  (UUID(), 'Topicals', 'topicals', 'topicals', 'Cannabis-infused creams, balms, and lotions'),
  (UUID(), 'Accessories', 'accessories', 'accessories', 'Cannabis consumption accessories');
```

#### Admin User Setup
```sql
-- Create default admin user (password should be changed immediately)
INSERT INTO users (id, email, password_hash, role, age_verified, status, terms_accepted_at, privacy_accepted_at) VALUES
  (UUID(), 'admin@420nation.com', '$2b$12$hash_here', 'admin', TRUE, 'active', NOW(), NOW());
```

### Data Validation Procedures

#### Stored Procedures for Data Integrity
```sql
DELIMITER //

CREATE PROCEDURE ValidateStoreCompliance(IN store_id CHAR(36))
BEGIN
    DECLARE license_valid BOOLEAN DEFAULT FALSE;
    DECLARE metrc_synced BOOLEAN DEFAULT FALSE;
    
    -- Check license validity
    SELECT (license_expires_at > CURRENT_DATE) INTO license_valid
    FROM stores WHERE id = store_id;
    
    -- Check Metrc sync status
    SELECT (metrc_last_sync > DATE_SUB(NOW(), INTERVAL 24 HOUR)) INTO metrc_synced
    FROM stores WHERE id = store_id;
    
    -- Update compliance status
    UPDATE stores 
    SET compliance_status = CASE
        WHEN license_valid AND metrc_synced THEN 'compliant'
        WHEN license_valid THEN 'warning'
        ELSE 'violation'
    END
    WHERE id = store_id;
    
END //

DELIMITER ;
```

---

## Security Considerations

### Encryption at Rest

#### Sensitive Field Encryption
```sql
-- Fields requiring encryption (implement at application level)
-- users: email, phone, first_name, last_name
-- user_addresses: address_line_1, address_line_2
-- stores: license_number
-- professionals: license_number
-- consultations: assessment, recommendations
```

### Access Control

#### Row-Level Security Example
```sql
-- Enable row-level security for multi-tenant data
-- Users can only access their own data
CREATE POLICY user_data_policy ON users
    FOR ALL TO app_role
    USING (id = CURRENT_USER_ID());

-- Store staff can only access their store's data  
CREATE POLICY store_data_policy ON products
    FOR ALL TO store_staff_role
    USING (store_id IN (SELECT store_id FROM store_staff WHERE user_id = CURRENT_USER_ID()));
```

---

## Backup & Recovery

### Backup Strategy
```sql
-- Daily full backup
mysqldump --single-transaction --routines --triggers nation_db > backup_$(date +%Y%m%d).sql

-- Hourly incremental backup (binary logs)
FLUSH LOGS;

-- Point-in-time recovery capability
-- Restore from full backup + apply binary logs up to specific timestamp
```

### Data Retention Policies
```sql
-- Automated cleanup of old audit logs (keep 7 years for compliance)
DELETE FROM audit_logs WHERE timestamp < DATE_SUB(NOW(), INTERVAL 7 YEAR);

-- Archive old orders (keep detailed data for 3 years, summary for 7 years)
-- Move to archive table after 3 years, delete after 7 years
```

---

## Monitoring & Maintenance

### Database Health Checks
```sql
-- Monitor table sizes
SELECT 
    table_name,
    ROUND(((data_length + index_length) / 1024 / 1024), 2) as size_mb,
    table_rows
FROM information_schema.tables 
WHERE table_schema = 'nation_db'
ORDER BY (data_length + index_length) DESC;

-- Monitor slow queries
SELECT 
    query_time,
    lock_time,
    rows_sent,
    rows_examined,
    sql_text
FROM mysql.slow_log 
WHERE start_time > DATE_SUB(NOW(), INTERVAL 1 DAY)
ORDER BY query_time DESC;

-- Check index usage
SELECT 
    s.table_name,
    s.index_name,
    s.cardinality,
    s.seq_in_index,
    s.column_name
FROM information_schema.statistics s
LEFT JOIN information_schema.key_column_usage k 
    ON s.table_name = k.table_name 
    AND s.index_name = k.constraint_name
WHERE s.table_schema = 'nation_db'
ORDER BY s.table_name, s.index_name, s.seq_in_index;
```

---

## Conclusion

This database schema provides a comprehensive foundation for the 420 Nation cannabis wellness platform, incorporating:

- **Scalable Design**: Optimized for growth with proper indexing and partitioning
- **Cannabis Compliance**: Built-in track-and-trace and regulatory compliance features
- **Security**: Encryption, audit trails, and access control considerations
- **Performance**: Strategic indexing, caching, and query optimization
- **Flexibility**: JSON fields for evolving requirements and extensibility

The schema supports all planned features while maintaining data integrity, regulatory compliance, and optimal performance for a modern cannabis platform.

---

**Document Version:** 1.0  
**Last Updated:** 2025-08-23  
**Next Review:** 2025-09-23  
**Owner:** Database Team  
**Stakeholders:** Engineering, Product, Compliance, Security