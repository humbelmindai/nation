// 420 Nation Platform - Database Seeding
// This script populates the database with initial data for development

import { PrismaClient } from '../generated/client'
import { seedProductCategories } from './categories'
import { seedUsers } from './users'
import { seedStores } from './stores'
import { seedProducts } from './products'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')
  
  try {
    // Clear existing data in development
    if (process.env.NODE_ENV === 'development') {
      console.log('🧹 Clearing existing data...')
      
      // Delete in order of dependencies (child records first)
      await prisma.orderItem.deleteMany()
      await prisma.order.deleteMany()
      await prisma.review.deleteMany()
      await prisma.product.deleteMany()
      await prisma.storeStaff.deleteMany()
      await prisma.store.deleteMany()
      await prisma.consultation.deleteMany()
      await prisma.professional.deleteMany()
      await prisma.blogPost.deleteMany()
      await prisma.userSession.deleteMany()
      await prisma.userAddress.deleteMany()
      await prisma.user.deleteMany()
      await prisma.productCategory.deleteMany()
      await prisma.auditLog.deleteMany()
      
      console.log('✅ Existing data cleared')
    }
    
    // Seed categories first (no dependencies)
    console.log('📂 Seeding product categories...')
    await seedProductCategories(prisma)
    console.log('✅ Product categories seeded')
    
    // Seed users (no dependencies except self-referencing)
    console.log('👥 Seeding users...')
    await seedUsers(prisma)
    console.log('✅ Users seeded')
    
    // Seed stores (depends on users)
    console.log('🏪 Seeding stores...')
    await seedStores(prisma)
    console.log('✅ Stores seeded')
    
    // Seed products (depends on stores and categories)
    console.log('🌿 Seeding products...')
    await seedProducts(prisma)
    console.log('✅ Products seeded')
    
    console.log('🎉 Database seeding completed successfully!')
    
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

// Run the seeding function
main()
  .catch((error) => {
    console.error('❌ Seeding failed:', error)
    process.exit(1)
  })