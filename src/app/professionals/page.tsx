import React from 'react';
import Link from 'next/link';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

// Mock professional data
const sampleProfessionals = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Cannabis Medicine Specialist",
    specialty: "Pain Management & Oncology",
    credentials: "MD, PhD in Pharmacology",
    experience: "12 years",
    rating: 4.9,
    reviewCount: 156,
    consultationFee: "$150",
    nextAvailable: "Today 3:00 PM",
    languages: ["English", "Mandarin"],
    expertise: ["Chronic Pain", "Cancer Treatment", "PTSD", "Anxiety"],
    bio: "Dr. Chen specializes in cannabis-based treatments for chronic pain and cancer patients. Published researcher with 50+ peer-reviewed papers.",
    location: "San Francisco, CA",
    verified: true,
    telehealth: true
  },
  {
    id: 2,
    name: "Dr. Michael Rodriguez",
    title: "Cannabis Psychiatrist",
    specialty: "Mental Health & Addiction",
    credentials: "MD, Psychiatry Board Certified",
    experience: "15 years",
    rating: 4.8,
    reviewCount: 203,
    consultationFee: "$175",
    nextAvailable: "Tomorrow 9:00 AM",
    languages: ["English", "Spanish"],
    expertise: ["Depression", "Anxiety", "ADHD", "Addiction Recovery"],
    bio: "Leading expert in cannabis psychiatry with extensive research in cannabinoid therapy for mental health conditions.",
    location: "Los Angeles, CA",
    verified: true,
    telehealth: true
  },
  {
    id: 3,
    name: "Dr. Jennifer Walsh",
    title: "Cannabis Neurologist",
    specialty: "Epilepsy & Neurological Disorders",
    credentials: "MD, Neurology Board Certified",
    experience: "10 years",
    rating: 4.9,
    reviewCount: 89,
    consultationFee: "$200",
    nextAvailable: "Friday 2:30 PM",
    languages: ["English"],
    expertise: ["Epilepsy", "Multiple Sclerosis", "Parkinson's", "Seizure Disorders"],
    bio: "Pioneering neurologist specializing in CBD treatments for epilepsy and neurological conditions in pediatric and adult patients.",
    location: "Denver, CO",
    verified: true,
    telehealth: true
  }
];

const specialties = [
  { name: "Pain Management", count: 45, icon: "🩺" },
  { name: "Mental Health", count: 38, icon: "🧠" },
  { name: "Oncology", count: 23, icon: "🎗️" },
  { name: "Neurology", count: 19, icon: "⚡" },
  { name: "Pediatrics", count: 15, icon: "👶" },
  { name: "Women's Health", count: 22, icon: "👩‍⚕️" },
  { name: "Addiction Medicine", count: 17, icon: "🔄" },
  { name: "Dermatology", count: 12, icon: "🧴" }
];

export default function ProfessionalsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cannabis Healthcare Professionals
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with licensed doctors, psychiatrists, and specialists who understand cannabis medicine and can guide your wellness journey.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent>
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <p className="text-gray-600">Licensed Professionals</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent>
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <p className="text-gray-600">Medical Specialties</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent>
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <p className="text-gray-600">Telehealth Available</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent>
              <div className="text-3xl font-bold text-primary-600 mb-2">4.8⭐</div>
              <p className="text-gray-600">Average Rating</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Specialties</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {specialties.map((specialty) => (
                  <button
                    key={specialty.name}
                    className="w-full text-left px-6 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-xl mr-3">{specialty.icon}</span>
                        <span className="font-medium text-gray-900">{specialty.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{specialty.count}</span>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Consultation Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                    <span className="ml-2 text-gray-700">Telehealth</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                    <span className="ml-2 text-gray-700">In-Person</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                    <span className="ml-2 text-gray-700">Phone Consultation</span>
                  </label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                    <span className="ml-2 text-gray-700">Available Today</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                    <span className="ml-2 text-gray-700">Next 3 Days</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                    <span className="ml-2 text-gray-700">This Week</span>
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search Bar */}
            <Card className="mb-8">
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Search by name, specialty, condition..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div className="flex gap-2">
                    <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option>All Locations</option>
                      <option>California</option>
                      <option>Colorado</option>
                      <option>New York</option>
                      <option>Telehealth Only</option>
                    </select>
                    <Button variant="primary">Search</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                {sampleProfessionals.length} professionals found
              </h2>
              <select className="border border-gray-300 rounded-lg px-3 py-2">
                <option>Sort by Rating</option>
                <option>Sort by Price</option>
                <option>Sort by Availability</option>
                <option>Sort by Experience</option>
              </select>
            </div>

            {/* Professional Cards */}
            <div className="space-y-6">
              {sampleProfessionals.map((professional) => (
                <Card key={professional.id} variant="elevated" className="overflow-hidden">
                  <div className="md:flex">
                    {/* Professional Photo */}
                    <div className="md:w-1/4">
                      <div className="h-48 md:h-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="text-4xl mb-2">👨‍⚕️</div>
                          {professional.verified && (
                            <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                              ✓ Verified
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-3/4 p-6">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {professional.name}
                          </h3>
                          <p className="text-primary-600 font-medium mb-1">{professional.title}</p>
                          <p className="text-gray-600 mb-2">{professional.specialty}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>📍 {professional.location}</span>
                            <span>🎓 {professional.experience} experience</span>
                            {professional.telehealth && <span className="text-green-600">💻 Telehealth</span>}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center mb-1">
                            <span className="text-xl font-bold text-primary-600">
                              {professional.rating}
                            </span>
                            <span className="text-yellow-400 ml-1">⭐</span>
                          </div>
                          <p className="text-sm text-gray-500">({professional.reviewCount} reviews)</p>
                        </div>
                      </div>

                      {/* Credentials */}
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>Credentials:</strong> {professional.credentials}
                        </p>
                        <p className="text-sm text-gray-700">{professional.bio}</p>
                      </div>

                      {/* Expertise */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {professional.expertise.map((area) => (
                            <span
                              key={area}
                              className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Languages */}
                      <div className="mb-6">
                        <p className="text-sm text-gray-600">
                          <strong>Languages:</strong> {professional.languages.join(', ')}
                        </p>
                      </div>

                      {/* Booking Info */}
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t border-gray-200">
                        <div>
                          <p className="text-lg font-bold text-gray-900">{professional.consultationFee}</p>
                          <p className="text-sm text-gray-600">Next available: {professional.nextAvailable}</p>
                        </div>
                        <div className="flex space-x-3 mt-3 sm:mt-0">
                          <Link href={`/professionals/${professional.id}`}>
                            <Button variant="outline" size="sm">
                              View Profile
                            </Button>
                          </Link>
                          <Button variant="primary" size="sm">
                            Book Consultation
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Professionals
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="mt-16 bg-primary-50 border-primary-200">
          <CardContent className="text-center py-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Are you a healthcare professional?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our network of cannabis medicine experts and connect with patients who need your expertise.
            </p>
            <Button variant="primary" size="lg">
              Join Our Network
            </Button>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
}