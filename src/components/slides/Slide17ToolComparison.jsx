import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, FileText, CheckCircle2, Sparkles } from 'lucide-react';

export default function Slide17ToolComparison() {
  const tools = [
    {
      name: "Antigravity CLI",
      category: "Agentic IDE",
      autonomy: "بسیار بالا (خودمختار)",
      context: "۲M+ توکن",
      toolCalling: "پشتیبانی از MCP و سیستم",
      useCase: "اصلاح خودمختار پروژه، مایگریشن و کارهای پس‌زمینه",
      icon: Terminal,
      accent: "text-sky-400 border-sky-500/30"
    },
    {
      name: "Claude Code",
      category: "AI Coding Agent",
      autonomy: "بالا",
      context: "۲۰۰K توکن",
      toolCalling: "Computer Use & Artifacts",
      useCase: "بازسازی اسکریپت‌های پیچیده، استدلال عمیق منطق کد",
      icon: Code,
      accent: "text-amber-400 border-amber-500/30"
    },
    {
      name: "GitHub Copilot",
      category: "IDE Assistant",
      autonomy: "متوسط (هدایت‌شده)",
      context: "سیاق فایل جاری",
      toolCalling: "محدود به IDE",
      useCase: "تکمیل خودکار کد در حین تایپ و ساخت سریع تست‌ها",
      icon: Cpu,
      accent: "text-blue-400 border-blue-500/30"
    },
    {
      name: "NotebookLM",
      category: "Research & RAG",
      autonomy: "هدایت‌شده",
      context: "اسناد اسکن‌شده",
      toolCalling: "سنتز اسناد و پادکست",
      useCase: "پژوهش عمیق روی اسناد، سنتز دانش و خلاصه صوتی",
      icon: FileText,
      accent: "text-purple-400 border-purple-500/30"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative text-right">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono ml-2">
            اسلاید ۱۷ / ۲۰
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">ساعت ۶: ارزیابی ابزارها</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
            ماتریس مقایسه ابزارهای توسعه کد با AI
          </h2>
        </div>

        <span className="text-xs font-mono bg-slate-900 border border-slate-800 text-sky-400 px-3 py-1.5 rounded-xl">
          AI Tools Comparison Matrix
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`glass-card p-5 rounded-2xl border ${item.accent} bg-gradient-to-b flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-700">
                      <IconComp className={`w-5 h-5 ${item.accent.split(' ')[0]}`} />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-100 mb-2 group-hover:text-sky-300 transition-colors">
                    {item.name}
                  </h3>

                  <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800/80 pt-3">
                    <div>
                      <span className="text-slate-500 block text-[10px]">سطح خودمختاری:</span>
                      <span className="font-bold text-slate-200">{item.autonomy}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">پنجره زمینه (Context):</span>
                      <span className="font-mono text-sky-400 font-bold">{item.context}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">کاربرد اصلی:</span>
                      <span className="text-slate-300 leading-tight block">{item.useCase}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                  <span>ارزیابی مقایسه‌ای</span>
                  <CheckCircle2 className={`w-4 h-4 ${item.accent.split(' ')[0]}`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
        <span>ساعت ۶: ماتریس مقایسه‌ای ابزارهای هوش مصنوعی توسعه‌دهندگان</span>
        <span className="font-mono text-sky-400">مدرس: وحید شهپری فرد</span>
      </div>

    </div>
  );
}
