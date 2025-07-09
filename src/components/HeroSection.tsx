import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  onScrollDown: () => void;
}

// Reduced number of stars but still covering the entire hero section
// Positioned for diagonal slanted movement from top-right to bottom-left (/)
const stars = [
  // Top section stars
  { top: "5%", right: "5%", delay: "0s", duration: "3.5s" },
  { top: "12%", right: "25%", delay: "1.4s", duration: "3s" },
  { top: "8%", right: "45%", delay: "2.8s", duration: "3.5s" },
  { top: "3%", right: "65%", delay: "4.2s", duration: "3s" },
  { top: "10%", right: "85%", delay: "5.6s", duration: "3.5s" },
  // Middle section stars
  { top: "25%", right: "15%", delay: "7s", duration: "4s" },
  { top: "35%", right: "40%", delay: "8.4s", duration: "4.5s" },
  { top: "45%", right: "65%", delay: "9.8s", duration: "4s" },
  // Bottom section stars
  { top: "60%", right: "10%", delay: "11.2s", duration: "4.5s" },
  { top: "70%", right: "35%", delay: "12.6s", duration: "4s" },
  { top: "80%", right: "60%", delay: "14s", duration: "4.5s" },
  { top: "90%", right: "85%", delay: "15.4s", duration: "4s" },
];

const HeroSection = ({ onScrollDown }: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[url('/grid.svg')]" />
        </div>

        {/* Shooting stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {stars.map((star, i) => (
            <div
              key={`star-${i}`}
              className="star"
              style={{
                top: star.top,
                right: star.right,
                animationDelay: star.delay,
                animationDuration: star.duration
              }}
            />
          ))}
        </div>

        {/* Enhanced ambient motion background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 50%, rgba(59, 130, 246, 0.05) 100%)",
              "linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%)",
              "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 50%, rgba(59, 130, 246, 0.05) 100%)"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="inline-block shine-text" style={{ backgroundSize: "200% auto" }}>
                Discover AI Tools
              </span>{" "}
              <span className="block md:inline">
                for Your Next Project
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            className="mx-auto max-w-2xl text-lg text-slate-300 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Explore the most innovative AI-powered tools to enhance your creativity,
            productivity, and innovation in one comprehensive directory
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-6"
          >
            <Button
              onClick={onScrollDown}
              variant="outline"
              size="lg"
              className="explore-tools-btn gradient-border relative rounded-full bg-transparent px-6 py-3 text-white hover:bg-purple-500/10 transition-colors hover-scale"
            >
              Explore Tools
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll down indicator with floating animation */}
      <div className="scroll-indicator">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center"
        >
          <p className="mb-2 text-xs text-slate-400 text-center w-full">Scroll Down</p>
          <motion.div
            animate={{ 
              y: [0, 5, 0],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="flex justify-center w-full"
          >
            <ChevronDown className="h-6 w-6 text-slate-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 