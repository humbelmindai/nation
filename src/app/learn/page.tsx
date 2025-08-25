import React from 'react';
import Link from 'next/link';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

// Mock educational content
const learningPaths = [
  {
    id: 1,
    title: "Cannabis Basics for Beginners",
    description: "Everything you need to know to start your cannabis journey safely and effectively.",
    lessons: 12,
    duration: "2 hours",
    level: "Beginner",
    topics: ["What is Cannabis", "THC vs CBD", "Consumption Methods", "Dosing Guidelines", "Safety & Legal"],
    progress: 0,
    icon: "🌱"
  },
  {
    id: 2,
    title: "Medical Cannabis Fundamentals",
    description: "Learn about medical cannabis applications, conditions treated, and working with healthcare providers.",
    lessons: 18,
    duration: "3 hours",
    level: "Intermediate", 
    topics: ["Medical Benefits", "Conditions Treated", "Doctor Consultation", "Medical vs Recreational", "Research"],
    progress: 0,
    icon: "🩺"
  },
  {
    id: 3,
    title: "Advanced Cannabis Science",
    description: "Deep dive into cannabinoids, terpenes, the endocannabinoid system, and cannabis research.",
    lessons: 24,
    duration: "4 hours",
    level: "Advanced",
    topics: ["Endocannabinoid System", "Terpene Profiles", "Lab Testing", "Cannabis Research", "Extraction Methods"],
    progress: 0,
    icon: "🔬"
  }
];

const featuredStrains = [
  {
    id: 1,
    name: "Blue Dream",
    type: "Hybrid (Sativa-dominant)",
    thc: "17-24%",
    cbd: "0.1-0.2%",
    genetics: "Blueberry × Haze",
    effects: ["Creative", "Euphoric", "Relaxed", "Happy", "Uplifted"],
    medicalUses: ["Stress", "Depression", "Pain", "Nausea", "Lack of Appetite"],
    terpenes: [
      { name: "Myrcene", percentage: "0.8%" },
      { name: "Pinene", percentage: "0.6%" },
      { name: "Caryophyllene", percentage: "0.4%" }
    ],
    flavorProfile: ["Sweet", "Berry", "Vanilla", "Herbal"],
    difficulty: "Easy",
    flowering: "9-10 weeks",
    description: "A legendary West Coast strain that delivers balanced effects and a sweet berry aroma. Perfect for daytime use."
  },
  {
    id: 2,
    name: "OG Kush",
    type: "Hybrid (Indica-dominant)",
    thc: "20-25%",
    cbd: "0.1-0.3%",
    genetics: "Chemdawg × Lemon Thai × Old World Paki Kush",
    effects: ["Relaxed", "Happy", "Euphoric", "Sleepy", "Hungry"],
    medicalUses: ["Stress", "Anxiety", "Pain", "Insomnia", "ADHD"],
    terpenes: [
      { name: "Limonene", percentage: "1.2%" },
      { name: "Myrcene", percentage: "0.9%" },
      { name: "Caryophyllene", percentage: "0.7%" }
    ],
    flavorProfile: ["Earthy", "Pine", "Lemon", "Woody"],
    difficulty: "Moderate",
    flowering: "8-9 weeks",
    description: "The legendary strain that started the California cannabis revolution. Known for its distinctive aroma and potent effects."
  }
];

const recentArticles = [
  {
    id: 1,
    title: "Understanding Cannabis Terpenes: The Complete Guide",
    excerpt: "Learn how terpenes affect the cannabis experience and contribute to the entourage effect.",
    readTime: "8 min read",
    category: "Science",
    author: "Dr. Cannabis Research",
    publishedAt: "2 days ago",
    featured: true
  },
  {
    id: 2,
    title: "Microdosing Cannabis: A Beginner's Guide",
    excerpt: "Discover how to use minimal amounts of cannabis for maximum therapeutic benefit.",
    readTime: "6 min read",
    category: "Medical",
    author: "Medical Cannabis Expert",
    publishedAt: "5 days ago",
    featured: false
  },
  {
    id: 3,
    title: "Cannabis and Sleep: What the Research Shows",
    excerpt: "Exploring how different cannabinoids and terpenes can improve sleep quality.",
    readTime: "10 min read",
    category: "Health",
    author: "Sleep Specialist",
    publishedAt: "1 week ago",
    featured: true
  }
];

