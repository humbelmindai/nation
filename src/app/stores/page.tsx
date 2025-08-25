import React from 'react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

// Mock data for dispensaries
const sampleStores = [
  {
    id: 1,
    name: "Green Valley Dispensary",
    address: "123 Cannabis St, Denver, CO",
    rating: 4.8,
    reviewCount: 127,
    distance: "0.8 miles",
    type: "Recreational & Medical",
    hours: "9:00 AM - 9:00 PM",
    features: ["Delivery", "Curbside", "Online Ordering"],
    image: "/api/placeholder/400/200"
  },
  {
    id: 2,
    name: "Sunrise Cannabis Co.",
    address: "456 Hemp Ave, Boulder, CO",
    rating: 4.6,
    reviewCount: 89,
    distance: "1.2 miles",
    type: "Recreational",
    hours: "10:00 AM - 8:00 PM",
    features: ["Walk-in", "Pre-order", "Loyalty Program"],
    image: "/api/placeholder/400/200"
  },
  {
    id: 3,
    name: "Mountain High Wellness",
    address: "789 Wellness Blvd, Colorado Springs, CO",
    rating: 4.9,
    reviewCount: 203,
    distance: "2.1 miles",
    type: "Medical Only",
    hours: "8:00 AM - 7:00 PM",
    features: ["Consultation", "Medical Cards", "Delivery"],
    image: "/api/placeholder/400/200"
  }
];

export default function StoresPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Cannabis Dispensaries
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Find licensed dispensaries, delivery services, and cannabis retailers near you with detailed reviews and real-time menus.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="Enter your address or zip code"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                defaultValue="Denver, CO"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option>All Types</option>
                <option>Recreational</option>
                <option>Medical</option>
                <option>Both</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Distance
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option>25 miles</option>
                <option>10 miles</option>
                <option>5 miles</option>
                <option>1 mile</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <Button variant="outline" size="sm">🚗 Delivery Available</Button>
            <Button variant="outline" size="sm">🌟 4+ Stars</Button>
            <Button variant="outline" size="sm">📱 Online Ordering</Button>
            <Button variant="outline" size="sm">🩺 Medical Cards</Button>
            <Button variant="outline" size="sm">🎁 Daily Deals</Button>
          </div>
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            {sampleStores.length} dispensaries found near you
          </h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <option>Distance</option>
              <option>Rating</option>
              <option>Reviews</option>
              <option>Recently Added</option>
            </select>
          </div>
        </div>

        {/* Store Cards */}
        <div className="grid gap-6">
          {sampleStores.map((store) => (
            <Card key={store.id} variant="elevated" padding="none" className="overflow-hidden">
              <div className="md:flex">
                {/* Store Image */}
                <div className="md:w-1/3">
                  <div className="h-48 md:h-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">🏪</div>
                      <p className="text-sm opacity-90">Licensed Dispensary</p>
                    </div>
                  </div>
                </div>
                
                {/* Store Details */}
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {store.name}
                      </h3>
                      <p className="text-gray-600 mb-2">{store.address}</p>
                      <p className="text-sm text-gray-500">{store.distance} away • {store.type}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <span className="text-2xl font-bold text-primary-600">
                          {store.rating}
                        </span>
                        <div className="ml-2 flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>⭐</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">{store.reviewCount} reviews</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <span className="mr-2">🕒</span>
                      <span>{store.hours}</span>
                      <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        Open Now
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {store.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button variant="primary" size="sm">
                      View Menu
                    </Button>
                    <Button variant="outline" size="sm">
                      Get Directions
                    </Button>
                    <Button variant="ghost" size="sm">
                      Call Store
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Dispensaries
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}