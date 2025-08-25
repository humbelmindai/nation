# 420 Nation Database Setup Guide

## Current Issue: External Database Connection Blocked

The connection timeout suggests that your hosting provider **does not allow external database connections** for security reasons. This is very common with shared hosting providers.

## Solutions (Choose One)

### Option 1: Enable Remote Database Access in Plesk (Recommended)
1. **Log into your Plesk control panel**
2. **Go to Databases → admin_420nation**
3. **Click on "User Management"**
4. **Edit the database user: `askdfasdhfkjasndf`**
5. **Look for "Access Control" or "Remote Access" settings**
6. **Add your IP address or allow connections from "Any host" (%)**
7. **Save the changes**

**Steps in Plesk:**
```
Plesk → Websites & Domains → Databases → admin_420nation 
→ User Management → askdfasdhfkjasndf → Access Control
→ Add Host: % (or your specific IP)
```

### Option 2: Deploy Application on the Same Server
Since external connections are blocked, deploy the 420 Nation app directly on your `humblemindai.com` server where the database is located.

### Option 3: Use Local Development Database
Set up a local MySQL/MariaDB for development and use the remote database only in production.

### Option 4: Alternative Database Solutions
- **PlanetScale** (MySQL-compatible with built-in branching)
- **Supabase** (PostgreSQL with real-time features)
- **Railway** (Simple deployment with database)
- **Vercel Postgres** (if using Vercel for deployment)

## Quick Test Commands

### Test 1: Check if MySQL port is open
```bash
# Test if port 3306 is reachable
telnet eu1.h44s.co.za 3306
# or
nc -zv eu1.h44s.co.za 3306
```

### Test 2: Check DNS resolution
```bash
# Verify the hostname resolves
nslookup eu1.h44s.co.za
# or
ping eu1.h44s.co.za
```

## Enable Remote Access in Plesk (Step-by-Step)

1. **Login to Plesk Control Panel**
   - Go to: https://eu1.h44s.co.za:8443 (or your Plesk URL)

2. **Navigate to Databases**
   - Click "Websites & Domains"
   - Select your domain: `humblemindai.com`
   - Click "Databases"

3. **Select Your Database**
   - Click on `admin_420nation`

4. **Manage Database Users**
   - Click "User Management"
   - Click on your user: `askdfasdhfkjasndf`

5. **Configure Remote Access**
   - Look for "Access Control" or "Remote Access"
   - Current setting likely shows: `localhost` only
   - Change to: `%` (allow from any host)
   - Or add your specific IP address

6. **Apply Changes**
   - Save the configuration
   - Wait 1-2 minutes for changes to propagate

## Alternative: Set Up Local Development

If remote access cannot be enabled, here's how to set up local development:

### 1. Install Local MySQL/MariaDB
```bash
# macOS with Homebrew
brew install mariadb
brew services start mariadb

# Create local database
mysql -u root -e "CREATE DATABASE nation_dev;"
mysql -u root -e "CREATE USER 'nation_user'@'localhost' IDENTIFIED BY 'password123';"
mysql -u root -e "GRANT ALL PRIVILEGES ON nation_dev.* TO 'nation_user'@'localhost';"
mysql -u root -e "FLUSH PRIVILEGES;"
```

### 2. Update .env.local for Local Development
```bash
# Local development database
DATABASE_URL="mysql://nation_user:password123@localhost:3306/nation_dev"
```

### 3. Use Docker for Local Database
```bash
# Start local database with Docker
docker-compose up -d mariadb

# Use the Docker database
DATABASE_URL="mysql://nation_user:nation_password_change_this@localhost:3306/nation_db"
```

## Production Deployment Options

### Option A: Same Server Deployment
Deploy the 420 Nation app on the same server (`humblemindai.com`) where the database is located.

### Option B: Modern Database Solutions
For better scalability and development experience:

1. **PlanetScale** (Recommended for production)
   - MySQL-compatible
   - Built-in branching for schema changes
   - Automatic scaling
   - Free tier available

2. **Supabase** 
   - PostgreSQL with real-time features
   - Built-in auth and storage
   - Great for cannabis platforms

3. **Railway**
   - Simple deployment
   - Integrated database
   - Easy scaling

## What to Do Next?

### Immediate Steps:
1. **Check Plesk settings** for remote database access
2. **Try enabling remote connections** for your database user
3. **Test the connection again** after making changes

### If Remote Access Cannot Be Enabled:
1. **Set up local development** using Docker or local MySQL
2. **Plan for same-server deployment** in production
3. **Consider modern database alternatives** for better developer experience

## Contact Your Hosting Provider

If you cannot find the remote access settings in Plesk, contact your hosting provider (`h44s.co.za`) and ask them to:

1. **Enable remote database connections** for your account
2. **Allow connections to port 3306** from external IPs
3. **Provide the correct hostname** for database connections
4. **Confirm if external database access is supported** on your hosting plan

---

**Need Help?** Let me know which option you'd like to pursue, and I'll help you set it up!