import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Cpu, ShieldCheck, Zap, User, Clock, Calendar, CheckCircle2 } from 'lucide-react';

export default function Slide1Cover() {
  const highlights = [
    "Google AI Developer Suite & Gemini 1.5/3.6",
    "Claude & Antigravity CLI Ecosystem",
    "Context Window Memory Management",
    "RAG & Multi-Agent Architecture",
    "Production API Infra & Cost Controls"
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden">
      
      {/* Decorative top pill */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between gap-4 border-b border-slate-800/80 pb-4"
      >
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono">
            SLIDE 01 / 06
          </span>
          <span className="text-xs text-slate-400 font-medium">Workshop Opening & Overview</span>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-sky-400" />
            <span>6 Hours Duration</span>
          </div>
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-6">
        
        {/* Left Column: Title & Speaker */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Hands-on Engineering Masterclass</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15]"
          >
            AI Engineering <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent glow-text-cyan">
              & Agentic Development
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            A comprehensive guide to building production-ready AI systems, leveraging state-of-the-art LLM APIs, autonomous multi-agent loops, and high-performance RAG pipelines.
          </motion.p>

          {/* Instructor Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 glass-card p-4 rounded-xl border border-sky-500/20 max-w-md"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-slate-900 font-bold text-lg shadow-lg shadow-sky-500/20">
              VS
            </div>
            <div>
              <div className="text-xs text-sky-400 font-semibold uppercase tracking-wider">Instructor</div>
              <div className="text-base font-bold text-slate-100">Vahid Shahparifard</div>
              <div className="text-xs text-slate-400">Senior AI Architect & Developer Lead</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Workshop Highlights Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-slate-700/80 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle top light bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500" />

          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-200 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-sky-400" />
              <span>Workshop Core Modules</span>
            </h3>
            <span className="text-[10px] font-mono bg-slate-800 text-sky-300 border border-slate-700 px-2 py-0.5 rounded">
              Syllabus
            </span>
          </div>

          <div className="space-y-3">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + idx * 0.08 }}
                className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/30 transition-colors"
              >
                <div className="p-1 rounded bg-sky-500/10 text-sky-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm text-slate-300 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Interactive hint */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Use <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-[11px] text-sky-300">→</kbd> or swipe to navigate</span>
            <div className="flex items-center gap-1.5 text-sky-400 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <span>LIVE SLIDES</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
        <span>© 2026 AI Engineering Workshop</span>
        <span>Hosted on Antigravity Engine</span>
      </div>
    </div>
  );
}
