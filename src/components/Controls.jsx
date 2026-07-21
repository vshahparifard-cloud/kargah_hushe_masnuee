import React from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Grid, HelpCircle, Maximize2 } from 'lucide-react';
import { SLIDES_DATA } from '../data/slidesData';

export default function Controls({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onJumpToSlide,
  isAutoplay,
  onToggleAutoplay,
  onToggleOverview,
  onToggleShortcuts
}) {
  const currentData = SLIDES_DATA[currentSlide] || SLIDES_DATA[0];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 px-4 sm:px-8 py-3 bg-[#0b0f19]/90 backdrop-blur-md border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto flex flex-col gap-2">
        
        {/* Main Controls Row */}
        <div className="flex items-center justify-between gap-4">
          
          {/* Slide Category & Title */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/30 text-sky-400">
              {currentData.number} / 0{totalSlides}
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-200 line-clamp-1">
                {currentData.title}
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                {currentData.category}
              </span>
            </div>
          </div>

          {/* Center Navigation Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 mx-auto sm:mx-0">
            {/* Previous Button */}
            <button
              onClick={onPrev}
              disabled={currentSlide === 0}
              title="Previous Slide (Left Arrow)"
              className="p-2 sm:px-3.5 sm:py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:border-sky-500/40 hover:text-sky-300 flex items-center gap-1 text-xs font-semibold"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            {/* Slide Index Counter Pill */}
            <div className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-1.5">
              <span className="text-sky-400 font-bold">{currentSlide + 1}</span>
              <span className="text-slate-600">/</span>
              <span>{totalSlides}</span>
            </div>

            {/* Next Button */}
            <button
              onClick={onNext}
              disabled={currentSlide === totalSlides - 1}
              title="Next Slide (Right Arrow or Space)"
              className="p-2 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-xs shadow-lg shadow-sky-500/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1 transform active:scale-95"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Autoplay Toggle */}
            <button
              onClick={onToggleAutoplay}
              title={isAutoplay ? "Pause Slideshow" : "Start Autoplay Slideshow"}
              className={`p-2 rounded-xl border text-xs font-medium transition-all flex items-center gap-1.5 ${
                isAutoplay 
                  ? 'bg-sky-500/20 border-sky-400 text-sky-300' 
                  : 'bg-slate-800/90 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              {isAutoplay ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-sky-400" />
                  <span className="hidden md:inline">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span className="hidden md:inline">Auto</span>
                </>
              )}
            </button>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleOverview}
              title="Slide Overview (Press O)"
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/60 hover:text-sky-300 transition-colors"
            >
              <Grid className="w-4 h-4 text-sky-400" />
            </button>

            <button
              onClick={onToggleShortcuts}
              title="Shortcuts Help"
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-slate-700/60 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Interactive Progress Bar */}
        <div className="w-full space-y-1 pt-1">
          <div className="h-1.5 w-full bg-slate-800/90 rounded-full overflow-hidden flex gap-1 p-0.5 border border-slate-800">
            {SLIDES_DATA.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => onJumpToSlide(idx)}
                title={`Jump to Slide ${idx + 1}: ${slide.title}`}
                className={`h-full rounded-full transition-all duration-300 flex-1 ${
                  idx === currentSlide
                    ? 'bg-gradient-to-r from-sky-400 to-blue-500 shadow-md shadow-sky-500/40 scale-y-125'
                    : idx < currentSlide
                      ? 'bg-sky-600/70 hover:bg-sky-500'
                      : 'bg-slate-700/50 hover:bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
