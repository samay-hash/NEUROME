import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Step 1: Gender / Identity
const genders = [
  { id: 'female', label: 'Girl / Woman', sub: 'Girlhood, soft life, feminine spaces' },
  { id: 'male', label: 'Guy / Man', sub: 'Gym, sports, discipline, stoic' },
  { id: 'nonbinary', label: 'Non-binary', sub: 'Beyond labels, fluid spaces' },
  { id: 'skip', label: 'Prefer not to say', sub: 'We\'ll keep it neutral' },
];

// Step 2: Current mood
const moods = [
  { id: 'anxious', label: 'Anxious', desc: 'Racing thoughts, can\'t stop overthinking' },
  { id: 'sad', label: 'Sad', desc: 'Just feeling low, need to feel held' },
  { id: 'spiraling', label: 'Spiraling', desc: 'Everything is too much right now' },
  { id: 'bored', label: 'Bored', desc: 'Restless, need something to do' },
  { id: 'chill', label: 'Just chilling', desc: 'Vibing, exploring, curious' },
  { id: 'focused', label: 'In focus mode', desc: 'Need to lock in and get things done' },
];

// Step 3: Interest universes (based on gender, shown to all)
const interests = [
  { id: 'girlhood', label: 'Girlhood', desc: 'Soft aesthetic, vent, sisterhood' },
  { id: 'football', label: 'Football + Gym', desc: 'Discipline, sports, grind' },
  { id: 'heartbreak', label: 'Heartbreak', desc: 'Love, loss, processing feelings' },
  { id: 'study', label: 'Study Calm', desc: 'Focus, concentration, academic peace' },
  { id: 'midnight', label: 'Midnight Room', desc: 'Late night thoughts, quiet hours' },
  { id: 'anxiety', label: 'Anxiety Room', desc: 'Safe space, no judgment, breathe' },
];

const TOTAL_STEPS = 4;