const categories = [
  { name: "Cannabis Basics", count: 45, icon: "🌱" },
  { name: "Medical Cannabis", count: 67, icon: "🩺" },
  { name: "Cannabis Science", count: 34, icon: "🔬" },
  { name: "Strain Profiles", count: 150, icon: "📊" },
  { name: "Cultivation", count: 28, icon: "🌿" },
  { name: "Legal & Policy", count: 23, icon: "⚖️" },
  { name: "History & Culture", count: 19, icon: "📚" },
  { name: "Cooking & Recipes", count: 31, icon: "👨‍🍳" }
];

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cannabis Education Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn everything about cannabis from basics to advanced science. Explore our comprehensive strain database and evidence-based educational content.
          </p>
        </div>

        {/* Learning Paths */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Learning Paths</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {learningPaths.map((path) => (
              <Card key={path.id} variant="elevated" className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <span className="text-3xl mr-3">{path.icon}</span>
                    <div>
                      <CardTitle className="text-lg">{path.title}</CardTitle>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          path.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                          path.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {path.level}
                        </span>
                        <span className="ml-2">{path.lessons} lessons</span>
                        <span className="mx-1">•</span>
                        <span>{path.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{path.description}</p>
                  <div className="space-y-2 mb-4">
                    <h4 className="font-medium text-gray-900">What you'll learn:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {path.topics.slice(0, 3).map((topic) => (
                        <li key={topic} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                          {topic}
                        </li>
                      ))}
                      {path.topics.length > 3 && (
                        <li className="text-primary-600 font-medium">+{path.topics.length - 3} more topics</li>
                      )}
                    </ul>
                  </div>
                  <Link href={`/learn/path/${path.id}`}>
                    <Button variant="primary" className="w-full">
                      Start Learning
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Strain Database Preview */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Strain Encyclopedia</h2>
                <Link href="/learn/strains">
                  <Button variant="outline">View All Strains →</Button>
                </Link>
              </div>
              <div className="space-y-6">
                {featuredStrains.map((strain) => (
                  <Card key={strain.id} variant="elevated">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{strain.name}</CardTitle>
                          <p className="text-primary-600 font-medium">{strain.type}</p>
                          <p className="text-sm text-gray-500">{strain.genetics}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex space-x-3 text-sm">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                              THC {strain.thc}
                            </span>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                              CBD {strain.cbd}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{strain.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Effects:</h4>
                          <div className="flex flex-wrap gap-1">
                            {strain.effects.map((effect) => (
                              <span key={effect} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                                {effect}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Medical Uses:</h4>
                          <div className="flex flex-wrap gap-1">
                            {strain.medicalUses.slice(0, 3).map((use) => (
                              <span key={use} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                {use}
                              </span>
                            ))}
                            {strain.medicalUses.length > 3 && (
                              <span className="text-xs text-gray-500">+{strain.medicalUses.length - 3}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Dominant Terpenes:</h4>
                        <div className="grid grid-cols-3 gap-2">
                          {strain.terpenes.map((terpene) => (
                            <div key={terpene.name} className="text-center p-2 bg-gray-50 rounded-lg">
                              <p className="text-sm font-medium text-gray-900">{terpene.name}</p>
                              <p className="text-xs text-gray-500">{terpene.percentage}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link href={`/learn/strains/${strain.id}`}>
                        <Button variant="outline" className="w-full">
                          Learn More About {strain.name}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Recent Articles */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
              <div className="space-y-4">
                {recentArticles.map((article) => (
                  <Card key={article.id} variant="elevated" className="overflow-hidden">
                    <CardContent>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className={`text-xs px-2 py-1 rounded-full font-medium mr-3 ${
                              article.category === 'Science' ? 'bg-indigo-100 text-indigo-700' :
                              article.category === 'Medical' ? 'bg-blue-100 text-blue-700' :
                              'bg-green-100 text-green-700'
                            }`}>
                              {article.category}
                            </span>
                            <span className="text-sm text-gray-500">{article.publishedAt}</span>
                            {article.featured && (
                              <span className="ml-2 text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">
                                Featured
                              </span>
                            )}
                          </div>
                          <Link href={`/learn/article/${article.id}`}>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors cursor-pointer">
                              {article.title}
                            </h3>
                          </Link>
                          <p className="text-gray-600 mb-3">{article.excerpt}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <span>By {article.author}</span>
                            <span className="mx-2">•</span>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Access</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/learn/dosing-calculator" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    🧮 Dosing Calculator
                  </Button>
                </Link>
                <Link href="/learn/strain-finder" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    🔍 Strain Finder Tool
                  </Button>
                </Link>
                <Link href="/learn/podcasts" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    🎧 Cannabis Podcasts
                  </Button>
                </Link>
                <Link href="/learn/terpenes" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    🌿 Terpene Guide
                  </Button>
                </Link>
                <Link href="/learn/glossary" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    📖 Cannabis Glossary
                  </Button>
                </Link>
                <Link href="/learn/laws" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    ⚖️ Legal Information
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Browse by Category</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={`/learn/category/${category.name.toLowerCase().replace(' ', '-')}`}
                    className="block px-6 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-xl mr-3">{category.icon}</span>
                        <span className="font-medium text-gray-900">{category.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Learning Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <div className="text-gray-500 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-4">Sign in to track your learning progress and earn certificates.</p>
                  <Link href="/auth/login">
                    <Button variant="primary" size="sm">
                      Sign In
                    </Button>
                  </Link>
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