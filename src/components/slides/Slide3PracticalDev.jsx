import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Bug, FolderTree, Copy, Check, Sparkles, RefreshCw, Zap, Layers, Play } from 'lucide-react';

export default function Slide3PracticalDev() {
  const [activeSubtopic, setActiveSubtopic] = useState('prompts');
  const [copiedCode, setCopiedCode] = useState(false);
  const [isDebugRunning, setIsDebugRunning] = useState(false);
  const [debugLogs, setDebugLogs] = useState([]);

  const promptExample = `// System Prompt Architecture:
<role>You are an expert AI Engineer specializing in Python & Async Pipelines</role>
<context>Building high-throughput API gateway with automatic fallback retry</context>
<instruction>
1. Implement exponential backoff retry decorator with jitter.
2. Maintain clean type hints and Pydantic v2 schemas.
3. Include structured JSON logging for all exceptions.
</instruction>`;

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
      "🔍 [1/4] Reading stderr: TypeError: null is not an object (evaluating 'res.data.items')",
      "🧠 [2/4] Root Cause Identified: Unchecked response body on rate-limit HTTP 429",
      "⚡ [3/4] Applying Patch: Added optional chaining and safe fallback array `res?.data?.items ?? []`",
      "✅ [4/4] Self-Correction Complete: Test suite passed with 100% coverage!"
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setDebugLogs(prev => [...prev, step]);
        if (idx === steps.length - 1) setIsDebugRunning(false);
      }, (idx + 1) * 700);
    });
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono mr-2">
            SECTION 2
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Practical Dev</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
            AI-Driven Development
          </h2>
        </div>

        {/* Subtopic Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl self-start sm:self-auto">
          <button
            onClick={() => setActiveSubtopic('prompts')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeSubtopic === 'prompts' 
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Prompting</span>
          </button>

          <button
            onClick={() => setActiveSubtopic('debugging')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeSubtopic === 'debugging' 
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bug className="w-3.5 h-3.5" />
            <span>Auto-Debugging</span>
          </button>

          <button
            onClick={() => setActiveSubtopic('architecture')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeSubtopic === 'architecture' 
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FolderTree className="w-3.5 h-3.5" />
            <span>Multi-Module Repos</span>
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
            {/* Left: Prompt Techniques */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              <div className="glass-panel p-5 rounded-2xl border border-sky-500/20 space-y-3">
                <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-sky-400" />
                  <span>Structured Prompting Patterns</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  High-level prompt engineering requires explicit role boundaries, strict context fencing, and reproducible output schemas.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                    <strong className="text-sky-400 block mb-0.5">XML Tag Scoping</strong>
                    Use <code className="text-sky-300">&lt;context&gt;</code> and <code className="text-sky-300">&lt;instruction&gt;</code> tags to isolate user input from code instructions.
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                    <strong className="text-sky-400 block mb-0.5">Chain-of-Thought (CoT)</strong>
                    Force LLM to output step-by-step reasoning before outputting final JSON or script.
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                    <strong className="text-sky-400 block mb-0.5">Schema Validation</strong>
                    Enforce Pydantic / TypeScript interface constraints for direct programmatic consumption.
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Code Sandbox preview */}
            <div className="lg:col-span-7 glass-panel p-5 rounded-2xl border border-slate-700 flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">async_retry.py</span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-lg transition-colors"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              <pre className="font-mono text-[11px] sm:text-xs text-slate-200 bg-[#090d16] p-4 rounded-xl overflow-x-auto border border-slate-800/80 leading-relaxed">
                <code>{codeResult}</code>
              </pre>

              <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Output generated in 420ms via Gemini Pro</span>
                <span className="text-emerald-400 font-mono">100% Type-Safe</span>
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
                  <span>Automated Debugging & Self-Correction</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  How autonomous agentic loops parse error tracebacks, isolate root causes, apply patches, and re-verify tests.
                </p>
              </div>

              <button
                onClick={handleRunDebugLoop}
                disabled={isDebugRunning}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-xs shadow-lg shadow-sky-500/20 disabled:opacity-50 transition-all shrink-0 self-start sm:self-auto"
              >
                {isDebugRunning ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Play className="w-4 h-4 fill-white" />
                )}
                <span>{isDebugRunning ? 'Fixing Code...' : 'Simulate Debug Loop'}</span>
              </button>
            </div>

            {/* Live Console Output */}
            <div className="bg-[#090d16] border border-slate-800 rounded-xl p-4 font-mono text-xs text-slate-300 min-h-[180px] space-y-2.5">
              <div className="text-slate-500 border-b border-slate-800/80 pb-2 flex justify-between">
                <span>AGENT DEBUG TERMINAL</span>
                <span className="text-sky-400">STATE: ACTIVE</span>
              </div>

              {debugLogs.length === 0 ? (
                <div className="text-slate-500 italic py-6 text-center">
                  Click "Simulate Debug Loop" above to run the agentic self-repair process...
                </div>
              ) : (
                debugLogs.map((log, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-slate-200"
                  >
                    <span>{log}</span>
                  </motion.div>
                ))
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <span className="text-sky-400 font-semibold block mb-1">1. Error Capture</span>
                <p className="text-slate-400">Captures un-truncated stack traces, stdout/stderr, and runtime variables.</p>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <span className="text-sky-400 font-semibold block mb-1">2. AST Analysis</span>
                <p className="text-slate-400">Maps error locations directly back to exact module AST nodes & line numbers.</p>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <span className="text-sky-400 font-semibold block mb-1">3. Automated Test Verification</span>
                <p className="text-slate-400">Executes pytest / vitest runner to guarantee zero regressions before commit.</p>
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
              <h3 className="text-base font-bold text-slate-100 mb-2">Modular Context Maps</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Break large codebases into explicit modular sub-scopes (e.g. auth, database, frontend components) to avoid exceeding token windows.
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-slate-700/80 hover:border-sky-500/40">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 w-fit mb-3">
                <FolderTree className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-base font-bold text-slate-100 mb-2">Dependency Tree Awareness</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Feed agents interface contracts (d.ts / headers / Pydantic models) so changes in one module don't break downstream dependents.
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-slate-700/80 hover:border-sky-500/40">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 w-fit mb-3">
                <Zap className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-base font-bold text-slate-100 mb-2">Incremental Refactoring</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Execute single-file edits using pinpointed diff chunks rather than re-writing entire 1,000-line source files.
              </p>
            </div>
          </motion.div>
        )}

      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
        <span>Section 2: AI-Driven Development</span>
        <span className="font-mono">Prompt Engineering • Debugging • Modular Code</span>
      </div>

    </div>
  );
}
