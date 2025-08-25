import React from 'react';
import Link from 'next/link';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Card, CardContent } from '../../components/ui/Card';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: January 2024
            </p>
          </div>

          <Card className="mb-8">
            <CardContent>
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 mb-2">Personal Information</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Account credentials (username, password)</li>
                  <li>Age verification information</li>
                  <li>Payment information (processed securely by third-party providers)</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-900 mb-2">Usage Information</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Information about how you use our Platform</li>
                  <li>Pages viewed, links clicked, and other interactions</li>
                  <li>Search queries and preferences</li>
                  <li>Device information (IP address, browser type, operating system)</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">2. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Provide, maintain, and improve our Platform</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and security alerts</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Communicate with you about products, services, and events</li>
                  <li>Personalize your experience and provide tailored content</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">3. Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Service Providers:</strong> We may share information with trusted third parties who assist us in operating our Platform</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> Information may be transferred as part of a merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> We may share information with your explicit consent</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">4. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Staff training on data protection practices</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">5. Data Retention</h2>
                <p className="text-gray-700 mb-4">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">6. Your Rights and Choices</h2>
                <p className="text-gray-700 mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Access:</strong> Request a copy of the personal information we have about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate personal information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Objection:</strong> Object to our processing of your personal information</li>
                  <li><strong>Restriction:</strong> Request restriction of processing your personal information</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">7. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to collect and use personal information about you. You can manage your cookie preferences through your browser settings.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">8. Age Verification and Minors</h2>
                <p className="text-gray-700 mb-4">
                  Our Platform is not intended for use by individuals under the age of 21 (or the legal age in their jurisdiction). We do not knowingly collect personal information from minors.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">9. International Data Transfers</h2>
                <p className="text-gray-700 mb-4">
                  If you are located outside of the United States, please be aware that information we collect may be transferred to and processed in the United States, where data protection laws may differ from those in your country.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">10. Changes to Privacy Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">11. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <ul className="list-none text-gray-700 mb-4">
                  <li>Email: privacy@420nation.com</li>
                  <li>Address: [Company Address]</li>
                  <li>Phone: [Company Phone]</li>
                </ul>
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