import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Play, Pause, Volume2 } from 'lucide-react';

const tracks = [
  { id: 'rain',   label: 'Soft Rain',       desc: 'Consistent, soothing rainfall',  color: '#7c6fff' },
  { id: 'cafe',   label: 'Café Noise',       desc: 'Gentle background chatter',      color: '#ff8c00' },
  { id: 'forest', label: 'Forest at Dawn',   desc: 'Birds, wind, soft rustling',     color: '#4fc8a0' },
  { id: 'ocean',  label: 'Ocean Waves',      desc: 'Rhythmic tide on a quiet beach', color: '#4fa0ff' },
  { id: 'night',  label: 'Late Night Lo-Fi', desc: 'Mellow beats, soft keys',        color: '#ff6fa0' },
  { id: 'white',  label: 'White Noise',      desc: 'Pure, clean background hum',     color: '#aaaaaa' },
];

export function AmbientAudioPage() {
  const [playing, setPlaying] = useState<string | null>(null);
  const [volume, setVolume] = useState(70);

  const toggle = (id: string) => setPlaying(p => p === id ? null : id);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-[#050505]/90 backdrop-blur-md">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /><span className="text-[13px]">Back</span>
          </Link>
          {playing && (
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#ff4f64]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4f64] animate-pulse" />
              Now playing
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 max-w-[700px] mx-auto w-full px-4 sm:px-6 py-10">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <p className="text-[#ff4f64] text-[10px] font-mono tracking-[0.2em] uppercase mb-3">// AMBIENT AUDIO</p>
          <h1 className="text-2xl sm:text-3xl font-sans font-medium text-white mb-2">Find your sound.</h1>
          <p className="text-white/40 text-[13px]">Background audio to help you focus, relax, or drift.</p>
        </motion.div>

        {/* Volume control */}
        <div className="flex items-center gap-3 mb-8 px-4 py-3 rounded-xl border border-white/[0.07] bg-white/[0.02]">
          <Volume2 className="w-4 h-4 text-white/30 shrink-0" />
          <input
            type="range" min={0} max={100} value={volume}
            onChange={e => setVolume(Number(e.target.value))}
            className="flex-1 h-1 accent-[#ff4f64] cursor-pointer"
          />
          <span className="text-[11px] font-mono text-white/30 w-8 text-right">{volume}%</span>
        </div>

        {/* Tracks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {tracks.map((t, i) => {
            const isPlaying = playing === t.id;
            return (
              <motion.button
                key={t.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => toggle(t.id)}
                className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border transition-all text-left ${
                  isPlaying
                    ? 'border-white/15 bg-white/[0.04]'
                    : 'border-white/[0.07] bg-[#0a0a0a] hover:border-white/12 hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center border" style={{ backgroundColor: `${t.color}12`, borderColor: `${t.color}25` }}>
                    {isPlaying
                      ? <Pause className="w-4 h-4" style={{ color: t.color }} />
                      : <Play className="w-4 h-4 ml-0.5" style={{ color: t.color }} />
                    }
                  </div>
                  <div>
                    <p className="text-[13px] font-sans font-medium text-white/85">{t.label}</p>
                    <p className="text-[11px] text-white/35">{t.desc}</p>
                  </div>
                </div>
                {isPlaying && (
                  <div className="flex gap-0.5 items-end h-5 shrink-0">
                    {[3, 5, 4, 6, 3].map((h, idx) => (
                      <motion.div
                        key={idx}
                        className="w-0.5 rounded-full"
                        style={{ backgroundColor: t.color }}
                        animate={{ height: [h, h + 4, h] }}
                        transition={{ repeat: Infinity, duration: 0.6 + idx * 0.1, ease: 'easeInOut' }}
                      />
                    ))}
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        <p className="text-[12px] text-white/20 text-center mt-8">Audio is simulated in this demo. Real tracks coming soon.</p>
      </main>
    </div>
  );
}
