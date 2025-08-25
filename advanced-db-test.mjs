// Advanced database connection diagnostics for 420 Nation
import { createConnection } from 'net';
import { readFileSync } from 'fs';
import { execSync } from 'child_process';

// Load environment variables manually
const envFile = readFileSync('.env.local', 'utf8');
const envVars = {};
envFile.split('\n').forEach(line => {
  const [key, value] = line.split('=');
  if (key && value) {
    envVars[key] = value.replace(/"/g, '');
  }
});

async function comprehensiveDatabaseTest() {
  console.log('🔍 420 Nation - Advanced Database Connection Diagnostics');
  console.log('='.repeat(60));
  
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
  const username = url.username;
  const database = url.pathname.substring(1);
  
  console.log('🎯 Connection Details:');
  console.log(`   Host: ${host}`);
  console.log(`   Port: ${port}`);
  console.log(`   User: ${username}`);
  console.log(`   Database: ${database}`);
  console.log('');
  
  // Test 1: DNS Resolution
  console.log('🌐 Test 1: DNS Resolution');
  try {
    const dnsResult = execSync(`nslookup ${host}`, { encoding: 'utf8' });
    console.log('✅ DNS resolution successful');
    console.log(dnsResult.split('\n').slice(2, 4).join('\n'));
  } catch (error) {
    console.log('❌ DNS resolution failed:', error.message);
  }
  console.log('');
  
  // Test 2: Ping test
  console.log('📡 Test 2: Ping Test');
  try {
    const pingResult = execSync(`ping -c 3 ${host}`, { encoding: 'utf8' });
    console.log('✅ Host is reachable');
    console.log(pingResult.split('\n').slice(-2, -1)[0]); // Summary line
  } catch (error) {
    console.log('❌ Ping failed:', error.message);
  }
  console.log('');
  
  // Test 3: Port connectivity tests
  console.log('🔌 Test 3: Port Connectivity Tests');
  const portsToTest = [3306, 3307, 3308, 33060]; // Common MySQL ports
  
  for (const testPort of portsToTest) {
    await testPort({ host, port: testPort });
  }
  console.log('');
  
  // Test 4: Alternative hostnames
  console.log('🌍 Test 4: Alternative Hostname Tests');
  const alternativeHosts = [
    host,
    'humblemindai.com',
    'www.humblemindai.com',
    'mysql.humblemindai.com',
    'db.humblemindai.com'
  ];
  
  for (const altHost of alternativeHosts) {
    if (altHost !== host) {
      await testPort({ host: altHost, port: 3306 });
    }
  }
  console.log('');
  
  // Test 5: Check if MySQL is running on HTTP ports (some shared hosts do this)
  console.log('🌐 Test 5: HTTP Port Tests (some hosts use tunneling)');
  const httpPorts = [80, 443, 8080, 8443];
  
  for (const httpPort of httpPorts) {
    await testPort({ host, port: httpPort });
  }
  
  console.log('');
  console.log('📋 Summary & Recommendations:');
  console.log('');
  
  if (host.includes('h44s.co.za')) {
    console.log('💡 Recommendations for h44s.co.za hosting:');
    console.log('   1. Contact h44s.co.za support to confirm external DB access is allowed');
    console.log('   2. Ask for the correct MySQL hostname and port');
    console.log('   3. Verify your hosting plan includes external database access');
    console.log('   4. Request firewall configuration for your IP address');
  }
  
  console.log('');
  console.log('🚀 Alternative Solutions:');
  console.log('   Option A: Deploy the app on the same server (humblemindai.com)');
  console.log('   Option B: Use PlanetScale (free tier): https://planetscale.com');
  console.log('   Option C: Use Supabase (PostgreSQL): https://supabase.com');
  console.log('   Option D: Contact hosting provider for external access setup');
}

async function testPort({ host, port }) {
  return new Promise((resolve) => {
    const socket = createConnection({
      host: host,
      port: parseInt(port),
      timeout: 3000
    });
    
    socket.on('connect', () => {
      console.log(`✅ ${host}:${port} - Connection successful`);
      socket.destroy();
      resolve(true);
    });
    
    socket.on('timeout', () => {
      console.log(`⏰ ${host}:${port} - Connection timeout`);
      socket.destroy();
      resolve(false);
    });
    
    socket.on('error', (error) => {
      if (error.code === 'ECONNREFUSED') {
        console.log(`🚫 ${host}:${port} - Connection refused (port might be closed)`);
      } else if (error.code === 'ENOTFOUND') {
        console.log(`❌ ${host}:${port} - Host not found`);
      } else {
        console.log(`❌ ${host}:${port} - ${error.message}`);
      }
      resolve(false);
    });
  });
}

// Run comprehensive test
comprehensiveDatabaseTest()
  .then(() => {
    console.log('\n🎉 Database diagnostics completed!');
  })
  .catch((error) => {
    console.error('\n💥 Diagnostics failed:', error);
  });