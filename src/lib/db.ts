// Database connection and Prisma client setup
import { PrismaClient } from '../database/generated/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Database connection test
export async function testDatabaseConnection() {
  try {
    await prisma.$connect()
    console.log('✅ Database connected successfully')
    return true
  } catch (error) {
    console.error('❌ Database connection failed:', error)
    return false
  } finally {
    await prisma.$disconnect()
  }
}

// Graceful shutdown
process.on('beforeExit', async () => {
  await prisma.$disconnect()
})