import React from 'react';
import Link from 'next/link';
import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

// Mock professional data
const professionalData = {
  id: 1,
  name: "Dr. Sarah Chen",
  title: "Cannabis Medicine Specialist",
  specialty: "Pain Management & Oncology",
  credentials: "MD, PhD in Pharmacology",
  experience: "12 years",
  rating: 4.9,
  reviewCount: 156,
  consultationFee: "$150",
  languages: ["English", "Mandarin"],
  expertise: ["Chronic Pain", "Cancer Treatment", "PTSD", "Anxiety", "Epilepsy", "Inflammation"],
  bio: "Dr. Chen specializes in cannabis-based treatments for chronic pain and cancer patients. She has published over 50 peer-reviewed papers on cannabinoid therapy and has been practicing cannabis medicine for over 12 years. She completed her MD at Stanford University and her PhD in Pharmacology at UCSF.",
  location: "San Francisco, CA",
  verified: true,
  telehealth: true,
  education: [
    { degree: "MD", institution: "Stanford University School of Medicine", year: "2008" },
    { degree: "PhD in Pharmacology", institution: "University of California, San Francisco", year: "2012" }
  ],
  certifications: [
    "Board Certified in Internal Medicine",
    "Cannabis Medicine Certification - Society of Cannabis Clinicians",
    "Pain Management Certification",
    "Oncology Specialization"
  ],
  publications: [
    "Cannabinoid Therapy in Cancer Pain Management (Journal of Cannabis Medicine, 2023)",
    "THC:CBD Ratios for Chronic Pain: A Meta-Analysis (Pain Medicine Journal, 2022)",
    "Terpenes and the Entourage Effect in Medical Cannabis (Nature Medicine, 2021)"
  ],
  availability: {
    monday: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"],
    tuesday: ["10:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"],
    wednesday: ["9:00 AM", "11:00 AM", "2:00 PM"],
    thursday: ["10:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"],
    friday: ["9:00 AM", "11:00 AM", "2:00 PM"],
    saturday: ["10:00 AM", "12:00 PM"],
    sunday: []
  }
};

const reviews = [
  {
    id: 1,
    patient: "Jennifer M.",
    rating: 5,
    date: "2 weeks ago",
    verified: true,
    condition: "Chronic Pain",
    review: "Dr. Chen completely changed my life. After years of opioid dependency for chronic pain, she helped me transition to cannabis therapy. Her knowledge is incredible and she takes the time to explain everything. I'm now pain-free and off all prescription medications."
  },
  {
    id: 2,
    patient: "Michael R.",
    rating: 5,
    date: "1 month ago", 
    verified: true,
    condition: "Cancer Treatment",
    review: "Going through chemotherapy was brutal until Dr. Chen prescribed the right cannabis protocol. She eliminated my nausea, helped with appetite, and made the whole process manageable. Highly recommend to any cancer patients."
  },
  {
    id: 3,
    patient: "Lisa K.",
    rating: 4,
    date: "2 months ago",
    verified: true,
    condition: "PTSD",
    review: "Dr. Chen helped me find the right CBD:THC ratio for my PTSD symptoms. Sleep has improved dramatically and anxiety is much more manageable. Professional and caring doctor."
  }
];

export default function ProfessionalProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/professionals" className="text-primary-600 hover:text-primary-500 mb-4 inline-flex items-center">
            ← Back to Professionals
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Profile */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header */}
            <Card variant="elevated">
              <CardContent>
                <div className="md:flex">
                  <div className="md:w-1/4 mb-6 md:mb-0">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-4xl">👨‍⚕️</span>
                    </div>
                  </div>
                  <div className="md:w-3/4 md:pl-6">
                    <div className="flex items-center mb-2">
                      <h1 className="text-2xl font-bold text-gray-900 mr-3">
                        {professionalData.name}
                      </h1>
                      {professionalData.verified && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                          ✓ Verified
                        </span>
                      )}
                    </div>
                    <p className="text-primary-600 font-medium text-lg mb-1">
                      {professionalData.title}
                    </p>
                    <p className="text-gray-600 mb-3">{professionalData.specialty}</p>
                    
                    <div className="flex items-center gap-6 mb-4">
                      <div className="flex items-center">
                        <span className="text-xl font-bold text-primary-600">
                          {professionalData.rating}
                        </span>
                        <span className="text-yellow-400 ml-1">⭐</span>
                        <span className="text-sm text-gray-500 ml-1">
                          ({professionalData.reviewCount} reviews)
                        </span>
                      </div>
                      <span className="text-gray-600">📍 {professionalData.location}</span>
                      <span className="text-gray-600">🎓 {professionalData.experience} experience</span>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      {professionalData.telehealth && (
                        <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
                          💻 Telehealth Available
                        </span>
                      )}
                      <span className="text-gray-600">
                        🗣️ {professionalData.languages.join(', ')}
                      </span>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      {professionalData.bio}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Expertise & Specializations */}
            <Card>
              <CardHeader>
                <CardTitle>Areas of Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {professionalData.expertise.map((area) => (
                    <div key={area} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <span className="w-3 h-3 bg-primary-600 rounded-full mr-3"></span>
                      <span className="font-medium text-gray-900">{area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education & Credentials */}
            <Card>
              <CardHeader>
                <CardTitle>Education & Credentials</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Education</h4>
                    {professionalData.education.map((edu, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <div>
                          <p className="font-medium text-gray-900">{edu.degree}</p>
                          <p className="text-gray-600">{edu.institution}</p>
                        </div>
                        <span className="text-gray-500">{edu.year}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Certifications</h4>
                    <ul className="space-y-2">
                      {professionalData.certifications.map((cert, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          <span className="text-gray-700">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Publications */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Publications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {professionalData.publications.map((pub, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-medium text-gray-900">{pub}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Patient Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="flex items-center mb-1">
                            <span className="font-medium text-gray-900 mr-2">{review.patient}</span>
                            {review.verified && (
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                Verified Patient
                              </span>
                            )}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <div className="flex text-yellow-400 mr-2">
                              {[...Array(review.rating)].map((_, i) => (
                                <span key={i}>⭐</span>
                              ))}
                            </div>
                            <span>{review.date} • {review.condition}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{review.review}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <Button variant="outline">View All Reviews</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            {/* Consultation Info */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Book Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    {professionalData.consultationFee}
                  </div>
                  <p className="text-gray-600">per consultation</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">⏱️</span>
                    <span>60-minute consultation</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">💻</span>
                    <span>Telehealth or in-person</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">📋</span>
                    <span>Treatment plan included</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">🔄</span>
                    <span>Follow-up support</span>
                  </div>
                </div>

                <Button variant="primary" className="w-full mb-3">
                  Book Now - {professionalData.consultationFee}
                </Button>
                <Button variant="outline" className="w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle>This Week's Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(professionalData.availability).map(([day, times]) => (
                    <div key={day}>
                      <div className="font-medium text-gray-900 capitalize mb-2">
                        {day}
                      </div>
                      {times.length > 0 ? (
                        <div className="grid grid-cols-2 gap-2">
                          {times.slice(0, 4).map((time) => (
                            <button
                              key={time}
                              className="text-sm bg-primary-50 text-primary-700 hover:bg-primary-100 px-3 py-2 rounded-lg transition-colors"
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">Not available</p>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    View More Times
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Practice Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">San Francisco, CA</p>
                    <p className="text-gray-600">Telehealth Available Nationwide</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Consultation Types</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Initial Medical Consultation</li>
                      <li>• Follow-up Appointments</li>
                      <li>• Treatment Plan Reviews</li>
                      <li>• Medical Cannabis Certification</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}