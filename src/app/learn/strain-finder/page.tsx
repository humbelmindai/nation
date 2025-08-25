'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

interface Question {
  id: number;
  question: string;
  options: { value: string; label: string }[];
  type: 'single' | 'multiple';
}

interface StrainRecommendation {
  name: string;
  type: string;
  match: number;
  thc: string;
  cbd: string;
  effects: string[];
  description: string;
  reasons: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "What's your primary goal with cannabis?",
    type: 'single',
    options: [
      { value: 'relaxation', label: 'Relaxation & Stress Relief' },
      { value: 'energy', label: 'Energy & Creativity' },
      { value: 'sleep', label: 'Better Sleep' },
      { value: 'pain', label: 'Pain Management' },
      { value: 'social', label: 'Social & Recreation' },
      { value: 'focus', label: 'Focus & Productivity' }
    ]
  },
  {
    id: 2,
    question: "What time of day do you typically use cannabis?",
    type: 'single',
    options: [
      { value: 'morning', label: 'Morning (6AM - 12PM)' },
      { value: 'afternoon', label: 'Afternoon (12PM - 6PM)' },
      { value: 'evening', label: 'Evening (6PM - 10PM)' },
      { value: 'night', label: 'Night (10PM+)' },
      { value: 'anytime', label: 'Varies / Anytime' }
    ]
  },
  {
    id: 3,
    question: "How experienced are you with cannabis?",
    type: 'single',
    options: [
      { value: 'beginner', label: 'Beginner (new to cannabis)' },
      { value: 'novice', label: 'Novice (tried a few times)' },
      { value: 'intermediate', label: 'Intermediate (regular user)' },
      { value: 'experienced', label: 'Experienced (very familiar)' }
    ]
  },
  {
    id: 4,
    question: "What effects are you looking for? (Select all that apply)",
    type: 'multiple',
    options: [
      { value: 'happy', label: 'Happy & Euphoric' },
      { value: 'relaxed', label: 'Relaxed & Calm' },
      { value: 'creative', label: 'Creative & Inspired' },
      { value: 'focused', label: 'Focused & Alert' },
      { value: 'sleepy', label: 'Sleepy & Sedated' },
      { value: 'energetic', label: 'Energetic & Uplifted' },
      { value: 'hungry', label: 'Increased Appetite' },
      { value: 'giggly', label: 'Giggly & Social' }
    ]
  },
  {
    id: 5,
    question: "Any conditions you're hoping to address?",
    type: 'multiple',
    options: [
      { value: 'anxiety', label: 'Anxiety & Stress' },
      { value: 'depression', label: 'Depression & Mood' },
      { value: 'chronic-pain', label: 'Chronic Pain' },
      { value: 'insomnia', label: 'Insomnia & Sleep Issues' },
      { value: 'inflammation', label: 'Inflammation' },
      { value: 'nausea', label: 'Nausea & Appetite Loss' },
      { value: 'adhd', label: 'ADHD & Focus Issues' },
      { value: 'none', label: 'None - Recreational Use' }
    ]
  },
  {
    id: 6,
    question: "What's your THC tolerance preference?",
    type: 'single',
    options: [
      { value: 'low', label: 'Low THC (under 15%) - Mild effects' },
      { value: 'moderate', label: 'Moderate THC (15-20%) - Balanced' },
      { value: 'high', label: 'High THC (20%+) - Strong effects' },
      { value: 'cbd', label: 'Prefer CBD-dominant strains' }
    ]
  },
  {
    id: 7,
    question: "What flavors appeal to you?",
    type: 'multiple',
    options: [
      { value: 'fruity', label: 'Fruity & Sweet' },
      { value: 'citrus', label: 'Citrus & Zesty' },
      { value: 'earthy', label: 'Earthy & Natural' },
      { value: 'pine', label: 'Pine & Woodsy' },
      { value: 'diesel', label: 'Diesel & Pungent' },
      { value: 'floral', label: 'Floral & Herbal' },
      { value: 'spicy', label: 'Spicy & Peppery' }
    ]
  }
];

