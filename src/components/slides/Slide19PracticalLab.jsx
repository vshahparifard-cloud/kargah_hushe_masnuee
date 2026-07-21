import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Copy, Check, Sparkles } from 'lucide-react';

export default function Slide19PracticalLab() {
  const [copied, setCopied] = useState(false);

  const pythonAgentCode = `import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import google.generativeai as genai

# پیکربندی کلید محرمانه
genai.configure(api_key=os.environ["GEMINI_API_KEY"])

app = FastAPI(title="AI Agentic Service")

class AgentTask(BaseModel):
    user_query: str
    context_files: list[str] = []

@app.post("/api/v1/agent/execute")
async def execute_agent_loop(task: AgentTask):
    try:
        model = genai.GenerativeModel(
            model_name="gemini-1.5-pro",
            system_instruction="You are an autonomous Python Agent."
        )
        
        # اجرای ساختاریافته پرامپت
        prompt = f"<context>{task.context_files}</context><instruction>{task.user_query}</instruction>"
        response = await model.generate_content_async(prompt)
        
        return {"status": "success", "result": response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))`;

  const handleCopy = () => {
    navigator.clipboard.writeText(pythonAgentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative text-right">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono ml-2">
            اسلاید ۱۹ / ۲۰
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">ساعت ۶: لابراتوار کُد</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
            لابراتوار کُد: پیاده‌سازی عملی ایجنت پایتون
          </h2>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-xl transition-colors font-sans"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'کپی شد!' : 'کپی کد پایتون'}</span>
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Right: Architecture Notes */}
          <div className="lg:col-span-5 glass-panel p-5 rounded-2xl border border-sky-500/20 space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>اجزای اصلی سرویس ایجنت عملیاتی</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                نمونه کد زیرساخت یک سرویس ایجنتیک آماده تولید با استفاده از پایتون، FastAPI و Gemini SDK.
              </p>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                  <strong className="text-sky-400 block mb-0.5">۱. جداسازی کلیدهای محرمانه</strong>
                  خوانش امن کلید API از متغیرهای محیطی سیستم (`os.environ`).
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                  <strong className="text-sky-400 block mb-0.5">۲. اعتبارسنجی ورودی Pydantic</strong>
                  دریافت پرامپت‌ها و آرایه فایل‌های زمینه با ساختار کاملاً معتبر.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                  <strong className="text-sky-400 block mb-0.5">۳. اجرای غیرهمگام Async</strong>
                  استفاده از `generate_content_async` جهت عدم بلاک شدن Event Loop سرور.
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 text-xs text-emerald-400 font-mono flex items-center justify-between">
              <span>Production Ready</span>
              <span>FastAPI + Gemini SDK</span>
            </div>
          </div>

          {/* Left: Code Sandbox preview */}
          <div className="lg:col-span-7 glass-panel p-5 rounded-2xl border border-slate-700 flex flex-col justify-between dir-ltr text-left">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3 font-sans">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-slate-400 ml-2">agent_service.py</span>
              </div>
              <span className="text-[10px] text-sky-400 font-mono bg-slate-900 px-2 py-0.5 rounded">Python 3.11+</span>
            </div>

            <pre className="font-mono text-[11px] sm:text-xs text-slate-200 bg-[#090d16] p-4 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed">
              <code>{pythonAgentCode}</code>
            </pre>

            <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-sans">
              <span>FastAPI Async Endpoint</span>
              <span className="text-emerald-400 font-mono">Status 200 OK</span>
            </div>
          </div>

        </div>
      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
        <span>ساعت ۶: لابراتوار عملی پیاده‌سازی سرویس ایجنت پایتون</span>
        <span className="font-mono text-sky-400">مدرس: وحید شهپری فرد</span>
      </div>

    </div>
  );
}
