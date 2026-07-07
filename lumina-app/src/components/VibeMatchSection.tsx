import { motion } from 'motion/react';
import { Hash, Users, Share2, ArrowRight, Heart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const matchPairs = [
  { user1: { name: 'Aanya', mood: '😔 Heartbroken', vibe: 'Girlhood' }, user2: { name: 'Riya', mood: '🌙 Midnight feels', vibe: 'Dark humor' }, code: 'NEST-4829', matched: true },
  { user1: { name: 'Arjun', mood: '😤 Low motivation', vibe: 'Gym' }, user2: { name: 'Dev', mood: '😵 Overthinking', vibe: 'Football' }, code: 'NEST-1173', matched: true },
];

export function VibeMatchSection() {
  return (
    <section id="vibe-match" className="relative py-28 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-white/70 mb-6 w-fit border border-white/10">
              <Heart className="w-3 h-3 text-white/50" />
              <span className="tracking-widest uppercase font-bold text-[10px]">Vibe Match — Room Share</span>
            </div>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-white leading-tight tracking-wide mb-5">
              Share a room with<br />
              <span className="text-white/70">someone who gets it.</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8 max-w-md">
              Generate a room code and share it with anyone — a friend, a crush, a stranger you vibe with. Enter the same room, discover if your moods and vibes match. No pressure. Just connection.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {[
                { icon: Hash, title: 'Generate a room code', desc: 'One click creates a private, shareable room code.' },
                { icon: Share2, title: 'Share it with anyone', desc: 'Send the code to a friend, a match, or post it publicly.' },
                { icon: Users, title: 'See if vibes match', desc: 'Enter the same space and explore your compatibility.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="flex gap-3 items-start"
                >
                  <div className="w-9 h-9 rounded-lg glass flex items-center justify-center shrink-0 mt-0.5 border border-white/5">
                    <item.icon className="w-4 h-4 text-white/60" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-sm font-sans font-bold tracking-wide uppercase text-white/90 mb-0.5">{item.title}</div>
                    <div className="text-xs text-white/40 leading-relaxed">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/signup"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs tracking-widest uppercase font-bold px-6 py-3 rounded-full transition-all"
            >
              Try Vibe Match <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right — visual mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            {/* Room code generator card */}
            <div className="card-dotted border border-white/10 rounded-2xl p-6">
              <div className="text-xs text-white/40 uppercase tracking-widest mb-3 font-bold">Your room code</div>
              <div className="flex items-center gap-4">
                <div className="font-sans text-3xl font-bold text-white tracking-widest">NEST-7742</div>
                <button className="text-xs glass text-white/70 rounded-lg px-3 py-1.5 border border-white/10 hover:bg-white/10 transition-colors uppercase tracking-wider font-bold">
                  Copy
                </button>
                <button className="flex items-center gap-1 text-xs glass text-white/70 rounded-lg px-3 py-1.5 border border-white/10 hover:bg-white/10 transition-colors uppercase tracking-wider font-bold">
                  <Share2 className="w-3 h-3" /> Share
                </button>
              </div>
              <div className="mt-4 text-[11px] uppercase tracking-wider font-bold text-white/30 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
                Waiting for someone to join…
              </div>
            </div>

            {/* Match result cards */}
            {matchPairs.map((pair, i) => (
              <motion.div
                key={pair.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                className="card-dotted border border-white/10 rounded-2xl p-5"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-white/30">{pair.code}</span>
                  <span className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-white/60">
                    <Zap className="w-3 h-3" /> Vibe matched!
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[pair.user1, pair.user2].map((user, j) => (
                    <div key={j} className="card-dotted rounded-xl p-3 border border-white/5">
                      <div className="text-xs font-bold uppercase tracking-wider text-white/80 mb-2">{user.name}</div>
                      <div className="text-[11px] text-white/50 mb-1">{user.mood}</div>
                      <div className="text-[10px] text-white/30">{user.vibe}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
