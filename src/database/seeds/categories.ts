// 420 Nation - Product Categories Seed Data
// Cannabis product categories with proper hierarchy

import { PrismaClient } from '../generated/client'

export async function seedProductCategories(prisma: PrismaClient) {
  const categories = [
    // Main Categories
    {
      id: 'cat_flower',
      name: 'Flower',
      slug: 'flower',
      description: 'Dried cannabis flower products for smoking or vaping',
      productType: 'flower' as const,
      iconName: 'leaf',
      colorHex: '#22c55e',
      sortOrder: 1,
      thcCategory: 'high_thc',
      consumptionMethod: 'smoking'
    },
    {
      id: 'cat_edibles',
      name: 'Edibles',
      slug: 'edibles',
      description: 'Cannabis-infused food and beverage products',
      productType: 'edibles' as const,
      iconName: 'cookie',
      colorHex: '#f59e0b',
      sortOrder: 2,
      thcCategory: 'balanced',
      consumptionMethod: 'edible'
    },
    {
      id: 'cat_concentrates',
      name: 'Concentrates',
      slug: 'concentrates',
      description: 'Cannabis extracts, oils, waxes, and concentrates',
      productType: 'concentrates' as const,
      iconName: 'droplet',
      colorHex: '#8b5cf6',
      sortOrder: 3,
      thcCategory: 'high_thc',
      consumptionMethod: 'vaping'
    },
    {
      id: 'cat_topicals',
      name: 'Topicals',
      slug: 'topicals',
      description: 'Cannabis-infused creams, balms, and lotions',
      productType: 'topicals' as const,
      iconName: 'heart',
      colorHex: '#f97316',
      sortOrder: 4,
      thcCategory: 'cbd_dominant',
      consumptionMethod: 'topical'
    },
    {
      id: 'cat_accessories',
      name: 'Accessories',
      slug: 'accessories',
      description: 'Cannabis consumption accessories and tools',
      productType: 'accessories' as const,
      iconName: 'tool',
      colorHex: '#6b7280',
      sortOrder: 5,
      thcCategory: 'no_thc',
      consumptionMethod: 'other'
    }
  ]

  // Create main categories
  for (const category of categories) {
    await prisma.productCategory.create({
      data: category
    })
  }

  // Create flower subcategories
  const flowerSubcategories = [
    {
      id: 'cat_flower_indica',
      parentId: 'cat_flower',
      name: 'Indica',
      slug: 'indica',
      description: 'Relaxing indica strains',
      productType: 'flower' as const,
      sortOrder: 1,
      thcCategory: 'high_thc',
      consumptionMethod: 'smoking'
    },
    {
      id: 'cat_flower_sativa',
      parentId: 'cat_flower',
      name: 'Sativa',
      slug: 'sativa',
      description: 'Energizing sativa strains',
      productType: 'flower' as const,
      sortOrder: 2,
      thcCategory: 'high_thc',
      consumptionMethod: 'smoking'
    },
    {
      id: 'cat_flower_hybrid',
      parentId: 'cat_flower',
      name: 'Hybrid',
      slug: 'hybrid',
      description: 'Balanced hybrid strains',
      productType: 'flower' as const,
      sortOrder: 3,
      thcCategory: 'balanced',
      consumptionMethod: 'smoking'
    },
    {
      id: 'cat_flower_cbd',
      parentId: 'cat_flower',
      name: 'CBD Flower',
      slug: 'cbd-flower',
      description: 'High-CBD, low-THC flower',
      productType: 'flower' as const,
      sortOrder: 4,
      thcCategory: 'cbd_dominant',
      consumptionMethod: 'smoking'
    }
  ]

  for (const subcategory of flowerSubcategories) {
    await prisma.productCategory.create({
      data: subcategory
    })
  }

  // Create edible subcategories
  const edibleSubcategories = [
    {
      id: 'cat_edibles_gummies',
      parentId: 'cat_edibles',
      name: 'Gummies',
      slug: 'gummies',
      description: 'Cannabis-infused gummy candies',
      productType: 'edibles' as const,
      sortOrder: 1,
      thcCategory: 'balanced',
      consumptionMethod: 'edible'
    },
    {
      id: 'cat_edibles_chocolates',
      parentId: 'cat_edibles',
      name: 'Chocolates',
      slug: 'chocolates',
      description: 'Cannabis-infused chocolate products',
      productType: 'edibles' as const,
      sortOrder: 2,
      thcCategory: 'balanced',
      consumptionMethod: 'edible'
    },
    {
      id: 'cat_edibles_beverages',
      parentId: 'cat_edibles',
      name: 'Beverages',
      slug: 'beverages',
      description: 'Cannabis-infused drinks and beverages',
      productType: 'edibles' as const,
      sortOrder: 3,
      thcCategory: 'low_thc',
      consumptionMethod: 'edible'
    },
    {
      id: 'cat_edibles_baked_goods',
      parentId: 'cat_edibles',
      name: 'Baked Goods',
      slug: 'baked-goods',
      description: 'Cannabis-infused cookies, brownies, and baked items',
      productType: 'edibles' as const,
      sortOrder: 4,
      thcCategory: 'balanced',
      consumptionMethod: 'edible'
    }
  ]

  for (const subcategory of edibleSubcategories) {
    await prisma.productCategory.create({
      data: subcategory
    })
  }

  // Create concentrate subcategories
  const concentrateSubcategories = [
    {
      id: 'cat_concentrates_shatter',
      parentId: 'cat_concentrates',
      name: 'Shatter',
      slug: 'shatter',
      description: 'Glass-like cannabis concentrate',
      productType: 'concentrates' as const,
      sortOrder: 1,
      thcCategory: 'high_thc',
      consumptionMethod: 'vaping'
    },
    {
      id: 'cat_concentrates_wax',
      parentId: 'cat_concentrates',
      name: 'Wax',
      slug: 'wax',
      description: 'Soft, waxy cannabis concentrate',
      productType: 'concentrates' as const,
      sortOrder: 2,
      thcCategory: 'high_thc',
      consumptionMethod: 'vaping'
    },
    {
      id: 'cat_concentrates_live_resin',
      parentId: 'cat_concentrates',
      name: 'Live Resin',
      slug: 'live-resin',
      description: 'Fresh-frozen cannabis extract with high terpenes',
      productType: 'concentrates' as const,
      sortOrder: 3,
      thcCategory: 'high_thc',
      consumptionMethod: 'vaping'
    },
    {
      id: 'cat_concentrates_distillate',
      parentId: 'cat_concentrates',
      name: 'Distillate',
      slug: 'distillate',
      description: 'Pure, refined cannabis oil',
      productType: 'concentrates' as const,
      sortOrder: 4,
      thcCategory: 'high_thc',
      consumptionMethod: 'vaping'
    }
  ]

  for (const subcategory of concentrateSubcategories) {
    await prisma.productCategory.create({
      data: subcategory
    })
  }

  console.log(`✅ Created ${categories.length} main categories and ${flowerSubcategories.length + edibleSubcategories.length + concentrateSubcategories.length} subcategories`)
}