import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide1Cover from './slides/Slide1Cover';
import Slide2Ecosystems from './slides/Slide2Ecosystems';
import Slide3PracticalDev from './slides/Slide3PracticalDev';
import Slide4ApiInfra from './slides/Slide4ApiInfra';
import Slide5AdvancedArch from './slides/Slide5AdvancedArch';
import Slide6TechStack from './slides/Slide6TechStack';

export default function SlideViewer({ currentSlide, onRestart }) {
  
  const renderSlide = (index) => {
    switch (index) {
      case 0:
        return <Slide1Cover />;
      case 1:
        return <Slide2Ecosystems />;
      case 2:
        return <Slide3PracticalDev />;
      case 3:
        return <Slide4ApiInfra />;
      case 4:
        return <Slide5AdvancedArch />;
      case 5:
        return <Slide6TechStack onRestart={onRestart} />;
      default:
        return <Slide1Cover />;
    }
  };

  const slideVariants = {
    initial: { opacity: 0, scale: 0.97, y: 10 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, scale: 1.02, y: -10, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-center min-h-[calc(100vh-140px)]">
      <div className="w-full h-full min-h-[620px] glass-panel rounded-3xl border border-sky-500/20 shadow-2xl relative flex flex-col justify-between overflow-hidden">
        
        {/* Subtle glowing edge lines */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 opacity-80" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full flex-1 flex flex-col justify-between"
          >
            {renderSlide(currentSlide)}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
