'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';

interface GlossaryTerm {
  id: number;
  term: string;
  category: string;
  definition: string;
  relatedTerms?: string[];
  pronunciation?: string;
}

const glossaryTerms: GlossaryTerm[] = [
  {
    id: 1,
    term: "420",
    category: "Culture",
    definition: "A term referring to cannabis culture and consumption, often associated with April 20th (4/20) as an unofficial cannabis holiday. The term originated from a group of California high school students in the 1970s.",
    relatedTerms: ["Cannabis", "Marijuana"]
  },
  {
    id: 2,
    term: "Cannabinoids",
    category: "Science",
    definition: "Chemical compounds found in cannabis that interact with cannabinoid receptors in the human body. The most well-known cannabinoids are THC and CBD, but there are over 100 different cannabinoids identified.",
    relatedTerms: ["THC", "CBD", "CBG", "CBN", "Endocannabinoid System"]
  },
  {
    id: 3,
    term: "THC (Tetrahydrocannabinol)",
    category: "Science",
    pronunciation: "tet-ruh-hahy-druh-kuh-NAB-uh-nol",
    definition: "The primary psychoactive compound in cannabis responsible for the 'high' effect. THC binds to CB1 receptors in the brain and can provide pain relief, euphoria, and altered perception.",
    relatedTerms: ["Cannabinoids", "Psychoactive", "CB1 Receptors"]
  },
  {
    id: 4,
    term: "CBD (Cannabidiol)",
    category: "Science",
    pronunciation: "kan-uh-buh-DAHY-ol",
    definition: "A non-psychoactive cannabinoid known for its potential therapeutic benefits including anti-inflammatory, anti-anxiety, and anti-seizure properties. CBD does not produce a 'high' like THC.",
    relatedTerms: ["Cannabinoids", "Non-psychoactive", "Medical Cannabis"]
  },
  {
    id: 5,
    term: "Indica",
    category: "Strains",
    definition: "One of the main subspecies of cannabis, typically characterized by shorter, bushier plants with broader leaves. Indica strains are often associated with relaxing, sedating effects and are commonly used for nighttime consumption.",
    relatedTerms: ["Sativa", "Hybrid", "Strains"]
  },
  {
    id: 6,
    term: "Sativa",
    category: "Strains",
    definition: "A subspecies of cannabis characterized by taller plants with narrow leaves. Sativa strains are typically associated with energizing, uplifting effects and are often preferred for daytime use.",
    relatedTerms: ["Indica", "Hybrid", "Strains"]
  },
  {
    id: 7,
    term: "Hybrid",
    category: "Strains",
    definition: "Cannabis strains that are crossbred from both indica and sativa genetics. Hybrids can be indica-dominant, sativa-dominant, or balanced, combining characteristics from both parent types.",
    relatedTerms: ["Indica", "Sativa", "Genetics"]
  },
  {
    id: 8,
    term: "Terpenes",
    category: "Science",
    definition: "Aromatic compounds found in many plants, including cannabis, that contribute to flavor and smell. Terpenes may also influence the effects of cannabis through the entourage effect.",
    relatedTerms: ["Entourage Effect", "Flavonoids", "Aromatherapy"]
  },
  {
    id: 9,
    term: "Entourage Effect",
    category: "Science",
    definition: "The theory that cannabis compounds work together synergistically, with the combined effect being greater than the sum of individual parts. This suggests whole-plant extracts may be more effective than isolated compounds.",
    relatedTerms: ["Terpenes", "Cannabinoids", "Full Spectrum"]
  },
  {
    id: 10,
    term: "Edibles",
    category: "Consumption",
    definition: "Cannabis-infused food products that are consumed orally. Edibles have a delayed onset (30 minutes to 2 hours) but typically provide longer-lasting effects compared to smoking or vaping.",
    relatedTerms: ["Decarboxylation", "Bioavailability", "Dosing"]
  },
  {
    id: 11,
    term: "Vaping",
    category: "Consumption",
    definition: "A method of consuming cannabis by heating it to a temperature that vaporizes the active compounds without combustion. This method is considered healthier than smoking as it produces fewer harmful byproducts.",
    relatedTerms: ["Combustion", "Vaporizer", "Temperature"]
  },
  {
    id: 12,
    term: "Dabbing",
    category: "Consumption",
    definition: "A method of consuming cannabis concentrates by applying them to a heated surface and inhaling the vapor. Dabs typically contain much higher concentrations of THC than flower.",
    relatedTerms: ["Concentrates", "Hash Oil", "Butane Hash Oil"]
  },
  {
    id: 13,
    term: "Decarboxylation",
    category: "Processing",
    pronunciation: "dee-kar-BOK-suh-lay-shun",
    definition: "The process of heating cannabis to activate THC and other cannabinoids. Raw cannabis contains THCA, which converts to psychoactive THC when heated through smoking, vaping, or cooking.",
    relatedTerms: ["THCA", "Activation", "Edibles"]
  },
  {
    id: 14,
    term: "Full Spectrum",
    category: "Products",
    definition: "Cannabis extracts that contain all naturally occurring compounds from the plant, including cannabinoids, terpenes, and flavonoids. This preserves the entourage effect.",
    relatedTerms: ["Broad Spectrum", "Isolate", "Entourage Effect"]
  },
  {
    id: 15,
    term: "Isolate",
    category: "Products",
    definition: "A pure form of a single cannabinoid, typically CBD or THC, with all other compounds removed. Isolates are usually crystalline powders containing 99%+ pure cannabinoid.",
    relatedTerms: ["Full Spectrum", "Broad Spectrum", "Purity"]
  },
  {
    id: 16,
    term: "Tolerance",
    category: "Effects",
    definition: "The body's decreased response to cannabis over time with regular use, requiring higher doses to achieve the same effects. Tolerance can be managed through 'tolerance breaks' or varying consumption methods.",
    relatedTerms: ["T-Break", "Dosing", "Sensitivity"]
  },
  {
    id: 17,
    term: "Microdosing",
    category: "Consumption",
    definition: "Consuming very small amounts of cannabis to achieve subtle therapeutic benefits without significant psychoactive effects. Typical microdoses range from 1-5mg of THC.",
    relatedTerms: ["Dosing", "Threshold", "Sub-perceptual"]
  },
  {
    id: 18,
    term: "Budtender",
    category: "Industry",
    definition: "A cannabis retail specialist who helps customers select products, provides education about strains and consumption methods, and ensures compliance with local regulations.",
    relatedTerms: ["Dispensary", "Cannabis Consultant", "Retail"]
  },
  {
    id: 19,
    term: "Dispensary",
    category: "Industry",
    definition: "A licensed retail location where cannabis products are sold to consumers. Dispensaries may be medical-only, recreational, or dual-use depending on local laws.",
    relatedTerms: ["Budtender", "Licensed Retailer", "Cannabis Store"]
  },
  {
    id: 20,
    term: "COA (Certificate of Analysis)",
    category: "Testing",
    definition: "A document from a third-party laboratory showing the cannabinoid profile, terpene profile, and safety test results (pesticides, heavy metals, microbials) for a cannabis product.",
    relatedTerms: ["Lab Testing", "Quality Assurance", "Safety"]
  }
];

