'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

// Mock podcast data
const podcastShows = [
  {
    id: 1,
    title: "The Cannabis Science Show",
    host: "Dr. Emily Rodriguez",
    description: "Deep dives into cannabis research, medical applications, and scientific breakthroughs with leading researchers and clinicians.",
    category: "Science & Medicine",
    episodes: 87,
    subscribers: "125K",
    rating: 4.8,
    coverImage: "/api/placeholder/300/300",
    isVerified: true,
    frequency: "Weekly"
  },
  {
    id: 2,
    title: "Cannabis & Wellness",
    host: "Sarah Johnson, RN",
    description: "Exploring the intersection of cannabis and holistic wellness, featuring patient stories and healthcare professional insights.",
    category: "Health & Wellness",
    episodes: 156,
    subscribers: "89K",
    rating: 4.7,
    coverImage: "/api/placeholder/300/300",
    isVerified: true,
    frequency: "Bi-weekly"
  },
  {
    id: 3,
    title: "The Hemp Revolution",
    host: "Mike Thompson",
    description: "Covering hemp industry news, business insights, and the future of sustainable cannabis agriculture.",
    category: "Business & Industry",
    episodes: 203,
    subscribers: "67K",
    rating: 4.6,
    coverImage: "/api/placeholder/300/300",
    isVerified: true,
    frequency: "Weekly"
  },
  {
    id: 4,
    title: "Psychedelic Medicine Today",
    host: "Dr. James Wilson",
    description: "Exploring psychedelic therapy, research updates, and the therapeutic potential of consciousness-altering substances.",
    category: "Psychedelics & Therapy",
    episodes: 94,
    subscribers: "78K",
    rating: 4.9,
    coverImage: "/api/placeholder/300/300",
    isVerified: true,
    frequency: "Weekly"
  }
];

const featuredEpisodes = [
  {
    id: 1,
    showId: 1,
    showTitle: "The Cannabis Science Show",
    title: "Understanding the Endocannabinoid System: New Research Findings",
    description: "Dr. Raphael Mechoulam joins us to discuss his latest research on the endocannabinoid system and its role in human health.",
    duration: "58:34",
    publishedAt: "2 days ago",
    playCount: "23.5K",
    category: "Science & Medicine",
    featured: true,
    transcript: true
  },
  {
    id: 2,
    showId: 2,
    showTitle: "Cannabis & Wellness",
    title: "Patient Stories: Cannabis for Chronic Pain Management",
    description: "Three patients share their journeys using cannabis to manage chronic pain conditions and reduce opioid dependence.",
    duration: "45:22",
    publishedAt: "5 days ago",
    playCount: "18.2K",
    category: "Health & Wellness",
    featured: true,
    transcript: true
  },
  {
    id: 3,
    showId: 3,
    showTitle: "The Hemp Revolution",
    title: "Hemp Farming: Sustainable Agriculture for the Future",
    description: "Exploring regenerative hemp farming practices and their environmental benefits with leading agricultural experts.",
    duration: "52:18",
    publishedAt: "1 week ago",
    playCount: "15.8K",
    category: "Business & Industry",
    featured: false,
    transcript: true
  },
  {
    id: 4,
    showId: 4,
    showTitle: "Psychedelic Medicine Today",
    title: "MDMA-Assisted Therapy: Clinical Trial Results",
    description: "Breaking down the latest MDMA-assisted therapy clinical trial results and implications for PTSD treatment.",
    duration: "61:45",
    publishedAt: "3 days ago",
    playCount: "21.3K",
    category: "Psychedelics & Therapy",
    featured: true,
    transcript: true
  },
  {
    id: 5,
    showId: 1,
    showTitle: "The Cannabis Science Show",
    title: "Terpenes and the Entourage Effect: Separating Fact from Fiction",
    description: "Examining the scientific evidence behind the entourage effect and how terpenes interact with cannabinoids.",
    duration: "49:17",
    publishedAt: "1 week ago",
    playCount: "19.7K",
    category: "Science & Medicine",
    featured: false,
    transcript: true
  },
  {
    id: 6,
    showId: 2,
    showTitle: "Cannabis & Wellness",
    title: "Microdosing Cannabis: A Practical Guide",
    description: "Learn about microdosing protocols, benefits, and how to find your optimal therapeutic dose.",
    duration: "41:33",
    publishedAt: "2 weeks ago",
    playCount: "16.4K",
    category: "Health & Wellness",
    featured: false,
    transcript: false
  }
];

const categories = [
  { name: "All Categories", count: 500 },
  { name: "Science & Medicine", count: 156 },
  { name: "Health & Wellness", count: 134 },
  { name: "Business & Industry", count: 89 },
  { name: "Psychedelics & Therapy", count: 67 },
  { name: "Legal & Policy", count: 54 }
];

