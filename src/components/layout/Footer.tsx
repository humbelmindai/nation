import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">420</span>
              </div>
              <span className="text-2xl font-bold">Nation</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting cannabis wellness communities nationwide with trusted, secure, and compliant solutions.
            </p>
            <div className="mt-6">
              <p className="text-xs text-gray-500">
                Licensed Cannabis Platform
              </p>
            </div>
          </div>

          {/* Discover Section */}
          <div>
            <h5 className="font-semibold text-white mb-4">Discover</h5>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="/stores" className="hover:text-primary-400 transition-colors">
                  Dispensaries
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/stores?type=delivery" className="hover:text-primary-400 transition-colors">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="/products/reviews" className="hover:text-primary-400 transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/deals" className="hover:text-primary-400 transition-colors">
                  Deals
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h5 className="font-semibold text-white mb-4">Connect</h5>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="/community" className="hover:text-primary-400 transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/professionals" className="hover:text-primary-400 transition-colors">
                  Professionals
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-primary-400 transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/community/forums" className="hover:text-primary-400 transition-colors">
                  Forums
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h5 className="font-semibold text-white mb-4">Resources</h5>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="/learn" className="hover:text-primary-400 transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-primary-400 transition-colors">
                  Legal Info
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-primary-400 transition-colors">
                  Compliance
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 420 Nation Platform. Licensed cannabis wellness marketplace.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-400 text-xs">Platform Active</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-400 text-xs">Compliance Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};