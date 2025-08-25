import React from 'react';
import Link from 'next/link';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: January 2024
            </p>
          </div>

          <Card className="mb-8">
            <CardContent>
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using 420 Nation ("the Platform"), you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">2. Use License</h2>
                <p className="text-gray-700 mb-4">
                  Permission is granted to temporarily use 420 Nation for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the Platform</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">3. Age Verification and Compliance</h2>
                <p className="text-gray-700 mb-4">
                  You must be at least 21 years of age (or the legal age in your jurisdiction) to use this Platform. By using 420 Nation, you represent and warrant that you meet these age requirements.
                </p>
                <p className="text-gray-700 mb-4">
                  You agree to comply with all applicable local, state, and federal laws regarding cannabis use and possession in your jurisdiction.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">4. User Content</h2>
                <p className="text-gray-700 mb-4">
                  Our Platform allows users to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for content that you post to the Platform, including its legality, reliability, and appropriateness.
                </p>
                <p className="text-gray-700 mb-4">
                  By posting content to 420 Nation, you represent and warrant that:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Content is yours (you own it) and/or you have the right to use it</li>
                  <li>Content does not infringe, violate or misappropriate the rights of any third party</li>
                  <li>Content complies with all applicable laws and regulations</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">5. Prohibited Uses</h2>
                <p className="text-gray-700 mb-4">
                  You may not use our Platform:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">6. Medical Disclaimer</h2>
                <p className="text-gray-700 mb-4">
                  The information provided on 420 Nation is for educational purposes only and should not be considered medical advice. Always consult with a qualified healthcare provider before making decisions about cannabis use for medical purposes.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">7. Privacy Policy</h2>
                <p className="text-gray-700 mb-4">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Platform.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">8. Termination</h2>
                <p className="text-gray-700 mb-4">
                  We may terminate or suspend your account and bar access to the Platform immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">9. Disclaimer</h2>
                <p className="text-gray-700 mb-4">
                  The information on this Platform is provided on an "as is" basis. To the fullest extent permitted by law, this Company:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>excludes all representations and warranties relating to this Platform and its contents</li>
                  <li>excludes all liability for damages arising out of or in connection with your use of this Platform</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">10. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to revise these Terms at any time as we see fit, and by using this Platform you are expected to review such Terms on a regular basis to ensure you understand all terms and conditions governing use of this Platform.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">11. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms, please contact us at legal@420nation.com
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link href="/" className="text-primary-600 hover:text-primary-500">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}