export function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState('');
  const [mood, setMood] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toggleInterest = (id: string) => {
    setSelectedInterests(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  const next = () => setStep(s => s + 1);
  const back = () => setStep(s => s - 1);

  const finish = () => {
    setLoading(true);
    setTimeout(() => navigate('/dashboard'), 900);
  };

  const canNext = () => {
    if (step === 1) return gender !== '';
    if (step === 2) return mood !== '';
    if (step === 3) return selectedInterests.length >= 1;
    return true;
  };

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col relative overflow-hidden">
      
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#ff4f64]/4 blur-[150px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
        <Link to="/">
          <span className="font-serif font-medium text-xl text-white tracking-tight">Neurome</span>
        </Link>

        {/* Progress dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-500 ${
                i + 1 < step
                  ? 'w-2 h-2 bg-[#ff4f64]'
                  : i + 1 === step
                  ? 'w-5 h-2 bg-[#ff4f64]'
                  : 'w-2 h-2 bg-white/10'
              }`}
            />
          ))}
        </div>

        <span className="text-[11px] font-mono text-white/25 tracking-widest">
          {step} / {TOTAL_STEPS}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-start justify-center px-4 pt-16 pb-24">
        <div className="w-full max-w-[560px]">
          <AnimatePresence mode="wait">

            {/* STEP 1 — Gender */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-[#ff4f64] text-[10px] font-mono font-medium tracking-[0.2em] uppercase mb-4">
                  // STEP 1 OF 4
                </p>
                <h1 className="text-3xl font-sans font-medium text-white mb-2 leading-snug">
                  Who are you?
                </h1>
                <p className="text-white/40 text-[14px] mb-10 leading-relaxed">
                  This helps us personalise your rooms and content. You can always change this later.
                </p>

                <div className="flex flex-col gap-3">
                  {genders.map(g => (
                    <button
                      key={g.id}
                      onClick={() => setGender(g.id)}
                      className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border text-left transition-all duration-200 ${
                        gender === g.id
                          ? 'border-[#ff4f64]/60 bg-[#ff4f64]/[0.06]'
                          : 'border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                      }`}
                    >
                      <div>
                        <div className={`text-[15px] font-sans font-medium ${gender === g.id ? 'text-white' : 'text-white/80'}`}>
                          {g.label}
                        </div>
                        <div className="text-[12px] text-white/35 mt-0.5">{g.sub}</div>
                      </div>
                      {gender === g.id && (
                        <div className="w-5 h-5 rounded-full bg-[#ff4f64] flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2 — Mood */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-[#ff4f64] text-[10px] font-mono font-medium tracking-[0.2em] uppercase mb-4">
                  // STEP 2 OF 4
                </p>
                <h1 className="text-3xl font-sans font-medium text-white mb-2 leading-snug">
                  How are you feeling right now?
                </h1>
                <p className="text-white/40 text-[14px] mb-10 leading-relaxed">
                  Be honest. No judgement here. We'll set up your space accordingly.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {moods.map(m => (
                    <button
                      key={m.id}
                      onClick={() => setMood(m.id)}
                      className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                        mood === m.id
                          ? 'border-[#ff4f64]/60 bg-[#ff4f64]/[0.06]'
                          : 'border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className={`text-[14px] font-sans font-semibold mb-1 ${mood === m.id ? 'text-white' : 'text-white/80'}`}>
                        {m.label}
                      </div>
                      <div className="text-[12px] text-white/35 leading-snug">{m.desc}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3 — Interests */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-[#ff4f64] text-[10px] font-mono font-medium tracking-[0.2em] uppercase mb-4">
                  // STEP 3 OF 4
                </p>
                <h1 className="text-3xl font-sans font-medium text-white mb-2 leading-snug">
                  Pick your universes.
                </h1>
                <p className="text-white/40 text-[14px] mb-2 leading-relaxed">
                  These become your rooms. Choose up to 3.
                </p>
                <p className="text-[#ff4f64] text-[11px] font-mono mb-8">
                  {selectedInterests.length}/3 selected
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {interests.map(item => {
                    const isSelected = selectedInterests.includes(item.id);
                    const isDisabled = !isSelected && selectedInterests.length >= 3;
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggleInterest(item.id)}
                        disabled={isDisabled}
                        className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                          isSelected
                            ? 'border-[#ff4f64]/60 bg-[#ff4f64]/[0.06]'
                            : isDisabled
                            ? 'border-white/[0.04] bg-white/[0.01] opacity-40 cursor-not-allowed'
                            : 'border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                        }`}
                      >
                        <div className={`text-[14px] font-sans font-semibold mb-1 flex items-center justify-between ${isSelected ? 'text-white' : 'text-white/80'}`}>
                          {item.label}
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#ff4f64]" strokeWidth={2.5} />}
                        </div>
                        <div className="text-[12px] text-white/35 leading-snug">{item.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 4 — Name */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-[#ff4f64] text-[10px] font-mono font-medium tracking-[0.2em] uppercase mb-4">
                  // STEP 4 OF 4
                </p>
                <h1 className="text-3xl font-sans font-medium text-white mb-2 leading-snug">
                  What should we call you?
                </h1>
                <p className="text-white/40 text-[14px] mb-10 leading-relaxed">
                  This is just for your comfort. You can stay anonymous — no one else sees this.
                </p>

                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-[11px] font-mono text-white/40 uppercase tracking-widest mb-2 block">Your name or alias</label>
                    <input
                      type="text"
                      value={displayName}
                      onChange={e => setDisplayName(e.target.value)}
                      placeholder="e.g. Sarah, moonchild, anon..."
                      className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-white/20 rounded-xl px-4 py-3.5 text-[14px] text-white placeholder:text-white/20 focus:outline-none transition-colors"
                      autoFocus
                    />
                  </div>

                  <button
                    onClick={() => setDisplayName('Anonymous')}
                    className="text-[12px] text-white/30 hover:text-white/50 transition-colors text-left"
                  >
                    → Stay anonymous instead
                  </button>
                </div>

                {/* Summary */}
                <div className="mt-10 border border-white/[0.06] rounded-xl p-5 bg-white/[0.02]">
                  <p className="text-[11px] font-mono text-white/30 uppercase tracking-widest mb-3">Your setup</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-[13px] text-white/60">
                      <span className="text-[#ff4f64]">→</span>
                      <span>{genders.find(g => g.id === gender)?.label}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-white/60">
                      <span className="text-[#ff4f64]">→</span>
                      <span>Feeling {moods.find(m => m.id === mood)?.label.toLowerCase()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-white/60">
                      <span className="text-[#ff4f64]">→</span>
                      <span>Rooms: {selectedInterests.map(i => interests.find(x => x.id === i)?.label).join(', ')}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      {/* Bottom nav bar */}
      <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-white/[0.06] bg-[#050505]/90 backdrop-blur-md px-6 py-4">
        <div className="max-w-[560px] mx-auto flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={back}
              className="flex items-center gap-2 text-[13px] text-white/40 hover:text-white/70 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          ) : (
            <div />
          )}

          {step < TOTAL_STEPS ? (
            <button
              onClick={next}
              disabled={!canNext()}
              className="flex items-center gap-2 bg-[#ff4f64] hover:bg-[#ff3b52] disabled:opacity-30 disabled:cursor-not-allowed text-white text-[13px] font-sans font-semibold px-6 py-2.5 rounded-xl transition-all"
            >
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={finish}
              disabled={loading}
              className="flex items-center gap-2 bg-[#ff4f64] hover:bg-[#ff3b52] disabled:opacity-60 text-white text-[13px] font-sans font-semibold px-6 py-2.5 rounded-xl transition-all"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Building your space...
                </>
              ) : (
                <>Enter Neurome <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
