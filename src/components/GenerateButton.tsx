import { motion } from 'framer-motion';
import React from 'react';

interface GenerateButtonProps {
  onClick: () => void;
  isGenerating: boolean;
}

export function GenerateButton({ onClick, isGenerating }: GenerateButtonProps) {
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Button Container */}
      <motion.button
        onClick={onClick}
        disabled={isGenerating}
        className={`
          relative px-12 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500
          text-white font-bold text-lg uppercase tracking-wider
          rounded-xl border-2 border-blue-400/50
          backdrop-blur-sm
          disabled:opacity-60 disabled:cursor-not-allowed
          transition-all duration-300
          overflow-hidden
        `}
        style={{ fontFamily: "'Orbitron', 'Exo 2', monospace" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        whileHover={{
          boxShadow: [
            "0 0 20px rgba(59, 130, 246, 0.5)",
            "0 0 30px rgba(147, 51, 234, 0.7)",
            "0 0 40px rgba(239, 68, 68, 0.5)"
          ]
        }}
      >
        {/* Background glow animation (non-interactive) */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 opacity-0 pointer-events-none"
          animate={!isGenerating ? {
            opacity: [0, 0.3, 0],
            scale: [1, 1.1, 1]
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Button text */}
        <span className="relative z-10">
          {isGenerating ? 'PROCESSING...' : 'GENERATE FACT'}
        </span>
        
        {/* Holographic scanlines */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px)"
          }}
          animate={{ 
            backgroundPosition: ["0px 0px", "20px 20px"] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Corner highlights */}
        <div className="absolute top-1 left-1 w-3 h-3 border-l-2 border-t-2 border-white/70"></div>
        <div className="absolute top-1 right-1 w-3 h-3 border-r-2 border-t-2 border-white/70"></div>
        <div className="absolute bottom-1 left-1 w-3 h-3 border-l-2 border-b-2 border-white/70"></div>
        <div className="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-white/70"></div>
      </motion.button>
      
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-blue-400/30 -m-2 pointer-events-none"
        animate={!isGenerating ? {
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Pulse effect when generating */}
      {isGenerating && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 rounded-xl opacity-30 pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.div>
  );
}