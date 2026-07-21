import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, CheckCircle2, ArrowUpLeft, Code, Terminal, FileText } from 'lucide-react';

export default function Slide2Ecosystems() {
  const [activeTab, setActiveTab] = useState('ecosystems');
  const [contextTokens, setContextTokens] = useState(500); // in thousands

  const ecosystemComparison = [
    {
      name: "مجموعه توسعه Google AI Suite",
      badge: "Gemini 1.5 / 3.6 Pro",
      color: "from-sky-500/20 to-blue-600/20 border-sky-500/30",
      accent: "text-sky-400",
      contextLimit: "تا ۲,۰۰۰,۰۰۰+ توکن",
      strengths: [
        "پنجره زمینه (Context) عظیم مالتی‌مدال (ویدیو، صوت، کد)",
        "تاخیر فوق‌العاده پایین با مدل‌های Flash",
        "یکپارچگی عمیق با GCP و Vertex AI",
        "پشتیبانی نیتیو از خروجی‌های ساختاریافته JSON"
      ]
    },
    {
      name: "زیست‌بوم Claude (Anthropic)",
      badge: "Claude 3.5 Sonnet / Opus",
      color: "from-amber-500/20 to-orange-600/20 border-amber-500/30",
      accent: "text-amber-400",
      contextLimit: "۲۰۰,۰۰۰ توکن",
      strengths: [
        "تبعیت فوق‌العاده از دستورالعمل‌ها و منطق کد متوازن",
        "زیست‌بوم Artifacts و ساختار پرامپت با تگ‌های XML",
        "استدلال برتر برای بازنویسی اسکریپت‌های پیچیده",
        "قابلیت‌های استفاده از کامپیوتر و اتوماسیون ابزار"
      ]
    }
  ];

  const prodTools = [
    {
      name: "NotebookLM",
      role: "سنتز دانش و RAG مستند",
      desc: "دفترچه یادداشت هوشمند برای پژوهش، سنتز اسناد، و راهنماهای خودکار متنی و صوتی.",
      icon: FileText,
      tag: "پژوهش"
    },
    {
      name: "Antigravity CLI",
      role: "محیط توسعه ایجنتیک",
      desc: "ایجنت کدنویسی خودمختار خط فرمان با دسترسی کامل به محیط، زمان‌بندی و یکپارچگی MCP.",
      icon: Terminal,
      tag: "IDE ایجنتیک"
    },
    {
      name: "Cloud Code",
      role: "یکپارچگی IDE و اجرای ابری",
      desc: "افزونه VS Code و JetBrains برای اتصال توسعه محلی به زیرساخت ابری Google Cloud.",
      icon: Code,
      tag: "توسعه ابری"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative text-right">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono ml-2">
            بخش ۱
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">ارزیابی‌های معماری</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
            مقایسه برترین زیست‌بوم‌های هوش مصنوعی
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('ecosystems')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'ecosystems' 
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            مقایسه زیست‌بوم‌ها
          </button>
          <button
            onClick={() => setActiveTab('context')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'context' 
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            حافظه پنجره زمینه
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'tools' 
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            ابزارهای عملیاتی
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="my-auto py-6">
        
        {/* TAB 1: Ecosystems Comparison */}
        {activeTab === 'ecosystems' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {ecosystemComparison.map((eco, idx) => (
              <div 
                key={idx}
                className={`glass-panel p-6 rounded-2xl border ${eco.color} bg-gradient-to-b flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-100">{eco.name}</h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300">
                      {eco.badge}
                    </span>
                  </div>

                  <div className="mb-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400">سقف پنجره زمینه (Context):</span>
                    <span className={`text-sm font-bold font-mono ${eco.accent}`}>{eco.contextLimit}</span>
                  </div>

                  <div className="space-y-2.5">
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">نقاط قوت کلیدی:</span>
                    {eco.strengths.map((str, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${eco.accent}`} />
                        <span>{str}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>استاندارد معماری</span>
                  <span className="font-mono text-sky-400">آماده سازمان‌ها</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* TAB 2: Context Window Interactive Simulation */}
        {activeTab === 'context' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-6 sm:p-8 rounded-2xl border border-sky-500/20 max-w-4xl mx-auto space-y-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <Database className="w-5 h-5 text-sky-400" />
                  <span>پنجره زمینه (Context Window) و مدیریت حافظه</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  نحوه نگهداری کامل کدبیس، تاریخچه چت و اسناد در حافظه بدون افت کیفیت بازیابی.
                </p>
              </div>

              <div className="text-left dir-ltr">
                <span className="text-2xl font-black font-mono text-sky-400">{contextTokens.toLocaleString()}K</span>
                <span className="text-xs text-slate-400 block text-right font-sans">توکن در حافظه</span>
              </div>
            </div>

            {/* Slider control */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-400 font-mono">
                <span>100K توکن (یک فایل)</span>
                <span>1M توکن (کدبیس کامل)</span>
                <span>2M توکن (سقف Gemini)</span>
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

            {/* Visualizer Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-300">
                <span>نمایشگر بصری میزان استفاده از ظرفیت</span>
                <span className="text-sky-400">{(contextTokens / 20).toFixed(1)}٪ از سقف ۲M جمینای</span>
              </div>

              <div className="h-6 w-full bg-slate-900 rounded-xl overflow-hidden p-1 border border-slate-800 flex gap-1">
                <div 
                  className="h-full bg-gradient-to-r from-sky-400 to-blue-600 rounded-lg transition-all duration-300 shadow-md shadow-sky-500/30"
                  style={{ width: `${(contextTokens / 2000) * 100}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-xs">
                <div className="text-sky-400 font-bold mb-1">دقت بازیابی (Haystack)</div>
                <p className="text-slate-400">دقت بازیابی نزدیک به ۱۰۰٪ در میان ۲ میلیون توکن سورس‌کد و اسناد.</p>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-xs">
                <div className="text-sky-400 font-bold mb-1">کاشینگ زمینه (Caching)</div>
                <p className="text-slate-400">بازاستفاده از توکن‌های پیشوند برای کاهش هزینه ورودی تا ۷۵-۹۰٪.</p>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-xs">
                <div className="text-sky-400 font-bold mb-1">استراتژی خلاصه‌سازی</div>
                <p className="text-slate-400">خلاصه‌سازی خودکار تاریخچه و پنجره لغزان برای اجراهای طولانی ایجنت.</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 3: Production Tools Grid */}
        {activeTab === 'tools' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {prodTools.map((tool, idx) => {
              const IconComp = tool.icon;
              return (
                <div 
                  key={idx}
                  className="glass-card p-6 rounded-2xl border border-slate-700/80 hover:border-sky-500/40 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 group-hover:border-sky-500/40 transition-colors">
                        <IconComp className="w-6 h-6 text-sky-400" />
                      </div>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-sky-300">
                        {tool.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                      {tool.name}
                    </h3>
                    <div className="text-xs text-sky-400 font-medium mb-3">{tool.role}</div>
                    <p className="text-xs text-slate-400 leading-relaxed">{tool.desc}</p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
                    <span>جریان کاری توسعه‌دهنده</span>
                    <ArrowUpLeft className="w-4 h-4 text-sky-400 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
        <span>بخش ۱: زیست‌بوم‌های هوش مصنوعی و ابزارها</span>
        <span className="font-mono">Google AI • Claude • Context Memory</span>
      </div>

    </div>
  );
}
