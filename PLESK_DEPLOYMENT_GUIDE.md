# 🚀 420 Nation - Plesk Deployment Guide

## Why Deploy to Plesk? Perfect Solution!

✅ **Solves database issue** - App and database on same server (localhost connection)  
✅ **No external connection needed** - Uses internal MySQL connection  
✅ **Production-ready** - Your actual production environment  
✅ **Cost-effective** - Use your existing hosting  
✅ **Better performance** - No network latency between app and database  

## Deployment Options for Plesk

### Option A: Node.js Application (Recommended if supported)

**Check if your Plesk supports Node.js:**
1. Login to Plesk Control Panel
2. Go to **Websites & Domains**
3. Look for **"Node.js"** in the tools section

**If Node.js is available:**
1. **Enable Node.js** for your domain
2. **Upload your 420 Nation code**
3. **Configure environment variables**
4. **Install dependencies**
5. **Start the application**

### Option B: Static Export + PHP API (Universal Plesk Solution)

**This works on ALL Plesk installations:**
1. **Export Next.js as static files**
2. **Create PHP API endpoints** for database operations
3. **Upload to public_html folder**
4. **Configure database connection**

### Option C: Build Server + Upload Distribution

**For servers without Node.js:**
1. **Build the app locally** or on a build server
2. **Generate static files**
3. **Upload built files** to Plesk
4. **Set up API layer** in PHP

## Step-by-Step: Option A (Node.js on Plesk)

### 1. Prepare for Deployment

Let me first create a production-ready configuration:

```bash
# Update .env.local for Plesk deployment
DATABASE_URL="mysql://askdfasdhfkjasndf:WKMi5h7@*5lsgcsl@localhost:3306/admin_420nation"
```

### 2. Create Production Build

```bash
# Build the application
npm run build

# Create deployment package
tar -czf 420nation-deployment.tar.gz --exclude=node_modules --exclude=.git .
```

### 3. Upload to Plesk

**Via Plesk File Manager:**
1. Go to **Files** in Plesk
2. Navigate to **httpdocs** (or public_html)
3. **Upload** the tar.gz file
4. **Extract** the files

**Via FTP/SFTP:**
```bash
# Upload via FTP (if you have FTP access)
scp 420nation-deployment.tar.gz user@humblemindai.com:~/httpdocs/
```

### 4. Configure in Plesk

1. **Enable Node.js** (if available)
2. **Set startup file:** `server.js` or `next start`
3. **Set environment:** `production`
4. **Configure domain** to point to the Node.js app

### 5. Install Dependencies on Server

```bash
# SSH into your server (if available) or use Plesk terminal
npm install --production
```

## Step-by-Step: Option B (Static Export + PHP)

This is the **UNIVERSAL solution** that works on ANY Plesk hosting:

### 1. Configure Next.js for Static Export

```javascript
// next.config.js - Add static export configuration
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### 2. Build Static Version

```bash
# Build static version
npm run build

# Files will be in 'out' directory
# Upload contents of 'out' folder to public_html
```

### 3. Create PHP API Layer

I'll create PHP scripts that connect to your MySQL database and provide API endpoints.

## Let's Start! What's Available on Your Plesk?

**Please check and tell me:**

1. **Does your Plesk have Node.js support?**
   - Login to Plesk → Websites & Domains → Look for "Node.js"

2. **Do you have SSH/Terminal access?**
   - Look for "Terminal" or "SSH Access" in Plesk

3. **What's your current setup?**
   - Is humblemindai.com currently showing a website?
   - Can you upload files via Plesk File Manager?

**Based on your answers, I'll create the exact deployment steps for your specific Plesk setup!**

## Quick Preview Setup

While we determine the best deployment method, let me create a PHP-based preview that will work immediately:

```php
<?php
// Simple PHP script to test database connection
// This will work on any Plesk hosting
?>
```

**Which option would you like to start with?** Node.js deployment (if available) or the universal static + PHP solution?