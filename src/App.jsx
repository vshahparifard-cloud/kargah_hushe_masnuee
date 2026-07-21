import React, { useState, useEffect, useCallback } from 'react';
import BackgroundGlow from './components/BackgroundGlow';
import Header from './components/Header';
import Hero from './components/Hero';
import SlideViewer from './components/SlideViewer';
import Controls from './components/Controls';
import OverviewModal from './components/OverviewModal';
import ShortcutsModal from './components/ShortcutsModal';
import { SLIDES_DATA } from './data/slidesData';

export default function App() {
  const [viewMode, setViewMode] = useState('hero'); // 'hero' | 'presentation'
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalSlides = SLIDES_DATA.length;

  const handleNext = useCallback(() => {
    setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  }, []);

  const handleJumpToSlide = useCallback((index) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  }, [totalSlides]);

  const handleStartPresentation = () => {
    setViewMode('presentation');
    setCurrentSlide(0);
  };

  const handleRestartPresentation = () => {
    setCurrentSlide(0);
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(err => console.log(err));
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(err => console.log(err));
      }
    }
  };

  // Keyboard navigation listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept inputs or modals when typing
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === ' ') {
        if (viewMode === 'presentation' && !isOverviewOpen && !isShortcutsOpen) {
          e.preventDefault();
          handleNext();
        }
      } else if (e.key === 'ArrowLeft') {
        if (viewMode === 'presentation' && !isOverviewOpen && !isShortcutsOpen) {
          e.preventDefault();
          handlePrev();
        }
      } else if (e.key === 'o' || e.key === 'O') {
        e.preventDefault();
        setIsOverviewOpen(prev => !prev);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        handleToggleFullscreen();
      } else if (e.key === 'Home') {
        e.preventDefault();
        handleJumpToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        handleJumpToSlide(totalSlides - 1);
      } else if (e.key === 'Escape') {
        setIsOverviewOpen(false);
        setIsShortcutsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, isOverviewOpen, isShortcutsOpen, handleNext, handlePrev, handleJumpToSlide, totalSlides]);

  // Autoplay timer effect
  useEffect(() => {
    let interval = null;
    if (isAutoplay && viewMode === 'presentation') {
      interval = setInterval(() => {
        setCurrentSlide(prev => {
          if (prev >= totalSlides - 1) {
            setIsAutoplay(false);
            return prev;
          }
          return prev + 1;
        });
      }, 7000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoplay, viewMode, totalSlides]);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-[#e2e8f0] flex flex-col relative selection:bg-[#38bdf8]/30 selection:text-[#38bdf8]">
      {/* Background Animated Glow Canvas */}
      <BackgroundGlow />

      {/* Header Bar */}
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onToggleOverview={() => setIsOverviewOpen(true)}
        onToggleShortcuts={() => setIsShortcutsOpen(true)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />

      {/* Main View Container */}
      <main className="flex-1 flex flex-col justify-between z-10 pb-20">
        {viewMode === 'hero' ? (
          <Hero onStart={handleStartPresentation} />
        ) : (
          <SlideViewer
            currentSlide={currentSlide}
            onRestart={handleRestartPresentation}
          />
        )}
      </main>

      {/* Bottom Controls Bar (when in presentation mode or anywhere) */}
      {viewMode === 'presentation' && (
        <Controls
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onPrev={handlePrev}
          onNext={handleNext}
          onJumpToSlide={handleJumpToSlide}
          isAutoplay={isAutoplay}
          onToggleAutoplay={() => setIsAutoplay(prev => !prev)}
          onToggleOverview={() => setIsOverviewOpen(true)}
          onToggleShortcuts={() => setIsShortcutsOpen(true)}
        />
      )}

      {/* Modals */}
      <OverviewModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        currentSlide={currentSlide}
        onSelectSlide={(idx) => {
          handleJumpToSlide(idx);
          setViewMode('presentation');
        }}
      />

      <ShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />
    </div>
  );
}
