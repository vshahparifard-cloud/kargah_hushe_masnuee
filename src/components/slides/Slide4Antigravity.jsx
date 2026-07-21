import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Wrench, ShieldCheck, CheckCircle2, Layers, Clock } from 'lucide-react';

export default function Slide4Antigravity() {
  const features = [
    {
      title: "۱. اجرای خودمختار دستورات سیستم",
      desc: "قابلیت دسترسی مستقیم و ایمن به ترمینال محلی جهت اجرای دستورات کامپایل، تست، مایگریشن دیتابیس و مدیریت پکیج‌ها.",
      icon: Terminal
    },
    {
      title: "۲. پروتکل سیاق مدل (MCP - Model Context Protocol)",
      desc: "یکپارچگی استاندارد با سرورهای MCP جهت اتصال مستقیم مدل به دیتابیس‌ها، ابزارهای کدنویسی و فایل‌سیستم‌های ابری.",
      icon: Wrench
    },
    {
      title: "۳. مدیریت کارهای پس‌زمینه و زمان‌بندی",
      desc: "اجرای موازی کارهای طولانی‌مدت در پس‌زمینه، زمان‌بندی Cron و واکنش به اعلان‌ها بدون قفل شدن نخ اصلی UI.",
      icon: Clock
    },
    {
      title: "۴. مهارت‌های سفارشی (Skills & Rules)",
      desc: "تعریف مهارت‌های تخصصی ساختاریافته در پوشه‌های `.agents/skills` با دستورالعمل‌های Markdown جهت استانداردسازی کدبیس.",
      icon: Layers
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative text-right">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono ml-2">
            اسلاید ۰۴ / ۲۰
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">ساعت ۱: محیط‌های توسعه ایجنتیک</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
            محیط توسعه ایجنتیک Antigravity CLI
          </h2>
        </div>

        <span className="text-xs font-mono bg-sky-500/10 border border-sky-500/30 text-sky-300 px-3 py-1.5 rounded-xl font-bold">
          Autonomous Agentic IDE
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
                className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-700/80 hover:border-sky-500/40 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 group-hover:border-sky-500/40 transition-colors">
                      <IconComp className="w-5 h-5 text-sky-400" />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>معماری ایجنت کارگاهی</span>
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
        <span>ساعت ۱: بررسی اختصاصی فریم‌ورک Antigravity CLI</span>
        <span className="font-mono text-sky-400">مدرس: وحید شهپری فرد</span>
      </div>

    </div>
  );
}
