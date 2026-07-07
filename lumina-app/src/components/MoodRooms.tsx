import { motion } from 'motion/react';
import { Wind, Moon, Laugh, BookOpen, Dumbbell, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const rooms = [
  {
    icon: Wind,
    name: 'Anxiety Room',
    tag: 'MOOD ROOM',
    desc: 'When your head won\'t stop. Breathing orbs, brain dumps, grounding tools, comfort notes, and calming micro-reads.',
    gradient: 'from-white/5 to-transparent',
    border: 'border-white/10',
    iconBg: 'bg-white/5',
    iconColor: 'text-white/70',
    chips: ['Calm orb', 'Brain dump', 'Grounding'],
  },
  {
    icon: Moon,
    name: 'Midnight Room',
    tag: 'MOOD ROOM',
    desc: 'Late night loneliness. Heartbreak notes, don\'t text them button, anonymous note wall, dark dreamy ambience.',
    gradient: 'from-white/5 to-transparent',
    border: 'border-white/10',
    iconBg: 'bg-white/5',
    iconColor: 'text-white/70',
    chips: ['Night vibes', 'Vent box', 'Late-night reads'],
  },
  {
    icon: Laugh,
    name: 'Laugh Room',
    tag: 'MOOD ROOM',
    desc: 'Meme wall. Absurd polls. Dark humor. Chaotic internet energy. For when you just need to not think for a second.',
    gradient: 'from-white/5 to-transparent',
    border: 'border-white/10',
    iconBg: 'bg-white/5',
    iconColor: 'text-white/70',
    chips: ['Memes', 'Polls', 'Dark humor'],
  },
];

const universes = [
  { icon: BookOpen, name: 'Girlhood' },
  { icon: '⚽', name: 'Football' },
  { icon: '🎨', name: 'Art & Sketch' },
  { icon: Dumbbell, name: 'Gym' },
  { icon: Car, name: 'Cars' },
  { icon: '🌑', name: 'Dark Humor' },
];

export function MoodRooms() {
  return (
    <section id="rooms" className="relative py-12 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Mood Rooms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase mb-3">Mood rooms</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-white leading-tight tracking-wide">
            Built around how you feel
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Every room is curated for a specific headspace. Not generic. Not preachy. Just what you need right now.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-28">
          {rooms.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative rounded-2xl border border-white/5 p-6 flex flex-col gap-4 overflow-hidden group hover:border-white/20 transition-all duration-300 card-dotted"
            >
              <div className={`w-11 h-11 rounded-xl ${room.iconBg} border border-white/5 flex items-center justify-center`}>
                <room.icon className={`w-5 h-5 ${room.iconColor}`} strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase">{room.tag}</span>
                <h3 className="font-serif font-light text-xl text-white mt-1 mb-2">{room.name}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{room.desc}</p>
              </div>
              <div className="flex gap-2 flex-wrap mt-1">
                {room.chips.map((c) => (
                  <span key={c} className="text-[11px] text-white/40 border border-white/10 bg-white/5 rounded-full px-3 py-1">{c}</span>
                ))}
              </div>
              <Link
                to="/onboarding"
                className="mt-auto text-xs text-white/40 hover:text-white transition-colors flex items-center gap-1 group-hover:text-white/70"
              >
                Enter room →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Interest Universes */}
        <motion.div
          id="universes"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase mb-3">Interest universes</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-white leading-tight tracking-wide">
            Your world. Your identity.
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Content worlds built around who you actually are — not categories, but universes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {universes.map((u, i) => (
            <motion.div
              key={u.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="card-dotted border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-3 text-center cursor-pointer hover:border-white/30 transition-all duration-200"
            >
              {typeof u.icon === 'string' ? (
                <span className="text-2xl opacity-80">{u.icon}</span>
              ) : (
                <u.icon className="w-6 h-6 text-white/70" strokeWidth={1.5} />
              )}
              <span className="text-sm font-medium text-white/70">{u.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
