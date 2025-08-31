import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { MarsRoverFact } from '../data/marsRoverFacts';

interface FactPanelProps {
  fact: MarsRoverFact;
  isGenerating: boolean;
}

export function FactPanel({ fact, isGenerating }: FactPanelProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'discovery':
        return 'from-blue-400 to-cyan-400';
      case 'technology':
        return 'from-purple-400 to-violet-400';
      case 'mission':
        return 'from-red-400 to-pink-400';
      case 'environment':
        return 'from-green-400 to-emerald-400';
      default:
        return 'from-blue-400 to-purple-400';
    }
  };

  const getCategoryBorderColor = (category: string) => {
    switch (category) {
      case 'discovery':
        return 'border-blue-400/50';
      case 'technology':
        return 'border-purple-400/50';
      case 'mission':
        return 'border-red-400/50';
      case 'environment':
        return 'border-green-400/50';
      default:
        return 'border-blue-400/50';
    }
  };

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Holographic Container */}
      <div className={`
        relative bg-slate-900/50 backdrop-blur-lg border ${getCategoryBorderColor(fact.category)}
        rounded-2xl p-8 md:p-12
        shadow-2xl
      `}>
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-blue-400/70 rounded-tl-2xl"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-blue-400/70 rounded-tr-2xl"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-blue-400/70 rounded-bl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-blue-400/70 rounded-br-2xl"></div>
        
        {/* Holographic glow effect */}
        <motion.div 
          className="absolute inset-0 rounded-2xl opacity-20"
          style={{
            background: `linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent)`
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Category Badge */}
          <motion.div 
            className="inline-block mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className={`
              px-4 py-2 rounded-full text-sm uppercase tracking-wider
              bg-gradient-to-r ${getCategoryColor(fact.category)}
              text-black font-semibold
              shadow-lg
            `}>
              {fact.category}
            </span>
          </motion.div>
          
          {/* Fact Content */}
          <AnimatePresence mode="wait">
            {!isGenerating ? (
              <motion.div
                key={fact.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold text-white mb-6"
                  style={{ fontFamily: "'Orbitron', 'Exo 2', monospace" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {fact.title}
                </motion.h2>
                
                <motion.p 
                  className="text-lg md:text-xl text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {fact.fact}
                </motion.p>
              </motion.div>
            ) : (
              <motion.div
                className="flex items-center justify-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Loading Animation */}
                <div className="relative">
                  <motion.div
                    className="w-16 h-16 border-4 border-blue-400/30 border-t-blue-400 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-2 w-12 h-12 border-4 border-purple-400/30 border-t-purple-400 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                
                <motion.p 
                  className="ml-6 text-xl text-blue-300"
                  style={{ fontFamily: "'Orbitron', 'Exo 2', monospace" }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ANALYZING DATA...
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Scanline effect */}
        <motion.div 
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background: "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(59, 130, 246, 0.02) 2px, rgba(59, 130, 246, 0.02) 4px)"
          }}
          animate={{ 
            backgroundPosition: ["0px 0px", "20px 0px"] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>
    </motion.div>
  );
}