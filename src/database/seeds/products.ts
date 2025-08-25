// 420 Nation - Products Seed Data
// Sample cannabis products for development and testing

import { PrismaClient, StrainType } from '../generated/client'

export async function seedProducts(prisma: PrismaClient) {
  const products = [
    // Green Valley Dispensary Products
    // Flower Products
    {
      id: 'prd_gv_og_kush',
      storeId: 'str_greenvalley_001',
      categoryId: 'cat_flower_indica',
      name: 'OG Kush',
      slug: 'og-kush-green-valley',
      description: 'Classic indica-dominant hybrid known for its stress-relieving properties and earthy, pine aroma. Perfect for evening relaxation.',
      shortDescription: 'Classic indica hybrid with earthy, pine aroma',
      strainName: 'OG Kush',
      strainType: StrainType.hybrid,
      brand: 'Green Valley Premium',
      manufacturer: 'Green Valley Cultivation',
      thcPercentage: 24.5,
      cbdPercentage: 0.8,
      thcaPercentage: 0.5,
      cbdaPercentage: 0.1,
      totalCannabinoids: 25.9,
      basePrice: 45.00,
      salePrice: 40.00,
      costPrice: 22.50,
      weightGrams: 3.5,
      sku: 'GV-OGK-3.5',
      stockQuantity: 25,
      lowStockThreshold: 5,
      metrcId: '1A4FF0100000022000000123',
      batchNumber: 'BATCH-2025-001',
      harvestDate: new Date('2025-07-15'),
      packageDate: new Date('2025-08-01'),
      expirationDate: new Date('2026-08-01'),
      labTested: true,
      labTestResults: {
        potency: { thc: 24.5, thca: 0.5, cbd: 0.8, cbda: 0.1 },
        pesticides: { status: 'pass', tested: 47, detected: 0 },
        residualSolvents: { status: 'pass', tested: 12, detected: 0 },
        heavyMetals: { status: 'pass', lead: '<LOQ', cadmium: '<LOQ' },
        microbials: { status: 'pass', yeastMold: '<100 CFU/g' },
        moisture: { status: 'pass', content: '11.2%' }
      },
      testedDate: new Date('2025-07-20'),
      testingLab: 'Green Scientific Labs',
      featuredImageUrl: '/images/products/og-kush-featured.jpg',
      galleryImages: [
        '/images/products/og-kush-1.jpg',
        '/images/products/og-kush-2.jpg'
      ],
      status: 'active' as const,
      isFeatured: true,
      tags: ['indica', 'relaxing', 'evening', 'stress-relief'],
      searchKeywords: 'OG Kush indica relaxing stress relief evening',
      averageRating: 4.7,
      reviewCount: 89,
      salesCount: 567,
      viewCount: 2341
    },
    {
      id: 'prd_gv_blue_dream',
      storeId: 'str_greenvalley_001',
      categoryId: 'cat_flower_sativa',
      name: 'Blue Dream',
      slug: 'blue-dream-green-valley',
      description: 'Popular sativa-dominant hybrid with sweet berry aroma. Provides balanced effects of cerebral stimulation and full-body relaxation.',
      shortDescription: 'Popular sativa hybrid with sweet berry aroma',
      strainName: 'Blue Dream',
      strainType: StrainType.hybrid,
      brand: 'Green Valley Premium',
      manufacturer: 'Green Valley Cultivation',
      thcPercentage: 18.5,
      cbdPercentage: 2.1,
      thcaPercentage: 0.3,
      cbdaPercentage: 0.2,
      totalCannabinoids: 21.1,
      basePrice: 40.00,
      weightGrams: 3.5,
      sku: 'GV-BD-3.5',
      stockQuantity: 30,
      lowStockThreshold: 5,
      metrcId: '1A4FF0100000022000000124',
      batchNumber: 'BATCH-2025-002',
      harvestDate: new Date('2025-07-20'),
      packageDate: new Date('2025-08-05'),
      labTested: true,
      testedDate: new Date('2025-07-25'),
      testingLab: 'Green Scientific Labs',
      featuredImageUrl: '/images/products/blue-dream-featured.jpg',
      status: 'active' as const,
      tags: ['sativa', 'creative', 'daytime', 'uplifting'],
      searchKeywords: 'Blue Dream sativa creative uplifting daytime'
    },

    // Edibles Products
    {
      id: 'prd_gv_gummies_mixed',
      storeId: 'str_greenvalley_001',
      categoryId: 'cat_edibles_gummies',
      name: 'Mixed Berry Gummies - 10mg THC',
      slug: 'mixed-berry-gummies-10mg',
      description: 'Delicious mixed berry gummies infused with 10mg THC each. Made with natural fruit flavors and organic ingredients. Perfect for precise dosing.',
      shortDescription: 'Mixed berry gummies, 10mg THC each',
      brand: 'Green Valley Edibles',
      manufacturer: 'California Cannabis Co.',
      thcPercentage: null, // Edibles don't use percentages
      basePrice: 25.00,
      weightGrams: 100, // Package weight
      sku: 'GV-GUM-MB-10',
      stockQuantity: 50,
      metrcId: '1A4FF0100000022000000125',
      batchNumber: 'EDIBLE-2025-001',
      packageDate: new Date('2025-08-10'),
      expirationDate: new Date('2026-02-10'),
      labTested: true,
      testedDate: new Date('2025-08-08'),
      testingLab: 'Edible Testing Labs',
      featuredImageUrl: '/images/products/mixed-berry-gummies.jpg',
      status: 'active' as const,
      tags: ['edibles', 'gummies', 'precise-dosing', 'beginner-friendly'],
      searchKeywords: 'gummies edibles THC mixed berry 10mg'
    },

    // Cannabis Plus Products
    {
      id: 'prd_cp_wedding_cake',
      storeId: 'str_cannabisplus_001',
      categoryId: 'cat_flower_indica',
      name: 'Wedding Cake',
      slug: 'wedding-cake-cannabis-plus',
      description: 'Indica-dominant hybrid with sweet, tangy flavor. Known for its relaxing effects and beautiful dense buds covered in trichomes.',
      shortDescription: 'Indica hybrid with sweet, tangy flavor',
      strainName: 'Wedding Cake',
      strainType: StrainType.indica,
      brand: 'Top Shelf Genetics',
      thcPercentage: 26.2,
      cbdPercentage: 0.5,
      totalCannabinoids: 27.1,
      basePrice: 50.00,
      salePrice: 45.00,
      weightGrams: 3.5,
      sku: 'CP-WC-3.5',
      stockQuantity: 20,
      labTested: true,
      status: 'active' as const,
      tags: ['indica', 'premium', 'relaxing', 'evening'],
      searchKeywords: 'Wedding Cake indica premium relaxing'
    },
    {
      id: 'prd_cp_sour_diesel',
      storeId: 'str_cannabisplus_001',
      categoryId: 'cat_flower_sativa',
      name: 'Sour Diesel',
      slug: 'sour-diesel-cannabis-plus',
      description: 'Energizing sativa with pungent diesel aroma. Perfect for daytime use, creativity, and focus.',
      shortDescription: 'Energizing sativa with diesel aroma',
      strainName: 'Sour Diesel',
      strainType: StrainType.sativa,
      brand: 'West Coast Genetics',
      thcPercentage: 22.8,
      cbdPercentage: 0.3,
      totalCannabinoids: 23.5,
      basePrice: 42.00,
      weightGrams: 3.5,
      sku: 'CP-SD-3.5',
      stockQuantity: 35,
      labTested: true,
      status: 'active' as const,
      tags: ['sativa', 'energizing', 'creative', 'focus'],
      searchKeywords: 'Sour Diesel sativa energizing creative focus'
    },

    // Concentrate Products
    {
      id: 'prd_gv_live_resin',
      storeId: 'str_greenvalley_001',
      categoryId: 'cat_concentrates_live_resin',
      name: 'Gelato Live Resin',
      slug: 'gelato-live-resin',
      description: 'Premium live resin extract made from fresh-frozen Gelato flowers. High terpene content preserves the full flavor profile.',
      shortDescription: 'Premium live resin with high terpenes',
      strainName: 'Gelato',
      strainType: StrainType.hybrid,
      brand: 'Green Valley Extracts',
      thcPercentage: 78.5,
      cbdPercentage: 1.2,
      totalCannabinoids: 82.3,
      basePrice: 65.00,
      weightGrams: 1.0,
      sku: 'GV-LR-GEL-1G',
      stockQuantity: 15,
      labTested: true,
      status: 'active' as const,
      isFeatured: true,
      tags: ['concentrates', 'live-resin', 'premium', 'high-terpenes'],
      searchKeywords: 'live resin Gelato concentrate extract'
    }
  ]

  // Create products
  for (const productData of products) {
    await prisma.product.create({
      data: productData
    })
  }

  // Update store product counts
  const stores = await prisma.store.findMany()
  for (const store of stores) {
    const productCount = await prisma.product.count({
      where: { storeId: store.id }
    })
    
    await prisma.store.update({
      where: { id: store.id },
      data: { totalProducts: productCount }
    })
  }

  console.log(`✅ Created ${products.length} products and updated store counts`)
}