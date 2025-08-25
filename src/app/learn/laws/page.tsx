'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';

interface State {
  name: string;
  code: string;
  status: 'legal' | 'medical' | 'decriminalized' | 'illegal';
  recreationalLegal: boolean;
  medicalLegal: boolean;
  possessionLimit: string;
  homegrowAllowed: boolean;
  homegrowLimit: string;
  publicConsumption: string;
  retailers: boolean;
  lastUpdated: string;
  keyPoints: string[];
}

const stateData: State[] = [
  {
    name: "California",
    code: "CA",
    status: "legal",
    recreationalLegal: true,
    medicalLegal: true,
    possessionLimit: "1 ounce (28.5g) flower, 8g concentrate",
    homegrowAllowed: true,
    homegrowLimit: "6 plants per person, 12 per household",
    publicConsumption: "Prohibited in public spaces, some designated areas allowed",
    retailers: true,
    lastUpdated: "2024-01-15",
    keyPoints: [
      "Adult use legal since 2016",
      "Medical use legal since 1996", 
      "Social equity programs in place",
      "Local municipalities can ban retailers"
    ]
  },
  {
    name: "New York",
    code: "NY", 
    status: "legal",
    recreationalLegal: true,
    medicalLegal: true,
    possessionLimit: "3 ounces flower, 24g concentrate",
    homegrowAllowed: true,
    homegrowLimit: "6 plants per person, 12 per household (when retail fully operational)",
    publicConsumption: "Prohibited in most public spaces, allowed where smoking tobacco is permitted",
    retailers: true,
    lastUpdated: "2024-01-10",
    keyPoints: [
      "Adult use legal since 2021",
      "Medical use legal since 2014",
      "Social and economic equity license priority",
      "Automatic expungement of past convictions"
    ]
  },
  {
    name: "Texas",
    code: "TX",
    status: "medical",
    recreationalLegal: false,
    medicalLegal: true,
    possessionLimit: "Medical patients only - varies by prescription",
    homegrowAllowed: false,
    homegrowLimit: "Not permitted",
    publicConsumption: "Medical use only in private",
    retailers: false,
    lastUpdated: "2024-01-08",
    keyPoints: [
      "Limited medical program (TCUP)",
      "Low-THC products only for qualified conditions",
      "Possession of small amounts decriminalized in some cities",
      "No recreational use permitted"
    ]
  },
  {
    name: "Florida",
    code: "FL",
    status: "medical",
    recreationalLegal: false,
    medicalLegal: true,
    possessionLimit: "Medical patients - 2.5 oz every 35 days",
    homegrowAllowed: false,
    homegrowLimit: "Not permitted",
    publicConsumption: "Medical use only, private consumption",
    retailers: true,
    lastUpdated: "2024-01-12",
    keyPoints: [
      "Medical use legal since 2016",
      "Smokable flower allowed since 2019",
      "No homegrow permitted",
      "Recreational ballot measure in 2024"
    ]
  }
];

const federalInfo = {
  status: "Federally illegal under Controlled Substances Act",
  scheduling: "Schedule I substance (no accepted medical use federally)",
  bankingIssues: "SAFE Banking Act pending, cash-heavy industry",
  interstate: "Interstate commerce prohibited",
  employment: "Federal employees subject to drug testing",
  travel: "Cannot cross state lines with cannabis",
  lastUpdated: "2024-01-15"
};