const categories = ["All", "Science", "Strains", "Consumption", "Culture", "Industry", "Products", "Effects", "Processing", "Testing"];

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTerm, setSelectedTerm] = useState<GlossaryTerm | null>(null);

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter(term => {
      const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           term.definition.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || term.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const groupedTerms = useMemo(() => {
    const groups: { [key: string]: GlossaryTerm[] } = {};
    filteredTerms.forEach(term => {
      const firstLetter = term.term.charAt(0).toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(term);
    });
    
    // Sort each group alphabetically
    Object.keys(groups).forEach(letter => {
      groups[letter].sort((a, b) => a.term.localeCompare(b.term));
    });
    
    return groups;
  }, [filteredTerms]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/learn" className="text-primary-600 hover:text-primary-500 mb-4 inline-flex items-center">
            ← Back to Learning Hub
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cannabis Glossary
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Your comprehensive guide to cannabis terminology, from basic concepts to advanced scientific terms.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle>Search Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <input
                  type="text"
                  placeholder="Search glossary..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary-100 text-primary-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                      <span className="float-right text-gray-400">
                        {category === 'All' ? glossaryTerms.length : glossaryTerms.filter(t => t.category === category).length}
                      </span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Glossary Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Terms:</span>
                    <span className="font-semibold">{glossaryTerms.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Categories:</span>
                    <span className="font-semibold">{categories.length - 1}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Showing:</span>
                    <span className="font-semibold">{filteredTerms.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {selectedTerm ? (
              // Detailed Term View
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">{selectedTerm.term}</CardTitle>
                      {selectedTerm.pronunciation && (
                        <p className="text-gray-500 mt-1">/{selectedTerm.pronunciation}/</p>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedTerm.category}
                      </span>
                      <button
                        onClick={() => setSelectedTerm(null)}
                        className="text-gray-400 hover:text-gray-600 text-xl"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {selectedTerm.definition}
                  </p>
                  
                  {selectedTerm.relatedTerms && selectedTerm.relatedTerms.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Related Terms:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedTerm.relatedTerms.map(relatedTerm => {
                          const relatedTermObj = glossaryTerms.find(t => t.term === relatedTerm);
                          return (
                            <button
                              key={relatedTerm}
                              onClick={() => relatedTermObj && setSelectedTerm(relatedTermObj)}
                              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors"
                            >
                              {relatedTerm}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              // Term List View
              <div className="space-y-6">
                {Object.keys(groupedTerms).sort().map(letter => (
                  <Card key={letter}>
                    <CardHeader>
                      <CardTitle className="text-xl">{letter}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {groupedTerms[letter].map(term => (
                          <div
                            key={term.id}
                            onClick={() => setSelectedTerm(term)}
                            className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 cursor-pointer transition-all"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold text-gray-900">{term.term}</h3>
                              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                {term.category}
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm line-clamp-2">
                              {term.definition}
                            </p>
                            {term.pronunciation && (
                              <p className="text-gray-400 text-xs mt-1">
                                /{term.pronunciation}/
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {filteredTerms.length === 0 && (
                  <Card>
                    <CardContent>
                      <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">No terms found matching your search.</p>
                        <button
                          onClick={() => {
                            setSearchTerm('');
                            setSelectedCategory('All');
                          }}
                          className="text-primary-600 hover:text-primary-500"
                        >
                          Clear filters
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}