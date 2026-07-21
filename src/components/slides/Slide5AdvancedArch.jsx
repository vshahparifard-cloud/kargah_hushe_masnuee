import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Database, Network, Cpu, RefreshCw, Play, CheckCircle2, ArrowRight, Sparkles, Layers, Search, Wrench } from 'lucide-react';

export default function Slide5AdvancedArch() {
  const [activeTab, setActiveTab] = useState('rag');
  const [activeAgentStep, setActiveAgentStep] = useState(0);
  const [isSimulatingAgent, setIsSimulatingAgent] = useState(false);

  const ragPillars = [
    {
      title: "1. Embeddings & Dense Search",
      desc: "Convert text docs into high-dimensional vector space representations (e.g. text-embedding-004) using Cosine Similarity for semantic matching.",
      icon: Database
    },
    {
      title: "2. Hybrid Search (Dense + Sparse)",
      desc: "Combine vector embeddings (semantic meaning) with traditional BM25 keyword search to capture exact entity names and jargon.",
      icon: Search
    },
    {
      title: "3. Chunking & Overlap",
      desc: "Split documentation into 500-1000 token sliding chunks with 10% overlap to preserve context across boundary splits.",
      icon: Layers
    },
    {
      title: "4. Re-Ranking Models",
      desc: "Pass initial top-20 retrieved vector matches through a cross-encoder Reranker to yield top-5 high-precision groundings.",
      icon: Cpu
    }
  ];

  const agentSteps = [
    {
      id: 1,
      title: "1. User Goal Received",
      agent: "Orchestrator Agent",
      status: "Idle",
      log: "Parse natural language intent: 'Deploy database schema & run migration'"
    },
    {
      id: 2,
      title: "2. Thought & Tool Selection",
      agent: "Planner Agent",
      status: "Thinking",
      log: "Identify tool requirements: list_dir(), view_file(), run_command('alembic upgrade head')"
    },
    {
      id: 3,
      title: "3. Tool Execution & Observation",
      agent: "Tool Executor Agent",
      status: "Executing",
      log: "Invoking migration runner... Command returned exit code 0."
    },
    {
      id: 4,
      title: "4. Final Verification & Answer",
      agent: "Evaluator Agent",
      status: "Verified",
      log: "Database schema in sync. Goal successfully accomplished!"
    }
  ];

  const handleRunAgentSimulation = () => {
    setIsSimulatingAgent(true);
    setActiveAgentStep(1);

    const timer2 = setTimeout(() => setActiveAgentStep(2), 1200);
    const timer3 = setTimeout(() => setActiveAgentStep(3), 2400);
    const timer4 = setTimeout(() => {
      setActiveAgentStep(4);
      setIsSimulatingAgent(false);
    }, 3600);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono mr-2">
            SECTION 4
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Advanced Architectures</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
            RAG & Agentic Systems
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('rag')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'rag' 
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>RAG Architecture</span>
          </button>

          <button
            onClick={() => setActiveTab('agents')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'agents' 
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>Multi-Agent Simulator</span>
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
                    <span>Grounded Retrieval</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-0.5 transition-transform" />
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
                  <span>Autonomous Multi-Agent ReAct Loop</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Demonstration of tool calling, observation loops, and multi-agent coordination.
                </p>
              </div>

              <button
                onClick={handleRunAgentSimulation}
                disabled={isSimulatingAgent}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-xs shadow-lg shadow-sky-500/20 disabled:opacity-50 transition-all shrink-0 self-start sm:self-auto"
              >
                {isSimulatingAgent ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Play className="w-4 h-4 fill-white" />
                )}
                <span>{isSimulatingAgent ? 'Agent Execution Running...' : 'Trigger Agent Loop'}</span>
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
                        Step 0{step.id}
                      </span>
                      {isPassed && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                      {isActive && <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />}
                    </div>

                    <h4 className="text-xs font-bold text-slate-100 mb-1">{step.title}</h4>
                    <span className="text-[11px] text-sky-400 font-medium block mb-2">{step.agent}</span>
                    <p className="text-[11px] text-slate-400 leading-tight">{step.log}</p>
                  </div>
                );
              })}
            </div>

            {/* Interactive Detail Box */}
            <div className="bg-[#090d16] border border-slate-800 rounded-xl p-4 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2 text-sky-400 font-semibold mb-2">
                <Wrench className="w-4 h-4" />
                <span>Tool Invocation Payload:</span>
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
        <span>Section 4: RAG & Agentic Systems</span>
        <span className="font-mono">Embeddings • Vector DBs • Tool Calling • ReAct Loop</span>
      </div>

    </div>
  );
}
