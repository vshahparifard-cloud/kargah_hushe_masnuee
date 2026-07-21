import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Database, Layers, CheckCircle2 } from 'lucide-react';

export default function Slide13ProdDeployment() {
  const pillars = [
    {
      title: "۱. ثبت لاگ و مشاهده‌پذیری (Observability)",
      desc: "استفاده از سیستم‌های OpenTelemetry جهت ثبت رد تمام درخواست‌های ایجنت، فراخوانی ابزارها، تاخیر پاسخ و توکن‌های مصرفی.",
      icon: Activity
    },
    {
      title: "۲. مدیریت حالت و پایداری (State)",
      desc: "ذخیره مکانیسم پایدار حالت جلسات کاری ایجنت در Redis / PostgreSQL جهت امکان ادامه کار پس از قطع اتصال شبکه.",
      icon: Database
    },
    {
      title: "۳. ایمنی نخ‌ها و جلوگیری از بن‌بست",
      desc: "جلوگیری از فراخوانی‌های Blocking روی نخ اصلی UI یا Event Loop و تضمین سیگنال خروج اضطراری در اجراهای موازی.",
      icon: Layers
    },
    {
      title: "۴. کنترل نشت داده و حریم خصوصی",
      desc: "اعمال فیلترهای PII قبل از ارسال اسناد به APIهای عمومی و استفاده از مدل‌های اختصاصی در شبکه‌های امن VPC.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 relative text-right">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono ml-2">
            اسلاید ۱۳ / ۱۴
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">ساعت ۶: استقرار عملیاتی</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
            الگوهای استقرار در محیط واقعی (Production)
          </h2>
        </div>

        <span className="text-xs font-mono bg-slate-900 border border-slate-800 text-sky-400 px-3 py-1.5 rounded-xl">
          Observability & Telemetry
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
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
                  <span>استاندارد استقرار صنعتی</span>
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
        <span>ساعت ۶: استقرار عملیاتی و تلمتری ایجنت‌ها</span>
        <span className="font-mono text-sky-400">مدرس: وحید شهپری فرد</span>
      </div>

    </div>
  );
}
