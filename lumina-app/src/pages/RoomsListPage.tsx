import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Users } from 'lucide-react';

const rooms = [
  { id: 'anxiety',    label: 'Anxiety Room',      accent: '#ff4f64', online: 12, desc: 'A pressure-free zone. No solutions, just space.',           joined: true  },
  { id: 'midnight',   label: 'Midnight Room',      accent: '#7c6fff', online: 8,  desc: 'Late night thoughts. No curfew, no judgment.',             joined: true  },
  { id: 'girlhood',   label: 'Girlhood Universe',  accent: '#ff6fa0', online: 21, desc: 'Soft life, sisterhood, and everything in between.',        joined: true  },
  { id: 'gym',        label: 'Football + Gym',      accent: '#ff8c00', online: 34, desc: 'Discipline, grit, and the grind. Your mind needs reps too.', joined: false },
  { id: 'heartbreak', label: 'Heartbreak Room',     accent: '#e05c7a', online: 6,  desc: 'For the ones who are mid-feeling. No advice.',             joined: false },
  { id: 'study',      label: 'Study Calm',          accent: '#4fc8a0', online: 17, desc: 'Focus without pressure. Calm concentration.',              joined: false },
];

export function RoomsListPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-[#050505]/90 backdrop-blur-md">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 h-14 flex items-center gap-4">
          <Link to="/dashboard" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /><span className="text-[13px]">Dashboard</span>
          </Link>
        </div>
      </header>

      <main className="max-w-[900px] mx-auto px-4 sm:px-6 py-10">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <p className="text-[#ff4f64] text-[10px] font-mono tracking-[0.2em] uppercase mb-3">// ALL ROOMS</p>
          <h1 className="text-3xl font-sans font-medium text-white mb-2">Every universe, open to you.</h1>
          <p className="text-white/40 text-[14px]">Pick a room that fits where you are right now.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={`/room/${room.id}`}
                className="block p-5 rounded-xl border border-white/[0.07] bg-[#0a0a0a] hover:border-white/15 transition-all group h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: room.accent }} />
                  <div className="flex items-center gap-1.5 text-white/30">
                    <Users className="w-3 h-3" />
                    <span className="text-[10px] font-mono">{room.online} online</span>
                  </div>
                </div>
                <p className="text-[14px] font-sans font-medium text-white mb-1.5">{room.label}</p>
                <p className="text-[12px] text-white/40 leading-relaxed mb-3">{room.desc}</p>
                {room.joined && (
                  <span
                    className="inline-block text-[9px] font-mono px-2 py-0.5 rounded-md"
                    style={{ color: room.accent, backgroundColor: `${room.accent}15`, border: `1px solid ${room.accent}25` }}
                  >
                    JOINED
                  </span>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