const strainDatabase = [
  {
    name: "Blue Dream",
    type: "Hybrid (Sativa-dominant)",
    thc: "17-24%",
    cbd: "0.1-0.2%",
    effects: ["happy", "relaxed", "creative", "euphoric"],
    conditions: ["anxiety", "depression", "chronic-pain"],
    flavors: ["fruity", "citrus"],
    timeOfDay: ["afternoon", "evening"],
    experience: ["beginner", "novice", "intermediate"],
    description: "A legendary balanced strain perfect for daytime use with creative and relaxing effects."
  },
  {
    name: "Granddaddy Purple",
    type: "Indica",
    thc: "17-23%",
    cbd: "0.1%",
    effects: ["relaxed", "sleepy", "happy", "hungry"],
    conditions: ["insomnia", "chronic-pain", "anxiety"],
    flavors: ["fruity"],
    timeOfDay: ["night"],
    experience: ["intermediate", "experienced"],
    description: "Classic indica perfect for evening relaxation and sleep with beautiful purple coloration."
  },
  {
    name: "Sour Diesel",
    type: "Sativa",
    thc: "19-25%",
    cbd: "0.1-0.2%",
    effects: ["energetic", "creative", "focused", "happy"],
    conditions: ["depression", "adhd", "chronic-pain"],
    flavors: ["diesel", "citrus"],
    timeOfDay: ["morning", "afternoon"],
    experience: ["intermediate", "experienced"],
    description: "Fast-acting energizing strain perfect for daytime creativity and motivation."
  },
  {
    name: "Northern Lights",
    type: "Indica",
    thc: "16-21%",
    cbd: "0.1%",
    effects: ["relaxed", "sleepy", "happy"],
    conditions: ["insomnia", "chronic-pain", "anxiety"],
    flavors: ["earthy", "pine"],
    timeOfDay: ["night"],
    experience: ["beginner", "novice", "intermediate"],
    description: "Classic indica strain known for its powerful relaxing effects and sedation."
  },
  {
    name: "Jack Herer",
    type: "Sativa",
    thc: "18-24%",
    cbd: "0.1%",
    effects: ["energetic", "creative", "focused", "happy"],
    conditions: ["depression", "adhd"],
    flavors: ["pine", "spicy"],
    timeOfDay: ["morning", "afternoon"],
    experience: ["intermediate", "experienced"],
    description: "Award-winning sativa providing clear-headed cerebral effects and creativity."
  },
  {
    name: "ACDC",
    type: "Hybrid (CBD-dominant)",
    thc: "1-6%",
    cbd: "14-20%",
    effects: ["relaxed", "focused", "happy"],
    conditions: ["anxiety", "inflammation", "chronic-pain"],
    flavors: ["earthy", "citrus"],
    timeOfDay: ["anytime"],
    experience: ["beginner", "novice"],
    description: "High-CBD strain perfect for anxiety relief without psychoactive effects."
  }
];

