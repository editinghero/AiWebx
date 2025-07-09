import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Heart } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-12 border-t border-slate-800 bg-slate-900/50 py-8 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
                Ai
              </span>
              Webx
            </span>
          </div>
          
          <div className="text-sm text-slate-400">
            <p>© {new Date().getFullYear()} AiWebx. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://github.com/editinghero"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm text-white transition-all duration-300 hover:bg-slate-700"
              >
                <Github size={16} />
                <span>GitHub</span>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block"
            >
              <div className="flex items-center gap-1 text-sm text-slate-400">
                Made with 
                <motion.span
                  animate={{ 
                    scale: [1, 1.2, 1],
                    color: ["#f43f5e", "#ec4899", "#f43f5e"]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Heart size={14} className="fill-current text-pink-500" />
                </motion.span>
                by EditingHero
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 