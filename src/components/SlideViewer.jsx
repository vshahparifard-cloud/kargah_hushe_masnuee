import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide1Cover from './slides/Slide1Cover';
import Slide2Roadmap from './slides/Slide2Roadmap';
import Slide3Ecosystems from './slides/Slide2Ecosystems';
import Slide4Antigravity from './slides/Slide4Antigravity';
import Slide5ClaudeCode from './slides/Slide5ClaudeCode';
import Slide6CopilotCodex from './slides/Slide6CopilotCodex';
import Slide7NotebookLM from './slides/Slide7NotebookLM';
import Slide8ContextMemory from './slides/Slide4ContextMemory';
import Slide9PromptEng from './slides/Slide5PromptEng';
import Slide10PromptPlayground from './slides/Slide6PromptPlayground';
import Slide11AutoDebug from './slides/Slide3PracticalDev';
import Slide12MultiModule from './slides/Slide8MultiModule';
import Slide13ApiSecurity from './slides/Slide4ApiInfra';
import Slide14CostCalculator from './slides/Slide4ApiInfra';
import Slide15RagArch from './slides/Slide5AdvancedArch';
import Slide16MultiAgent from './slides/Slide5AdvancedArch';
import Slide17ToolComparison from './slides/Slide17ToolComparison';
import Slide18ProdDeployment from './slides/Slide13ProdDeployment';
import Slide19PracticalLab from './slides/Slide19PracticalLab';
import Slide20TechStack from './slides/Slide6TechStack';

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
        return <Slide4Antigravity />;
      case 4:
        return <Slide5ClaudeCode />;
      case 5:
        return <Slide6CopilotCodex />;
      case 6:
        return <Slide7NotebookLM />;
      case 7:
        return <Slide8ContextMemory />;
      case 8:
        return <Slide9PromptEng />;
      case 9:
        return <Slide10PromptPlayground />;
      case 10:
        return <Slide11AutoDebug />;
      case 11:
        return <Slide12MultiModule />;
      case 12:
        return <Slide13ApiSecurity />;
      case 13:
        return <Slide14CostCalculator />;
      case 14:
        return <Slide15RagArch />;
      case 15:
        return <Slide16MultiAgent />;
      case 16:
        return <Slide17ToolComparison />;
      case 17:
        return <Slide18ProdDeployment />;
      case 18:
        return <Slide19PracticalLab />;
      case 19:
        return <Slide20TechStack onRestart={onRestart} />;
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
