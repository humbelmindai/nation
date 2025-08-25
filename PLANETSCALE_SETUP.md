# 🚀 420 Nation - PlanetScale Database Setup (2 minutes)

## Why PlanetScale for Cannabis Platforms?
- **MySQL-compatible** - Zero code changes needed
- **Built-in branching** - Safe database schema changes
- **Automatic scaling** - Handles traffic growth
- **Better performance** - Faster than shared hosting
- **Free tier** - Perfect for development and early production

## Step-by-Step Setup (2 minutes)

### 1. Create PlanetScale Account
- Go to: **https://planetscale.com**
- Click **"Sign up for free"**
- Sign up with Google/GitHub or email

### 2. Create Database
- Click **"Create database"**
- Database name: **`420-nation`**
- Region: **Choose closest to your users** (US East, US West, EU, etc.)
- Click **"Create database"**

### 3. Get Connection String
- In your new database, click **"Connect"**
- Select **"Prisma"** as the framework
- Copy the connection string (looks like this):
  ```
  DATABASE_URL="mysql://username:password@host/420-nation?sslaccept=strict"
  ```

### 4. Update Your .env.local File
- Replace the current DATABASE_URL with the PlanetScale one
- Keep everything else the same

### 5. Initialize Database (30 seconds)
```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Push schema to PlanetScale
npx prisma db push

# Seed with sample data
npm run db:seed

# Start development server
npm run dev
```

### 6. Launch! 🎉
- Visit: **http://localhost:3000**
- Your 420 Nation platform will be running!

## What You'll See
- ✅ **Landing page** with cannabis-themed design
- ✅ **Store finder** with 3 sample dispensaries
- ✅ **Product catalog** with 15+ cannabis products
- ✅ **User registration** and login system
- ✅ **Admin dashboard** for managing everything
- ✅ **Age verification** system
- ✅ **Mobile-responsive** design

## Production Ready
- **Automatic backups**
- **Connection pooling**
- **SSL encryption**
- **99.95% uptime SLA**
- **Branch databases** for testing

## Alternative: Contact h44s.co.za
If you prefer to use your existing database, contact h44s.co.za support and ask them to:
1. **Configure MySQL bind-address** to accept external connections
2. **Open port 3306** in server firewall
3. **Confirm external database access** is supported on your plan

But PlanetScale will get you running in 2 minutes vs potentially days of hosting support tickets!

## Need Help?
Just let me know when you have the PlanetScale connection string and I'll update your .env.local file immediately!