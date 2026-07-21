import React from 'react';
import { motion } from 'framer-motion';
import { FolderTree, Layers, Zap, CheckCircle2 } from 'lucide-react';

export default function Slide8MultiModule() {
  const pillars = [
    {
      title: "۱. نقشه‌برداری سیاق ماژوله",
      desc: "تقسیم کدبیس‌های چند هزار خطی به زیرسیاق‌های مستند (auth, database, services, components) جهت جلوگیری از سرریز توکن.",
      icon: Layers,
      color: "from-sky-500/20 to-blue-600/20 border-sky-500/30"
    },
    {
      title: "۲. آگاهی از درخت وابستگی‌ها (AST)",
      desc: "ارائه قراردادهای اینترفیس (TypeScript interfaces / Pydantic schemas) به ایجنت تا تغییر یک ماژول باعث تخریب ماژول وابسته نشود.",
      icon: FolderTree,
      color: "from-blue-500/20 to-indigo-600/20 border-blue-500/30"
    },
    {
      title: "۳. اصلاح با چانک‌های Diff",
      desc: "اعمال تغییرات نقطه به نقطه در خطوط مشخص فایل سورس‌کد به جای بازنویسی پرهزینه کل فایل ۱۰۰۰ خطی.",
      icon: Zap,
      color: "from-indigo-500/20 to-purple-600/20 border-indigo-500/30"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative text-right">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono ml-2">
            اسلاید ۰۸ / ۱۴
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">ساعت ۳: معماری کد</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
            مدیریت پروژه‌های چندماژوله بزرگ
          </h2>
        </div>

        <span className="text-xs font-mono bg-slate-900 border border-slate-800 text-sky-400 px-3 py-1.5 rounded-xl">
          Large Codebase Architecture
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`glass-card p-6 rounded-2xl border ${item.color} bg-gradient-to-b flex flex-col justify-between group`}
              >
                <div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 w-fit mb-4 group-hover:border-sky-500/40 transition-colors">
                    <IconComp className="w-6 h-6 text-sky-400" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-sky-300 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>الگوی مهندسی ایجنت</span>
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
        <span>ساعت ۳: مدیریت پروژه‌های چندماژوله بزرگ</span>
        <span className="font-mono text-sky-400">مدرس: وحید شهپری فرد</span>
      </div>

    </div>
  );
}
