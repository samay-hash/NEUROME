import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

type Phase = 'inhale' | 'hold' | 'exhale' | 'rest';
const phases: { phase: Phase; duration: number; label: string; sub: string }[] = [
  { phase: 'inhale', duration: 4, label: 'Breathe in',  sub: 'through your nose' },
  { phase: 'hold',   duration: 4, label: 'Hold',        sub: 'gently' },
  { phase: 'exhale', duration: 6, label: 'Breathe out', sub: 'slowly through your mouth' },
  { phase: 'rest',   duration: 2, label: 'Rest',        sub: 'and begin again' },
];

export function CalmOrbPage() {
  const [active, setActive] = useState(false);
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [countdown, setCountdown] = useState(phases[0].duration);
  const [cycles, setCycles] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!active) { if (timer.current) clearInterval(timer.current); return; }
    setCountdown(phases[phaseIdx].duration);
    timer.current = setInterval(() => {
      setCountdown(c => {
        if (c <= 1) {
          setPhaseIdx(p => {
            const next = (p + 1) % phases.length;
            if (next === 0) setCycles(cy => cy + 1);
            return next;
          });
          return phases[(phaseIdx + 1) % phases.length].duration;
        }
        return c - 1;
      });
    }, 1000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [active, phaseIdx]);

  const current = phases[phaseIdx];
  const isExpanding = current.phase === 'inhale';
  const isHeld = current.phase === 'hold';

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-[#050505]/90 backdrop-blur-md">
        <div className="max-w-[600px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /><span className="text-[13px]">Back</span>
          </Link>
          {cycles > 0 && (
            <span className="text-[11px] font-mono text-white/30">{cycles} cycle{cycles !== 1 ? 's' : ''} complete</span>
          )}
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <p className="text-[#ff4f64] text-[10px] font-mono tracking-[0.2em] uppercase mb-3">// CALM ORB</p>
          <h1 className="text-2xl sm:text-3xl font-sans font-medium text-white mb-2">Guided breathing</h1>
          <p className="text-white/40 text-[13px]">4-4-6-2 box breathing. Follow the orb.</p>
        </motion.div>

        {/* Orb */}
        <div className="relative flex items-center justify-center mb-12" style={{ width: 280, height: 280 }}>
          {/* Outer ring */}
          <motion.div
            className="absolute rounded-full border border-[#ff4f64]/20"
            animate={{ scale: active ? (isExpanding ? 1.15 : isHeld ? 1.15 : 0.95) : 1 }}
            transition={{ duration: current.duration, ease: 'linear' }}
            style={{ width: 280, height: 280 }}
          />
          {/* Glow */}
          <motion.div
            className="absolute rounded-full blur-2xl"
            animate={{ scale: active ? (isExpanding ? 1.1 : 0.85) : 0.7, opacity: active ? 0.3 : 0.08 }}
            transition={{ duration: current.duration, ease: 'linear' }}
            style={{ width: 200, height: 200, backgroundColor: '#ff4f64' }}
          />
          {/* Core orb */}
          <motion.div
            className="rounded-full border border-[#ff4f64]/30 flex flex-col items-center justify-center cursor-pointer select-none"
            animate={{
              scale: active ? (isExpanding ? 1.18 : isHeld ? 1.18 : 0.85) : 1,
              backgroundColor: active ? 'rgba(255,79,100,0.12)' : 'rgba(255,79,100,0.06)',
            }}
            transition={{ duration: active ? current.duration : 0.4, ease: active ? 'linear' : 'easeOut' }}
            style={{ width: 160, height: 160 }}
            onClick={() => setActive(a => !a)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active ? current.phase : 'idle'}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-center px-4"
              >
                {active ? (
                  <>
                    <p className="text-[28px] font-mono font-light text-white">{countdown}</p>
                    <p className="text-[11px] font-mono text-[#ff4f64] uppercase tracking-widest mt-0.5">{current.label}</p>
                  </>
                ) : (
                  <p className="text-[13px] font-sans text-white/50">Tap to begin</p>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Phase label */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.div key={current.phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center mb-8">
              <p className="text-[18px] font-sans font-medium text-white">{current.label}</p>
              <p className="text-[13px] text-white/40 mt-1">{current.sub}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase dots */}
        <div className="flex gap-3">
          {phases.map((p, i) => (
            <div key={p.phase} className={`h-1 rounded-full transition-all duration-300 ${active && i === phaseIdx ? 'w-8 bg-[#ff4f64]' : 'w-4 bg-white/10'}`} />
          ))}
        </div>

        <p className="text-[12px] text-white/25 mt-8">Tap the orb to {active ? 'pause' : 'start'}</p>
      </main>
    </div>
  );
}
