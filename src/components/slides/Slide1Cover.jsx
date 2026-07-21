import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cpu, Clock, CheckCircle2 } from 'lucide-react';

export default function Slide1Cover() {
  const highlights = [
    "مجموعه ابزارهای Google AI & Gemini 1.5/3.6",
    "زیست‌بوم Claude & Antigravity CLI & Copilot",
    "مدیریت حافظه پنجره کانتکست (Context Window)",
    "جدول مقایسه جامع هزینه‌ها & مکانیسم چت مدل‌ها",
    "معماری RAG و سیستم‌های چندایجنت (Multi-Agent)"
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative text-right">
      
      {/* Decorative top pill */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between gap-4 border-b border-slate-800/80 pb-4"
      >
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono">
            اسلاید ۰۱ / ۲۱
          </span>
          <span className="text-xs text-slate-400 font-medium">افتتاحیه کارگاه و نگاه کلی</span>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-sky-400" />
            <span>مدت زمان: ۶ ساعت کامل عملی</span>
          </div>
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-6">
        
        {/* Right Column: Title & Speaker */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>مسترکلاس عملی و تعاملی مهندسی</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-100 tracking-tight leading-[1.25]"
          >
            مهندسی هوش مصنوعی <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent glow-text-cyan">
              & توسعه ایجنتیک
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            راهنمای جامع ساخت سیستم‌های هوش مصنوعی آماده تولید، بهره‌گیری از APIهای مدرن LLM، حلقه‌های ایجنت خودکار و خطوط لوله پرسرعت RAG.
          </motion.p>

          {/* Instructor Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 glass-card p-4 rounded-xl border border-sky-500/20 max-w-md"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-slate-900 font-extrabold text-lg shadow-lg shadow-sky-500/20">
              وحید
            </div>
            <div>
              <div className="text-xs text-sky-400 font-semibold uppercase tracking-wider">مدرس کارگاه</div>
              <div className="text-base font-bold text-slate-100">وحید شهپری فرد</div>
              <div className="text-xs text-slate-400">معمار ارشد هوش مصنوعی و راهبر توسعه</div>
            </div>
          </motion.div>
        </div>

        {/* Left Column: Workshop Highlights Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-slate-700/80 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle top light bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500" />

          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-200 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-sky-400" />
              <span>ماژول‌های اصلی کارگاه</span>
            </h3>
            <span className="text-[10px] font-mono bg-slate-800 text-sky-300 border border-slate-700 px-2 py-0.5 rounded">
              ۲۱ اسلاید تخصصی
            </span>
          </div>

          <div className="space-y-3">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + idx * 0.08 }}
                className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/30 transition-colors"
              >
                <div className="p-1 rounded bg-sky-500/10 text-sky-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm text-slate-300 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Interactive hint */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>از <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-[11px] text-sky-300">←</kbd> یا کلید جهت‌نما برای پیمایش استفاده کنید</span>
            <div className="flex items-center gap-1.5 text-sky-400 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <span>ارائه زنده</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
        <span>© ۲۰۲۶ کارگاه مهندسی هوش مصنوعی</span>
        <span>مدرس: وحید شهپری فرد</span>
      </div>
    </div>
  );
}
