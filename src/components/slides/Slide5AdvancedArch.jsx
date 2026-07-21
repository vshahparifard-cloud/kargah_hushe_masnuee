import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Database, Cpu, RefreshCw, Play, CheckCircle2, ArrowLeft, Layers, Search, Wrench } from 'lucide-react';

export default function Slide5AdvancedArch() {
  const [activeTab, setActiveTab] = useState('rag');
  const [activeAgentStep, setActiveAgentStep] = useState(0);
  const [isSimulatingAgent, setIsSimulatingAgent] = useState(false);

  const ragPillars = [
    {
      title: "۱. نگاشت و جستجوی برداری (Embeddings)",
      desc: "تبدیل متن به فضاهای برداری چندبعدی (مانند text-embedding-004) با استفاده از شباهت کسینوسی (Cosine Similarity) برای تطابق معنایی.",
      icon: Database
    },
    {
      title: "۲. جستجوی ترکیبی (Dense + Sparse)",
      desc: "ترکیب تعبیه‌های برداری (مفهوم معنایی) با جستجوی سنتی کلیدواژه‌ای BM25 برای پوشش دقیق اسامی خاص و اصطلاحات تخصصی.",
      icon: Search
    },
    {
      title: "۳. چانک‌بندی و هم‌پوشانی",
      desc: "تقسیم اسناد به چانک‌های لغزان ۵۰۰ تا ۱۰۰۰ توکنی با ۱۰٪ هم‌پوشانی برای حفظ سیاق در مرزهای شکست متن.",
      icon: Layers
    },
    {
      title: "۴. مدل‌های بازرتبه‌بندی (Re-Ranking)",
      desc: "عبور دادن ۲۰ تطابق اول برداری از مدل رتبه‌بندی متقاطع (Cross-Encoder) برای به دست آوردن ۵ نتیجه با بیشترین دقت موضوعی.",
      icon: Cpu
    }
  ];

  const agentSteps = [
    {
      id: 1,
      title: "۱. دریافت هدف کاربر",
      agent: "ایجنت ارکستریتور",
      status: "در انتظار",
      log: "تحلیل قصد زبان طبیعی: 'استقرار اسکیما دیتابیس و اجرای مایگریشن'"
    },
    {
      id: 2,
      title: "۲. استدلال و انتخاب ابزار",
      agent: "ایجنت برنامه‌ریز",
      status: "در حال تفکر",
      log: "شناسایی ابزارها: list_dir(), view_file(), run_command('alembic upgrade head')"
    },
    {
      id: 3,
      title: "۳. اجرای ابزار و مشاهده",
      agent: "ایجنت مجری ابزار",
      status: "در حال اجرا",
      log: "فراخوانی دستور مایگریشن... دستور با کد exit 0 پایان یافت."
    },
    {
      id: 4,
      title: "۴. اعتبارسنجی نهایی و پاسخ",
      agent: "ایجنت ارزیاب",
      status: "تایید شده",
      log: "اسکیمای دیتابیس کاملاً همگام شد. هدف با موفقیت محقق گردید!"
    }
  ];

  const handleRunAgentSimulation = () => {
    setIsSimulatingAgent(true);
    setActiveAgentStep(1);

    setTimeout(() => setActiveAgentStep(2), 1200);
    setTimeout(() => setActiveAgentStep(3), 2400);
    setTimeout(() => {
      setActiveAgentStep(4);
      setIsSimulatingAgent(false);
    }, 3600);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative text-right">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono ml-2">
            بخش ۴
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">معماری‌های پیشرفته</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
            سیستم‌های RAG و ایجنتیک
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('rag')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'rag' 
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>معماری RAG</span>
          </button>

          <button
            onClick={() => setActiveTab('agents')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'agents' 
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>شبیه‌ساز چندایجنت</span>
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="my-auto py-6">
        
        {/* TAB 1: RAG Architecture */}
        {activeTab === 'rag' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {ragPillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="glass-card p-5 rounded-2xl border border-slate-700/80 hover:border-sky-500/40 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 group-hover:border-sky-500/40 transition-colors">
                        <IconComp className="w-5 h-5 text-sky-400" />
                      </div>
                      <h3 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span>بازیابی مبتنی بر اسناد مستند</span>
                    <ArrowLeft className="w-3.5 h-3.5 text-sky-400 group-hover:-translate-x-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* TAB 2: Multi-Agent Simulator */}
        {activeTab === 'agents' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-6 sm:p-8 rounded-2xl border border-sky-500/20 max-w-4xl mx-auto space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <Bot className="w-5 h-5 text-sky-400" />
                  <span>حلقه استدلال و عمل خودکار ReAct چندایجنت</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  نمایش عملی فراخوانی ابزارها، حلقه‌های مشاهده و هماهنگی میان ایجنت‌های تخصصی.
                </p>
              </div>

              <button
                onClick={handleRunAgentSimulation}
                disabled={isSimulatingAgent}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-sky-500/20 disabled:opacity-50 transition-all shrink-0 self-start sm:self-auto"
              >
                {isSimulatingAgent ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Play className="w-4 h-4 fill-white rotate-180" />
                )}
                <span>{isSimulatingAgent ? 'در حال اجرای ایجنت...' : 'شروع حلقه ایجنت'}</span>
              </button>
            </div>

            {/* Step-by-Step Agent Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {agentSteps.map((step) => {
                const isActive = activeAgentStep === step.id;
                const isPassed = activeAgentStep > step.id;

                return (
                  <div 
                    key={step.id}
                    className={`p-4 rounded-xl border transition-all ${
                      isActive 
                        ? 'bg-sky-500/15 border-sky-400 shadow-lg shadow-sky-500/20 scale-[1.02]' 
                        : isPassed 
                          ? 'bg-slate-900/90 border-slate-700 opacity-90' 
                          : 'bg-slate-900/50 border-slate-800 opacity-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-sky-300">
                        گام ۰{step.id}
                      </span>
                      {isPassed && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                      {isActive && <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />}
                    </div>

                    <h4 className="text-xs font-bold text-slate-100 mb-1">{step.title}</h4>
                    <span className="text-[11px] text-sky-400 font-medium block mb-2">{step.agent}</span>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{step.log}</p>
                  </div>
                );
              })}
            </div>

            {/* Interactive Detail Box */}
            <div className="bg-[#090d16] border border-slate-800 rounded-xl p-4 text-xs font-mono text-slate-300 dir-ltr text-left">
              <div className="flex items-center gap-2 text-sky-400 font-semibold mb-2 font-sans">
                <Wrench className="w-4 h-4" />
                <span>داده فراخوانی ابزار (Tool Invocation Payload):</span>
              </div>
              <pre className="text-slate-400 overflow-x-auto text-[11px]">
                {`{
  "tool": "call_mcp_tool",
  "arguments": { "ServerName": "database", "ToolName": "migrate", "target": "prod" },
  "agent_reasoning": "Schema diff verified. Triggering migration with rollback safety."
}`}
              </pre>
            </div>
          </motion.div>
        )}

      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
        <span>بخش ۴: سیستم‌های RAG و ایجنتیک</span>
        <span className="font-mono">Embeddings • Vector DBs • Tool Calling • ReAct Loop</span>
      </div>

    </div>
  );
}
