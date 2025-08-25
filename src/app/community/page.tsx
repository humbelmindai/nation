'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

// Mock community data
const posts = [
  {
    id: 1,
    title: "First time trying CBD for anxiety - need advice",
    content: "I've been struggling with anxiety and my doctor recommended trying CBD. What dosage should I start with? Any strain recommendations?",
    author: "anxious_newbie",
    community: "r/CBDHelp",
    timestamp: "2 hours ago",
    upvotes: 24,
    downvotes: 2,
    comments: 18,
    tags: ["CBD", "Anxiety", "Beginner"],
    pinned: false,
    trending: true
  },
  {
    id: 2,
    title: "🔬 Lab Results: Comparing Indoor vs Outdoor Blue Dream",
    content: "I got lab tests done on the same Blue Dream strain grown indoor vs outdoor. The terpene profiles are fascinating! Indoor showed 23% THC vs 19% outdoor, but outdoor had way more diverse terpenes...",
    author: "LabRat420",
    community: "r/CannabisScience",
    timestamp: "4 hours ago",
    upvotes: 156,
    downvotes: 8,
    comments: 34,
    tags: ["Lab Results", "Blue Dream", "Science"],
    pinned: false,
    trending: true
  },
  {
    id: 3,
    title: "Weekly Strain Review: Wedding Cake - The Perfect Evening Strain",
    content: "Just finished an eighth of Wedding Cake from Green Valley Dispensary. This hybrid is absolutely perfect for winding down after work. Strong body relaxation without being too sedating...",
    author: "StrainReviewer",
    community: "r/StrainReviews",
    timestamp: "6 hours ago",
    upvotes: 89,
    downvotes: 4,
    comments: 22,
    tags: ["Strain Review", "Wedding Cake", "Hybrid"],
    pinned: false,
    trending: false
  },
  {
    id: 4,
    title: "📌 PINNED: Community Guidelines & Rules - Please Read",
    content: "Welcome to 420 Nation Community! Please read our community guidelines to ensure a safe, respectful, and educational environment for all members...",
    author: "Moderator",
    community: "r/420Nation",
    timestamp: "1 week ago",
    upvotes: 445,
    downvotes: 12,
    comments: 67,
    tags: ["Guidelines", "Rules"],
    pinned: true,
    trending: false
  },
  {
    id: 5,
    title: "Cannabis and Chronic Pain: My 5-Year Journey",
    content: "I've been using cannabis for chronic pain management for 5 years now. Here's what I've learned about different strains, dosing, and finding what works...",
    author: "ChronicWarrior",
    community: "r/MedicalCannabis",
    timestamp: "1 day ago",
    upvotes: 203,
    downvotes: 3,
    comments: 45,
    tags: ["Medical", "Chronic Pain", "Experience"],
    pinned: false,
    trending: true
  }
];

const communities = [
  { name: "r/420Nation", members: "125k", description: "General cannabis discussion", color: "bg-green-100 text-green-800" },
  { name: "r/StrainReviews", members: "89k", description: "Strain reviews and recommendations", color: "bg-purple-100 text-purple-800" },
  { name: "r/MedicalCannabis", members: "76k", description: "Medical cannabis discussion", color: "bg-blue-100 text-blue-800" },
  { name: "r/CannabisScience", members: "54k", description: "Research and science", color: "bg-indigo-100 text-indigo-800" },
  { name: "r/CBDHelp", members: "43k", description: "CBD questions and advice", color: "bg-teal-100 text-teal-800" },
  { name: "r/GrowTips", members: "38k", description: "Growing advice and tips", color: "bg-emerald-100 text-emerald-800" },
  { name: "r/Cannabis101", members: "32k", description: "Beginner questions", color: "bg-yellow-100 text-yellow-800" },
  { name: "r/Edibles", members: "29k", description: "Edibles and cooking", color: "bg-orange-100 text-orange-800" }
];

