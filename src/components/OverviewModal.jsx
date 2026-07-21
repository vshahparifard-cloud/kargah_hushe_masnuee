import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Grid, Check, ArrowLeft, FileDown, Loader2 } from 'lucide-react';
import { SLIDES_DATA } from '../data/slidesData';
import { generateSyllabusPdf } from '../utils/exportPdf';

export default function OverviewModal({ isOpen, onClose, currentSlide, onSelectSlide }) {
  const [isExporting, setIsExporting] = useState(false);

  if (!isOpen) return null;

  const handleExportPdf = (e) => {
    e.stopPropagation();
    generateSyllabusPdf((status) => setIsExporting(status));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-xl text-right">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-6xl max-h-[90vh] bg-[#0f172a] border border-sky-500/30 rounded-3xl p-6 sm:p-8 flex flex-col shadow-2xl overflow-hidden"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                <Grid className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-100">نمای کلی اسلایدهای کارگاه</h2>
                <p className="text-xs text-slate-400">برای انتقال مستقیم به هر ماژول، روی اسلاید مربوطه کلیک کنید.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleExportPdf}
                disabled={isExporting}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30 transition-all hover:border-sky-400 disabled:opacity-50"
              >
                {isExporting ? <Loader2 className="w-3.5 h-3.5 animate-spin text-sky-400" /> : <FileDown className="w-3.5 h-3.5 text-sky-400" />}
                <span>{isExporting ? 'در حال تولید PDF...' : 'دانلود PDF سرفصل‌ها'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Grid of Slide Thumbnails */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 overflow-y-auto pr-1">
            {SLIDES_DATA.map((slide, idx) => {
              const isActive = currentSlide === idx;

              return (
                <div
                  key={slide.id}
                  onClick={() => {
                    onSelectSlide(idx);
                    onClose();
                  }}
                  className={`group relative p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-gradient-to-br from-sky-500/20 to-blue-600/20 border-sky-400 shadow-xl shadow-sky-500/20 ring-2 ring-sky-400/50'
                      : 'bg-slate-900/80 border-slate-800 hover:border-sky-500/40 hover:bg-slate-800/90'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-slate-800 text-sky-400 border border-slate-700">
                        اسلاید {slide.number}
                      </span>
                      {isActive && (
                        <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Check className="w-3 h-3" /> فعال
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors mb-1">
                      {slide.title}
                    </h3>
                    <span className="text-xs text-sky-400 font-medium block mb-2">{slide.subtitle}</span>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {slide.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500 group-hover:text-sky-300">
                    <span>{slide.category}</span>
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
            <span>برای بستن <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 text-slate-300 rounded font-mono">ESC</kbd> را فشار دهید</span>
            <span>مجموعاً ۲۱ ماژول تعاملی</span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
