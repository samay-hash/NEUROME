import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

const cards = [
  { text: "You're not behind. You're on your own timeline.", tag: 'Perspective' },
  { text: "Rest is not a reward. It's a requirement.", tag: 'Self-care' },
  { text: "You've survived every hard day so far. That's a 100% track record.", tag: 'Strength' },
  { text: "You don't have to feel okay to be okay.", tag: 'Honesty' },
  { text: "Healing isn't linear. Good days and bad days can coexist.", tag: 'Growth' },
  { text: "Softness is not weakness. It takes immense courage to stay gentle.", tag: 'Girlhood' },
  { text: "One breath. That's all that's required of you right now.", tag: 'Grounding' },
  { text: "You're allowed to change your mind. About everything.", tag: 'Freedom' },
  { text: "Anxiety is just energy looking for somewhere to land.", tag: 'Anxiety' },
  { text: "You don't have to earn your rest, your space, or your worth.", tag: 'Worth' },
  { text: "Progress is not always visible. That doesn't mean it isn't happening.", tag: 'Growth' },
  { text: "It's okay to not have it figured out. Most people don't.", tag: 'Honesty' },
];

const tagColors: Record<string, string> = {
  Perspective: '#7c6fff', 'Self-care': '#ff6fa0', Strength: '#ff8c00',
  Honesty: '#4fc8a0', Growth: '#4fc8a0', Girlhood: '#ff6fa0',
  Grounding: '#ff4f64', Freedom: '#7c6fff', Anxiety: '#ff4f64', Worth: '#ff6fa0',
};

export function ResetCardsPage() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [shuffled] = useState(() => [...cards].sort(() => Math.random() - 0.5));

  const go = (d: number) => { setDir(d); setIdx(i => (i + d + shuffled.length) % shuffled.length); };
  const card = shuffled[idx];
  const color = tagColors[card.tag] ?? '#ff4f64';

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-[#050505]/90 backdrop-blur-md">
        <div className="max-w-[600px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /><span className="text-[13px]">Back</span>
          </Link>
          <span className="text-[11px] font-mono text-white/25">{idx + 1} / {shuffled.length}</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <p className="text-[#ff4f64] text-[10px] font-mono tracking-[0.2em] uppercase mb-3">// RESET CARDS</p>
          <h1 className="text-2xl sm:text-3xl font-sans font-medium text-white mb-2">One card at a time.</h1>
          <p className="text-white/40 text-[13px]">No pressure. Just swipe through and let something land.</p>
        </motion.div>

        {/* Card */}
        <div className="relative w-full max-w-[400px] h-[260px] mb-10">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col justify-between p-7 rounded-2xl border border-white/[0.08] bg-[#0d0d0d]"
            >
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md w-fit" style={{ color, backgroundColor: `${color}15`, border: `1px solid ${color}25` }}>
                {card.tag}
              </span>
              <p className="text-[18px] sm:text-[20px] font-sans font-medium text-white leading-snug">
                "{card.text}"
              </p>
              <div className="h-px w-10 rounded-full" style={{ backgroundColor: `${color}60` }} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-5">
          <button onClick={() => go(-1)} className="w-11 h-11 rounded-full border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] flex items-center justify-center text-white/50 hover:text-white transition-all">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => go(1)} className="w-14 h-14 rounded-full bg-[#ff4f64] hover:bg-[#ff3b52] flex items-center justify-center text-white transition-all shadow-[0_0_30px_rgba(255,79,100,0.3)]">
            <ChevronRight className="w-5 h-5" />
          </button>
          <button onClick={() => setIdx(0)} className="w-11 h-11 rounded-full border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] flex items-center justify-center text-white/50 hover:text-white transition-all">
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[12px] text-white/20 mt-6">Tap the big button or use arrow keys</p>
      </main>
    </div>
  );
}
