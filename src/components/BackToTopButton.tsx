'use client';
import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTopButton() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight ? (scrollTop / docHeight) * 100 : 0;
      setProgress(percent);
      setIsVisible(scrollTop > 300);
    };
    
    updateProgress();
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  // Eased scroll-to-top animation (matches Explore Tools button)
  const handleClick = () => {
    const startPosition = window.pageYOffset;
    const targetPosition = 0;
    const distance = targetPosition - startPosition;
    const duration = 1000; // ms
    let start: number | null = null;
    
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
  };

  return (
    <button
      aria-label="Back to top"
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        background: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(8px)',
        border: '2px solid transparent',
        boxShadow: `0 0 15px rgba(99, 102, 241, 0.3), 
                   0 0 30px rgba(168, 85, 247, 0.2)`,
        backgroundImage: 
          `conic-gradient(from 0deg, rgba(168, 85, 247, ${progress / 100}) ${progress}%, rgba(99, 102, 241, 0.8) 0%)`,
        backgroundClip: 'padding-box',
      }}
    >
      <div className="absolute inset-[2px] rounded-full bg-slate-800/90 flex items-center justify-center backdrop-blur-sm">
        <ChevronUp className="h-6 w-6 text-white drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
      </div>
    </button>
  );
} 