import React, { useRef } from "react";
import { motion } from "framer-motion";
import { AiCategory, CategoryInfo } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconMap } from "./ui/IconMap";

interface CategorySectionProps {
  categories: CategoryInfo[];
  activeCategory: AiCategory | "all";
  onSelectCategory: (category: AiCategory | "all") => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Function to scroll left/right
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mt-8">
      {/* Shadow indicators */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-900/90 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-900/90 to-transparent" />
      
      {/* Categories container */}
      <div 
        ref={scrollContainerRef}
        className="hide-scrollbar flex overflow-x-auto px-12 py-6 pb-2 sm:px-12 lg:px-12"
      >
        {/* Navigation arrows - positioned inside the scrollable area but with absolute positioning */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20">
          <button
            onClick={() => scroll("left")}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600/90 to-purple-600/90 text-white shadow-lg transition-all hover:from-indigo-500 hover:to-purple-500"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>
        
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20">
          <button
            onClick={() => scroll("right")}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600/90 to-purple-600/90 text-white shadow-lg transition-all hover:from-indigo-500 hover:to-purple-500"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        
        <div className="flex gap-3">
          {/* "All" category */}
          <motion.button
            onClick={() => onSelectCategory("all")}
            className={cn(
              "flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all",
              activeCategory === "all"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80"
            )}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <IconMap iconName="layers" className="h-4 w-4" />
            <span>All Categories</span>
          </motion.button>

          {/* Individual categories */}
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => onSelectCategory(category.id as AiCategory)}
              className={cn(
                "flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all",
                activeCategory === category.id
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80"
              )}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <IconMap iconName={category.icon} className="h-4 w-4" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
      
      {/* Add custom styles for hiding scrollbar */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CategorySection; 