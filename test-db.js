// Simple database connection test for 420 Nation
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config({ path: './.env.local' });

async function testConnection() {
  console.log('🧪 Testing database connection...');
  console.log('📍 Connecting to:', process.env.DATABASE_URL.replace(/:[^:@]*@/, ':****@'));
  
  let connection;
  
  try {
    // Parse the DATABASE_URL
    const dbUrl = new URL(process.env.DATABASE_URL);
    
    const config = {
      host: dbUrl.hostname,
      port: dbUrl.port || 3306,
      user: dbUrl.username,
      password: dbUrl.password,
      database: dbUrl.pathname.substring(1), // Remove leading slash
      ssl: {
        rejectUnauthorized: false // For Plesk/shared hosting
      },
      connectTimeout: 10000, // 10 seconds
      acquireTimeout: 10000,
      timeout: 10000
    };
    
    console.log('🔗 Connection config:', {
      host: config.host,
      port: config.port,
      user: config.user,
      database: config.database,
      password: '****'
    });
    
    // Create connection
    connection = await mysql.createConnection(config);
    
    console.log('✅ Database connection successful!');
    
    // Test basic query
    const [rows] = await connection.execute('SELECT 1 as test, NOW() as current_time, DATABASE() as database_name');
    console.log('📊 Test query result:', rows[0]);
    
    // Check database permissions
    const [tables] = await connection.execute('SHOW TABLES');
    console.log('📋 Current tables in database:', tables.length);
    
    if (tables.length > 0) {
      console.log('🗂 Existing tables:');
      tables.forEach(table => {
        const tableName = table[Object.keys(table)[0]];
        console.log('   -', tableName);
      });
    } else {
      console.log('📝 Database is empty - ready for Prisma schema!');
    }
    
    // Test create permissions
    try {
      await connection.execute(`
        CREATE TABLE IF NOT EXISTS _connection_test (
          id INT AUTO_INCREMENT PRIMARY KEY,
          test_message VARCHAR(255),
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
      
      await connection.execute(`
        INSERT INTO _connection_test (test_message) VALUES (?)
      `, ['420 Nation connection test successful!']);
      
      const [testRows] = await connection.execute('SELECT * FROM _connection_test ORDER BY id DESC LIMIT 1');
      console.log('✅ Database write test successful:', testRows[0]);
      
      // Clean up test table
      await connection.execute('DROP TABLE _connection_test');
      console.log('🧹 Cleaned up test table');
      
    } catch (writeError) {
      console.log('⚠️ Database write test failed:', writeError.message);
      console.log('   This might be due to limited permissions, but read access works!');
    }
    
  } catch (error) {
    console.error('❌ Database connection failed:');
    console.error('   Error:', error.message);
    console.error('   Code:', error.code);
    
    if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.log('\n💡 Troubleshooting tips:');
      console.log('   1. Check username and password are correct');
      console.log('   2. Ensure the database user has proper permissions');
      console.log('   3. Verify the database name exists');
    } else if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
      console.log('\n💡 Troubleshooting tips:');
      console.log('   1. Check the hostname is correct');
      console.log('   2. Ensure port 3306 is accessible');
      console.log('   3. Check if firewall is blocking the connection');
    }
    
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
      console.log('🔌 Connection closed');
    }
  }
}

// Run the test
testConnection()
  .then(() => {
    console.log('\n🎉 Database test completed successfully!');
    console.log('👉 Next steps:');
    console.log('   1. Run: npm install');
    console.log('   2. Run: npx prisma generate');
    console.log('   3. Run: npx prisma db push');
    console.log('   4. Run: npm run db:seed');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Database test failed:', error);
    process.exit(1);
  });