import React from "react";
import { motion } from "framer-motion";
import { AiWebsite, AiCategory } from "@/types";
import AiWebsiteCard from "./AiWebsiteCard";

interface WebsitesGridProps {
  websites: AiWebsite[];
  activeCategory: AiCategory | "all";
}

const WebsitesGrid: React.FC<WebsitesGridProps> = ({
  websites,
  activeCategory,
}) => {
  // Filter websites by category
  const filteredWebsites = activeCategory === "all"
    ? websites
    : websites.filter((website) => website.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  return (
    <div className="container mx-auto max-w-full px-4 py-8">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid min-h-[600px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {filteredWebsites.map((website) => (
          <AiWebsiteCard key={website.id} website={website} />
        ))}
        
        {/* Add empty placeholder cards if fewer items to maintain grid layout */}
        {filteredWebsites.length > 0 && filteredWebsites.length < 4 && 
          Array.from({ length: 4 - filteredWebsites.length }).map((_, i) => (
            <div key={`empty-${i}`} className="hidden lg:block"></div>
          ))
        }
        {filteredWebsites.length > 0 && filteredWebsites.length < 3 && 
          Array.from({ length: 3 - filteredWebsites.length }).map((_, i) => (
            <div key={`empty-md-${i}`} className="hidden md:block lg:hidden"></div>
          ))
        }
        {filteredWebsites.length > 0 && filteredWebsites.length < 2 && 
          Array.from({ length: 2 - filteredWebsites.length }).map((_, i) => (
            <div key={`empty-sm-${i}`} className="hidden sm:block md:hidden"></div>
          ))
        }
      </motion.div>

      {filteredWebsites.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex h-[400px] items-center justify-center"
        >
          <div className="rounded-lg bg-slate-800/50 p-6 text-center backdrop-blur-sm">
            <p className="text-slate-300">No websites found in this category</p>
            <p className="mt-2 text-sm text-slate-400">Try selecting a different category</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default WebsitesGrid; 