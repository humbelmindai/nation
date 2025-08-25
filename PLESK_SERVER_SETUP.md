# 🚀 420 Nation - Plesk Server Setup Instructions

## Option A: Node.js Application (If Plesk Supports Node.js)

### Step 1: Check Node.js Support
1. Login to Plesk: https://eu1.h44s.co.za:8443
2. Go to **Websites & Domains** → **humblemindai.com**
3. Look for **"Node.js"** in the tools section

**If Node.js is available, continue with these steps:**

### Step 2: Upload and Extract Files
1. Go to **Files** in Plesk
2. Navigate to **httpdocs** folder
3. **Delete** all existing files in httpdocs
4. **Upload** the `420nation-plesk.tar.gz` file
5. **Extract** the tar.gz file
6. **Delete** the tar.gz file after extraction

### Step 3: Configure Node.js in Plesk
1. Go back to **Websites & Domains** → **humblemindai.com**
2. Click **"Node.js"**
3. **Enable Node.js** for the domain
4. Set **Node.js version**: 18.x or higher
5. Set **Application mode**: Production
6. Set **Application root**: `/httpdocs`
7. Set **Application startup file**: `server.js`
8. Set **Application URL**: Leave blank (uses domain root)

### Step 4: Install Dependencies via Plesk Terminal
1. In Node.js settings, click **"NPM"**
2. Click **"Run npm install"** (this installs all dependencies)
3. Wait for installation to complete

### Step 5: Initialize Database
1. In Plesk, go to **Scheduled Tasks**
2. Create a one-time task with these commands:
   ```bash
   cd /var/www/vhosts/humblemindai.com/httpdocs
   npx prisma db push
   npm run db:seed
   ```
3. **Run** the task

### Step 6: Start Application
1. Go back to **Node.js** settings
2. Click **"Enable"** to start the application
3. Visit **https://humblemindai.com** to see your 420 Nation platform!

---

## Option B: Static Export + PHP API (Universal Solution)

**If Node.js is NOT available in Plesk, use this method:**

### Step 1: Configure Next.js for Static Export
The project needs to be configured for static export. This is already prepared.

### Step 2: Build Static Version Locally
```bash
# Run on your local machine:
npm install
npm run build
```

### Step 3: Upload Static Files
1. Go to Plesk **Files** → **httpdocs**
2. **Delete** all existing files
3. **Upload** the contents of the `out` folder (created during build)

### Step 4: Create PHP API Layer
I'll create PHP scripts that handle database operations:

**Create:** `/httpdocs/api/stores.php`
```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$servername = "localhost";
$username = "askdfasdhfkjasndf";
$password = "WKMi5h7@*5lsgcsl";
$dbname = "admin_420nation";

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->query("SELECT * FROM Store WHERE isActive = 1");
    $stores = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode(['success' => true, 'data' => $stores]);
} catch(PDOException $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>
```

---

## Testing Database Connection

### Create Test Script: `/httpdocs/test-db.php`
```php
<?php
$servername = "localhost";
$username = "askdfasdhfkjasndf";
$password = "WKMi5h7@*5lsgcsl";
$dbname = "admin_420nation";

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "✅ Database connection successful!<br>";
    
    // Test query
    $stmt = $pdo->query("SHOW TABLES");
    $tables = $stmt->fetchAll();
    echo "📊 Tables found: " . count($tables) . "<br>";
    
    foreach($tables as $table) {
        echo "- " . $table[0] . "<br>";
    }
    
} catch(PDOException $e) {
    echo "❌ Connection failed: " . $e->getMessage();
}
?>
```

Visit: `https://humblemindai.com/test-db.php` to test connection.

---

## Troubleshooting

### If Node.js Deployment Fails:
1. **Check Logs**: In Plesk Node.js section, check error logs
2. **Verify Dependencies**: Ensure all npm packages installed correctly
3. **Database Connection**: Run test-db.php to confirm database works
4. **File Permissions**: Ensure httpdocs has correct permissions

### If Static + PHP Deployment Fails:
1. **PHP Version**: Ensure PHP 7.4+ is enabled in Plesk
2. **Database Access**: Test with test-db.php script
3. **File Upload**: Ensure all files uploaded correctly

---

## Success Indicators

✅ **Working Platform Should Show:**
- Landing page with cannabis theme
- Store finder with sample dispensaries
- User registration system
- Product catalog
- Admin dashboard access

✅ **Database Should Contain:**
- 3 sample dispensaries
- 15+ cannabis products
- User accounts and categories
- All required tables from schema

---

## Next Steps After Deployment

1. **Customize Branding**: Update logo and colors
2. **Add Google Maps API**: For store location features
3. **Configure Email**: For user notifications
4. **Add Real Store Data**: Replace sample data
5. **SSL Certificate**: Ensure HTTPS is working
6. **Test All Features**: Registration, search, admin panel

**Need Help?** Contact support or let me know which deployment method worked!