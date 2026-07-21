import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Search, Zap, CheckCircle2, Layers } from 'lucide-react';

export default function Slide4ContextMemory() {
  const [contextTokens, setContextTokens] = useState(750); // in thousands

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative text-right">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono ml-2">
            اسلاید ۰۴ / ۱۴
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">ساعت ۱: معماری زمینه (Context)</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
            مدیریت حافظه و پنجره زمینه (Context Window)
          </h2>
        </div>

        <span className="text-xs font-mono bg-slate-900 border border-slate-800 text-sky-400 px-3 py-1.5 rounded-xl">
          Gemini 2,000,000+ Tokens
        </span>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-6 space-y-6">
        
        {/* Interactive Slider Box */}
        <div className="glass-panel p-6 rounded-2xl border border-sky-500/20 max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <Database className="w-5 h-5 text-sky-400" />
                <span>شبیه‌ساز حافظه پنجره زمینه و بارگذاری کدبیس</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                نحوه بارگذاری کامل اسناد، لاگ‌ها و سورس‌کد پروژه در یک پرامپت واحد بدون افت کیفیت.
              </p>
            </div>

            <div className="text-left dir-ltr">
              <span className="text-2xl font-black font-mono text-sky-400">{contextTokens.toLocaleString()}K</span>
              <span className="text-xs text-slate-400 block text-right font-sans">توکن در حافظه</span>
            </div>
          </div>

          {/* Range Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-slate-400 font-mono">
              <span>100K (ماژول منفرد)</span>
              <span>1M (کل مخزن گیت)</span>
              <span>2M (سقف Gemini 1.5/3.6 Pro)</span>
            </div>
            <input 
              type="range" 
              min="100" 
              max="2000" 
              step="50"
              value={contextTokens} 
              onChange={(e) => setContextTokens(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />
          </div>

          {/* Visual Progress bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-slate-300">
              <span>میزان اشغال ظرفیت پردازش زمینه (Context)</span>
              <span className="text-sky-400">{(contextTokens / 20).toFixed(1)}٪ از ظرفیت ۲M جمینای</span>
            </div>

            <div className="h-6 w-full bg-slate-900 rounded-xl overflow-hidden p-1 border border-slate-800 flex gap-1">
              <div 
                className="h-full bg-gradient-to-r from-sky-400 to-blue-600 rounded-lg transition-all duration-300 shadow-md shadow-sky-500/30"
                style={{ width: `${(contextTokens / 2000) * 100}%` }}
              />
            </div>
          </div>

          {/* 3 Core Memory Strategies */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-right">
            <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 text-xs space-y-1">
              <div className="text-sky-400 font-bold flex items-center gap-1.5">
                <Search className="w-4 h-4" />
                <span>Needle in a Haystack</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                بازیابی ۱۰۰٪ دقیق یک عبارت خاص مخفی‌شده در میان ۲ میلیون توکن متن یا کد بدون فراموشی.
              </p>
            </div>

            <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 text-xs space-y-1">
              <div className="text-sky-400 font-bold flex items-center gap-1.5">
                <Zap className="w-4 h-4" />
                <span>Context Caching</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                ذخیره‌سازی پیشوند زمینه‌های سنگین برای کاهش ۷۵-۹۰ درصدی هزینه‌های ورودی API.
              </p>
            </div>

            <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 text-xs space-y-1">
              <div className="text-sky-400 font-bold flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                <span>پنجره لغزان (Sliding Window)</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                استراتژی خلاصه‌سازی هوشمند تاریخچه برای جلسات کاری طولانی ایجنت‌های کدنویسی.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
        <span>ساعت ۱: مدیریت زمینه و حافظه مدل‌ها</span>
        <span className="font-mono text-sky-400">مدرس: وحید شهپری فرد</span>
      </div>

    </div>
  );
}
