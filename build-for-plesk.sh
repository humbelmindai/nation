#!/bin/bash
# 420 Nation - Plesk Deployment Builder
echo "🚀 Building 420 Nation for Plesk Deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Generate Prisma client
echo "🗄️ Generating Prisma client..."
npx prisma generate

# Build the application
echo "🏗️ Building Next.js application..."
npm run build

# Create deployment package
echo "📦 Creating deployment package..."
tar -czf 420nation-plesk.tar.gz \
  --exclude=node_modules \
  --exclude=.git \
  --exclude=.next/cache \
  --exclude=tests \
  --exclude=docs \
  --exclude=*.log \
  --exclude=advanced-db-test.mjs \
  --exclude=test-*.js \
  --exclude=test-*.mjs \
  .

echo "✅ Deployment package created: 420nation-plesk.tar.gz"
echo ""
echo "📋 Next Steps for Plesk Deployment:"
echo "1. Upload 420nation-plesk.tar.gz to your Plesk File Manager"
echo "2. Extract to httpdocs folder"
echo "3. Install Node.js dependencies on server: npm install --production"
echo "4. Initialize database: npx prisma db push && npm run db:seed"
echo "5. Start application: npm start (or configure Node.js in Plesk)"