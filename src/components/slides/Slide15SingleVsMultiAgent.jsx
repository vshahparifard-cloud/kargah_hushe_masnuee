import React from 'react';
import { motion } from 'framer-motion';
import { Bot, RefreshCw, AlertTriangle, Layers, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Slide15SingleVsMultiAgent() {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative text-right">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono ml-2">
            اسلاید ۱۵ / ۲۱
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">ساعت ۵: معماری ایجنت‌ها</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
            مکانیسم چت مدل‌ها و محدودیت ایجنت تکین (Single Agent)
          </h2>
        </div>

        <span className="text-xs font-mono bg-sky-500/10 border border-sky-500/30 text-sky-300 px-3 py-1.5 rounded-xl font-bold">
          LLM Chat Mechanics vs Multi-Agent
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Column 1: How LLM Chat Works Internally */}
          <div className="glass-card p-5 rounded-2xl border border-sky-500/30 bg-gradient-to-b from-sky-500/10 to-transparent flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-700">
                  <MessageSquare className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="text-base font-bold text-slate-100">نحوه کارکرد داخلی چت LLM</h3>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <strong className="text-sky-400 block mb-0.5">ماهیت بدون حالت (Stateless)</strong>
                  مدل‌ها هیچ حافظه‌ای بین نوبت‌ها ندارند؛ در هر نوبت تمام آرایه پیام‌ها (`[system, user, assistant]`) مجدداً ارسال می‌شود.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <strong className="text-sky-400 block mb-0.5">پیش‌بینی توکن بعدی</strong>
                  تولید پاسخ بر اساس احتمال آماری توکن بعدی (Auto-regressive generation) با پارامترهای Temperature و Top-P انجام می‌پذیرد.
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-sky-300">
              چت ساده فاقد قابلیت اجرای ابزار و خوداصلاحی است.
            </div>
          </div>

          {/* Column 2: Single Agent Limitations */}
          <div className="glass-card p-5 rounded-2xl border border-rose-500/30 bg-gradient-to-b from-rose-500/10 to-transparent flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-700">
                  <AlertTriangle className="w-5 h-5 text-rose-400" />
                </div>
                <h3 className="text-base font-bold text-slate-100">محدودیت‌های ایجنت تکین</h3>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <strong className="text-rose-400 block mb-0.5">سردرگمی ابزارها (Tool Bloat)</strong>
                  وقتی یک ایجنت با ده‌ها ابزار پر می‌شود، احتمال انتخاب ابزار اشتباه یا توهم شدیداً افزایش می‌یابد.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <strong className="text-rose-400 block mb-0.5">پدیده Lost in the Middle</strong>
                  افت کیفیت استدلال و فراموشی دستورات کلیدی در وسط کانتکست‌های طولانی.
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-rose-300">
              ایجنت تکین برای کارهای پیچیده و چندمرحله‌ای شکست می‌خورد.
            </div>
          </div>

          {/* Column 3: Multi-Agent Solution */}
          <div className="glass-card p-5 rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 to-transparent flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-700">
                  <Layers className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-base font-bold text-slate-100">راهکار: معماری چندایجنت</h3>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <strong className="text-emerald-400 block mb-0.5">تفکیک تخصصی وظایف</strong>
                  تقسیم کار بین ایجنت ارکستریتور (Planner)، ایجنت مجری (Executor) و ایجنت ارزیاب (Reviewer).
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <strong className="text-emerald-400 block mb-0.5">پنجره‌های کانتکست ایزوله</strong>
                  هر ایجنت فقط اطلاعات مربوط به وظیفه خودش را دریافت کرده و از سرریز توکن جلوگیری می‌شود.
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-emerald-300 flex items-center justify-between">
              <span>راهکار قطعی محیط‌های تولید</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
          </div>

        </div>
      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
        <span>ساعت ۵: مکانیسم داخلی چت مدل‌ها و لزوم معماری چندایجنت</span>
        <span className="font-mono text-sky-400">مدرس: وحید شهپری فرد</span>
      </div>

    </div>
  );
}
