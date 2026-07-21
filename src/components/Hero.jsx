import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Cpu, Bot, Code, ShieldCheck, ArrowLeft, Clock } from 'lucide-react';

export default function Hero({ onStart }) {
  const syllabusHighlights = [
    {
      icon: Cpu,
      title: "۱. زیست‌بوم‌ها و حافظه ۲M",
      desc: "Google AI Suite vs Claude، حافظه پنجره کانتکست (Context) ۲ میلیون توکنی و ابزارها",
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30",
      iconColor: "text-cyan-400"
    },
    {
      icon: Code,
      title: "۲. توسعه ایجنتیک و پرامپت",
      desc: "مهندسی پرامپت، Antigravity، Claude Code، اشکال‌زدایی خودکار و پروژه‌های چندماژوله",
      color: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400"
    },
    {
      icon: ShieldCheck,
      title: "۳. زیرساخت و اقتصاد API",
      desc: "امنیت کلیدها، Rate Limiting، جدول مقایسه کامل هزینه مدل‌ها و توکن‌ها",
      color: "from-indigo-500/20 to-purple-500/20",
      borderColor: "border-indigo-500/30",
      iconColor: "text-indigo-400"
    },
    {
      icon: Bot,
      title: "۴. RAG و سیستم‌های چندایجنت",
      desc: "داده‌گاه‌های برداری، Embeddings، مکانیسم چت مدل‌ها، الگوی ReAct و لابراتوار کد پایتون",
      color: "from-purple-500/20 to-sky-500/20",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400"
    }
  ];

  return (
    <div className="relative min-h-[calc(100vh-65px)] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 z-10 overflow-hidden text-right">
      
      {/* Decorative background glow accents */}
      <div className="absolute top-1/4 right-1/2 translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[250px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full text-center">
        
        {/* Glowing Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill mb-8 text-xs sm:text-sm font-semibold text-sky-300 border border-sky-400/30 shadow-lg shadow-sky-500/10"
        >
          <Sparkles className="w-4 h-4 text-sky-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>کارگاه جامع و تعاملی ۶ ساعته (۲۱ ماژول تخصصی)</span>
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-100 tracking-tight leading-[1.25] mb-6"
        >
          مهندسی هوش مصنوعی <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent glow-text-cyan">
            & توسعه ایجنتیک
          </span>
        </motion.h1>

        {/* Subtitle & Instructor */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-6"
        >
          تسلط بر معماری‌های مدرن هوش مصنوعی، زیست‌بوم Google Gemini و Claude، خطوط لوله RAG و سیستم‌های چندایجنت خودکار در محیط عملیاتی.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-400 mb-10"
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-900/80 border border-slate-800 rounded-xl">
            <span className="text-slate-500">مدرس کارگاه:</span>
            <span className="font-extrabold text-slate-100 text-base">وحید شهپری فرد</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/80 border border-slate-800 rounded-xl">
            <Clock className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-mono text-xs text-sky-300">۶ ساعت کارگاه عملی + ۲۱ اسلاید</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={onStart}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 text-white font-bold text-lg shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Play className="w-5 h-5 fill-white rotate-180 transition-transform group-hover:scale-110" />
            <span>شروع ارائه اسلایدها (۲۱ بخش)</span>
            <ArrowLeft className="w-5 h-5 text-sky-200 group-hover:-translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Module Feature Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-right"
        >
          {syllabusHighlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className={`glass-card p-5 rounded-2xl border ${item.borderColor} bg-gradient-to-b ${item.color} relative overflow-hidden group hover:border-sky-400/50 transition-all`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/60 group-hover:border-sky-500/40 transition-colors">
                    <IconComp className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    بخش ۰{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-100 mb-1.5 group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 group-hover:text-slate-400">
                  <span>مشاهده سرفصل</span>
                  <ArrowLeft className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:-translate-x-0.5 transition-all text-sky-400" />
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </div>
  );
}
