import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Code, CheckCircle2 } from 'lucide-react';

export default function Slide5PromptEng() {
  const techniques = [
    {
      title: "۱. مرزبندی زمینه (Context Fencing)",
      desc: "تفکیک دقیق دستورالعمل‌ها، داده‌های ورودی و محدوده نقش با تگ‌های <context> و <instruction> برای جلوگیری از تزریق پرامپت (Prompt Injection).",
      icon: Terminal,
      code: `<role>ارکستریتور ارشد پایتون</role>\n<context>توسعه API پرسرعت FastAPI</context>\n<instruction>دستورات اجرا...</instruction>`
    },
    {
      title: "۲. زنجیره تفکر (Chain-of-Thought)",
      desc: "الزام مدل به تولید گام‌به‌گام تحلیل منطقی در بخش <thought> پیش از ارائه خروجی نهایی کد یا ساختار JSON.",
      icon: Sparkles,
      code: `<thought>\n۱. استخراج متغیرهای ورودی\n۲. چک کردن صریح حالت‌های null\n</thought>`
    },
    {
      title: "۳. اعتبارسنجی اسکیما با Pydantic",
      desc: "تعریف صریح مدل‌های داده Pydantic v2 یا اینترفیس‌های TypeScript جهت دریافت مستقیم پاسخ از مدل بدون نیاز به پارس دستی.",
      icon: Code,
      code: `class CodePatch(BaseModel):\n    target_file: str\n    diff_chunks: List[str]\n    passed_tests: bool`
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative text-right">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono ml-2">
            اسلاید ۰۵ / ۱۴
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">ساعت ۲: مهندسی پرامپت</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
            مهندسی پرامپت ساختاریافته (Structured Prompting)
          </h2>
        </div>

        <span className="text-xs font-mono bg-slate-900 border border-slate-800 text-sky-400 px-3 py-1.5 rounded-xl">
          System Instructions & Schemas
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techniques.map((tech, idx) => {
            const IconComp = tech.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-5 rounded-2xl border border-slate-700/80 hover:border-sky-500/40 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 group-hover:border-sky-500/40 transition-colors">
                      <IconComp className="w-5 h-5 text-sky-400" />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                      {tech.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {tech.desc}
                  </p>

                  <pre className="font-mono text-[10px] text-sky-300 bg-[#090d16] p-3 rounded-xl border border-slate-800/80 overflow-x-auto leading-relaxed dir-ltr text-left">
                    <code>{tech.code}</code>
                  </pre>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
                  <span>الگوی مهندسی پرامپت</span>
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
        <span>ساعت ۲: مهندسی پرامپت ساختاریافته و اعتبارسنجی خروجی‌ها</span>
        <span className="font-mono text-sky-400">مدرس: وحید شهپری فرد</span>
      </div>

    </div>
  );
}
