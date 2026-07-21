import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Command } from 'lucide-react';

export default function ShortcutsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const shortcuts = [
    { key: "← / Space", desc: "اسلاید بعدی" },
    { key: "→", desc: "اسلاید قبلی" },
    { key: "O", desc: "تغییر حالت نمای کلی اسلایدها" },
    { key: "F", desc: "تغییر حالت تمام‌صفحه (Fullscreen)" },
    { key: "Home", desc: "انتقال به اسلاید ۱ (کاور)" },
    { key: "End", desc: "انتقال به اسلاید ۶ (جمع‌بندی)" },
    { key: "Esc", desc: "بستن پنجره‌ها / خروج" }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md text-right">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-md bg-[#0f172a] border border-sky-500/30 rounded-2xl p-6 shadow-2xl space-y-4"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Command className="w-4 h-4 text-sky-400" />
              <h3 className="text-base font-bold text-slate-100">کلیدهای میانبر کیبورد</h3>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2.5">
            {shortcuts.map((sc, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
                <span className="text-slate-300 font-bold">{sc.desc}</span>
                <kbd className="px-2 py-0.5 bg-slate-800 border border-slate-700 text-sky-300 rounded font-mono font-bold dir-ltr">
                  {sc.key}
                </kbd>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 text-center text-xs text-slate-500">
            برای بستن، خارج از پنجره کلیک کنید یا کلید ESC را فشار دهید.
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
