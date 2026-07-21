import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, DollarSign, Activity, Lock, AlertTriangle, Cpu, Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Slide4ApiInfra() {
  const [activeTab, setActiveTab] = useState('pillars');
  
  // Cost Calculator state
  const [requestsPerDay, setRequestsPerDay] = useState(50000);
  const [avgInputTokens, setAvgInputTokens] = useState(1500);
  const [avgOutputTokens, setAvgOutputTokens] = useState(500);
  const [modelType, setModelType] = useState('flash'); // 'flash' or 'pro'

  // Pricing constants per 1M tokens
  const pricing = {
    flash: { input: 0.075, output: 0.30, name: "Gemini 1.5 Flash (Ultra Fast)" },
    pro: { input: 1.25, output: 5.00, name: "Gemini 1.5 Pro (Deep Reasoning)" }
  };

  const currentPrice = pricing[modelType];
  const totalInputM = (requestsPerDay * avgInputTokens * 30) / 1000000;
  const totalOutputM = (requestsPerDay * avgOutputTokens * 30) / 1000000;
  const monthlyCost = (totalInputM * currentPrice.input) + (totalOutputM * currentPrice.output);

  const pillars = [
    {
      title: "1. Key Security & Vaults",
      icon: Lock,
      desc: "Never embed secret API keys in frontend bundles or public mobile clients. Use encrypted vaults (AWS Secrets Manager, GCP Secret Manager) with transient server-side proxy handlers.",
      badge: "Zero-Trust Architecture"
    },
    {
      title: "2. Regional Quotas & Fallbacks",
      icon: Globe,
      desc: "API rate limits (TPM / RPM) vary by region. Deploy multi-region fallback proxies (us-central1 → us-east4 → europe-west1) with automatic circuit breaker logic.",
      badge: "99.99% Availability"
    },
    {
      title: "3. Rate Limiting & Backoff",
      icon: Activity,
      desc: "Implement token bucket rate limiters on gateway servers with jittered exponential backoff (e.g. initial 1s → 2s → 4s → 8s) on HTTP 429 status codes.",
      badge: "Token Bucket"
    },
    {
      title: "4. Token Economics & Caching",
      icon: DollarSign,
      desc: "Route simple requests to fast/low-cost models (Gemini Flash) and reserve heavy models (Pro/Opus) for complex code tasks. Use Prompt Caching to slash input costs by up to 90%.",
      badge: "Cost Control"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono mr-2">
            SECTION 3
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Production Operations</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
            API Infrastructure & Management
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('pillars')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'pillars' 
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            4 Infrastructure Pillars
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'calculator' 
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Cost & Token Calculator</span>
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="my-auto py-6">
        
        {/* TAB 1: Infrastructure Pillars Grid */}
        {activeTab === 'pillars' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {pillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-700/80 hover:border-sky-500/40 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 group-hover:border-sky-500/40 transition-colors">
                          <IconComp className="w-5 h-5 text-sky-400" />
                        </div>
                        <h3 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-sky-300 shrink-0">
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span>Best Practice Pattern</span>
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* TAB 2: Cost & Token Calculator Widget */}
        {activeTab === 'calculator' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-6 sm:p-8 rounded-2xl border border-sky-500/20 max-w-4xl mx-auto space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-sky-400" />
                  <span>Production Token Economics & Cost Estimator</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Estimate monthly API cost based on daily requests, model tiering, and input/output payload sizes.
                </p>
              </div>

              {/* Model Selector Pill */}
              <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800 self-start sm:self-auto">
                <button
                  onClick={() => setModelType('flash')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                    modelType === 'flash' ? 'bg-sky-500 text-slate-950' : 'text-slate-400'
                  }`}
                >
                  Flash Model
                </button>
                <button
                  onClick={() => setModelType('pro')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                    modelType === 'pro' ? 'bg-sky-500 text-slate-950' : 'text-slate-400'
                  }`}
                >
                  Pro Model
                </button>
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              {/* Daily Requests */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-300 font-semibold">
                  <span>Daily API Requests</span>
                  <span className="text-sky-400 font-mono">{requestsPerDay.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="5000" 
                  max="500000" 
                  step="5000"
                  value={requestsPerDay} 
                  onChange={(e) => setRequestsPerDay(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
              </div>

              {/* Input Tokens */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-300 font-semibold">
                  <span>Avg. Input Tokens / Request</span>
                  <span className="text-sky-400 font-mono">{avgInputTokens.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="200" 
                  max="10000" 
                  step="200"
                  value={avgInputTokens} 
                  onChange={(e) => setAvgInputTokens(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
              </div>

              {/* Output Tokens */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-300 font-semibold">
                  <span>Avg. Output Tokens / Request</span>
                  <span className="text-sky-400 font-mono">{avgOutputTokens.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="4000" 
                  step="100"
                  value={avgOutputTokens} 
                  onChange={(e) => setAvgOutputTokens(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
              </div>
            </div>

            {/* Results Display */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">Model Selection</span>
                <span className="text-sm font-bold text-slate-100 block">{currentPrice.name}</span>
                <span className="text-[11px] text-slate-500 font-mono mt-1 block">
                  ${currentPrice.input}/1M in • ${currentPrice.output}/1M out
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">Monthly Volume</span>
                <span className="text-lg font-bold text-sky-400 font-mono">
                  {((requestsPerDay * 30) / 1000000).toFixed(2)}M Requests
                </span>
                <span className="text-[11px] text-slate-500 block mt-1">
                  {(totalInputM + totalOutputM).toFixed(1)}M Total Tokens/Mo
                </span>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-600/20 border border-sky-500/40">
                <span className="text-xs text-sky-300 font-semibold block mb-1">Estimated Monthly Cost</span>
                <span className="text-2xl font-black text-sky-400 font-mono glow-text-cyan">
                  ${monthlyCost.toFixed(2)} / mo
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">
                  With Context Caching: <span className="text-emerald-400 font-bold">${(monthlyCost * 0.25).toFixed(2)} / mo</span>
                </span>
              </div>
            </div>
          </motion.div>
        )}

      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
        <span>Section 3: API Infrastructure & Management</span>
        <span className="font-mono">Vaults • Rate Limiting • Quotas • Cost Controls</span>
      </div>

    </div>
  );
}
