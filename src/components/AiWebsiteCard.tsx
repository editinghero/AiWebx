import React from "react";
import { motion, Variants } from "framer-motion";
import { AiWebsite } from "@/types";
import Image from "next/image";
import { Card } from "./ui/card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface AiWebsiteCardProps {
  website: AiWebsite;
}

// ⚡ Bolt: Animation variants extracted to prevent recreating object on every render
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const
    }
  },
  hover: {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const
    }
  }
};

// ⚡ Bolt: Helper function extracted outside to prevent function recreation on every render
const getDomainFromUrl = (url: string): string => {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch {
    // If URL parsing fails, return the original URL
    return url;
  }
};

const AiWebsiteCard: React.FC<AiWebsiteCardProps> = ({ website }) => {
  const domain = getDomainFromUrl(website.url);
  const [imgError, setImgError] = React.useState(false);
  
  // First character of the website name for fallback
  const firstChar = website.name.charAt(0);

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="h-full"
    >
      <Link href={website.url} target="_blank" rel="noopener noreferrer" className="h-full">
        <Card className="group relative h-full overflow-hidden border border-slate-700/30 bg-slate-800/40 backdrop-blur-md">
          {/* Improved glassmorphism effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-70" />
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
          
          <div className="relative z-10 flex h-full items-center gap-4 p-4">
            <motion.div 
              className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-slate-700/80 to-slate-800/80 p-2 shadow-inner"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {!imgError ? (
                <div className="relative h-10 w-10 pulse">
                  <Image
                    src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
                    alt={`${website.name} logo`}
                    fill
                    className="object-contain"
                    onError={() => setImgError(true)}
                    unoptimized
                  />
                </div>
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-indigo-600/80 to-purple-600/80 text-white pulse">
                  <span className="text-lg font-bold">{firstChar}</span>
                </div>
              )}
            </motion.div>
            
            <div className="flex-1">
              <h3 className="text-base font-medium text-white sm:text-lg">{website.name}</h3>
              <p className="text-xs text-slate-300 line-clamp-2">{website.description}</p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <ExternalLink className="h-4 w-4" />
            </motion.div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

// ⚡ Bolt: Wrap with React.memo to prevent unnecessary re-renders when parent state changes but website props remain identical
export default React.memo(AiWebsiteCard);