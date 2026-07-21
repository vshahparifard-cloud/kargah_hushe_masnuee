import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide1Cover from './slides/Slide1Cover';
import Slide2Roadmap from './slides/Slide2Roadmap';
import Slide3Ecosystems from './slides/Slide2Ecosystems';
import Slide4ContextMemory from './slides/Slide4ContextMemory';
import Slide5PromptEng from './slides/Slide5PromptEng';
import Slide6PromptPlayground from './slides/Slide6PromptPlayground';
import Slide7AutoDebug from './slides/Slide3PracticalDev';
import Slide8MultiModule from './slides/Slide8MultiModule';
import Slide9ApiSecurity from './slides/Slide4ApiInfra';
import Slide10CostCalculator from './slides/Slide4ApiInfra';
import Slide11RagArch from './slides/Slide5AdvancedArch';
import Slide12MultiAgent from './slides/Slide5AdvancedArch';
import Slide13ProdDeployment from './slides/Slide13ProdDeployment';
import Slide14TechStack from './slides/Slide6TechStack';

export default function SlideViewer({ currentSlide, onRestart }) {
  
  const renderSlide = (index) => {
    switch (index) {
      case 0:
        return <Slide1Cover />;
      case 1:
        return <Slide2Roadmap />;
      case 2:
        return <Slide3Ecosystems />;
      case 3:
        return <Slide4ContextMemory />;
      case 4:
        return <Slide5PromptEng />;
      case 5:
        return <Slide6PromptPlayground />;
      case 6:
        return <Slide7AutoDebug />;
      case 7:
        return <Slide8MultiModule />;
      case 8:
        return <Slide9ApiSecurity />;
      case 9:
        return <Slide10CostCalculator />;
      case 10:
        return <Slide11RagArch />;
      case 11:
        return <Slide12MultiAgent />;
      case 12:
        return <Slide13ProdDeployment />;
      case 13:
        return <Slide14TechStack onRestart={onRestart} />;
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
