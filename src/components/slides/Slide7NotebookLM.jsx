import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mic, Sparkles, Layers, CheckCircle2 } from 'lucide-react';

export default function Slide7NotebookLM() {
  const features = [
    {
      title: "۱. سنتز دانش بر پایه اسناد مستند (Grounded RAG)",
      desc: "بارگذاری فایل‌های PDF، مستندات متنی و ویدیوها جهت پاسخ‌دهی ۱۰۰٪ مستند و دقیق بدون توهم مدل.",
      icon: FileText
    },
    {
      title: "۲. ساخت پادکست‌های صوتی تعاملی (Audio Overviews)",
      desc: "تولید خودکار گفتگوی پادکست دو-نفره صوتی فوق‌العاده واقعی از اسناد و کدهای پروژه‌های پیچیده.",
      icon: Mic
    },
    {
      title: "۳. محیط تست Google AI Studio",
      desc: "تنظیم پارامترهای مدل، دما (Temperature)، تگ‌های سیستم و تست آنی پرامپت‌ها قبل از کدنویسی.",
      icon: Sparkles
    },
    {
      title: "۴. خطوط لوله داده‌ای Gemini Flow & Vertex AI",
      desc: "یکپارچگی با خطوط لوله پردازش داده‌های ابری جهت استقرار مدل‌های سفارشی‌شده در سازمان‌ها.",
      icon: Layers
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative text-right">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono ml-2">
            اسلاید ۰۷ / ۲۰
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">ساعت ۲: ابزارهای پژوهش</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
            NotebookLM & زیست‌بوم Google Flow
          </h2>
        </div>

        <span className="text-xs font-mono bg-purple-500/10 border border-purple-500/30 text-purple-300 px-3 py-1.5 rounded-xl font-bold">
          NotebookLM & AI Studio
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
                className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-700/80 hover:border-purple-500/40 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 group-hover:border-purple-500/40 transition-colors">
                      <IconComp className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>ابزار هوشمند تحقیق</span>
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
        <span>ساعت ۲: بررسی اختصاصی NotebookLM و ابزارهای پژوهشی Google</span>
        <span className="font-mono text-sky-400">مدرس: وحید شهپری فرد</span>
      </div>

    </div>
  );
}
