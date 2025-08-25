// 420 Nation - Users Seed Data
// Initial users for development and testing

import { PrismaClient } from '../generated/client'
import bcrypt from 'bcryptjs'

export async function seedUsers(prisma: PrismaClient) {
  const saltRounds = 10

  const users = [
    // Admin User
    {
      id: 'usr_admin_001',
      email: 'admin@420nation.com',
      passwordHash: await bcrypt.hash('Admin123!', saltRounds),
      role: 'admin' as const,
      firstName: 'Admin',
      lastName: 'User',
      ageVerified: true,
      ageVerificationMethod: 'manual_review' as const,
      ageVerifiedAt: new Date(),
      termsAcceptedAt: new Date(),
      privacyAcceptedAt: new Date(),
      status: 'active' as const
    },

    // Vendor Users
    {
      id: 'usr_vendor_001',
      email: 'owner@greenvalley.com',
      passwordHash: await bcrypt.hash('Vendor123!', saltRounds),
      role: 'vendor' as const,
      firstName: 'Sarah',
      lastName: 'Johnson',
      phone: '+15551234567',
      dateOfBirth: new Date('1985-03-15'),
      ageVerified: true,
      ageVerificationMethod: 'id_scan' as const,
      ageVerifiedAt: new Date(),
      termsAcceptedAt: new Date(),
      privacyAcceptedAt: new Date(),
      status: 'active' as const
    },
    {
      id: 'usr_vendor_002',
      email: 'manager@cannabisplus.com',
      passwordHash: await bcrypt.hash('Vendor123!', saltRounds),
      role: 'vendor' as const,
      firstName: 'Michael',
      lastName: 'Chen',
      phone: '+15551234568',
      dateOfBirth: new Date('1982-07-22'),
      ageVerified: true,
      ageVerificationMethod: 'id_scan' as const,
      ageVerifiedAt: new Date(),
      termsAcceptedAt: new Date(),
      privacyAcceptedAt: new Date(),
      status: 'active' as const
    },

    // Professional Users
    {
      id: 'usr_prof_001',
      email: 'dr.williams@example.com',
      passwordHash: await bcrypt.hash('Prof123!', saltRounds),
      role: 'professional' as const,
      firstName: 'Dr. Emily',
      lastName: 'Williams',
      phone: '+15551234569',
      dateOfBirth: new Date('1978-11-08'),
      ageVerified: true,
      ageVerificationMethod: 'manual_review' as const,
      ageVerifiedAt: new Date(),
      termsAcceptedAt: new Date(),
      privacyAcceptedAt: new Date(),
      status: 'active' as const
    },

    // Consumer Users
    {
      id: 'usr_consumer_001',
      email: 'john.doe@example.com',
      passwordHash: await bcrypt.hash('User123!', saltRounds),
      role: 'consumer' as const,
      firstName: 'John',
      lastName: 'Doe',
      phone: '+15551234570',
      dateOfBirth: new Date('1990-05-12'),
      ageVerified: true,
      ageVerificationMethod: 'id_scan' as const,
      ageVerifiedAt: new Date(),
      termsAcceptedAt: new Date(),
      privacyAcceptedAt: new Date(),
      marketingConsent: true,
      status: 'active' as const
    },
    {
      id: 'usr_consumer_002',
      email: 'jane.smith@example.com',
      passwordHash: await bcrypt.hash('User123!', saltRounds),
      role: 'consumer' as const,
      firstName: 'Jane',
      lastName: 'Smith',
      phone: '+15551234571',
      dateOfBirth: new Date('1988-09-25'),
      ageVerified: true,
      ageVerificationMethod: 'id_scan' as const,
      ageVerifiedAt: new Date(),
      termsAcceptedAt: new Date(),
      privacyAcceptedAt: new Date(),
      status: 'active' as const
    },
    {
      id: 'usr_consumer_003',
      email: 'alex.martinez@example.com',
      passwordHash: await bcrypt.hash('User123!', saltRounds),
      role: 'consumer' as const,
      firstName: 'Alex',
      lastName: 'Martinez',
      phone: '+15551234572',
      dateOfBirth: new Date('1992-02-18'),
      ageVerified: false, // Unverified user for testing
      status: 'active' as const,
      termsAcceptedAt: new Date(),
      privacyAcceptedAt: new Date()
    }
  ]

  // Create users
  for (const userData of users) {
    const user = await prisma.user.create({
      data: userData
    })

    // Create addresses for some users
    if (userData.role === 'consumer' || userData.role === 'vendor') {
      await prisma.userAddress.create({
        data: {
          userId: user.id,
          type: 'primary',
          addressLine1: userData.role === 'consumer' ? '123 Main St' : '456 Business Ave',
          city: 'Los Angeles',
          state: 'CA',
          postalCode: '90210',
          latitude: 34.0522,
          longitude: -118.2437,
          isDefault: true,
          verified: true
        }
      })
    }
  }

  // Create professional profile for the professional user
  await prisma.professional.create({
    data: {
      id: 'prof_001',
      userId: 'usr_prof_001',
      professionalType: 'doctor',
      licenseNumber: 'CA-MD-123456',
      licenseState: 'CA',
      licenseExpiresAt: new Date('2026-12-31'),
      specializations: ['chronic_pain', 'anxiety', 'ptsd', 'insomnia'],
      cannabisExperienceYears: 8,
      cannabisCertifications: ['Cannabis Clinical Specialist', 'Medical Cannabis Certification'],
      practiceName: 'Holistic Wellness Medical Center',
      practiceAddress: {
        addressLine1: '789 Medical Plaza',
        city: 'Los Angeles',
        state: 'CA',
        postalCode: '90210'
      },
      practicePhone: '+15551234569',
      practiceWebsite: 'https://holisticwellness.com',
      consultationTypes: ['in_person', 'video', 'phone'],
      hourlyRate: 150.00,
      acceptsInsurance: true,
      insuranceProviders: ['Blue Cross', 'Aetna', 'Cigna'],
      verified: true,
      verifiedAt: new Date(),
      verifiedBy: 'usr_admin_001',
      status: 'active',
      acceptingNewPatients: true
    }
  })

  console.log(`✅ Created ${users.length} users with addresses and professional profiles`)
}