// 420 Nation - Stores Seed Data
// Sample dispensaries for development and testing

import { PrismaClient } from '../generated/client'

export async function seedStores(prisma: PrismaClient) {
  const stores = [
    {
      id: 'str_greenvalley_001',
      ownerId: 'usr_vendor_001',
      name: 'Green Valley Dispensary',
      slug: 'green-valley-dispensary',
      description: 'Premium cannabis products in the heart of Los Angeles. Family-owned dispensary committed to quality and customer service.',
      email: 'info@greenvalley.com',
      phone: '+15551234567',
      website: 'https://greenvalley.com',
      addressLine1: '456 Cannabis Ave',
      city: 'Los Angeles',
      state: 'CA',
      postalCode: '90210',
      latitude: 34.0522,
      longitude: -118.2437,
      businessType: 'dispensary' as const,
      licenseNumber: 'C10-0000123-LIC',
      licenseType: 'Adult-Use and Medicinal',
      licenseState: 'CA',
      licenseExpiresAt: new Date('2025-12-31'),
      features: ['delivery', 'pickup', 'curbside', 'atm', 'parking', 'wheelchair_accessible'],
      paymentMethods: ['cash', 'debit', 'credit'],
      deliveryRadius: 25,
      minimumOrder: 25.00,
      deliveryFee: 5.00,
      operatingHours: {
        monday: { open: '09:00', close: '22:00' },
        tuesday: { open: '09:00', close: '22:00' },
        wednesday: { open: '09:00', close: '22:00' },
        thursday: { open: '09:00', close: '22:00' },
        friday: { open: '09:00', close: '23:00' },
        saturday: { open: '10:00', close: '23:00' },
        sunday: { open: '10:00', close: '21:00' }
      },
      status: 'active' as const,
      verified: true,
      verifiedAt: new Date(),
      verifiedBy: 'usr_admin_001',
      logoUrl: '/images/stores/green-valley-logo.jpg',
      coverImageUrl: '/images/stores/green-valley-cover.jpg',
      galleryImages: [
        '/images/stores/green-valley-interior-1.jpg',
        '/images/stores/green-valley-interior-2.jpg',
        '/images/stores/green-valley-products-1.jpg'
      ],
      metaTitle: 'Green Valley Dispensary - Premium Cannabis in LA',
      metaDescription: 'Shop premium cannabis products at Green Valley Dispensary. Delivery, pickup, and curbside available in Los Angeles.',
      socialMedia: {
        instagram: 'greenvalleyla',
        facebook: 'https://facebook.com/greenvalleydispensary'
      },
      metrcLicenseId: 'CML17-0000123',
      complianceStatus: 'compliant' as const,
      trackTraceSystem: 'metrc' as const,
      totalProducts: 0, // Will be updated after products are seeded
      averageRating: 4.5,
      totalReviews: 128,
      totalOrders: 2341
    },
    {
      id: 'str_cannabisplus_001',
      ownerId: 'usr_vendor_002',
      name: 'Cannabis Plus',
      slug: 'cannabis-plus',
      description: 'Your one-stop shop for premium cannabis products. Wide selection, competitive prices, and expert staff.',
      email: 'hello@cannabisplus.com',
      phone: '+15551234568',
      website: 'https://cannabisplus.com',
      addressLine1: '789 Herb Street',
      addressLine2: 'Suite 101',
      city: 'West Hollywood',
      state: 'CA',
      postalCode: '90069',
      latitude: 34.0900,
      longitude: -118.3617,
      businessType: 'dispensary' as const,
      licenseNumber: 'C10-0000124-LIC',
      licenseType: 'Adult-Use',
      licenseState: 'CA',
      licenseExpiresAt: new Date('2025-11-30'),
      features: ['delivery', 'pickup', 'atm', 'parking'],
      paymentMethods: ['cash', 'debit'],
      deliveryRadius: 15,
      minimumOrder: 35.00,
      deliveryFee: 7.50,
      operatingHours: {
        monday: { open: '10:00', close: '21:00' },
        tuesday: { open: '10:00', close: '21:00' },
        wednesday: { open: '10:00', close: '21:00' },
        thursday: { open: '10:00', close: '21:00' },
        friday: { open: '10:00', close: '22:00' },
        saturday: { open: '10:00', close: '22:00' },
        sunday: { open: '11:00', close: '20:00' }
      },
      status: 'active' as const,
      verified: true,
      verifiedAt: new Date(),
      verifiedBy: 'usr_admin_001',
      logoUrl: '/images/stores/cannabis-plus-logo.jpg',
      coverImageUrl: '/images/stores/cannabis-plus-cover.jpg',
      galleryImages: [
        '/images/stores/cannabis-plus-interior-1.jpg',
        '/images/stores/cannabis-plus-products-1.jpg'
      ],
      metaTitle: 'Cannabis Plus - Premium Cannabis in West Hollywood',
      metaDescription: 'Shop a wide selection of cannabis products at Cannabis Plus. Competitive prices and expert staff in West Hollywood.',
      socialMedia: {
        instagram: 'cannabisplusla',
        facebook: 'https://facebook.com/cannabisplus'
      },
      metrcLicenseId: 'CML17-0000124',
      complianceStatus: 'compliant' as const,
      trackTraceSystem: 'metrc' as const,
      totalProducts: 0,
      averageRating: 4.2,
      totalReviews: 89,
      totalOrders: 1567
    },
    {
      id: 'str_delivery_001',
      ownerId: 'usr_vendor_001', // Same owner as Green Valley (multi-location)
      name: 'Green Valley Express',
      slug: 'green-valley-express',
      description: 'Fast, reliable cannabis delivery service. Same premium products from Green Valley, delivered to your door.',
      email: 'delivery@greenvalley.com',
      phone: '+15551234580',
      addressLine1: '456 Cannabis Ave',
      city: 'Los Angeles',
      state: 'CA',
      postalCode: '90210',
      latitude: 34.0522,
      longitude: -118.2437,
      businessType: 'delivery' as const,
      licenseNumber: 'C09-0000125-LIC',
      licenseType: 'Adult-Use Delivery',
      licenseState: 'CA',
      licenseExpiresAt: new Date('2025-12-31'),
      features: ['delivery'],
      paymentMethods: ['cash', 'debit'],
      deliveryRadius: 50,
      minimumOrder: 40.00,
      deliveryFee: 10.00,
      operatingHours: {
        monday: { open: '10:00', close: '22:00' },
        tuesday: { open: '10:00', close: '22:00' },
        wednesday: { open: '10:00', close: '22:00' },
        thursday: { open: '10:00', close: '22:00' },
        friday: { open: '10:00', close: '23:00' },
        saturday: { open: '10:00', close: '23:00' },
        sunday: { open: '11:00', close: '21:00' }
      },
      status: 'active' as const,
      verified: true,
      verifiedAt: new Date(),
      verifiedBy: 'usr_admin_001',
      logoUrl: '/images/stores/green-valley-express-logo.jpg',
      coverImageUrl: '/images/stores/delivery-service-cover.jpg',
      metaTitle: 'Green Valley Express - Cannabis Delivery LA',
      metaDescription: 'Fast cannabis delivery in LA. Premium products from Green Valley delivered to your door.',
      socialMedia: {
        instagram: 'greenvalleyexpress'
      },
      metrcLicenseId: 'CML17-0000125',
      complianceStatus: 'compliant' as const,
      trackTraceSystem: 'metrc' as const,
      totalProducts: 0,
      averageRating: 4.7,
      totalReviews: 245,
      totalOrders: 3420
    }
  ]

  // Create stores
  for (const storeData of stores) {
    await prisma.store.create({
      data: storeData
    })
  }

  // Create staff assignments
  const staffAssignments = [
    // Green Valley staff
    {
      storeId: 'str_greenvalley_001',
      userId: 'usr_vendor_001',
      role: 'owner',
      startDate: new Date('2023-01-01'),
      status: 'active',
      canAccessPos: true,
      canManageInventory: true,
      canProcessOrders: true,
      complianceTrainingCompleted: true,
      trainingCompletedAt: new Date('2023-01-15')
    },
    // Cannabis Plus staff
    {
      storeId: 'str_cannabisplus_001',
      userId: 'usr_vendor_002',
      role: 'owner',
      startDate: new Date('2023-03-01'),
      status: 'active',
      canAccessPos: true,
      canManageInventory: true,
      canProcessOrders: true,
      complianceTrainingCompleted: true,
      trainingCompletedAt: new Date('2023-03-15')
    },
    // Green Valley Express staff
    {
      storeId: 'str_delivery_001',
      userId: 'usr_vendor_001',
      role: 'owner',
      startDate: new Date('2023-06-01'),
      status: 'active',
      canAccessPos: true,
      canManageInventory: true,
      canProcessOrders: true,
      complianceTrainingCompleted: true,
      trainingCompletedAt: new Date('2023-06-15')
    }
  ]

  for (const staff of staffAssignments) {
    await prisma.storeStaff.create({
      data: staff
    })
  }

  console.log(`✅ Created ${stores.length} stores with staff assignments`)
}