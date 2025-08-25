#!/bin/bash
# 420 Nation - Simplified Plesk Deployment Builder
echo "🚀 Building 420 Nation for Plesk Deployment (Simplified)..."

# Use minimal package.json
echo "📦 Using minimal dependencies..."
mv package.json package-full.json
mv package-minimal.json package.json

# Create deployment package with essential files
echo "📦 Creating deployment package..."
tar -czf 420nation-plesk-simple.tar.gz \
  --exclude=node_modules \
  --exclude=.git \
  --exclude=.next \
  --exclude=tests \
  --exclude=docs \
  --exclude=*.log \
  --exclude=advanced-db-test.mjs \
  --exclude=test-*.js \
  --exclude=test-*.mjs \
  --exclude=package-full.json \
  .

# Restore original package.json
mv package.json package-minimal.json  
mv package-full.json package.json

echo "✅ Simple deployment package created: 420nation-plesk-simple.tar.gz"
echo ""
echo "📋 Upload Instructions:"
echo "1. Upload 420nation-plesk-simple.tar.gz to Plesk File Manager"
echo "2. Extract to httpdocs folder"  
echo "3. Run: npm install (uses minimal dependencies)"
echo "4. Run: npm run db:generate && npm run db:push && npm run db:seed"
echo "5. Start: npm start or configure Node.js in Plesk"