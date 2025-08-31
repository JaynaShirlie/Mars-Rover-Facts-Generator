import React from 'react';
import { motion } from 'motion/react';

interface TechBadge {
  name: string;
  icon: string;
  color: string;
}

const techStack: TechBadge[] = [
  { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
  { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-blue-600' },
  { name: 'Tailwind', icon: '🎨', color: 'from-teal-400 to-blue-400' },
  { name: 'Motion', icon: '✨', color: 'from-purple-400 to-pink-400' },
  { name: 'CSS', icon: '🎭', color: 'from-orange-400 to-red-400' },
  { name: 'HTML', icon: '🌐', color: 'from-orange-500 to-yellow-400' }
];

export function TechBadges() {
  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {/* Header */}
      <motion.h3 
        className="text-xl font-bold text-center text-blue-300 mb-6"
        style={{ fontFamily: "'Orbitron', 'Exo 2', monospace" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        TECH STACK
      </motion.h3>
      
      {/* Tech badges */}
      <div className="space-y-3">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="relative group"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
          >
            {/* Badge Container */}
            <motion.div
              className={`
                relative p-4 bg-slate-900/60 backdrop-blur-sm
                border border-gray-600/30 rounded-lg
                hover:border-blue-400/50 transition-all duration-300
                cursor-pointer
              `}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Holographic glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20"
                style={{
                  background: `linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.2), transparent)`
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Content */}
              <div className="relative z-10 flex items-center space-x-3">
                {/* Icon */}
                <motion.div
                  className={`
                    w-10 h-10 rounded-full bg-gradient-to-br ${tech.color}
                    flex items-center justify-center text-lg
                    shadow-lg
                  `}
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(59, 130, 246, 0)",
                      "0 0 10px rgba(59, 130, 246, 0.3)",
                      "0 0 0px rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {tech.icon}
                </motion.div>
                
                {/* Name */}
                <span className="text-white font-medium">
                  {tech.name}
                </span>
              </div>
              
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-blue-400/30"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-blue-400/30"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-blue-400/30"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-blue-400/30"></div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      {/* Additional decorative element */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
        <motion.p 
          className="text-xs text-gray-400 mt-2 uppercase tracking-wider"
          style={{ fontFamily: "'Orbitron', 'Exo 2', monospace" }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          POWERED BY
        </motion.p>
      </motion.div>
    </motion.div>
  );
}