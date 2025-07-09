import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full bg-black/10 px-4 py-3 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
                Ai
              </span>
              Webx
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="https://github.com/editinghero"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm text-white transition-all duration-300 hover:bg-white/20"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 