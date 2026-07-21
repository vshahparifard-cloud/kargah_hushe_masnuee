import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, Database, Wrench, CheckCircle2, ChevronRight, Zap, ArrowUpRight, Code, Terminal, FileText } from 'lucide-react';

export default function Slide2Ecosystems() {
  const [activeTab, setActiveTab] = useState('ecosystems');
  const [contextTokens, setContextTokens] = useState(500); // in thousands

  const ecosystemComparison = [
    {
      name: "Google AI Developer Suite",
      badge: "Gemini 1.5 / 3.6 Pro",
      color: "from-sky-500/20 to-blue-600/20 border-sky-500/30",
      accent: "text-sky-400",
      contextLimit: "Up to 2,000,000+ Tokens",
      strengths: [
        "Massive multimodal context (Video, Audio, Code)",
        "Ultra-fast latency with Flash models",
        "Deep GCP & Vertex AI integration",
        "Native structured JSON output support"
      ]
    },
    {
      name: "Claude (Anthropic)",
      badge: "Claude 3.5 Sonnet / Opus",
      color: "from-amber-500/20 to-orange-600/20 border-amber-500/30",
      accent: "text-amber-400",
      contextLimit: "200,000 Tokens",
      strengths: [
        "Exceptional instruction-following & nuanced code logic",
        "Artifacts ecosystem & XML tag prompt structure",
        "Superior reasoning for refactoring complex scripts",
        "Computer Use & tool automation capabilities"
      ]
    }
  ];

  const prodTools = [
    {
      name: "NotebookLM",
      role: "Knowledge Synthesis & Grounded RAG",
      desc: "Instant AI notebook for research, document synthesis, and automated audio/text study guides.",
      icon: FileText,
      tag: "Research"
    },
    {
      name: "Antigravity CLI",
      role: "Agentic Developer Workspace",
      desc: "Command-line autonomous coding agent with full workspace access, task scheduling, and MCP integration.",
      icon: Terminal,
      tag: "Agentic IDE"
    },
    {
      name: "Cloud Code",
      role: "IDE Integration & Cloud Execution",
      desc: "VS Code / JetBrains extension bridging local development with Google Cloud infrastructure.",
      icon: Code,
      tag: "Cloud Dev"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono mr-2">
            SECTION 1
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Architectural Benchmarks</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
            Comparing Top AI Ecosystems
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('ecosystems')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'ecosystems' 
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Suite Comparison
          </button>
          <button
            onClick={() => setActiveTab('context')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'context' 
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Context Window Memory
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'tools' 
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Production Tools
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
                    <span className="text-xs text-slate-400">Context Limit:</span>
                    <span className={`text-sm font-bold font-mono ${eco.accent}`}>{eco.contextLimit}</span>
                  </div>

                  <div className="space-y-2.5">
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Key Strengths:</span>
                    {eco.strengths.map((str, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${eco.accent}`} />
                        <span>{str}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Architectural Standard</span>
                  <span className="font-mono text-sky-400">Enterprise Ready</span>
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
                  <span>Context Window & Memory Management</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  How context windows store full codebase state, chat history, and retrieval documents without degradation.
                </p>
              </div>

              <div className="text-right">
                <span className="text-2xl font-black font-mono text-sky-400">{contextTokens.toLocaleString()}K</span>
                <span className="text-xs text-slate-400 block">Tokens In Memory</span>
              </div>
            </div>

            {/* Slider control */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-400 font-mono">
                <span>100K Tokens (Single File)</span>
                <span>1M Tokens (Entire Repo)</span>
                <span>2M Tokens (Gemini Max)</span>
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
                <span>Capacity Usage Visualizer</span>
                <span className="text-sky-400">{(contextTokens / 20).toFixed(1)}% of 2M Gemini Limit</span>
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
                <div className="text-sky-400 font-bold mb-1">Haystack Retention</div>
                <p className="text-slate-400">Near 100% recall precision across 2 million tokens of source code & docs.</p>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-xs">
                <div className="text-sky-400 font-bold mb-1">Context Caching</div>
                <p className="text-slate-400">Reuse prefix tokens to cut API input cost by 75-90% on repetitive prompts.</p>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-xs">
                <div className="text-sky-400 font-bold mb-1">Compacting Strategy</div>
                <p className="text-slate-400">Automatic transcript summarization & sliding window for long agent runs.</p>
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
                    <span>Developer Workflow</span>
                    <ArrowUpRight className="w-4 h-4 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
        <span>Section 1: AI Ecosystems & Tooling</span>
        <span className="font-mono">Google AI • Claude • Context Memory</span>
      </div>

    </div>
  );
}
