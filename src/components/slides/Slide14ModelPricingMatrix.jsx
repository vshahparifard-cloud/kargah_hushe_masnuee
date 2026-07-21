import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Database, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Slide14ModelPricingMatrix() {
  const [selectedTokensM, setSelectedTokensM] = useState(5); // 5 Million Tokens default

  const models = [
    {
      name: "Gemini 1.5 Flash",
      provider: "Google",
      context: "1,000,000",
      inputCost: 0.075,
      outputCost: 0.30,
      cachedCost: 0.01875,
      badge: "فوق‌سریع و ارزان",
      highlight: true
    },
    {
      name: "Gemini 1.5 / 3.6 Pro",
      provider: "Google",
      context: "2,000,000",
      inputCost: 1.25,
      outputCost: 5.00,
      cachedCost: 0.3125,
      badge: "پنجره کانتکست عظیم ۲M",
      highlight: true
    },
    {
      name: "Claude 3.5 Sonnet",
      provider: "Anthropic",
      context: "200,000",
      inputCost: 3.00,
      outputCost: 15.00,
      cachedCost: 0.30,
      badge: "استدلال کد برتر",
      highlight: false
    },
    {
      name: "Claude 3 Opus",
      provider: "Anthropic",
      context: "200,000",
      inputCost: 15.00,
      outputCost: 75.00,
      cachedCost: 3.75,
      badge: "پیچیده‌ترین استدلال",
      highlight: false
    },
    {
      name: "GPT-4o",
      provider: "OpenAI",
      context: "128,000",
      inputCost: 2.50,
      outputCost: 10.00,
      cachedCost: 1.25,
      badge: "چندوجوهی چندمنظوره",
      highlight: false
    },
    {
      name: "GPT-4o mini",
      provider: "OpenAI",
      context: "128,000",
      inputCost: 0.15,
      outputCost: 0.60,
      cachedCost: 0.075,
      badge: "مدل سبک و سریع",
      highlight: false
    },
    {
      name: "DeepSeek V3 / R1",
      provider: "DeepSeek",
      context: "64,000",
      inputCost: 0.14,
      outputCost: 0.28,
      cachedCost: 0.014,
      badge: "مقرون‌به‌صرفه ترین",
      highlight: false
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative text-right">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono ml-2">
            اسلاید ۱۴ / ۲۱
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">ساعت ۴: مقایسه قیمت‌ها</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
            مقایسه جامع هزینه‌ها، توکن‌ها و کانتکست مدل‌ها
          </h2>
        </div>

        {/* Interactive Volume Slider */}
        <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl">
          <span className="text-xs text-slate-300 font-bold">حجم پردازش:</span>
          <input
            type="range"
            min="1"
            max="50"
            step="1"
            value={selectedTokensM}
            onChange={(e) => setSelectedTokensM(Number(e.target.value))}
            className="w-24 h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-sky-400"
          />
          <span className="text-xs font-mono font-bold text-sky-400">{selectedTokensM}M توکن</span>
        </div>
      </div>

      {/* Main Content Matrix */}
      <div className="my-auto py-3 overflow-x-auto">
        <table className="w-full text-right text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono">
              <th className="pb-3 pr-2">نام مدل & ارائه‌دهنده</th>
              <th className="pb-3 text-center">پنجره کانتکست (Context)</th>
              <th className="pb-3 text-center">ورودی (به ازای ۱M توکن)</th>
              <th className="pb-3 text-center">خروجی (به ازای ۱M توکن)</th>
              <th className="pb-3 text-center">Prompt Cache (ورودی)</th>
              <th className="pb-3 text-left pl-2">تخمین هزینه برای {selectedTokensM}M توکن</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {models.map((m, idx) => {
              const estimatedCost = (selectedTokensM * 0.7 * m.inputCost) + (selectedTokensM * 0.3 * m.outputCost);
              
              return (
                <tr 
                  key={idx} 
                  className={`hover:bg-slate-900/60 transition-colors ${
                    m.highlight ? 'bg-sky-500/5' : ''
                  }`}
                >
                  <td className="py-2.5 pr-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-100">{m.name}</span>
                      <span className="text-[10px] text-slate-400 font-mono bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded">
                        {m.provider}
                      </span>
                    </div>
                  </td>
                  
                  <td className="py-2.5 text-center font-mono text-sky-400 font-bold">
                    {m.context}
                  </td>

                  <td className="py-2.5 text-center font-mono text-slate-300">
                    ${m.inputCost.toFixed(3)}
                  </td>

                  <td className="py-2.5 text-center font-mono text-slate-300">
                    ${m.outputCost.toFixed(2)}
                  </td>

                  <td className="py-2.5 text-center font-mono text-emerald-400">
                    ${m.cachedCost.toFixed(4)}
                  </td>

                  <td className="py-2.5 text-left pl-2 font-mono font-extrabold text-sky-300">
                    ${estimatedCost.toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-800/60">
        <span>قیمت‌ها بر اساس آخرین تعرفه استانداردهای بین‌المللی API در سال ۲۰۲۶ می باشد</span>
        <span className="font-mono text-sky-400">مدرس: وحید شهپری فرد</span>
      </div>

    </div>
  );
}
