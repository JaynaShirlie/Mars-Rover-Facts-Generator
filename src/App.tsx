import React, { useState } from 'react';
import { MarsRoverHeader } from './components/MarsRoverHeader';
import { FactPanel } from './components/FactPanel';
import { GenerateButton } from './components/GenerateButton';
import { StarField } from './components/StarField';
import { marsRoverFacts } from './data/marsRoverFacts';

export default function App() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const currentFact = marsRoverFacts[currentFactIndex];

  const generateNewFact = () => {
  if (isGenerating) return;
    if (!marsRoverFacts || marsRoverFacts.length === 0) return;
    setIsGenerating(true);
    setTimeout(() => {
      let availableIndexes = marsRoverFacts.map((_, idx) => idx).filter(idx => idx !== currentFactIndex);
      let newIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
  if (newIndex === undefined) newIndex = currentFactIndex;
      setCurrentFactIndex(newIndex);
      setIsGenerating(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Star Field Background */}
      <StarField />
      
      {/* Mars Planet Background */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-red-500 to-orange-600 rounded-full opacity-20 animate-pulse"></div>
      
      {/* Main Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <MarsRoverHeader />
        
        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="max-w-4xl w-full space-y-8">
            {/* Main Fact Panel */}
            <FactPanel 
              fact={currentFact} 
              isGenerating={isGenerating}
            />
            
            <div className="flex justify-center">
              <GenerateButton 
                onClick={generateNewFact}
                isGenerating={isGenerating}
              />
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
}