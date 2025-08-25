// Simple network connection test for 420 Nation database
import { createConnection } from 'net';
import { readFileSync } from 'fs';

// Load environment variables manually
const envFile = readFileSync('.env.local', 'utf8');
const envVars = {};
envFile.split('\n').forEach(line => {
  const [key, value] = line.split('=');
  if (key && value) {
    envVars[key] = value.replace(/"/g, '');
  }
});

async function testNetworkConnection() {
  console.log('🔗 Testing network connection to database server...');
  
  const databaseUrl = envVars.DATABASE_URL;
  if (!databaseUrl) {
    console.error('❌ DATABASE_URL not found in .env.local');
    process.exit(1);
  }
  
  console.log('📍 Database URL:', databaseUrl.replace(/:[^:@]*@/, ':****@'));
  
  // Parse the URL
  const url = new URL(databaseUrl);
  const host = url.hostname;
  const port = url.port || 3306;
  
  console.log(`🎯 Testing connection to ${host}:${port}`);
  
  return new Promise((resolve, reject) => {
    const socket = createConnection({
      host: host,
      port: parseInt(port),
      timeout: 5000
    });
    
    socket.on('connect', () => {
      console.log('✅ Network connection successful!');
      console.log(`🌐 Connected to ${host}:${port}`);
      socket.destroy();
      resolve(true);
    });
    
    socket.on('timeout', () => {
      console.log('⏰ Connection timeout');
      socket.destroy();
      reject(new Error('Connection timeout'));
    });
    
    socket.on('error', (error) => {
      console.log('❌ Network connection failed:', error.message);
      
      if (error.code === 'ENOTFOUND') {
        console.log('💡 DNS resolution failed. Check hostname:', host);
      } else if (error.code === 'ECONNREFUSED') {
        console.log('💡 Connection refused. Check if MySQL is running and port is correct.');
      } else if (error.code === 'ETIMEDOUT') {
        console.log('💡 Connection timeout. Check firewall and network settings.');
      }
      
      reject(error);
    });
  });
}

// Test connection
testNetworkConnection()
  .then(() => {
    console.log('\n🎉 Network test passed! Database server is reachable.');
    console.log('👉 Now you can proceed with:');
    console.log('   1. npm install (to install dependencies)');
    console.log('   2. npx prisma generate');
    console.log('   3. npx prisma db push');
  })
  .catch((error) => {
    console.error('\n💥 Network test failed. Please check:');
    console.error('   1. Database hostname is correct');
    console.error('   2. Port 3306 is accessible');
    console.error('   3. Firewall allows connections');
    console.error('   4. Your hosting provider allows external database connections');
    process.exit(1);
  });