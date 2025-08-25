// Simple API testing script
const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

async function testEndpoints() {
  console.log('🧪 Testing API endpoints...\n')

  const tests = [
    {
      name: 'Health Check',
      method: 'GET',
      url: '/api/health',
      expectedStatus: 200
    },
    {
      name: 'Get Categories',
      method: 'GET', 
      url: '/api/categories',
      expectedStatus: 200
    },
    {
      name: 'Get Products',
      method: 'GET',
      url: '/api/products',
      expectedStatus: 200
    },
    {
      name: 'Get Stores',
      method: 'GET',
      url: '/api/stores',
      expectedStatus: 200
    }
  ]

  for (const test of tests) {
    try {
      const response = await fetch(`${baseUrl}${test.url}`, {
        method: test.method,
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const status = response.status === test.expectedStatus ? '✅' : '❌'
      console.log(`${status} ${test.name}: ${response.status} ${response.statusText}`)

      if (response.ok) {
        const data = await response.json()
        console.log(`   Response: ${data.success ? 'Success' : 'Error'}`)
      }

    } catch (error) {
      console.log(`❌ ${test.name}: ${error.message}`)
    }
  }

  console.log('\n🏁 API testing complete!')
}

if (require.main === module) {
  testEndpoints()
}

module.exports = { testEndpoints }