import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Bug, FolderTree, Copy, Check, Sparkles, RefreshCw, Zap, Layers, Play } from 'lucide-react';

export default function Slide3PracticalDev() {
  const [activeSubtopic, setActiveSubtopic] = useState('prompts');
  const [copiedCode, setCopiedCode] = useState(false);
  const [isDebugRunning, setIsDebugRunning] = useState(false);
  const [debugLogs, setDebugLogs] = useState([]);

  const codeResult = `import asyncio
import random
import logging
from functools import wraps

def async_retry(retries: int = 3, base_delay: float = 1.0):
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            for attempt in range(1, retries + 1):
                try:
                    return await func(*args, **kwargs)
                except Exception as e:
                    if attempt == retries: raise
                    delay = base_delay * (2 ** (attempt - 1)) + random.uniform(0, 0.5)
                    logging.warning(f"Attempt {attempt} failed: {e}. Retrying in {delay:.2f}s...")
                    await asyncio.sleep(delay)
        return wrapper
    return decorator`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeResult);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleRunDebugLoop = () => {
    setIsDebugRunning(true);
    setDebugLogs([]);
    
    const steps = [
      "🔍 [۱/۴] بررسی stderr: TypeError: null is not an object (evaluating 'res.data.items')",
      "🧠 [۲/۴] ریشه‌یابی خطا: عدم چک کردن بدنه پاسخ در هنگام دریافت HTTP 429 Rate Limit",
      "⚡ [۳/۴] اعمال پچ: افزودن Optional Chaining و مقدار جایگزین امن `res?.data?.items ?? []`",
      "✅ [۴/۴] اصلاح خودکار موفق: تمامی تست‌های واحد با موفقیت ۱۰۰٪ پاس شدند!"
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setDebugLogs(prev => [...prev, step]);
        if (idx === steps.length - 1) setIsDebugRunning(false);
      }, (idx + 1) * 700);
    });
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative text-right">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono ml-2">
            بخش ۲
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">توسعه کاربردی</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
            توسعه مبتنی بر هوش مصنوعی
          </h2>
        </div>

        {/* Subtopic Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl self-start sm:self-auto">
          <button
            onClick={() => setActiveSubtopic('prompts')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeSubtopic === 'prompts' 
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>مهندسی پرامپت</span>
          </button>

          <button
            onClick={() => setActiveSubtopic('debugging')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeSubtopic === 'debugging' 
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bug className="w-3.5 h-3.5" />
            <span>اشکال‌زدایی خودکار</span>
          </button>

          <button
            onClick={() => setActiveSubtopic('architecture')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeSubtopic === 'architecture' 
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FolderTree className="w-3.5 h-3.5" />
            <span>پروژه‌های چندماژوله</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-6">
        
        {/* SUBTOPIC 1: Prompt Engineering & Code Gen */}
        {activeSubtopic === 'prompts' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
          >
            {/* Right: Prompt Techniques */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              <div className="glass-panel p-5 rounded-2xl border border-sky-500/20 space-y-3">
                <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-sky-400" />
                  <span>الگوهای پرامپت‌نویسی ساختاریافته</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  مهندسی پرامپت در سطح حرفه‌ای نیازمند تفکیک نقش‌ها، مرزبندی سیاق، و اسکیماهای خروجی تکرارپذیر است.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                    <strong className="text-sky-400 block mb-0.5">جداسازی با تگ‌های XML</strong>
                    استفاده از تگ‌های <code className="text-sky-300">&lt;context&gt;</code> و <code className="text-sky-300">&lt;instruction&gt;</code> برای جداسازی داده ورودی از دستورات.
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                    <strong className="text-sky-400 block mb-0.5">زنجیره تفکر (Chain-of-Thought)</strong>
                    الزام مدل به تولید گام‌به‌گام استدلال منطقی پیش از خروجی نهایی کد یا JSON.
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                    <strong className="text-sky-400 block mb-0.5">اعتبارسنجی اسکیما</strong>
                    اعمال محدودیت‌های Pydantic / TypeScript برای مصرف مستقیم در برنامه‌ها.
                  </div>
                </div>
              </div>
            </div>

            {/* Left: Code Sandbox preview */}
            <div className="lg:col-span-7 glass-panel p-5 rounded-2xl border border-slate-700 flex flex-col justify-between dir-ltr">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">async_retry.py</span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-lg transition-colors font-sans"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'کپی شد!' : 'کپی کد'}</span>
                </button>
              </div>

              <pre className="font-mono text-[11px] sm:text-xs text-slate-200 bg-[#090d16] p-4 rounded-xl overflow-x-auto border border-slate-800/80 leading-relaxed">
                <code>{codeResult}</code>
              </pre>

              <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-sans">
                <span>تولید در ۴۲۰ میلی‌ثانیه توسط Gemini Pro</span>
                <span className="text-emerald-400 font-mono">۱۰۰٪ Type-Safe</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* SUBTOPIC 2: Auto-Debugging Loop */}
        {activeSubtopic === 'debugging' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-6 sm:p-8 rounded-2xl border border-sky-500/20 max-w-4xl mx-auto space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <Bug className="w-5 h-5 text-sky-400" />
                  <span>اشکال‌زدایی خودکار و خوداصلاحی کد</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  نحوه تحلیل رد خطای استک‌تریس، ایزوله‌سازی علت ریشه‌ای و اعمال پچ توسط ایجنت.
                </p>
              </div>

              <button
                onClick={handleRunDebugLoop}
                disabled={isDebugRunning}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-sky-500/20 disabled:opacity-50 transition-all shrink-0 self-start sm:self-auto"
              >
                {isDebugRunning ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Play className="w-4 h-4 fill-white rotate-180" />
                )}
                <span>{isDebugRunning ? 'در حال اصلاح کد...' : 'اجرای شبیه‌ساز اشکال‌زدایی'}</span>
              </button>
            </div>

            {/* Live Console Output */}
            <div className="bg-[#090d16] border border-slate-800 rounded-xl p-4 font-mono text-xs text-slate-300 min-h-[180px] space-y-2.5 dir-ltr text-left">
              <div className="text-slate-500 border-b border-slate-800/80 pb-2 flex justify-between font-sans">
                <span>AGENT DEBUG TERMINAL</span>
                <span className="text-sky-400">STATE: ACTIVE</span>
              </div>

              {debugLogs.length === 0 ? (
                <div className="text-slate-500 italic py-6 text-center font-sans">
                  برای شروع فرآیند ترمیمی ایجنت، روی "اجرای شبیه‌ساز اشکال‌زدایی" در بالا کلیک کنید...
                </div>
              ) : (
                debugLogs.map((log, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-slate-200 font-sans"
                  >
                    <span>{log}</span>
                  </motion.div>
                ))
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <span className="text-sky-400 font-bold block mb-1">۱. دریافت خطا</span>
                <p className="text-slate-400">استخراج کامل logها و traceهای استک بدون برش کلمات.</p>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <span className="text-sky-400 font-bold block mb-1">۲. تحلیل درخت AST</span>
                <p className="text-slate-400">نگاشت خطاهای اجرایی مستقیماً به نودهای فایل سورس‌کد.</p>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <span className="text-sky-400 font-bold block mb-1">۳. اعتبارسنجی تست‌ها</span>
                <p className="text-slate-400">اجرای runner تست‌ها برای تضمین عدم ایجاد خطای جدید (Regression).</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* SUBTOPIC 3: Multi-Module Architecture */}
        {activeSubtopic === 'architecture' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="glass-card p-5 rounded-2xl border border-slate-700/80 hover:border-sky-500/40">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 w-fit mb-3">
                <Layers className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-base font-bold text-slate-100 mb-2">نقشه‌های سیاق ماژوله</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                تقسیم کدبیس‌های بزرگ به زیرسیاق‌های مشخص (مانند احراز هویت، دیتابیس، کامپوننت‌ها) برای جلوگیری از سرریز توکن.
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-slate-700/80 hover:border-sky-500/40">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 w-fit mb-3">
                <FolderTree className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-base font-bold text-slate-100 mb-2">آگاهی از درخت وابستگی‌ها</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                ارائه قراردادهای رابط (انواع TypeScript / مدل‌های Pydantic) به ایجنت‌ها تا تغییر یک ماژول باعث شکست سایر بخش‌ها نشود.
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-slate-700/80 hover:border-sky-500/40">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 w-fit mb-3">
                <Zap className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-base font-bold text-slate-100 mb-2">بازنویسی تدریجی</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                اعمال تغییرات با چانک‌های نقطه به نقطه diff به جای بازنویسی کامل فایل‌های ۱۰۰۰ خطی.
              </p>
            </div>
          </motion.div>
        )}

      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
        <span>بخش ۲: توسعه مبتنی بر هوش مصنوعی</span>
        <span className="font-mono">Prompt Engineering • Debugging • Modular Code</span>
      </div>

    </div>
  );
}
