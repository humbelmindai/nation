import React from 'react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

// Mock product data
const sampleProducts = [
  {
    id: 1,
    name: "Blue Dream",
    brand: "Mountain Grown",
    category: "Flower",
    type: "Hybrid",
    thc: "18-22%",
    cbd: "0.1%",
    price: "$45",
    priceRange: "$35-55",
    rating: 4.7,
    reviewCount: 143,
    effects: ["Relaxed", "Happy", "Creative", "Euphoric"],
    flavors: ["Sweet", "Berry", "Vanilla"],
    description: "A legendary West Coast strain that delivers balanced effects and a sweet berry aroma.",
    image: "/api/placeholder/300/300"
  },
  {
    id: 2,
    name: "Strawberry Cough",
    brand: "Organic Gardens",
    category: "Flower",
    type: "Sativa",
    thc: "15-20%",
    cbd: "0.2%",
    price: "$42",
    priceRange: "$38-48",
    rating: 4.5,
    reviewCount: 89,
    effects: ["Uplifted", "Energetic", "Focused", "Happy"],
    flavors: ["Strawberry", "Sweet", "Earthy"],
    description: "Energizing sativa with a distinctive strawberry flavor and uplifting effects.",
    image: "/api/placeholder/300/300"
  },
  {
    id: 3,
    name: "Northern Lights Gummies",
    brand: "Green Treats",
    category: "Edibles",
    type: "Indica",
    thc: "10mg each",
    cbd: "2mg each",
    price: "$25",
    priceRange: "$20-30",
    rating: 4.8,
    reviewCount: 201,
    effects: ["Sleepy", "Relaxed", "Hungry", "Happy"],
    flavors: ["Mixed Berry", "Natural"],
    description: "Premium cannabis gummies with precise dosing and delicious fruit flavors.",
    image: "/api/placeholder/300/300"
  },
  {
    id: 4,
    name: "OG Kush Live Resin",
    brand: "Dab Labs",
    category: "Concentrates",
    type: "Hybrid",
    thc: "75-85%",
    cbd: "1%",
    price: "$65",
    priceRange: "$55-75",
    rating: 4.9,
    reviewCount: 67,
    effects: ["Euphoric", "Relaxed", "Sleepy", "Happy"],
    flavors: ["Pine", "Earthy", "Lemon"],
    description: "High-potency live resin with full terpene profile and exceptional flavor.",
    image: "/api/placeholder/300/300"
  }
];

const categories = [
  { name: "All Products", count: "450+" },
  { name: "Flower", count: "180+" },
  { name: "Edibles", count: "120+" },
  { name: "Concentrates", count: "85+" },
  { name: "Vapes", count: "95+" },
  { name: "Topicals", count: "35+" },
  { name: "Accessories", count: "65+" }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cannabis Product Catalog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Browse premium cannabis products with detailed lab results, reviews, and real-time pricing from licensed dispensaries.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Product Categories</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className="w-full text-left px-6 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{category.name}</span>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Filter by Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['Indica', 'Sativa', 'Hybrid'].map((type) => (
                    <label key={type} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                      <span className="ml-2 text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>THC Content</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['0-10%', '10-20%', '20-30%', '30%+'].map((range) => (
                    <label key={range} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                      <span className="ml-2 text-gray-700">{range}</span>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Price Range</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Apply Filter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search and Sort */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search products, strains, brands..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div className="flex gap-2">
                  <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option>Sort by Popular</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Highest Rated</option>
                    <option>Most Reviews</option>
                    <option>THC Content</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                {sampleProducts.length} products found
              </h2>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  Grid View
                </Button>
                <Button variant="ghost" size="sm">
                  List View
                </Button>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sampleProducts.map((product) => (
                <Card key={product.id} variant="elevated" padding="none" className="overflow-hidden group hover:shadow-xl transition-shadow">
                  {/* Product Image */}
                  <div className="relative h-48 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">🌿</div>
                      <p className="text-sm opacity-90">{product.category}</p>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                        {product.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    {/* Product Header */}
                    <div className="mb-3">
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600">{product.brand}</p>
                    </div>

                    {/* THC/CBD Info */}
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex space-x-3 text-xs">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                          THC {product.thc}
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                          CBD {product.cbd}
                        </span>
                      </div>
                    </div>

                    {/* Effects */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {product.effects.slice(0, 3).map((effect) => (
                          <span
                            key={effect}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                          >
                            {effect}
                          </span>
                        ))}
                        {product.effects.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{product.effects.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Rating and Price */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">⭐</span>
                        <span className="font-medium text-gray-900">{product.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({product.reviewCount})</span>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-xl text-primary-600">{product.price}</p>
                        <p className="text-xs text-gray-500">{product.priceRange}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <Button variant="primary" size="sm" className="flex-1">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Compare
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}