'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto">
            <Card variant="elevated">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">✓</span>
                </div>
                <CardTitle className="text-2xl">Check Your Email</CardTitle>
                <p className="text-gray-600 mt-2">
                  We've sent password reset instructions to {email}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="text-center space-y-4">
                  <p className="text-sm text-gray-600">
                    Didn't receive the email? Check your spam folder or try again.
                  </p>
                  
                  <div className="space-y-2">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Try Different Email
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full"
                      onClick={handleSubmit}
                    >
                      Resend Email
                    </Button>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <Link href="/auth/login" className="text-sm text-primary-600 hover:text-primary-500">
                      ← Back to Sign In
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Reset Your Password
            </h1>
            <p className="text-gray-600">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Forgot Password</CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={isLoading || !email}
                >
                  {isLoading ? 'Sending...' : 'Send Reset Link'}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Remember your password?{' '}
                  <Link href="/auth/login" className="text-primary-600 hover:text-primary-500 font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Demo Notice */}
          <Card className="mt-6 border-blue-200 bg-blue-50">
            <CardContent>
              <div className="flex items-center">
                <span className="text-blue-600 text-xl mr-3">ℹ️</span>
                <div>
                  <h3 className="font-medium text-blue-900">Demo Platform</h3>
                  <p className="text-blue-800 text-sm">
                    This is a demo version. No actual emails will be sent.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}