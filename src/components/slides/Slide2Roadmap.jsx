import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Cpu, Code, ShieldCheck, Database, Bot, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function Slide2Roadmap() {
  const hours = [
    {
      hour: "ساعت ۱",
      title: "معماری زیست‌بوم‌ها و سیاق",
      topics: [
        "Google AI Suite (Gemini 1.5/3.6) vs Claude",
        "مدیریت حافظه ۲M توکنی & Context Caching",
        "ابزارهای توسعه: NotebookLM & Antigravity CLI"
      ],
      icon: Cpu,
      color: "from-sky-500/20 to-blue-600/20 border-sky-500/40 text-sky-400"
    },
    {
      hour: "ساعت ۲",
      title: "مهندسی پرامپت ساختاریافته",
      topics: [
        "مرزبندی تگ‌های XML و نقش‌ها در System Instructions",
        "تکنیک‌های زنجیره تفکر (Chain-of-Thought)",
        "اعتبارسنجی خروجی‌های JSON با Pydantic"
      ],
      icon: Code,
      color: "from-blue-500/20 to-indigo-600/20 border-blue-500/40 text-blue-400"
    },
    {
      hour: "ساعت ۳",
      title: "برنامه‌نویسی ایجنتیک & خوداصلاحی",
      topics: [
        "ترمینال اشکال‌زدایی خودکار و تحلیل AST",
        "اصلاح خودکار خطاهای استک‌تریس در کدبیس",
        "مدیریت پروژه‌های چندماژوله با diff چانک‌ها"
      ],
      icon: Code,
      color: "from-indigo-500/20 to-purple-600/20 border-indigo-500/40 text-indigo-400"
    },
    {
      hour: "ساعت ۴",
      title: "زیرساخت API، امنیت & هزینه‌ها",
      topics: [
        "خزانه‌های رمزنگاری محرمانه و پراکسی‌های سمت سرور",
        "سهمیه‌های منطقه‌ای و Rate Limiting (Token Bucket)",
        "ابزار محاسبه‌گر تعاملی هزینه‌ها و توکن‌های ماهانه"
      ],
      icon: ShieldCheck,
      color: "from-purple-500/20 to-pink-600/20 border-purple-500/40 text-purple-400"
    },
    {
      hour: "ساعت ۵",
      title: "بازیابی افزوده با تولید (RAG)",
      topics: [
        "چانک‌بندی لغزان اسناد و نگاشت برداری متون",
        "داده‌گاه‌های برداری (Qdrant, Pinecone, Chroma)",
        "جستجوی ترکیبی (Dense + BM25) & مدل‌های Re-Ranking"
      ],
      icon: Database,
      color: "from-pink-500/20 to-rose-600/20 border-pink-500/40 text-pink-400"
    },
    {
      hour: "ساعت ۶",
      title: "معماری چندایجنت & پروژه پایانی",
      topics: [
        "الگوی ReAct (Reason + Act) & Tool Calling",
        "شبیه‌ساز تعاملی همکاری چند ایجنت (MCP)",
        "الگوهای استقرار در تولید، تلمتری و جمع‌بندی"
      ],
      icon: Bot,
      color: "from-emerald-500/20 to-teal-600/20 border-emerald-500/40 text-emerald-400"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative text-right">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono ml-2">
            اسلاید ۰۲ / ۱۴
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">برنامه‌ریزی کارگاه</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
            نقشه راه ۶ ساعته کارگاه
          </h2>
        </div>

        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl text-xs text-slate-300">
          <Clock className="w-4 h-4 text-sky-400" />
          <span>مدرس: وحید شهپری فرد</span>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hours.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`glass-card p-5 rounded-2xl border ${item.color} bg-gradient-to-b flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-slate-900 border border-slate-700">
                        <IconComp className="w-4 h-4 text-sky-400" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-sky-400 shrink-0">
                      {item.hour}
                    </span>
                  </div>

                  <div className="space-y-1.5 mt-3">
                    {item.topics.map((tp, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                        <span className="leading-tight">{tp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>ماژول عملی</span>
                  <ArrowLeft className="w-3.5 h-3.5 text-sky-400 group-hover:-translate-x-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
        <span>نقشه راه ۶ ساعته مهندسی هوش مصنوعی</span>
        <span className="font-mono text-sky-400">مدرس: وحید شهپری فرد</span>
      </div>

    </div>
  );
}
