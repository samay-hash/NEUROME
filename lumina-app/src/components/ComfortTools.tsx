import { motion } from 'motion/react';
import { Wind, FileText, RefreshCw, Radio } from 'lucide-react';

const tools = [
  {
    icon: Wind,
    name: 'Calm Orb',
    desc: '60-second guided breathing animation. Inhale, hold, exhale. With optional rain or piano sounds.',
    cta: 'Breathe now',
  },
  {
    icon: FileText,
    name: 'Brain Dump',
    desc: 'Type whatever is stuck in your head. Tag it: anxious, angry, numb, confused. Stored privately. No judgment.',
    cta: 'Start dumping',
  },
  {
    icon: RefreshCw,
    name: 'Tiny Resets',
    desc: 'Quick micro-action cards. Drink water. Wash your face. Do 10 squats. Message one real friend.',
    cta: 'Reset now',
  },
  {
    icon: Radio,
    name: 'Mood Switcher',
    desc: 'Always in your header. Switch your mood anytime — anxious, bored, numb, lonely — and your room updates instantly.',
    cta: 'Try it',
  },
];

export function ComfortTools() {
  return (
    <section id="tools" className="relative py-12 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase mb-3">Comfort tools</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-white leading-tight tracking-wide">
            Not just content. <span className="text-white/70">Tools that help.</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            What turns this from a content site into an actual product. Built for real moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-dotted border border-white/10 rounded-2xl p-6 flex flex-col gap-4 group hover:border-white/30 transition-all duration-200"
            >
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center border border-white/5">
                <tool.icon className="w-5 h-5 text-white/70" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-sans text-sm font-bold tracking-wide uppercase text-white mb-2">{tool.name}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{tool.desc}</p>
              </div>
              <button className="mt-auto text-[11px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors text-left group-hover:text-white/70">
                {tool.cta} →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Save My Night CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 card-dotted border border-white/10 rounded-2xl p-8 md:p-10 text-center flex flex-col items-center gap-4"
        >
          <span className="text-2xl opacity-80">🌙</span>
          <h3 className="font-serif font-light text-2xl md:text-3xl text-white tracking-wide">Tonight is bad?</h3>
          <p className="text-white/45 text-sm max-w-sm leading-relaxed">
            One click opens your emergency comfort pack — breathing orb, calm audio, comfort note, meme, journal box, and a prompt to reach someone real.
          </p>
          <button className="mt-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[11px] tracking-widest uppercase font-bold px-6 py-3 rounded-full transition-all">
            Save my night →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
