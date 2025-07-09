"use client";

import React, { useRef, useState } from "react";
import { aiWebsites, aiCategories } from "@/data/ai-websites";
import { AiCategory } from "@/types";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import WebsitesGrid from "@/components/WebsitesGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<AiCategory | "all">("all");
  const websitesRef = useRef<HTMLDivElement>(null);

  // Enhanced smooth scroll function with easing
  const scrollToWebsites = () => {
    if (websitesRef.current) {
      const startPosition = window.pageYOffset;
      const targetPosition = websitesRef.current.getBoundingClientRect().top + window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // ms
      let start: number | null = null;
      
      // Easing function for smoother animation
      const easeInOutCubic = (t: number): number => 
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      
      const animateScroll = (timestamp: number) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * eased);
        
        if (progress < 1) {
          window.requestAnimationFrame(animateScroll);
        }
      };
      
      window.requestAnimationFrame(animateScroll);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection onScrollDown={scrollToWebsites} />

      {/* Websites Section */}
      <div ref={websitesRef} className="pt-8">
        {/* Glassmorphism container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-7xl rounded-t-3xl bg-slate-900/50 backdrop-blur-lg"
        >
          {/* Border glow */}
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <div className="absolute inset-0 rounded-t-3xl bg-gradient-to-b from-white/10 to-transparent opacity-50" />

          {/* Content */}
          <div className="relative z-10 pt-6">
            <div className="px-4 text-center sm:px-6 lg:px-8">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Explore AI Tools
              </h2>
              <p className="mt-2 text-slate-300">
                Find the perfect AI-powered tool for your next project
              </p>
            </div>

            {/* Category Filter */}
            <CategorySection
              categories={aiCategories}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />

            {/* Websites Grid */}
            <WebsitesGrid
              websites={aiWebsites}
              activeCategory={activeCategory}
            />
            
            {/* Add padding at the bottom for better spacing */}
            <div className="h-16"></div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
