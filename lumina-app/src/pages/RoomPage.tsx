import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Wind, FileText, RefreshCw, Users, Share2, ChevronRight } from 'lucide-react';

const roomData: Record<string, {
  label: string; accent: string; desc: string; vibe: string; online: number;
  quotes: string[]; tips: string[];
}> = {
  anxiety: {
    label: 'Anxiety Room', accent: '#ff4f64',
    desc: 'A pressure-free zone. No solutions. No toxic positivity. Just space to breathe.',
    vibe: 'Calm · Grounding · No pressure',
    online: 12,
    quotes: [
      "You're not broken, you're processing.",
      "Anxiety is just energy with nowhere to go yet.",
      "One breath. That's all you need right now.",
      "You've survived every hard day so far. That's your track record.",
    ],
    tips: ['Try the Calm Orb — 4 minutes of guided breathing', 'Dump everything in your head into Brain Dump', 'Swipe through Reset Cards when you need grounding'],
  },
  midnight: {
    label: 'Midnight Room', accent: '#7c6fff',
    desc: 'Late night thoughts welcome here. No curfew, no judgment, just the quiet hours.',
    vibe: 'Quiet · Reflective · No curfew',
    online: 8,
    quotes: [
      "The night feels heavy sometimes. That's okay.",
      "You don't have to figure everything out tonight.",
      "Rest is resistance. Sleep is sacred.",
      "Tomorrow is a clean page.",
    ],
    tips: ['Put on some ambient audio and just breathe', 'Write what\'s keeping you up in Brain Dump', 'Share this room with someone who needs it'],
  },
  girlhood: {
    label: 'Girlhood Universe', accent: '#ff6fa0',
    desc: 'Soft life, sisterhood, and everything in between. Your space. No apologies.',
    vibe: 'Warm · Soft · Sisterhood',
    online: 21,
    quotes: [
      "You're allowed to take up space.",
      "Softness is not weakness. It takes courage.",
      "You don't have to earn rest.",
      "Girlhood is not a phase, it's a whole universe.",
    ],
    tips: ['Grab a Reset Card for a tiny moment of self-love', 'The Brain Dump is your private journal', 'Share this room with your girls'],
  },
  gym: {
    label: 'Football + Gym', accent: '#ff8c00',
    desc: 'Discipline, grit, and the grind. Your mind needs reps too.',
    vibe: 'Focused · Disciplined · Strong',
    online: 34,
    quotes: [
      "Discipline is choosing what you want most over what you want now.",
      "The gym doesn't care about your mood. Show up anyway.",
      "Recovery is part of the program.",
      "Strong body. Stronger mind.",
    ],
    tips: ['Use the Calm Orb before a big game or heavy lift', 'Reset Cards for when motivation dips', 'Ambient audio for the zone-in session'],
  },
  heartbreak: {
    label: 'Heartbreak Room', accent: '#e05c7a',
    desc: 'For the ones who are mid-feeling. No advice. No "just move on". Just this.',
    vibe: 'Gentle · Honest · No advice',
    online: 6,
    quotes: [
      "Heartbreak is just love with nowhere to go.",
      "You're allowed to grieve something that didn't end perfectly.",
      "Healing isn't linear. You can have good days and bad days.",
      "You don't have to stop caring to start healing.",
    ],
    tips: ['Brain Dump everything — send it into the void', 'Try the Reset Cards — no pressure, just tiny lifts', 'You\'re not alone in here'],
  },
  study: {
    label: 'Study Calm', accent: '#4fc8a0',
    desc: 'Focus without the pressure. Calm concentration, one task at a time.',
    vibe: 'Focused · Quiet · Steady',
    online: 17,
    quotes: [
      "Progress over perfection. Always.",
      "One page. One problem. One breath.",
      "You know more than you think you do.",
      "Consistency beats intensity every time.",
    ],
    tips: ['Ambient audio helps you lock in without distraction', 'Calm Orb for a 4-minute focus reset', 'Brain Dump your anxious thoughts so your mind is clear'],
  },
};

