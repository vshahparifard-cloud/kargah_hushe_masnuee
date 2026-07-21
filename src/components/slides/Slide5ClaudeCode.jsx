import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Sparkles, Monitor, CheckCircle2 } from 'lucide-react';

export default function Slide5ClaudeCode() {
  const features = [
    {
      title: "۱. مدل استدلال عمیق Claude 3.5 Sonnet",
      desc: "قدرت فوق‌العاده در درک معماری‌های پیچیده نرم‌افزار، بازنویسی کدهای قدیمی و تبعیت دقیق از دستورالعمل‌ها.",
      icon: Sparkles
    },
    {
      title: "۲. قابلیت‌های Computer Use",
      desc: "امکان تعامل مستقیم ایجنت با محیط گرافیکی سیستم‌عامل، مرورگر، برنامه‌نویسی بصری و انجام کارهای چندمرحله‌ای دسکتاپ.",
      icon: Monitor
    },
    {
      title: "۳. زیست‌بوم Artifacts",
      desc: "تولید و رندر آنی کامپوننت‌های مستقل کد، نمودارهای Mermaid، مستندات تعاملی و ابزارهای فرانت‌اند در یک پنجره مجزا.",
      icon: Code
    },
    {
      title: "۴. ساختار پرامپت با تگ‌های XML",
      desc: "بهره‌گیری نیتیو از تگ‌های <context> و <instructions> جهت ایزوله‌سازی دستورات از داده‌ها و جلوگیری از تداخل زمینه‌ای.",
      icon: Terminal
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative text-right">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono ml-2">
            اسلاید ۰۵ / ۲۰
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">ساعت ۲: زیست‌بوم Claude</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
            زیست‌بوم Claude Code & Anthropic
          </h2>
        </div>

        <span className="text-xs font-mono bg-amber-500/10 border border-amber-500/30 text-amber-300 px-3 py-1.5 rounded-xl font-bold">
          Claude 3.5 Sonnet & Computer Use
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-700/80 hover:border-amber-500/40 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 group-hover:border-amber-500/40 transition-colors">
                      <IconComp className="w-5 h-5 text-amber-400" />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>قابلیت‌های کلیدی Claude</span>
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
        <span>ساعت ۲: بررسی اختصاصی Claude Code و ابزارهای Anthropic</span>
        <span className="font-mono text-sky-400">مدرس: وحید شهپری فرد</span>
      </div>

    </div>
  );
}