export default function PodcastsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);
  const [showTranscript, setShowTranscript] = useState<number | null>(null);

  const playEpisode = (episodeId: number) => {
    setCurrentlyPlaying(currentlyPlaying === episodeId ? null : episodeId);
  };

  const toggleTranscript = (episodeId: number) => {
    setShowTranscript(showTranscript === episodeId ? null : episodeId);
  };

  const filteredEpisodes = selectedCategory === "All Categories" 
    ? featuredEpisodes 
    : featuredEpisodes.filter(ep => ep.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/learn" className="text-primary-600 hover:text-primary-500 mb-4 inline-flex items-center">
            ← Back to Learning Hub
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cannabis & Wellness Podcasts
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Listen to expert-led discussions on cannabis science, medicine, wellness, and industry insights from leading researchers and practitioners.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Browse by Category</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-left px-6 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors ${
                      selectedCategory === category.name ? 'bg-primary-50 border-primary-200' : ''
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{category.name}</span>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Subscription CTA */}
            <Card className="bg-primary-50 border-primary-200">
              <CardContent className="text-center py-6">
                <div className="text-primary-600 text-3xl mb-3">🎧</div>
                <h3 className="font-bold text-gray-900 mb-2">Never Miss an Episode</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Subscribe to get notifications for new episodes and exclusive content.
                </p>
                <Button variant="primary" size="sm">
                  Subscribe Free
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Platform Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Shows</span>
                    <span className="font-medium">25+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Episodes</span>
                    <span className="font-medium">500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Subscribers</span>
                    <span className="font-medium">450K+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Listeners</span>
                    <span className="font-medium text-green-600">89K</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Featured Shows */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Podcast Shows</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {podcastShows.map((show) => (
                  <Card key={show.id} variant="elevated" className="overflow-hidden">
                    <div className="flex">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                        <span className="text-white text-2xl">🎙️</span>
                      </div>
                      <div className="flex-1 p-4">
                        <div className="flex items-center mb-2">
                          <h3 className="font-bold text-gray-900">{show.title}</h3>
                          {show.isVerified && (
                            <span className="ml-2 text-primary-600">✓</span>
                          )}
                        </div>
                        <p className="text-sm text-primary-600 mb-1">{show.host}</p>
                        <p className="text-xs text-gray-600 mb-2">{show.description.substring(0, 100)}...</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{show.episodes} episodes</span>
                          <span>{show.rating}⭐</span>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 pb-4">
                      <Button variant="outline" size="sm" className="w-full">
                        View Show
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Recent Episodes */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {selectedCategory === "All Categories" ? "Featured Episodes" : `${selectedCategory} Episodes`}
              </h2>
              <div className="space-y-6">
                {filteredEpisodes.map((episode) => (
                  <Card key={episode.id} variant="elevated">
                    <CardContent>
                      <div className="flex items-start space-x-4">
                        {/* Play Button */}
                        <button
                          onClick={() => playEpisode(episode.id)}
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                            currentlyPlaying === episode.id
                              ? 'bg-primary-600 text-white'
                              : 'bg-gray-100 hover:bg-primary-100 text-gray-600'
                          }`}
                        >
                          {currentlyPlaying === episode.id ? '⏸️' : '▶️'}
                        </button>

                        {/* Episode Info */}
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full mr-3">
                              {episode.showTitle}
                            </span>
                            {episode.featured && (
                              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full mr-2">
                                Featured
                              </span>
                            )}
                            <span className="text-xs text-gray-500">{episode.publishedAt}</span>
                          </div>
                          
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {episode.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-3 leading-relaxed">
                            {episode.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>⏱️ {episode.duration}</span>
                              <span>👁️ {episode.playCount} plays</span>
                              {episode.transcript && (
                                <button
                                  onClick={() => toggleTranscript(episode.id)}
                                  className="text-primary-600 hover:text-primary-500"
                                >
                                  📝 Transcript
                                </button>
                              )}
                            </div>
                            <div className="flex items-center space-x-2">
                              <button className="text-gray-400 hover:text-primary-600">
                                📤 Share
                              </button>
                              <button className="text-gray-400 hover:text-primary-600">
                                ⭐ Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Audio Player (when playing) */}
                      {currentlyPlaying === episode.id && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Now Playing</span>
                            <span className="text-sm text-gray-500">15:32 / {episode.duration}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                            <div className="bg-primary-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                          </div>
                          <div className="flex items-center justify-center space-x-4">
                            <button className="text-gray-600 hover:text-primary-600">⏮️</button>
                            <button className="text-primary-600 text-xl">⏸️</button>
                            <button className="text-gray-600 hover:text-primary-600">⏭️</button>
                            <div className="flex items-center space-x-2">
                              <span className="text-gray-600">🔊</span>
                              <div className="w-20 bg-gray-200 rounded-full h-1">
                                <div className="bg-primary-600 h-1 rounded-full" style={{ width: '70%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Transcript */}
                      {showTranscript === episode.id && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-medium text-gray-900 mb-3">Episode Transcript</h4>
                          <div className="text-sm text-gray-700 leading-relaxed max-h-64 overflow-y-auto">
                            <p className="mb-3">
                              <strong>[00:00]</strong> Welcome back to {episode.showTitle}. I'm your host, and today we're diving deep into...
                            </p>
                            <p className="mb-3">
                              <strong>[00:15]</strong> Our guest today is a leading researcher in the field of cannabinoid science...
                            </p>
                            <p className="mb-3">
                              <strong>[00:32]</strong> Let's start by discussing the fundamental mechanisms of how cannabis interacts with our body's endocannabinoid system...
                            </p>
                            <p className="text-primary-600 cursor-pointer">
                              → View full transcript
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg">
                Load More Episodes
              </Button>
            </div>
          </div>
        </div>

        {/* Create Your Own Podcast CTA */}
        <Card className="mt-16 bg-gradient-to-r from-primary-50 to-emerald-50 border-primary-200">
          <CardContent className="text-center py-12">
            <div className="text-4xl mb-4">🎙️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have a Cannabis Story to Share?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our community of cannabis educators, researchers, and advocates. Share your knowledge and help others on their cannabis wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Submit Podcast Idea
              </Button>
              <Button variant="outline" size="lg">
                Become a Guest
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
}