export default function StrainFinderPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState<StrainRecommendation[]>([]);

  const handleAnswer = (questionId: number, value: string, isMultiple: boolean) => {
    if (isMultiple) {
      const currentAnswers = answers[questionId] || [];
      const newAnswers = currentAnswers.includes(value)
        ? currentAnswers.filter(a => a !== value)
        : [...currentAnswers, value];
      setAnswers({ ...answers, [questionId]: newAnswers });
    } else {
      setAnswers({ ...answers, [questionId]: [value] });
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateRecommendations();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateRecommendations = () => {
    const userPrefs = {
      goal: answers[1]?.[0] || '',
      timeOfDay: answers[2]?.[0] || '',
      experience: answers[3]?.[0] || '',
      effects: answers[4] || [],
      conditions: answers[5] || [],
      thcTolerance: answers[6]?.[0] || '',
      flavors: answers[7] || []
    };

    const scoredStrains = strainDatabase.map(strain => {
      let score = 0;
      const reasons: string[] = [];

      // Match primary goal
      if (userPrefs.goal === 'relaxation' && strain.effects.includes('relaxed')) {
        score += 20;
        reasons.push("Perfect for relaxation");
      }
      if (userPrefs.goal === 'energy' && strain.effects.includes('energetic')) {
        score += 20;
        reasons.push("Great for energy and motivation");
      }
      if (userPrefs.goal === 'sleep' && strain.effects.includes('sleepy')) {
        score += 20;
        reasons.push("Excellent for sleep");
      }
      if (userPrefs.goal === 'focus' && strain.effects.includes('focused')) {
        score += 20;
        reasons.push("Enhances focus and concentration");
      }

      // Match time of day
      if (strain.timeOfDay.includes(userPrefs.timeOfDay)) {
        score += 15;
        reasons.push(`Ideal for ${userPrefs.timeOfDay} use`);
      }

      // Match experience level
      if (strain.experience.includes(userPrefs.experience)) {
        score += 10;
        reasons.push(`Suitable for ${userPrefs.experience} users`);
      }

      // Match desired effects
      const matchingEffects = userPrefs.effects.filter(effect => strain.effects.includes(effect));
      score += matchingEffects.length * 8;
      if (matchingEffects.length > 0) {
        reasons.push(`Provides ${matchingEffects.join(', ')} effects`);
      }

      // Match medical conditions
      const matchingConditions = userPrefs.conditions.filter(condition => 
        strain.conditions.includes(condition)
      );
      score += matchingConditions.length * 12;
      if (matchingConditions.length > 0) {
        reasons.push(`May help with ${matchingConditions.join(', ')}`);
      }

      // Match flavor preferences
      const matchingFlavors = userPrefs.flavors.filter(flavor => strain.flavors.includes(flavor));
      score += matchingFlavors.length * 5;
      if (matchingFlavors.length > 0) {
        reasons.push(`Features ${matchingFlavors.join(', ')} flavors`);
      }

      // THC tolerance matching
      const thcPercentage = parseInt(strain.thc.split('-')[1]);
      if (userPrefs.thcTolerance === 'low' && thcPercentage <= 15) {
        score += 15;
        reasons.push("Appropriate THC level for beginners");
      } else if (userPrefs.thcTolerance === 'moderate' && thcPercentage >= 15 && thcPercentage <= 20) {
        score += 15;
        reasons.push("Moderate THC level");
      } else if (userPrefs.thcTolerance === 'high' && thcPercentage > 20) {
        score += 15;
        reasons.push("High THC for experienced users");
      } else if (userPrefs.thcTolerance === 'cbd' && strain.name === 'ACDC') {
        score += 25;
        reasons.push("High-CBD, low-THC strain");
      }

      return {
        name: strain.name,
        type: strain.type,
        match: Math.min(100, score),
        thc: strain.thc,
        cbd: strain.cbd,
        effects: strain.effects,
        description: strain.description,
        reasons: reasons.slice(0, 3) // Top 3 reasons
      };
    });

    const topRecommendations = scoredStrains
      .sort((a, b) => b.match - a.match)
      .slice(0, 4);

    setRecommendations(topRecommendations);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setRecommendations([]);
  };

  const currentQ = questions[currentQuestion];
  const currentAnswers = answers[currentQ?.id] || [];

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Link href="/learn" className="text-primary-600 hover:text-primary-500 mb-4 inline-flex items-center">
              ← Back to Learning Hub
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your Strain Recommendations
            </h1>
            <p className="text-xl text-gray-600">
              Based on your preferences, here are our top strain recommendations for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {recommendations.map((strain, index) => (
              <Card key={strain.name} variant="elevated" className="overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{strain.name}</CardTitle>
                      <p className="text-primary-600 font-medium">{strain.type}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-600 mb-1">
                        {strain.match}%
                      </div>
                      <p className="text-sm text-gray-500">Match</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-3 text-sm mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">
                      THC {strain.thc}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                      CBD {strain.cbd}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{strain.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Why this strain matches you:</h4>
                    <ul className="space-y-1">
                      {strain.reasons.map((reason, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href={`/learn/strains/${index + 1}`}>
                    <Button variant="outline" className="w-full">
                      Learn More About {strain.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="primary" size="lg" onClick={resetQuiz} className="mr-4">
              Take Quiz Again
            </Button>
            <Link href="/learn/strains">
              <Button variant="outline" size="lg">
                Browse All Strains
              </Button>
            </Link>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/learn" className="text-primary-600 hover:text-primary-500 mb-4 inline-flex items-center">
            ← Back to Learning Hub
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cannabis Strain Finder Quiz
          </h1>
          <p className="text-xl text-gray-600">
            Answer a few questions to find the perfect cannabis strains for your needs and preferences.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <Card variant="elevated">
            <CardHeader>
              <CardTitle className="text-xl">{currentQ.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {currentQ.options.map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                      currentAnswers.includes(option.value)
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type={currentQ.type === 'multiple' ? 'checkbox' : 'radio'}
                      name={`question-${currentQ.id}`}
                      value={option.value}
                      checked={currentAnswers.includes(option.value)}
                      onChange={(e) => handleAnswer(currentQ.id, option.value, currentQ.type === 'multiple')}
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-3 text-gray-900">{option.label}</span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
            >
              ← Previous
            </Button>
            <Button
              variant="primary"
              onClick={nextQuestion}
              disabled={currentAnswers.length === 0}
            >
              {currentQuestion === questions.length - 1 ? 'Get My Recommendations' : 'Next →'}
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}