export function RoomPage() {
  const { id = 'anxiety' } = useParams();
  const room = roomData[id] ?? roomData.anxiety;

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Subtle room-colored glow */}
      <div
        className="fixed top-0 left-0 right-0 h-[300px] pointer-events-none z-0"
        style={{ background: `radial-gradient(ellipse at 50% -20%, ${room.accent}12 0%, transparent 70%)` }}
      />

      {/* Topbar */}
      <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-[#050505]/90 backdrop-blur-md">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-[13px] font-sans">Dashboard</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.07] bg-white/[0.02]">
              <Users className="w-3.5 h-3.5 text-white/35" />
              <span className="text-[11px] font-mono text-white/40">{room.online} here</span>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.07] bg-white/[0.02] hover:border-white/15 transition-all text-white/40 hover:text-white">
              <Share2 className="w-3.5 h-3.5" />
              <span className="text-[11px] font-mono">Share</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[900px] mx-auto px-4 sm:px-6 py-10 relative z-10">
        {/* Room header */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-10">
          <p className="text-[10px] font-mono font-medium tracking-[0.2em] uppercase mb-3" style={{ color: room.accent }}>
            // ROOM
          </p>
          <h1 className="text-3xl sm:text-4xl font-sans font-medium text-white mb-3">{room.label}</h1>
          <p className="text-white/45 text-[14px] sm:text-[15px] leading-relaxed max-w-xl mb-3">{room.desc}</p>
          <p className="text-[11px] font-mono text-white/25 uppercase tracking-widest">{room.vibe}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
          {/* Left: quotes + tips */}
          <div className="flex flex-col gap-5">
            {/* Quotes grid */}
            <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
              <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-3">Room Quotes</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.quotes.map((q, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.14 + i * 0.07 }}
                    className="px-5 py-4 rounded-xl border border-white/[0.07] bg-[#0a0a0a] hover:border-white/12 transition-all"
                  >
                    <p className="text-[13px] text-white/70 leading-relaxed italic">"{q}"</p>
                    <div className="mt-3 h-px w-8 rounded-full" style={{ backgroundColor: `${room.accent}60` }} />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Tips */}
            <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.22 }}>
              <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-3">Suggested for you</p>
              <div className="flex flex-col gap-2">
                {room.tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 px-4 py-3.5 rounded-xl border border-white/[0.07] bg-white/[0.02]">
                    <span className="text-[11px] font-mono mt-0.5" style={{ color: room.accent }}>→</span>
                    <p className="text-[13px] text-white/55 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right: quick tools */}
          <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.15 }}>
            <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-3">Room Tools</p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Calm Orb', sub: 'Guided breathing · 4 min', icon: Wind, href: '/tools/calm-orb' },
                { label: 'Brain Dump', sub: 'Private · Clears on exit', icon: FileText, href: '/tools/brain-dump' },
                { label: 'Reset Cards', sub: 'Micro affirmations', icon: RefreshCw, href: '/tools/reset-cards' },
              ].map(tool => (
                <Link
                  key={tool.label}
                  to={tool.href}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl border border-white/[0.07] bg-[#0a0a0a] hover:border-white/14 hover:bg-white/[0.03] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center border" style={{ backgroundColor: `${room.accent}12`, borderColor: `${room.accent}25` }}>
                      <tool.icon className="w-4 h-4" strokeWidth={1.5} style={{ color: room.accent }} />
                    </div>
                    <div>
                      <p className="text-[13px] font-sans font-medium text-white/80">{tool.label}</p>
                      <p className="text-[11px] text-white/30">{tool.sub}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/50 group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}

              {/* Vibe Match CTA */}
              <div className="mt-2 px-4 py-4 rounded-xl border border-white/[0.07] bg-white/[0.02]">
                <p className="text-[12px] font-sans font-medium text-white/70 mb-1">Share this room</p>
                <p className="text-[11px] text-white/30 mb-3 leading-relaxed">Send someone a link to this space. No account needed on their end.</p>
                <button
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-[12px] font-sans font-medium text-white border transition-all hover:opacity-80"
                  style={{ backgroundColor: `${room.accent}20`, borderColor: `${room.accent}30`, color: room.accent }}
                >
                  <Share2 className="w-3.5 h-3.5" /> Copy room link
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
