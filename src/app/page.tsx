import Link from 'next/link';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-green-600">420 Nation</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The premier integrated cannabis wellness platform connecting consumers, 
            dispensaries, healthcare professionals, and community in one secure ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/stores">
              <Button variant="primary" size="xl">
                Find Dispensaries
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" size="xl">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Everything You Need for Cannabis Wellness
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🗺️</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Store Discovery</h4>
              <p className="text-gray-600">Find licensed dispensaries, delivery services, and cannabis retailers near you with detailed reviews and menus.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">👥</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Professional Network</h4>
              <p className="text-gray-600">Connect with cannabis-friendly doctors, therapists, and wellness professionals for personalized care.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🏪</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Marketplace</h4>
              <p className="text-gray-600">Browse products, compare prices, read lab results, and make informed decisions about your wellness journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Database Status */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Platform Status</h3>
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700">420 Nation Platform Deployed Successfully!</span>
          </div>
          <p className="text-gray-600 mt-4">
            Phase 1 Foundation Complete • Database Connected • Ready for Customization
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}