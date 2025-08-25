<?php
// 420 Nation - Plesk Database Connection Test
header('Content-Type: text/html; charset=utf-8');
?>
<!DOCTYPE html>
<html>
<head>
    <title>420 Nation - Database Test</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; margin: 40px; background: #f0fdf4; }
        .container { max-width: 800px; background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { color: #16a34a; font-size: 24px; font-weight: bold; margin-bottom: 20px; }
        .success { color: #059669; background: #dcfce7; padding: 12px; border-radius: 8px; margin: 10px 0; }
        .error { color: #dc2626; background: #fef2f2; padding: 12px; border-radius: 8px; margin: 10px 0; }
        .info { color: #0369a1; background: #e0f2fe; padding: 12px; border-radius: 8px; margin: 10px 0; }
        pre { background: #f8fafc; padding: 15px; border-radius: 8px; overflow-x: auto; }
        .status-good { color: #059669; font-weight: bold; }
        .status-bad { color: #dc2626; font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">🚀 420 Nation - Database Connection Test</div>
        
        <?php
        $servername = "localhost";
        $username = "askdfasdhfkjasndf";
        $password = "WKMi5h7@*5lsgcsl";
        $dbname = "admin_420nation";
        
        echo "<div class='info'>Testing connection to: $servername:3306/$dbname</div>";
        
        try {
            // Test PDO connection
            $pdo = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            echo "<div class='success'>✅ <strong>Database Connection: SUCCESS</strong></div>";
            
            // Test database info
            $stmt = $pdo->query("SELECT VERSION() as version");
            $version = $stmt->fetch();
            echo "<div class='info'>📊 MySQL Version: " . $version['version'] . "</div>";
            
            // Test tables
            $stmt = $pdo->query("SHOW TABLES");
            $tables = $stmt->fetchAll();
            
            if (count($tables) > 0) {
                echo "<div class='success'>✅ <strong>Tables Found: " . count($tables) . "</strong></div>";
                echo "<div class='info'>📋 Database Tables:</div>";
                echo "<pre>";
                foreach($tables as $table) {
                    echo "- " . $table[0] . "\n";
                }
                echo "</pre>";
                
                // Test sample data
                if (in_array(['User'], $tables) || in_array(['user'], $tables)) {
                    try {
                        $stmt = $pdo->query("SELECT COUNT(*) as count FROM User");
                        $userCount = $stmt->fetch();
                        echo "<div class='success'>👥 Users in database: " . $userCount['count'] . "</div>";
                    } catch(Exception $e) {
                        echo "<div class='info'>ℹ️ User table exists but needs initialization</div>";
                    }
                }
                
            } else {
                echo "<div class='info'>ℹ️ <strong>Database is empty - needs initialization</strong></div>";
                echo "<div class='info'>Run these commands after deploying 420 Nation:</div>";
                echo "<pre>npm run db:generate\nnpm run db:push\nnpm run db:seed</pre>";
            }
            
        } catch(PDOException $e) {
            echo "<div class='error'>❌ <strong>Connection Failed:</strong> " . $e->getMessage() . "</div>";
            
            // Troubleshooting tips
            echo "<div class='info'>";
            echo "<strong>🔧 Troubleshooting:</strong><br>";
            echo "1. Verify MySQL credentials in Plesk<br>";
            echo "2. Check if database 'admin_420nation' exists<br>";
            echo "3. Ensure user has proper permissions<br>";
            echo "4. Contact h44s.co.za support if needed<br>";
            echo "</div>";
        }
        
        // PHP and server info
        echo "<div class='info'>";
        echo "<strong>🖥️ Server Information:</strong><br>";
        echo "PHP Version: " . phpversion() . "<br>";
        echo "Server: " . $_SERVER['SERVER_SOFTWARE'] . "<br>";
        echo "Document Root: " . $_SERVER['DOCUMENT_ROOT'] . "<br>";
        echo "</div>";
        
        ?>
        
        <div class="info">
            <strong>🎯 Next Steps:</strong><br>
            1. If connection successful → Deploy 420 Nation platform<br>
            2. If connection failed → Check database settings in Plesk<br>
            3. Upload and extract 420nation-plesk-simple.tar.gz<br>
            4. Run npm install and database setup commands
        </div>
    </div>
</body>
</html>