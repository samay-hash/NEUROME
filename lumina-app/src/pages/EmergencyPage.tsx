import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Wind, FileText, RefreshCw, Radio, ArrowRight } from 'lucide-react';

const tools = [
  { label: 'Calm Orb',      sub: 'Guided breathing · 4 min',     icon: Wind,      href: '/tools/calm-orb',    color: '#ff4f64' },
  { label: 'Brain Dump',    sub: 'Private · Clears on exit',      icon: FileText,  href: '/tools/brain-dump',  color: '#7c6fff' },
  { label: 'Reset Cards',   sub: 'Micro affirmations · 12 cards', icon: RefreshCw, href: '/tools/reset-cards', color: '#4fc8a0' },
  { label: 'Ambient Audio', sub: 'Background sound · 6 tracks',   icon: Radio,     href: '/tools/audio',       color: '#ff8c00' },
];

const quotes = [
  "One breath. That's all you need right now.",
  "You're not broken, you're processing.",
  "You've survived every hard day so far.",
];

export function EmergencyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="fixed top-0 left-0 right-0 h-[400px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(255,79,100,0.08) 0%, transparent 65%)' }} />

      <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-[#050505]/90 backdrop-blur-md">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /><span className="text-[13px]">Dashboard</span>
          </Link>
          <span className="text-[10px] font-mono text-white/25 tracking-widest uppercase">Emergency Pack</span>
        </div>
      </header>

      <main className="max-w-[800px] mx-auto px-4 sm:px-6 py-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <p className="text-[#ff4f64] text-[10px] font-mono tracking-[0.2em] uppercase mb-4">// EMERGENCY</p>
          <h1 className="text-3xl sm:text-4xl font-sans font-medium text-white mb-4">
            Tonight is <span className="text-[#ff4f64]">bad.</span>
          </h1>
          <p className="text-white/45 text-[14px] sm:text-[15px] leading-relaxed max-w-md mx-auto">
            That's okay. Here's everything at once — breathe first, then take it one step at a time.
          </p>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10 px-6 py-6 rounded-2xl border border-[#ff4f64]/15 bg-[#ff4f64]/[0.04]"
        >
          <p className="text-[18px] sm:text-[20px] font-sans font-medium text-white/85 italic leading-snug">
            "{quotes[Math.floor(Date.now() / 10000) % quotes.length]}"
          </p>
        </motion.div>

        {/* Step 1: Breathe */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-4">
          <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-3">Step 1 — Breathe first</p>
          <Link
            to="/tools/calm-orb"
            className="flex items-center justify-between px-5 py-4 rounded-xl border border-[#ff4f64]/25 bg-[#ff4f64]/[0.06] hover:bg-[#ff4f64]/[0.1] transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#ff4f64]/15 border border-[#ff4f64]/25 flex items-center justify-center">
                <Wind className="w-5 h-5 text-[#ff4f64]" />
              </div>
              <div>
                <p className="text-[14px] font-sans font-semibold text-white">Open Calm Orb</p>
                <p className="text-[12px] text-white/40">4 minutes of guided breathing. Start here.</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#ff4f64] group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* All tools */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-6">
          <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-3">All tools — use anything</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {tools.map((tool, i) => (
              <motion.div key={tool.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 + i * 0.05 }}>
                <Link
                  to={tool.href}
                  className="flex flex-col items-center gap-3 px-3 py-5 rounded-xl border border-white/[0.07] bg-[#0a0a0a] hover:border-white/14 hover:bg-white/[0.03] transition-all text-center"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border" style={{ backgroundColor: `${tool.color}12`, borderColor: `${tool.color}25` }}>
                    <tool.icon className="w-5 h-5" strokeWidth={1.5} style={{ color: tool.color }} />
                  </div>
                  <div>
                    <p className="text-[12px] sm:text-[13px] font-sans font-medium text-white/80">{tool.label}</p>
                    <p className="text-[10px] text-white/30 mt-0.5 leading-snug">{tool.sub}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Crisis line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="px-5 py-5 rounded-xl border border-white/[0.07] bg-white/[0.02]"
        >
          <p className="text-[13px] font-sans font-medium text-white/80 mb-1">Need to talk to someone real?</p>
          <p className="text-[12px] text-white/35 leading-relaxed">
            iCall India: <span className="text-white/55">9152987821</span> · Vandrevala Foundation: <span className="text-white/55">1860-2662-345</span>
          </p>
        </motion.div>
      </main>
    </div>
  );
}
