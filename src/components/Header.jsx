import React, { useState } from 'react';
import { Sparkles, Grid, HelpCircle, Maximize2, Minimize2, Home, Play, Layers, FileDown, Loader2 } from 'lucide-react';
import { generateSyllabusPdf } from '../utils/exportPdf';

export default function Header({ 
  viewMode, 
  setViewMode, 
  currentSlide, 
  totalSlides, 
  onToggleOverview, 
  onToggleShortcuts,
  isFullscreen,
  onToggleFullscreen
}) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExportPdf = () => {
    generateSyllabusPdf((status) => setIsExporting(status));
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0b0f19]/80 border-b border-sky-500/10 px-4 md:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand / Title */}
        <div 
          onClick={() => setViewMode('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 p-[1px] shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0f172a] rounded-[11px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-sky-400 animate-pulse" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm md:text-base font-bold text-slate-100 tracking-tight group-hover:text-sky-400 transition-colors">
                مهندسی هوش مصنوعی <span className="text-sky-400 font-normal">&</span> توسعه ایجنتیک
              </h1>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold bg-sky-500/10 border border-sky-500/30 text-sky-300 rounded-full">
                کارگاه ۶ ساعته
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
              مدرس: وحید شهپری فرد
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {viewMode === 'presentation' && (
            <div className="hidden md:flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-lg px-3 py-1 text-xs text-slate-300 font-mono">
              <Layers className="w-3.5 h-3.5 text-sky-400" />
              <span>اسلاید {currentSlide + 1} از {totalSlides}</span>
            </div>
          )}

          {/* Export PDF Button */}
          <button
            onClick={handleExportPdf}
            disabled={isExporting}
            title="دانلود PDF سرفصل‌های کارگاه"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30 transition-all hover:border-sky-400 shadow-sm disabled:opacity-50"
          >
            {isExporting ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin text-sky-400" />
            ) : (
              <FileDown className="w-3.5 h-3.5 text-sky-400" />
            )}
            <span className="hidden sm:inline">{isExporting ? 'در حال تولید PDF...' : 'دانلود PDF سرفصل'}</span>
          </button>

          {/* Overview Grid Button */}
          <button
            onClick={onToggleOverview}
            title="نمای کلی اسلایدها (کلید O)"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700/60 hover:border-sky-500/40 transition-all hover:text-sky-300"
          >
            <Grid className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline">نمای کلی</span>
            <kbd className="hidden lg:inline-block text-[10px] bg-slate-900 border border-slate-700 text-slate-400 rounded px-1.5 ml-0.5">O</kbd>
          </button>

          {/* Keyboard Shortcuts Button */}
          <button
            onClick={onToggleShortcuts}
            title="کلیدهای میانبر (کلید ?)"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/60 transition-all hover:text-sky-300"
          >
            <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden lg:inline">میانبرها</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={onToggleFullscreen}
            title="حالت تمام‌صفحه (کلید F)"
            className="p-1.5 rounded-lg text-slate-400 hover:text-sky-300 bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 transition-all"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Switch View Mode */}
          {viewMode === 'hero' ? (
            <button
              onClick={() => setViewMode('presentation')}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all transform hover:-translate-y-0.5"
            >
              <Play className="w-3.5 h-3.5 fill-white rotate-180" />
              <span>ارائه اسلایدها</span>
            </button>
          ) : (
            <button
              onClick={() => setViewMode('hero')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/60 transition-all hover:text-sky-300"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">صفحه اصلی</span>
            </button>
          )}
        </div>

      </div>
    </header>
  );
}
