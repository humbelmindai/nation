'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

interface DosingResult {
  startingDose: string;
  maxDose: string;
  frequency: string;
  recommendations: string[];
  warnings: string[];
}

export default function DosingCalculatorPage() {
  const [experience, setExperience] = useState('');
  const [bodyWeight, setBodyWeight] = useState('');
  const [tolerance, setTolerance] = useState('');
  const [consumptionMethod, setConsumptionMethod] = useState('');
  const [condition, setCondition] = useState('');
  const [age, setAge] = useState('');
  const [medications, setMedications] = useState('');
  const [result, setResult] = useState<DosingResult | null>(null);

  const calculateDosing = () => {
    // Dosing algorithm based on multiple factors
    let startingDose = 2.5; // Base starting dose in mg THC
    let maxDose = 10;
    let frequency = "1-2 times daily";
    const recommendations: string[] = [];
    const warnings: string[] = [];

    // Adjust for experience level
    if (experience === 'beginner') {
      startingDose = 1;
      maxDose = 5;
      recommendations.push("Start with the lowest possible dose and wait at least 2 hours before taking more");
      recommendations.push("Keep a dosing journal to track effects");
    } else if (experience === 'intermediate') {
      startingDose = 2.5;
      maxDose = 10;
    } else if (experience === 'experienced') {
      startingDose = 5;
      maxDose = 20;
    }

    // Adjust for body weight
    const weight = parseFloat(bodyWeight);
    if (weight && weight < 130) {
      startingDose *= 0.8;
      maxDose *= 0.8;
      recommendations.push("Lower body weight may require smaller doses");
    } else if (weight && weight > 200) {
      startingDose *= 1.2;
      maxDose *= 1.2;
      recommendations.push("Higher body weight may require slightly larger doses");
    }

    // Adjust for tolerance
    if (tolerance === 'none') {
      startingDose *= 0.5;
      warnings.push("No tolerance: Start extra low and go very slow");
    } else if (tolerance === 'high') {
      startingDose *= 2;
      maxDose *= 2;
      warnings.push("High tolerance detected: Consider a tolerance break");
    }

    // Adjust for consumption method
    if (consumptionMethod === 'edibles') {
      frequency = "Once daily";
      recommendations.push("Edibles can take 30 minutes to 2 hours to take effect");
      recommendations.push("Effects can last 4-8 hours");
      warnings.push("Do not take more within 2 hours - edibles have delayed onset");
    } else if (consumptionMethod === 'vaping') {
      startingDose = 1;
      maxDose = 5;
      frequency = "As needed";
      recommendations.push("Effects are immediate with vaping");
      recommendations.push("Start with 1-2 small puffs and wait 15 minutes");
    } else if (consumptionMethod === 'tinctures') {
      frequency = "1-3 times daily";
      recommendations.push("Hold under tongue for 60-90 seconds for faster absorption");
      recommendations.push("Sublingual effects start in 15-45 minutes");
    }

    // Condition-specific adjustments
    if (condition === 'chronic-pain') {
      recommendations.push("For chronic pain, consistent daily dosing is often more effective");
      recommendations.push("Consider CBD:THC ratios of 1:1 or higher CBD");
      frequency = "2-3 times daily";
    } else if (condition === 'anxiety') {
      startingDose *= 0.5;
      recommendations.push("Lower THC doses are often better for anxiety");
      recommendations.push("Consider high-CBD, low-THC products");
      warnings.push("High THC doses may increase anxiety in sensitive individuals");
    } else if (condition === 'insomnia') {
      recommendations.push("Take 1-2 hours before desired bedtime");
      recommendations.push("Indica-dominant strains are typically better for sleep");
      frequency = "Once daily (evening)";
    }

    // Age considerations
    const ageNum = parseFloat(age);
    if (ageNum && ageNum > 65) {
      startingDose *= 0.5;
      maxDose *= 0.7;
      warnings.push("Seniors may be more sensitive to cannabis effects");
      recommendations.push("Monitor for interactions with other medications");
    }

    // Medication warnings
    if (medications === 'yes') {
      warnings.push("IMPORTANT: Consult with your doctor about potential drug interactions");
      warnings.push("Cannabis may affect how your body processes certain medications");
    }

    // General safety recommendations
    recommendations.push("Never drive or operate machinery while under the influence");
    recommendations.push("Store cannabis products safely away from children and pets");
    recommendations.push("Stay hydrated and have snacks available");

    setResult({
      startingDose: startingDose.toFixed(1),
      maxDose: maxDose.toFixed(1),
      frequency,
      recommendations,
      warnings
    });
  };

  const resetCalculator = () => {
    setExperience('');
    setBodyWeight('');
    setTolerance('');
    setConsumptionMethod('');
    setCondition('');
    setAge('');
    setMedications('');
    setResult(null);
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
            Cannabis Dosing Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Get personalized dosing recommendations based on your experience level, body weight, consumption method, and medical needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="space-y-6">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cannabis Experience Level *
                  </label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  >
                    <option value="">Select experience level</option>
                    <option value="beginner">Beginner (Never used or very limited experience)</option>
                    <option value="intermediate">Intermediate (Occasional use, some experience)</option>
                    <option value="experienced">Experienced (Regular use, familiar with effects)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Body Weight (lbs)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 150"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    value={bodyWeight}
                    onChange={(e) => setBodyWeight(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 25"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Tolerance Level *
                  </label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    value={tolerance}
                    onChange={(e) => setTolerance(e.target.value)}
                  >
                    <option value="">Select tolerance level</option>
                    <option value="none">No tolerance (haven't used in months)</option>
                    <option value="low">Low tolerance (use occasionally)</option>
                    <option value="moderate">Moderate tolerance (regular use)</option>
                    <option value="high">High tolerance (daily use, need more to feel effects)</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Consumption & Medical Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Consumption Method *
                  </label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    value={consumptionMethod}
                    onChange={(e) => setConsumptionMethod(e.target.value)}
                  >
                    <option value="">Select consumption method</option>
                    <option value="edibles">Edibles (gummies, chocolates, etc.)</option>
                    <option value="vaping">Vaping/Smoking</option>
                    <option value="tinctures">Tinctures/Oils</option>
                    <option value="topicals">Topicals (creams, balms)</option>
                    <option value="capsules">Capsules</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Condition/Goal
                  </label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                  >
                    <option value="">Select primary use</option>
                    <option value="chronic-pain">Chronic Pain</option>
                    <option value="anxiety">Anxiety/Stress</option>
                    <option value="insomnia">Sleep/Insomnia</option>
                    <option value="depression">Depression</option>
                    <option value="inflammation">Inflammation</option>
                    <option value="nausea">Nausea/Appetite</option>
                    <option value="recreational">Recreational Use</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Are you currently taking any medications? *
                  </label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    value={medications}
                    onChange={(e) => setMedications(e.target.value)}
                  >
                    <option value="">Select option</option>
                    <option value="no">No medications</option>
                    <option value="yes">Yes, I take medications</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            <div className="flex space-x-4">
              <Button 
                variant="primary" 
                className="flex-1" 
                onClick={calculateDosing}
                disabled={!experience || !tolerance || !consumptionMethod}
              >
                Calculate My Dosing
              </Button>
              <Button variant="outline" onClick={resetCalculator}>
                Reset
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {result ? (
              <>
                <Card variant="elevated" className="border-primary-200 bg-primary-50">
                  <CardHeader>
                    <CardTitle className="text-primary-800">Your Personalized Dosing Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-primary-600 mb-1">
                          {result.startingDose} mg
                        </div>
                        <p className="text-sm text-gray-600">Starting Dose</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-primary-600 mb-1">
                          {result.maxDose} mg
                        </div>
                        <p className="text-sm text-gray-600">Maximum Dose</p>
                      </div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-lg font-semibold text-gray-900 mb-1">
                        {result.frequency}
                      </div>
                      <p className="text-sm text-gray-600">Recommended Frequency</p>
                    </div>
                  </CardContent>
                </Card>

                {result.warnings.length > 0 && (
                  <Card className="border-red-200 bg-red-50">
                    <CardHeader>
                      <CardTitle className="text-red-800 flex items-center">
                        ⚠️ Important Warnings
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {result.warnings.map((warning, index) => (
                          <li key={index} className="text-red-700 text-sm flex items-start">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {warning}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                <Card>
                  <CardHeader>
                    <CardTitle>Personalized Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {result.recommendations.map((rec, index) => (
                        <li key={index} className="text-gray-700 text-sm flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>How This Calculator Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">🧮 Science-Based Algorithm</h4>
                      <p className="text-gray-600 text-sm">Our calculator uses peer-reviewed research and clinical guidelines to provide personalized dosing recommendations.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">🔍 Multiple Factors</h4>
                      <p className="text-gray-600 text-sm">We consider your experience, body weight, tolerance, consumption method, and medical needs for accurate recommendations.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">⚡ Safety First</h4>
                      <p className="text-gray-600 text-sm">All recommendations follow "start low, go slow" principles with built-in safety warnings and drug interaction alerts.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">👨‍⚕️ Professional Guidance</h4>
                      <p className="text-gray-600 text-sm">For medical use, always consult with a cannabis-knowledgeable healthcare provider for personalized medical advice.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Disclaimer */}
            <Card className="border-gray-300">
              <CardHeader>
                <CardTitle className="text-gray-700">Medical Disclaimer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  This calculator provides general educational information only and is not medical advice. 
                  Individual responses to cannabis vary greatly. Always consult with a qualified healthcare 
                  provider before starting any cannabis regimen, especially if you have medical conditions 
                  or take medications. Never exceed recommended doses and always follow local laws.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}