const trendingTopics = [
  "CBD for anxiety", "Blue Dream strain", "Medical cannabis", "Terpenes", "Dosing guide",
  "Dispensary reviews", "Growing tips", "Lab testing", "Pain management", "Sleep aids"
];

export default function CommunityPage() {
  const [selectedFilter, setSelectedFilter] = useState('hot');
  const [selectedCommunity, setSelectedCommunity] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cannabis Community
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow cannabis enthusiasts, share experiences, ask questions, and learn from the community.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-6">
            {/* Create Post */}
            <Card>
              <CardContent>
                <Link href="/community/create">
                  <Button variant="primary" className="w-full">
                    📝 Create Post
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Communities */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Communities</CardTitle>
              </CardHeader>
              <CardContent className="p-0 max-h-96 overflow-y-auto">
                <button
                  onClick={() => setSelectedCommunity('all')}
                  className={`w-full text-left px-6 py-3 hover:bg-gray-50 border-b border-gray-100 transition-colors ${
                    selectedCommunity === 'all' ? 'bg-primary-50' : ''
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium text-gray-900">All Communities</span>
                    </div>
                    <span className="text-sm text-gray-500">500k+</span>
                  </div>
                </button>
                {communities.map((community) => (
                  <button
                    key={community.name}
                    onClick={() => setSelectedCommunity(community.name)}
                    className={`w-full text-left px-6 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors ${
                      selectedCommunity === community.name ? 'bg-primary-50' : ''
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${community.color}`}>
                          {community.name}
                        </span>
                        <p className="text-sm text-gray-600 mt-1">{community.description}</p>
                      </div>
                      <span className="text-sm text-gray-500">{community.members}</span>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle>🔥 Trending Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic) => (
                    <button
                      key={topic}
                      className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
                    >
                      #{topic.replace(' ', '')}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Community Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Members</span>
                    <span className="font-medium">500k+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Active Today</span>
                    <span className="font-medium text-green-600">12.5k</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Posts Today</span>
                    <span className="font-medium">843</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Comments Today</span>
                    <span className="font-medium">5.2k</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Filters */}
            <Card className="mb-6">
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['hot', 'new', 'top', 'rising'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setSelectedFilter(filter)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedFilter === filter
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {filter === 'hot' && '🔥'} {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Posts */}
            <div className="space-y-4">
              {posts.map((post) => (
                <Card key={post.id} variant="elevated" className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex">
                      {/* Voting */}
                      <div className="w-12 bg-gray-50 flex flex-col items-center justify-center py-4">
                        <button className="text-gray-400 hover:text-primary-600 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <span className="text-sm font-medium text-gray-700 my-1">
                          {post.upvotes - post.downvotes}
                        </span>
                        <button className="text-gray-400 hover:text-red-600 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6">
                        {/* Post Header */}
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium mr-3 ${
                            communities.find(c => c.name === post.community)?.color || 'bg-gray-100 text-gray-700'
                          }`}>
                            {post.community}
                          </span>
                          <span>u/{post.author}</span>
                          <span className="mx-2">•</span>
                          <span>{post.timestamp}</span>
                          {post.pinned && <span className="ml-2 text-green-600 font-medium">📌 PINNED</span>}
                          {post.trending && <span className="ml-2 text-orange-600 font-medium">🔥 TRENDING</span>}
                        </div>

                        {/* Title */}
                        <Link href={`/community/post/${post.id}`}>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-primary-600 transition-colors cursor-pointer">
                            {post.title}
                          </h3>
                        </Link>

                        {/* Content Preview */}
                        <p className="text-gray-700 mb-4 line-clamp-3">
                          {post.content}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <Link href={`/community/post/${post.id}#comments`} className="flex items-center hover:text-primary-600 transition-colors">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                            </svg>
                            {post.comments} comments
                          </Link>
                          <button className="flex items-center hover:text-primary-600 transition-colors">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                            </svg>
                            Share
                          </button>
                          <button className="flex items-center hover:text-primary-600 transition-colors">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                            </svg>
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Posts
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}