export default function LegalInfoPage() {
  const [selectedState, setSelectedState] = useState<State | null>(null);
  const [activeTab, setActiveTab] = useState<'states' | 'federal' | 'guide'>('states');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStates = stateData.filter(state => 
    state.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    state.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'legal': return 'bg-green-100 text-green-800';
      case 'medical': return 'bg-blue-100 text-blue-800';
      case 'decriminalized': return 'bg-yellow-100 text-yellow-800';
      case 'illegal': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'legal': return 'Fully Legal';
      case 'medical': return 'Medical Only';
      case 'decriminalized': return 'Decriminalized';
      case 'illegal': return 'Illegal';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/learn" className="text-primary-600 hover:text-primary-500 mb-4 inline-flex items-center">
            ← Back to Learning Hub
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cannabis Laws & Legal Information
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Stay informed about cannabis legalization, regulations, and your rights. Laws vary significantly by state and are constantly evolving.
          </p>
        </div>

        {/* Important Disclaimer */}
        <Card className="border-yellow-200 bg-yellow-50 mb-8">
          <CardContent>
            <div className="flex items-start">
              <span className="text-yellow-600 text-2xl mr-3">⚠️</span>
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Legal Disclaimer</h3>
                <p className="text-yellow-700 text-sm">
                  This information is for educational purposes only and should not be considered legal advice. 
                  Cannabis laws change frequently and vary by jurisdiction. Always consult with local authorities 
                  or legal professionals for current, specific legal guidance in your area.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            {[
              { key: 'states', label: 'State Laws' },
              { key: 'federal', label: 'Federal Law' },
              { key: 'guide', label: 'Legal Guide' }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'states' && (
          <div className="grid lg:grid-cols-4 gap-8">
            {/* State List */}
            <div className="lg:col-span-1 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Search States</CardTitle>
                </CardHeader>
                <CardContent>
                  <input
                    type="text"
                    placeholder="Search by state..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Fully Legal:</span>
                      <span className="font-semibold text-green-600">
                        {stateData.filter(s => s.status === 'legal').length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Medical Only:</span>
                      <span className="font-semibold text-blue-600">
                        {stateData.filter(s => s.status === 'medical').length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Showing:</span>
                      <span className="font-semibold">{filteredStates.length}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-2">
                {filteredStates.map(state => (
                  <button
                    key={state.code}
                    onClick={() => setSelectedState(state)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      selectedState?.code === state.code
                        ? 'border-primary-300 bg-primary-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{state.name}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(state.status)}`}>
                        {getStatusText(state.status)}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* State Details */}
            <div className="lg:col-span-3">
              {selectedState ? (
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl">{selectedState.name}</CardTitle>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedState.status)}`}>
                        {getStatusText(selectedState.status)}
                      </span>
                    </div>
                    <p className="text-gray-500">Last updated: {selectedState.lastUpdated}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Legal Status</h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex items-center">
                              <span className={`w-3 h-3 rounded-full mr-2 ${selectedState.recreationalLegal ? 'bg-green-500' : 'bg-red-500'}`}></span>
                              <span>Recreational: {selectedState.recreationalLegal ? 'Legal' : 'Illegal'}</span>
                            </div>
                            <div className="flex items-center">
                              <span className={`w-3 h-3 rounded-full mr-2 ${selectedState.medicalLegal ? 'bg-green-500' : 'bg-red-500'}`}></span>
                              <span>Medical: {selectedState.medicalLegal ? 'Legal' : 'Illegal'}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Possession Limits</h4>
                          <p className="text-gray-700 text-sm">{selectedState.possessionLimit}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Home Cultivation</h4>
                          <p className="text-gray-700 text-sm">
                            {selectedState.homegrowAllowed ? selectedState.homegrowLimit : 'Not permitted'}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Public Consumption</h4>
                          <p className="text-gray-700 text-sm">{selectedState.publicConsumption}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Retail Sales</h4>
                          <div className="flex items-center text-sm">
                            <span className={`w-3 h-3 rounded-full mr-2 ${selectedState.retailers ? 'bg-green-500' : 'bg-red-500'}`}></span>
                            <span>{selectedState.retailers ? 'Licensed retailers operating' : 'No retail sales'}</span>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Key Information</h4>
                          <ul className="space-y-1">
                            {selectedState.keyPoints.map((point, index) => (
                              <li key={index} className="text-gray-700 text-sm flex items-start">
                                <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent>
                    <div className="text-center py-12">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a State</h3>
                      <p className="text-gray-600">Choose a state from the list to view detailed legal information.</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}

        {activeTab === 'federal' && (
          <div className="space-y-6">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800">Federal Cannabis Laws</CardTitle>
                <p className="text-gray-500">Last updated: {federalInfo.lastUpdated}</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Current Status</h4>
                      <p className="text-gray-700">{federalInfo.status}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Drug Scheduling</h4>
                      <p className="text-gray-700">{federalInfo.scheduling}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Banking & Finance</h4>
                      <p className="text-gray-700">{federalInfo.bankingIssues}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Interstate Commerce</h4>
                      <p className="text-gray-700">{federalInfo.interstate}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Federal Employment</h4>
                      <p className="text-gray-700">{federalInfo.employment}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Travel Restrictions</h4>
                      <p className="text-gray-700">{federalInfo.travel}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Federal vs State Law Conflicts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">The Legal Gray Area</h4>
                    <p className="text-gray-700 mb-3">
                      Cannabis remains federally illegal even in states where it's legal. This creates complex legal situations 
                      where state and federal law conflict.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-blue-900 mb-2">Cole Memorandum</h5>
                      <p className="text-blue-800 text-sm">
                        Former DOJ guidance deprioritizing federal enforcement in legal states (rescinded 2018)
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-medium text-green-900 mb-2">State Rights</h5>
                      <p className="text-green-800 text-sm">
                        States can legalize and regulate cannabis within their borders
                      </p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-medium text-yellow-900 mb-2">Federal Property</h5>
                      <p className="text-yellow-800 text-sm">
                        Federal law applies on federal property regardless of state law
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'guide' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Cannabis Legal Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Know Before You Go</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">✓</span>
                          <div>
                            <h5 className="font-medium text-gray-900">Research Local Laws</h5>
                            <p className="text-gray-600 text-sm">Laws vary by state, county, and city</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">✓</span>
                          <div>
                            <h5 className="font-medium text-gray-900">Check Age Requirements</h5>
                            <p className="text-gray-600 text-sm">Usually 21+ for recreational, varies for medical</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">✓</span>
                          <div>
                            <h5 className="font-medium text-gray-900">Understand Possession Limits</h5>
                            <p className="text-gray-600 text-sm">Limits apply to flower, concentrates, and edibles</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <span className="text-red-500 mr-3 text-xl">✗</span>
                          <div>
                            <h5 className="font-medium text-gray-900">Don't Cross State Lines</h5>
                            <p className="text-gray-600 text-sm">Even between legal states</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="text-red-500 mr-3 text-xl">✗</span>
                          <div>
                            <h5 className="font-medium text-gray-900">No Public Consumption</h5>
                            <p className="text-gray-600 text-sm">Most places prohibit public use</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="text-red-500 mr-3 text-xl">✗</span>
                          <div>
                            <h5 className="font-medium text-gray-900">No Driving Under Influence</h5>
                            <p className="text-gray-600 text-sm">DUI laws apply to cannabis</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Common Legal Questions</h4>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium text-gray-900 mb-2">Can I travel with cannabis?</h5>
                        <p className="text-gray-700 text-sm">
                          Generally no. You cannot transport cannabis across state lines, even between legal states. 
                          Some airports in legal states allow possession for flights within the state.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium text-gray-900 mb-2">Can my employer still drug test?</h5>
                        <p className="text-gray-700 text-sm">
                          Yes. Most employers can still maintain drug-free workplace policies and test employees, 
                          even in legal states. Some states have employee protections for off-duty medical use.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium text-gray-900 mb-2">What about past convictions?</h5>
                        <p className="text-gray-700 text-sm">
                          Many legal states have expungement or record clearing programs for past cannabis convictions. 
                          Check your state's specific programs and application processes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Legal Resources</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium text-blue-900 mb-2">NORML</h5>
                        <p className="text-blue-800 text-sm">National Organization for Reform of Marijuana Laws</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-medium text-green-900 mb-2">State Websites</h5>
                        <p className="text-green-800 text-sm">Official state cannabis program websites</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h5 className="font-medium text-purple-900 mb-2">Legal Aid</h5>
                        <p className="text-purple-800 text-sm">Local legal aid societies and cannabis lawyers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}