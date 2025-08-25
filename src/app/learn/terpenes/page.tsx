'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';

interface Terpene {
  id: number;
  name: string;
  scientificName: string;
  aroma: string[];
  flavor: string[];
  effects: string[];
  medicalBenefits: string[];
  commonStrains: string[];
  boilingPoint: string;
  alsoFoundIn: string[];
  concentration: string;
  description: string;
  color: string;
}

const terpeneData: Terpene[] = [
  {
    id: 1,
    name: "Myrcene",
    scientificName: "β-Myrcene",
    aroma: ["Earthy", "Musky", "Herbal"],
    flavor: ["Clove-like", "Fruity", "Citrusy"],
    effects: ["Sedating", "Relaxing", "Muscle relaxant"],
    medicalBenefits: ["Pain relief", "Insomnia", "Inflammation", "Muscle tension"],
    commonStrains: ["Blue Dream", "Granddaddy Purple", "OG Kush", "White Widow"],
    boilingPoint: "167°C (332°F)",
    alsoFoundIn: ["Mangoes", "Hops", "Lemongrass", "Thyme"],
    concentration: "0.5-3.0%",
    description: "The most common terpene found in cannabis, myrcene is known for its sedating effects and is believed to contribute to the 'couch-lock' sensation. It's the dominant terpene in many indica strains.",
    color: "bg-purple-500"
  },
  {
    id: 2,
    name: "Limonene",
    scientificName: "D-Limonene",
    aroma: ["Citrus", "Lemon", "Orange"],
    flavor: ["Sweet citrus", "Fresh", "Zesty"],
    effects: ["Mood elevation", "Energizing", "Stress relief"],
    medicalBenefits: ["Depression", "Anxiety", "Acid reflux", "Antimicrobial"],
    commonStrains: ["Lemon Haze", "Sour Diesel", "Jack Herer", "Durban Poison"],
    boilingPoint: "176°C (349°F)",
    alsoFoundIn: ["Citrus fruits", "Juniper", "Peppermint"],
    concentration: "0.5-2.0%",
    description: "Second most common terpene in cannabis, limonene is associated with uplifting and energizing effects. It's easily absorbed and may help other compounds cross the blood-brain barrier.",
    color: "bg-yellow-500"
  },
  {
    id: 3,
    name: "Pinene",
    scientificName: "α-Pinene & β-Pinene",
    aroma: ["Pine", "Forest", "Fresh"],
    flavor: ["Sharp", "Sweet", "Herbal"],
    effects: ["Alertness", "Memory enhancement", "Counteracts THC"],
    medicalBenefits: ["Asthma", "Pain", "Inflammation", "Anxiety"],
    commonStrains: ["Jack Herer", "Trainwreck", "Blue Dream", "Strawberry Cough"],
    boilingPoint: "156°C (313°F)",
    alsoFoundIn: ["Pine needles", "Rosemary", "Basil", "Dill"],
    concentration: "0.1-1.0%",
    description: "Most widely distributed terpene in nature, pinene may improve focus and energy while potentially counteracting some memory issues associated with THC.",
    color: "bg-green-500"
  },
  {
    id: 4,
    name: "Linalool",
    scientificName: "Linalool",
    aroma: ["Floral", "Sweet", "Lavender"],
    flavor: ["Spicy", "Floral", "Citrusy"],
    effects: ["Calming", "Anti-anxiety", "Sedating"],
    medicalBenefits: ["Anxiety", "Depression", "Seizures", "Pain"],
    commonStrains: ["Lavender", "Amnesia Haze", "G-13", "Zkittlez"],
    boilingPoint: "198°C (388°F)",
    alsoFoundIn: ["Lavender", "Mint", "Cinnamon", "Coriander"],
    concentration: "0.5-1.5%",
    description: "Known for its floral scent and calming properties, linalool is being researched for its potential in treating anxiety, depression, and even Alzheimer's disease.",
    color: "bg-indigo-500"
  },
  {
    id: 5,
    name: "Caryophyllene",
    scientificName: "β-Caryophyllene",
    aroma: ["Spicy", "Peppery", "Woody"],
    flavor: ["Clove", "Black pepper", "Earthy"],
    effects: ["Anti-inflammatory", "Analgesic", "Gastroprotective"],
    medicalBenefits: ["Pain", "Inflammation", "Depression", "Anxiety"],
    commonStrains: ["Girl Scout Cookies", "Gelato", "Bubba Kush", "Sour Diesel"],
    boilingPoint: "199°C (390°F)",
    alsoFoundIn: ["Black pepper", "Cloves", "Cinnamon", "Hops"],
    concentration: "0.2-1.5%",
    description: "Unique among terpenes, caryophyllene can bind directly to CB2 receptors, making it both a terpene and a cannabinoid. It's particularly effective for inflammation and pain.",
    color: "bg-red-500"
  },
  {
    id: 6,
    name: "Humulene",
    scientificName: "α-Humulene",
    aroma: ["Woody", "Earthy", "Spicy"],
    flavor: ["Hoppy", "Herbal", "Earthy"],
    effects: ["Appetite suppressant", "Anti-inflammatory", "Antibacterial"],
    medicalBenefits: ["Weight loss", "Inflammation", "Pain", "Infection"],
    commonStrains: ["Girl Scout Cookies", "Headband", "Sour Diesel", "Pink Kush"],
    boilingPoint: "198°C (388°F)",
    alsoFoundIn: ["Hops", "Coriander", "Cloves", "Basil"],
    concentration: "0.1-0.8%",
    description: "Often found alongside caryophyllene, humulene is notable for being one of the few compounds that may suppress appetite, contrary to the typical 'munchies' effect of cannabis.",
    color: "bg-orange-500"
  },
  {
    id: 7,
    name: "Ocimene",
    scientificName: "β-Ocimene",
    aroma: ["Sweet", "Herbal", "Woody"],
    flavor: ["Fruity", "Citrusy", "Herbal"],
    effects: ["Uplifting", "Energizing", "Decongestant"],
    medicalBenefits: ["Antiviral", "Antifungal", "Antiseptic", "Decongestant"],
    commonStrains: ["Golden Pineapple", "Clementine", "Space Queen", "Green Crack"],
    boilingPoint: "175°C (347°F)",
    alsoFoundIn: ["Mangoes", "Basil", "Pepper", "Parsley"],
    concentration: "0.1-0.5%",
    description: "A sweet, herbaceous terpene that provides energizing effects and may have antiviral properties. It's often found in sativa-dominant strains.",
    color: "bg-teal-500"
  },
  {
    id: 8,
    name: "Terpinolene",
    scientificName: "Terpinolene",
    aroma: ["Fresh", "Piney", "Floral"],
    flavor: ["Herbal", "Sweet", "Citrusy"],
    effects: ["Calming", "Sedating", "Antioxidant"],
    medicalBenefits: ["Insomnia", "Anxiety", "Bacterial infections", "Heart disease"],
    commonStrains: ["Jack Herer", "Ghost Train Haze", "Chernobyl", "Golden Goat"],
    boilingPoint: "186°C (367°F)",
    alsoFoundIn: ["Nutmeg", "Tea tree", "Conifers", "Apples"],
    concentration: "0.1-0.3%",
    description: "Despite being found in many sativa strains, terpinolene actually has sedating effects. It's less common than other terpenes but provides unique floral and fresh aromas.",
    color: "bg-pink-500"
  }
];

