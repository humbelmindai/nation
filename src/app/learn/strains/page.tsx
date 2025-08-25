'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

// Comprehensive strain database
const strainDatabase = [
  {
    id: 1,
    name: "Blue Dream",
    type: "Hybrid (Sativa-dominant)",
    ratio: "60% Sativa / 40% Indica",
    thc: "17-24%",
    cbd: "0.1-0.2%",
    genetics: "Blueberry × Haze",
    effects: ["Creative", "Euphoric", "Relaxed", "Happy", "Uplifted", "Focused"],
    medicalUses: ["Stress", "Depression", "Pain", "Nausea", "Lack of Appetite", "Fatigue"],
    negativeEffects: ["Dry mouth", "Dry eyes", "Mild anxiety (high doses)"],
    terpenes: [
      { name: "Myrcene", percentage: "0.8%", effects: "Sedating, muscle relaxant" },
      { name: "Pinene", percentage: "0.6%", effects: "Alertness, memory retention" },
      { name: "Caryophyllene", percentage: "0.4%", effects: "Anti-inflammatory, pain relief" },
      { name: "Limonene", percentage: "0.3%", effects: "Mood elevation, stress relief" }
    ],
    flavorProfile: ["Sweet", "Berry", "Vanilla", "Herbal", "Earthy"],
    difficulty: "Easy",
    flowering: "9-10 weeks",
    yield: "High",
    height: "Medium to Tall",
    climate: "Mediterranean",
    popularity: 95,
    description: "A legendary West Coast strain that delivers balanced effects and a sweet berry aroma. Perfect for daytime use, offering cerebral stimulation while maintaining body relaxation.",
    reviews: 1247,
    rating: 4.6
  },
  {
    id: 2,
    name: "OG Kush",
    type: "Hybrid (Indica-dominant)", 
    ratio: "25% Sativa / 75% Indica",
    thc: "20-25%",
    cbd: "0.1-0.3%",
    genetics: "Chemdawg × Lemon Thai × Old World Paki Kush",
    effects: ["Relaxed", "Happy", "Euphoric", "Sleepy", "Hungry", "Giggly"],
    medicalUses: ["Stress", "Anxiety", "Pain", "Insomnia", "ADHD", "Headaches"],
    negativeEffects: ["Dry mouth", "Dry eyes", "Couch lock", "Paranoia (sensitive users)"],
    terpenes: [
      { name: "Limonene", percentage: "1.2%", effects: "Mood elevation, stress relief" },
      { name: "Myrcene", percentage: "0.9%", effects: "Sedating, muscle relaxant" },
      { name: "Caryophyllene", percentage: "0.7%", effects: "Anti-inflammatory, pain relief" },
      { name: "Linalool", percentage: "0.4%", effects: "Calming, anti-anxiety" }
    ],
    flavorProfile: ["Earthy", "Pine", "Lemon", "Woody", "Diesel"],
    difficulty: "Moderate",
    flowering: "8-9 weeks",
    yield: "Medium to High",
    height: "Short to Medium",
    climate: "Indoor preferred",
    popularity: 92,
    description: "The legendary strain that started the California cannabis revolution. Known for its distinctive aroma and potent effects that combine euphoria with deep relaxation.",
    reviews: 2156,
    rating: 4.7
  },
  {
    id: 3,
    name: "Sour Diesel",
    type: "Sativa",
    ratio: "90% Sativa / 10% Indica",
    thc: "19-25%",
    cbd: "0.1-0.2%",
    genetics: "Chemdawg 91 × Super Skunk",
    effects: ["Energetic", "Creative", "Uplifted", "Focused", "Happy", "Euphoric"],
    medicalUses: ["Depression", "Stress", "Pain", "Fatigue", "ADHD", "Anxiety"],
    negativeEffects: ["Dry mouth", "Dry eyes", "Anxiety (high doses)", "Paranoia"],
    terpenes: [
      { name: "Caryophyllene", percentage: "0.9%", effects: "Anti-inflammatory, pain relief" },
      { name: "Limonene", percentage: "0.7%", effects: "Mood elevation, stress relief" },
      { name: "Myrcene", percentage: "0.5%", effects: "Sedating, muscle relaxant" },
      { name: "Humulene", percentage: "0.3%", effects: "Appetite suppressant, antibacterial" }
    ],
    flavorProfile: ["Diesel", "Pungent", "Citrus", "Herbal", "Skunk"],
    difficulty: "Moderate",
    flowering: "10-11 weeks",
    yield: "Medium",
    height: "Tall",
    climate: "Outdoor preferred",
    popularity: 89,
    description: "A fast-acting strain that delivers energizing, dreamy cerebral effects. Perfect for daytime use when you need creativity and motivation.",
    reviews: 1834,
    rating: 4.5
  },
  {
    id: 4,
    name: "Purple Haze",
    type: "Sativa",
    ratio: "85% Sativa / 15% Indica",
    thc: "16-20%",
    cbd: "0.1%",
    genetics: "Purple Thai × Haze",
    effects: ["Creative", "Euphoric", "Energetic", "Happy", "Focused", "Uplifted"],
    medicalUses: ["Depression", "Stress", "Fatigue", "ADHD", "Mood disorders"],
    negativeEffects: ["Dry mouth", "Dry eyes", "Dizziness", "Anxiety (sensitive users)"],
    terpenes: [
      { name: "Terpinolene", percentage: "0.8%", effects: "Uplifting, antioxidant" },
      { name: "Myrcene", percentage: "0.6%", effects: "Sedating, muscle relaxant" },
      { name: "Pinene", percentage: "0.4%", effects: "Alertness, memory retention" },
      { name: "Caryophyllene", percentage: "0.3%", effects: "Anti-inflammatory, pain relief" }
    ],
    flavorProfile: ["Sweet", "Berry", "Earthy", "Spicy", "Floral"],
    difficulty: "Difficult",
    flowering: "8-9 weeks",
    yield: "Medium",
    height: "Tall",
    climate: "Warm, dry",
    popularity: 78,
    description: "Made famous by Jimi Hendrix, this classic sativa provides an energetic, psychedelic experience with creative inspiration.",
    reviews: 892,
    rating: 4.3
  },
  {
    id: 5,
    name: "Granddaddy Purple",
    type: "Indica",
    ratio: "10% Sativa / 90% Indica",
    thc: "17-23%",
    cbd: "0.1%",
    genetics: "Purple Urkle × Big Bud",
    effects: ["Relaxed", "Sleepy", "Happy", "Euphoric", "Hungry"],
    medicalUses: ["Insomnia", "Pain", "Stress", "Appetite loss", "Muscle spasms"],
    negativeEffects: ["Dry mouth", "Dry eyes", "Couch lock", "Dizziness"],
    terpenes: [
      { name: "Myrcene", percentage: "1.1%", effects: "Sedating, muscle relaxant" },
      { name: "Caryophyllene", percentage: "0.6%", effects: "Anti-inflammatory, pain relief" },
      { name: "Pinene", percentage: "0.4%", effects: "Alertness, memory retention" },
      { name: "Linalool", percentage: "0.3%", effects: "Calming, anti-anxiety" }
    ],
    flavorProfile: ["Grape", "Berry", "Sweet", "Earthy"],
    difficulty: "Easy",
    flowering: "8-9 weeks",
    yield: "High",
    height: "Short to Medium",
    climate: "Indoor/Outdoor",
    popularity: 86,
    description: "A classic indica known for its beautiful purple coloration and potent relaxing effects. Perfect for evening use and sleep.",
    reviews: 1456,
    rating: 4.4
  },
  {
    id: 6,
    name: "White Widow",
    type: "Hybrid",
    ratio: "60% Indica / 40% Sativa",
    thc: "18-25%",
    cbd: "0.1-0.2%",
    genetics: "Brazilian Sativa × South Indian Indica",
    effects: ["Euphoric", "Relaxed", "Creative", "Happy", "Energetic"],
    medicalUses: ["Stress", "Depression", "Pain", "ADHD", "Fatigue"],
    negativeEffects: ["Dry mouth", "Dry eyes", "Paranoia (high doses)"],
    terpenes: [
      { name: "Myrcene", percentage: "0.7%", effects: "Sedating, muscle relaxant" },
      { name: "Limonene", percentage: "0.5%", effects: "Mood elevation, stress relief" },
      { name: "Caryophyllene", percentage: "0.4%", effects: "Anti-inflammatory, pain relief" },
      { name: "Pinene", percentage: "0.3%", effects: "Alertness, memory retention" }
    ],
    flavorProfile: ["Earthy", "Woody", "Pine", "Sweet"],
    difficulty: "Easy",
    flowering: "8-9 weeks",
    yield: "High",
    height: "Medium",
    climate: "Indoor/Outdoor",
    popularity: 88,
    description: "A legendary Dutch strain covered in white trichomes. Provides balanced effects perfect for social situations.",
    reviews: 1789,
    rating: 4.5
  }
];

