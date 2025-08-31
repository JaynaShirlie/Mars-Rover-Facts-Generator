import React from 'react';
import { motion } from 'motion/react';

export function MarsRoverHeader() {
  return (
    <motion.header 
      className="relative z-20 py-8 px-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-center space-x-4">
        {/* Mars Rover Icon */}
        <motion.div 
          className="relative"
          animate={{ 
            boxShadow: [
              "0 0 20px rgba(59, 130, 246, 0.5)",
              "0 0 30px rgba(147, 51, 234, 0.7)",
              "0 0 20px rgba(59, 130, 246, 0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-purple-500 to-red-500 rounded-lg flex items-center justify-center border border-blue-400/30">
            {/* Rover SVG Icon */}
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              className="w-10 h-10 text-white"
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <rect x="2" y="14" width="20" height="4" rx="1" />
              <circle cx="6" cy="18" r="2" />
              <circle cx="18" cy="18" r="2" />
              <rect x="8" y="10" width="8" height="4" rx="1" />
              <path d="M12 6V2" />
              <path d="M10 2h4" />
              <circle cx="12" cy="6" r="1" />
              <path d="M4 14l2-4h12l2 4" />
            </svg>
          </div>
        </motion.div>
        
        {/* Title */}
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent"
            style={{ fontFamily: "'Orbitron', 'Exo 2', monospace" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            MARS ROVER
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-blue-300 mt-2 tracking-wider"
            style={{ fontFamily: "'Orbitron', 'Exo 2', monospace" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            FACTS GENERATOR
          </motion.p>
          
          {/* Glowing underline */}
          <motion.div 
            className="h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mt-4"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.9 }}
          />
        </div>
      </div>
      
      {/* Holographic scanlines effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59, 130, 246, 0.03) 2px, rgba(59, 130, 246, 0.03) 4px)"
        }}
        animate={{ 
          backgroundPosition: ["0px 0px", "0px 20px"] 
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
    </motion.header>
  );
}