import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Trash2 } from 'lucide-react';

export function BrainDumpPage() {
  const [text, setText] = useState('');
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  const handleClear = () => setText('');

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-[#050505]/90 backdrop-blur-md">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /><span className="text-[13px]">Back</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-white/25">{wordCount} words</span>
            {text.length > 0 && (
              <button
                onClick={handleClear}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.07] text-white/30 hover:text-white/60 hover:border-white/15 transition-all text-[11px]"
              >
                <Trash2 className="w-3 h-3" /> Clear
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col max-w-[760px] mx-auto w-full px-4 sm:px-6 py-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <p className="text-[#ff4f64] text-[10px] font-mono tracking-[0.2em] uppercase mb-3">// BRAIN DUMP</p>
          <h1 className="text-2xl sm:text-3xl font-sans font-medium text-white mb-2">Get it out of your head.</h1>
          <p className="text-white/35 text-[13px]">Everything you type stays here. Nothing is saved. It disappears when you leave.</p>
        </motion.div>

        {/* Privacy badge */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/[0.06] bg-white/[0.02] w-fit mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-[#4fc8a0]" />
          <span className="text-[11px] font-mono text-white/35">Private · Not saved · Clears on exit</span>
        </div>

        <motion.textarea
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Start typing. No one is watching. No one will read this. Just let it out..."
          autoFocus
          className="flex-1 w-full min-h-[60vh] bg-transparent border-none outline-none resize-none text-[15px] sm:text-[16px] text-white/80 placeholder:text-white/15 leading-relaxed font-sans"
        />

        {text.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 pt-4 border-t border-white/[0.05] flex items-center justify-between"
          >
            <p className="text-[12px] text-white/25">You've been heard.</p>
            <button onClick={handleClear} className="text-[12px] text-white/30 hover:text-[#ff4f64] transition-colors">
              Clear and start fresh →
            </button>
          </motion.div>
        )}
      </main>
    </div>
  );
}
