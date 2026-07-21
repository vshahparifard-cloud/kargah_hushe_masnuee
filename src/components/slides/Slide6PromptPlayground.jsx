import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Copy, Check, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Slide6PromptPlayground() {
  const [activeMode, setActiveMode] = useState('structured');
  const [copied, setCopied] = useState(false);

  const rawPrompt = `یک تابع پایتون بنویس که API رترای کنه و خطا نده.`;
  const structuredPrompt = `<role>ارکستریتور ارشد پایتون</role>
<context>سامانه گیت‌وی پرسرعت با حجم تراکنش بالا</context>
<instruction>
۱. پیاده‌سازی دکوراتور async_retry با عقب‌نشینی نمایی تصادفی (Jitter).
۲. حفظ تایپ‌هینت‌ها (Type Hints) و هندل کردن صریح استثناها.
۳. ثبت لاگ‌های ساختاریافته JSON برای تمامی خطاهای احتمالی.
</instruction>`;

  const generatedCode = `import asyncio
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
                    logging.warning(f"تلاش {attempt} ناموفق بود: {e}. تلاش مجدد در {delay:.2f}s...")
                    await asyncio.sleep(delay)
        return wrapper
    return decorator`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative text-right">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono ml-2">
            اسلاید ۰۶ / ۱۴
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">ساعت ۲: پرامپت عملی</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
            آزمایشگاه پرامپت‌نویسی و کنترل توهم (Hallucination)
          </h2>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveMode('raw')}
            className={`px-3 py-1 rounded-lg text-xs font-bold ${
              activeMode === 'raw' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'text-slate-400'
            }`}
          >
            پرامپت ساده (مخاطره‌آمیز)
          </button>
          <button
            onClick={() => setActiveMode('structured')}
            className={`px-3 py-1 rounded-lg text-xs font-bold ${
              activeMode === 'structured' ? 'bg-sky-500 text-slate-950 shadow' : 'text-slate-400'
            }`}
          >
            پرامپت مهندسی‌شده
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Right: Input Prompt Preview */}
          <div className="lg:col-span-5 glass-panel p-5 rounded-2xl border border-slate-700 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <span className="text-xs font-bold text-slate-200 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-sky-400" />
                  <span>{activeMode === 'raw' ? 'ورودی پرامپت ساده' : 'ورودی پرامپت ساختاریافته'}</span>
                </span>
                {activeMode === 'raw' ? (
                  <span className="text-[10px] text-rose-400 bg-rose-500/10 border border-rose-500/30 px-2 py-0.5 rounded flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> توهم بالا
                  </span>
                ) : (
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> دقت ۱۰۰٪
                  </span>
                )}
              </div>

              <pre className="font-mono text-xs text-slate-200 bg-[#090d16] p-4 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed whitespace-pre-wrap">
                <code>{activeMode === 'raw' ? rawPrompt : structuredPrompt}</code>
              </pre>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
              {activeMode === 'raw' ? (
                <p className="text-rose-300">⚠️ پرامپت‌های مبهم باعث تولید کدهای فاقد تایپ‌هینت و بدون مدیریت استثنا می‌شوند.</p>
              ) : (
                <p className="text-emerald-300">✅ پرامپت‌های ساختاریافته خروجی‌های قطعی، ایمن و آماده تولید ارائه می‌دهند.</p>
              )}
            </div>
          </div>

          {/* Left: Generated Output Code Sandbox */}
          <div className="lg:col-span-7 glass-panel p-5 rounded-2xl border border-sky-500/30 flex flex-col justify-between dir-ltr">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3 font-sans">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-slate-400 ml-2">async_retry.py</span>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-lg transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'کپی شد!' : 'کپی کد'}</span>
              </button>
            </div>

            <pre className="font-mono text-[11px] sm:text-xs text-slate-200 bg-[#090d16] p-4 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed text-left">
              <code>{generatedCode}</code>
            </pre>

            <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-sans">
              <span>اجرا توسط Gemini 1.5 Pro</span>
              <span className="text-emerald-400 font-mono">100% Passed</span>
            </div>
          </div>

        </div>
      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
        <span>ساعت ۲: آزمایشگاه عملی پرامپت‌نویسی</span>
        <span className="font-mono text-sky-400">مدرس: وحید شهپری فرد</span>
      </div>

    </div>
  );
}
