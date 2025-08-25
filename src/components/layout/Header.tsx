'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">420</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Nation</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/stores" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Discover
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Products
            </Link>
            <Link href="/professionals" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Professionals
            </Link>
            <Link href="/community" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Community
            </Link>
            <Link href="/learn" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Learn
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth/login">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button variant="primary" size="sm">
                Join Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/stores"
                className="text-gray-600 hover:text-primary-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Discover Stores
              </Link>
              <Link
                href="/products"
                className="text-gray-600 hover:text-primary-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/professionals"
                className="text-gray-600 hover:text-primary-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Professionals
              </Link>
              <Link
                href="/community"
                className="text-gray-600 hover:text-primary-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                href="/learn"
                className="text-gray-600 hover:text-primary-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Learn
              </Link>
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-100">
                <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full">
                    Log In
                  </Button>
                </Link>
                <Link href="/auth/register" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="primary" size="sm" className="w-full">
                    Join Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};