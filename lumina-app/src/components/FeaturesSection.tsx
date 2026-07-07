import { motion } from 'motion/react';
import { Wind, Moon, Laugh, FileText, RefreshCw, Radio, Globe, Headphones } from 'lucide-react';

const features = [
  {
    icon: Wind,
    name: 'Anxiety Room',
    desc: 'When your head won\'t stop. Breathing orbs, brain dumps, grounding tools, comfort notes, and calming micro-reads.',
  },
  {
    icon: Moon,
    name: 'Midnight Room',
    desc: 'Late night loneliness. Heartbreak notes, don\'t text them button, anonymous note wall, dark dreamy ambience.',
  },
  {
    icon: Laugh,
    name: 'Laugh Room',
    desc: 'Meme wall. Absurd polls. Dark humor. Chaotic internet energy. For when you just need to not think for a second.',
  },
  {
    icon: Wind,
    name: 'Calm Orb',
    desc: '60-second guided breathing animation. Inhale, hold, exhale. With optional rain or piano sounds.',
  },
  {
    icon: FileText,
    name: 'Brain Dump',
    desc: 'Type whatever is stuck in your head. Tag it: anxious, angry, numb, confused. Stored privately. No judgment.',
  },
  {
    icon: RefreshCw,
    name: 'Tiny Resets',
    desc: 'Quick micro-action cards. Drink water. Wash your face. Do 10 squats. Message one real friend.',
  },
  {
    icon: Radio,
    name: 'Mood Switcher',
    desc: 'Always in your header. Switch your mood anytime — anxious, bored, numb, lonely — and your room updates instantly.',
  },
  {
    icon: Globe,
    name: 'Interest Universes',
    desc: 'Girlhood, football, art, gym, dark humor — content worlds built around who you actually are, not generic categories.',
  },
  {
    icon: Headphones,
    name: 'Vibe Sync',
    desc: 'Ambient audio and visual themes that automatically shift based on the mood room you enter. No manual tuning required.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-12 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-[#ff4f64] text-[10px] font-mono font-medium tracking-[0.2em] uppercase mb-4">
            // FEATURES
          </p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-white leading-tight tracking-wide">
            Everything you need.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card-dotted border border-white/10 rounded-2xl p-7 flex flex-col gap-4 group hover:border-white/20 transition-all duration-300"
            >
              <div className="mb-4">
                <feature.icon className="w-[18px] h-[18px] text-[#ff4f64]" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-sans text-sm font-bold tracking-wide text-white mb-2">{feature.name}</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