const strainTypes = ["All Types", "Indica", "Sativa", "Hybrid"];
const effectFilters = ["Relaxed", "Creative", "Happy", "Euphoric", "Energetic", "Sleepy", "Focused", "Uplifted"];
const medicalFilters = ["Pain", "Stress", "Anxiety", "Depression", "Insomnia", "ADHD", "Nausea", "Inflammation"];

export default function StrainDatabasePage() {
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedEffects, setSelectedEffects] = useState<string[]>([]);
  const [selectedMedical, setSelectedMedical] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("popularity");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFilter = (filter: string, category: 'effects' | 'medical') => {
    if (category === 'effects') {
      setSelectedEffects(prev => 
        prev.includes(filter) 
          ? prev.filter(f => f !== filter)
          : [...prev, filter]
      );
    } else {
      setSelectedMedical(prev => 
        prev.includes(filter) 
          ? prev.filter(f => f !== filter)
          : [...prev, filter]
      );
    }
  };

  const filteredStrains = strainDatabase
    .filter(strain => {
      if (selectedType !== "All Types" && !strain.type.toLowerCase().includes(selectedType.toLowerCase())) {
        return false;
      }
      if (selectedEffects.length > 0 && !selectedEffects.some(effect => strain.effects.includes(effect))) {
        return false;
      }
      if (selectedMedical.length > 0 && !selectedMedical.some(medical => strain.medicalUses.includes(medical))) {
        return false;
      }
      if (searchTerm && !strain.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.popularity - a.popularity;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'thc':
          return parseInt(b.thc.split('-')[1]) - parseInt(a.thc.split('-')[1]);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <Link href="/learn" className="text-primary-600 hover:text-primary-500 mb-4 inline-flex items-center">
            ← Back to Learning Hub
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cannabis Strain Encyclopedia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Explore our comprehensive database of cannabis strains with detailed terpene profiles, effects, medical applications, and growing information.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4 space-y-6">
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle>Search Strains</CardTitle>
              </CardHeader>
              <CardContent>
                <input
                  type="text"
                  placeholder="Search by name..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </CardContent>
            </Card>

            {/* Strain Type Filter */}
            <Card>
              <CardHeader>
                <CardTitle>Strain Type</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {strainTypes.map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="radio"
                      name="strainType"
                      checked={selectedType === type}
                      onChange={() => setSelectedType(type)}
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-gray-700">{type}</span>
                  </label>
                ))}
              </CardContent>
            </Card>

            {/* Effects Filter */}
            <Card>
              <CardHeader>
                <CardTitle>Effects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {effectFilters.map((effect) => (
                    <label key={effect} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedEffects.includes(effect)}
                        onChange={() => toggleFilter(effect, 'effects')}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-gray-700">{effect}</span>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Medical Uses Filter */}
            <Card>
              <CardHeader>
                <CardTitle>Medical Uses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {medicalFilters.map((medical) => (
                    <label key={medical} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedMedical.includes(medical)}
                        onChange={() => toggleFilter(medical, 'medical')}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-gray-700">{medical}</span>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Tools */}
            <Card>
              <CardHeader>
                <CardTitle>Strain Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/learn/strain-finder" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    🔍 Strain Finder Quiz
                  </Button>
                </Link>
                <Link href="/learn/strain-compare" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    ⚖️ Compare Strains
                  </Button>
                </Link>
                <Link href="/learn/terpenes" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    🧪 Terpene Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search Controls */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                {filteredStrains.length} strains found
              </h2>
              <select 
                className="border border-gray-300 rounded-lg px-3 py-2"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Alphabetical</option>
                <option value="thc">Highest THC</option>
              </select>
            </div>

            {/* Strain Cards */}
            <div className="grid gap-6">
              {filteredStrains.map((strain) => (
                <Card key={strain.id} variant="elevated" className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    {/* Strain Visual */}
                    <div className="md:w-1/4">
                      <div className="h-48 md:h-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center relative">
                        <div className="text-white text-center">
                          <div className="text-4xl mb-2">🌿</div>
                          <p className="text-sm opacity-90 font-medium">{strain.type}</p>
                        </div>
                        <div className="absolute top-3 right-3">
                          <span className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-bold">
                            {strain.rating}★
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-3/4 p-6">
                      {/* Strain Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <Link href={`/learn/strains/${strain.id}`}>
                            <h3 className="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors cursor-pointer">
                              {strain.name}
                            </h3>
                          </Link>
                          <p className="text-primary-600 font-medium">{strain.type}</p>
                          <p className="text-sm text-gray-500">{strain.genetics}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex space-x-3 text-sm mb-2">
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">
                              THC {strain.thc}
                            </span>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                              CBD {strain.cbd}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">{strain.reviews} reviews</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 mb-4">{strain.description}</p>

                      {/* Effects and Medical */}
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Primary Effects:</h4>
                          <div className="flex flex-wrap gap-1">
                            {strain.effects.slice(0, 4).map((effect) => (
                              <span key={effect} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                                {effect}
                              </span>
                            ))}
                            {strain.effects.length > 4 && (
                              <span className="text-xs text-gray-500">+{strain.effects.length - 4}</span>
                            )}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Medical Benefits:</h4>
                          <div className="flex flex-wrap gap-1">
                            {strain.medicalUses.slice(0, 4).map((use) => (
                              <span key={use} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                {use}
                              </span>
                            ))}
                            {strain.medicalUses.length > 4 && (
                              <span className="text-xs text-gray-500">+{strain.medicalUses.length - 4}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Terpenes Preview */}
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Top Terpenes:</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {strain.terpenes.slice(0, 4).map((terpene) => (
                            <div key={terpene.name} className="text-center p-2 bg-gray-50 rounded-lg">
                              <p className="text-sm font-medium text-gray-900">{terpene.name}</p>
                              <p className="text-xs text-primary-600 font-bold">{terpene.percentage}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Growing Info */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <span>🌱 Difficulty: {strain.difficulty}</span>
                        <span>⏱️ Flowering: {strain.flowering}</span>
                        <span>📈 Yield: {strain.yield}</span>
                        <span>📏 Height: {strain.height}</span>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-3">
                        <Link href={`/learn/strains/${strain.id}`}>
                          <Button variant="primary" size="sm">
                            View Full Profile
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm">
                          Compare
                        </Button>
                        <Button variant="ghost" size="sm">
                          Add to Favorites
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Strains
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}