const effectCategories = {
  'Energizing': ['Mood elevation', 'Energizing', 'Alertness', 'Uplifting'],
  'Relaxing': ['Sedating', 'Relaxing', 'Calming', 'Anti-anxiety'],
  'Therapeutic': ['Anti-inflammatory', 'Analgesic', 'Pain relief', 'Muscle relaxant'],
  'Mental': ['Memory enhancement', 'Stress relief', 'Counteracts THC', 'Focus']
};

export default function TerpenesPage() {
  const [selectedTerpene, setSelectedTerpene] = useState<Terpene | null>(null);
  const [filterBy, setFilterBy] = useState<'all' | 'effects' | 'medical'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEffect, setSelectedEffect] = useState<string>('');

  const filteredTerpenes = useMemo(() => {
    let filtered = terpeneData;

    if (searchTerm) {
      filtered = filtered.filter(terpene => 
        terpene.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        terpene.aroma.some(a => a.toLowerCase().includes(searchTerm.toLowerCase())) ||
        terpene.effects.some(e => e.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedEffect) {
      filtered = filtered.filter(terpene => 
        terpene.effects.some(effect => effect.includes(selectedEffect)) ||
        terpene.medicalBenefits.some(benefit => benefit.includes(selectedEffect))
      );
    }

    return filtered;
  }, [searchTerm, selectedEffect]);

  const allEffects = useMemo(() => {
    const effects = new Set<string>();
    terpeneData.forEach(terpene => {
      terpene.effects.forEach(effect => effects.add(effect));
      terpene.medicalBenefits.forEach(benefit => effects.add(benefit));
    });
    return Array.from(effects).sort();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/learn" className="text-primary-600 hover:text-primary-500 mb-4 inline-flex items-center">
            ← Back to Learning Hub
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terpene Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Explore the aromatic compounds that give cannabis its unique smells, flavors, and effects. 
            Learn how terpenes work with cannabinoids to create the entourage effect.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle>Search & Filter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <input
                  type="text"
                  placeholder="Search terpenes..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={selectedEffect}
                  onChange={(e) => setSelectedEffect(e.target.value)}
                >
                  <option value="">All Effects</option>
                  {allEffects.map(effect => (
                    <option key={effect} value={effect}>{effect}</option>
                  ))}
                </select>
                
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedEffect('');
                    setSelectedTerpene(null);
                  }}
                  className="w-full px-4 py-2 text-sm text-primary-600 hover:text-primary-500"
                >
                  Clear Filters
                </button>
              </CardContent>
            </Card>

            {/* Effect Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Effect Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(effectCategories).map(([category, effects]) => (
                    <div key={category}>
                      <h4 className="font-medium text-gray-900 mb-2">{category}</h4>
                      <div className="space-y-1">
                        {effects.map(effect => (
                          <button
                            key={effect}
                            onClick={() => setSelectedEffect(effect)}
                            className={`block w-full text-left text-sm px-3 py-1 rounded transition-colors ${
                              selectedEffect === effect
                                ? 'bg-primary-100 text-primary-700'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            {effect}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-gray-900">What are terpenes?</p>
                    <p className="text-gray-600">Aromatic compounds found in many plants, including cannabis.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">How many exist?</p>
                    <p className="text-gray-600">Over 200 identified in cannabis, 8 major ones covered here.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Entourage Effect?</p>
                    <p className="text-gray-600">Terpenes work synergistically with cannabinoids.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {selectedTerpene ? (
              // Detailed Terpene View
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl flex items-center">
                          <div className={`w-6 h-6 rounded-full mr-3 ${selectedTerpene.color}`}></div>
                          {selectedTerpene.name}
                        </CardTitle>
                        <p className="text-gray-500 italic">{selectedTerpene.scientificName}</p>
                      </div>
                      <button
                        onClick={() => setSelectedTerpene(null)}
                        className="text-gray-400 hover:text-gray-600 text-2xl"
                      >
                        ×
                      </button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {selectedTerpene.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Aroma Profile</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedTerpene.aroma.map(aroma => (
                              <span key={aroma} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                {aroma}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Flavor Notes</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedTerpene.flavor.map(flavor => (
                              <span key={flavor} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                {flavor}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Effects</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedTerpene.effects.map(effect => (
                              <span key={effect} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                                {effect}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Medical Benefits</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedTerpene.medicalBenefits.map(benefit => (
                              <span key={benefit} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Common Strains</h4>
                          <ul className="space-y-1">
                            {selectedTerpene.commonStrains.map(strain => (
                              <li key={strain} className="text-gray-700 text-sm flex items-center">
                                <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                                {strain}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Also Found In</h4>
                          <ul className="space-y-1">
                            {selectedTerpene.alsoFoundIn.map(plant => (
                              <li key={plant} className="text-gray-700 text-sm flex items-center">
                                <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                                {plant}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Technical Details</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Boiling Point:</span>
                              <span className="font-medium">{selectedTerpene.boilingPoint}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Typical Concentration:</span>
                              <span className="font-medium">{selectedTerpene.concentration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              // Terpene Grid View
              <div className="space-y-6">
                {/* What are Terpenes */}
                <Card>
                  <CardHeader>
                    <CardTitle>Understanding Terpenes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🌿 Natural Origins</h4>
                        <p className="text-blue-800 text-sm">
                          Found in many plants, flowers, and fruits. Cannabis contains over 200 different terpenes.
                        </p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">👃 Aroma & Flavor</h4>
                        <p className="text-green-800 text-sm">
                          Responsible for the distinct smells and tastes of different cannabis strains.
                        </p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">🔬 Entourage Effect</h4>
                        <p className="text-purple-800 text-sm">
                          Work synergistically with cannabinoids to influence effects and benefits.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Terpene Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTerpenes.map(terpene => (
                    <Card
                      key={terpene.id}
                      className="cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => setSelectedTerpene(terpene)}
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <div className={`w-4 h-4 rounded-full mr-2 ${terpene.color}`}></div>
                          {terpene.name}
                        </CardTitle>
                        <p className="text-gray-500 text-sm italic">{terpene.scientificName}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium text-gray-900 text-sm mb-1">Primary Aromas:</p>
                            <p className="text-gray-600 text-sm">
                              {terpene.aroma.slice(0, 3).join(', ')}
                            </p>
                          </div>
                          
                          <div>
                            <p className="font-medium text-gray-900 text-sm mb-1">Key Effects:</p>
                            <div className="flex flex-wrap gap-1">
                              {terpene.effects.slice(0, 2).map(effect => (
                                <span key={effect} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                  {effect}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <p className="font-medium text-gray-900 text-sm mb-1">Concentration:</p>
                            <p className="text-gray-600 text-sm">{terpene.concentration}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredTerpenes.length === 0 && (
                  <Card>
                    <CardContent>
                      <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">No terpenes found matching your search criteria.</p>
                        <button
                          onClick={() => {
                            setSearchTerm('');
                            setSelectedEffect('');
                          }}
                          className="text-primary-600 hover:text-primary-500"
                        >
                          Clear all filters
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