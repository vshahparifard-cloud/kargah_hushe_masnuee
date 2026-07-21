import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Command, HelpCircle } from 'lucide-react';

export default function ShortcutsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const shortcuts = [
    { key: "→ / Space", desc: "Next slide" },
    { key: "←", desc: "Previous slide" },
    { key: "O", desc: "Toggle Slide Overview Grid" },
    { key: "F", desc: "Toggle Fullscreen mode" },
    { key: "Home", desc: "Jump to Slide 1 (Cover)" },
    { key: "End", desc: "Jump to Slide 6 (Closing Stack)" },
    { key: "Esc", desc: "Close Modals / Exit Fullscreen" }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-md bg-[#0f172a] border border-sky-500/30 rounded-2xl p-6 shadow-2xl space-y-4"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Command className="w-4 h-4 text-sky-400" />
              <h3 className="text-base font-bold text-slate-100">Keyboard Shortcuts</h3>
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
                <span className="text-slate-300 font-medium">{sc.desc}</span>
                <kbd className="px-2 py-0.5 bg-slate-800 border border-slate-700 text-sky-300 rounded font-mono font-bold">
                  {sc.key}
                </kbd>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 text-center text-xs text-slate-500">
            Click anywhere outside or press ESC to dismiss.
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
