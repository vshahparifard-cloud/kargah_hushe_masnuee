import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Terminal, Code, Database, Cpu, PartyPopper, RotateCcw, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function Slide6TechStack({ onRestart }) {
  
  const techStack = [
    {
      name: "Google Gemini",
      badge: "Gemini 1.5 Pro / 3.6 Flash",
      role: "مدل پایه چندوجهی و حافظه ۲ میلیون توکنی",
      icon: Sparkles,
      color: "from-sky-500/20 to-blue-600/20 border-sky-500/30",
      accent: "text-sky-400"
    },
    {
      name: "Claude Code",
      badge: "Claude 3.5 Sonnet",
      role: "تبعیت از دستورالعمل‌ها و بازسازی خودمختار سورس‌کد",
      icon: Code,
      color: "from-amber-500/20 to-orange-600/20 border-amber-500/30",
      accent: "text-amber-400"
    },
    {
      name: "Antigravity CLI",
      badge: "IDE ایجنتیک",
      role: "فریم‌ورک ایجنت چندابزاره و اجرای سیستم محلی",
      icon: Terminal,
      color: "from-indigo-500/20 to-purple-600/20 border-indigo-500/30",
      accent: "text-indigo-400"
    },
    {
      name: "زیست‌بوم Python",
      badge: "AsyncIO & Pydantic",
      role: "FastAPI، فریم‌ورک‌های RAG و حلقه‌های ایجنت سفارشی",
      icon: Cpu,
      color: "from-emerald-500/20 to-teal-600/20 border-emerald-500/30",
      accent: "text-emerald-400"
    },
    {
      name: "داده‌گاه‌های برداری (Vector DBs)",
      badge: "Qdrant / Pinecone / Chroma",
      role: "نمایه‌سازی تعبیه‌های متنی و بازیابی معنایی سورس‌کد",
      icon: Database,
      color: "from-purple-500/20 to-pink-600/20 border-purple-500/30",
      accent: "text-purple-400"
    }
  ];

  const handleTriggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative text-right">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono ml-2">
            اسلاید پایانی
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">فناوری‌های تسلط‌یافته</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
            پشته فناوری تسلط‌یافته و جمع‌بندی
          </h2>
        </div>

        {/* Celebration Button */}
        <button
          onClick={handleTriggerConfetti}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-sky-300 border border-sky-500/30 text-xs font-bold shadow-md transition-all self-start sm:self-auto"
        >
          <PartyPopper className="w-4 h-4 text-sky-400" />
          <span>جشن موفقیت کارگاه 🎉</span>
        </button>
      </div>

      {/* Main Grid Content */}
      <div className="my-auto py-4 space-y-6">
        
        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((tech, idx) => {
            const IconComp = tech.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`glass-card p-5 rounded-2xl border ${tech.color} bg-gradient-to-b flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-700">
                      <IconComp className={`w-5 h-5 ${tech.accent}`} />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-slate-700">
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {tech.role}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>ابزار اصلی پشته</span>
                  <CheckCircle2 className={`w-3.5 h-3.5 ${tech.accent}`} />
                </div>
              </motion.div>
            );
          })}

          {/* Workshop Key Takeaway Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="glass-panel p-5 rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-500/10 to-blue-600/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <h3 className="text-base font-bold text-slate-100">آموزه‌های کلیدی کارگاه</h3>
              </div>

              <ul className="text-xs text-slate-300 space-y-1.5 mt-2">
                <li className="flex items-start gap-1.5">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>بهره‌گیری از کاشینگ سیاق ۲ میلیون توکنی برای صرفه‌جویی هزینه.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>پیاده‌سازی حلقه‌های ایجنت ReAct با قابلیت فراخوانی ابزارهای متعدد.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>اعمال امنیت Zero-Trust کلیدهای API و کنترل نرخ درخواست‌ها.</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-sky-500/20 flex items-center justify-between">
              <span className="text-xs text-sky-300 font-semibold">آماده استقرار عملیاتی</span>
              <span className="text-xs font-bold text-emerald-400">۱۰۰٪ تکمیل شده</span>
            </div>
          </motion.div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onRestart}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-sky-500/20 transition-all transform hover:scale-[1.02]"
          >
            <RotateCcw className="w-4 h-4" />
            <span>شروع مجدد ارائه</span>
          </button>

          <a
            href="https://github.com/vshahparifard-cloud/kargah_hushe_masnuee"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition-all hover:text-sky-300"
          >
            <span>مخزن گیت‌هاب پروژه‌</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
        <span>کارگاه مهندسی هوش مصنوعی و توسعه ایجنتیک</span>
        <span className="font-mono text-sky-400">مدرس: وحید شاهپریفرد</span>
      </div>

    </div>
  );
}
