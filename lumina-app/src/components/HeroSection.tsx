import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

const moodChips = [
  { label: 'Anxious', color: 'glass-purple' },
  { label: 'Overthinking', color: 'glass-blue' },
  { label: 'Lonely', color: 'glass-pink' },
  { label: 'Bored', color: 'glass-purple' },
  { label: 'Heartbroken', color: 'glass-pink' },
  { label: 'Low motivation', color: 'glass-blue' },
  { label: 'Can\'t sleep', color: 'glass-purple' },
  { label: 'Need calm', color: 'glass-blue' },
  { label: 'Need fun', color: 'glass-pink' },
  { label: 'Numb', color: 'glass-blue' },
];

const floatingChips = [
  { label: '😮‍💨 Overthinking', delay: 0, x: '-5%', y: '30%' },
  { label: '🌙 Midnight feels', delay: 0.3, x: '75%', y: '20%' },
  { label: '💜 Girlhood room', delay: 0.6, x: '10%', y: '70%' },
  { label: '⚽ Football vibe', delay: 0.9, x: '70%', y: '65%' },
  { label: '🎨 Sketch zone', delay: 0.4, x: '40%', y: '78%' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16">
      {/* Background blobs */}
      <div className="blob w-[600px] h-[600px] bg-purple-600/20 top-[-100px] left-[-200px] opacity-60" />
      <div className="blob w-[500px] h-[500px] bg-pink-500/15 bottom-[0px] right-[-150px] opacity-50" />
      <div className="blob w-[300px] h-[300px] bg-blue-500/15 top-[40%] right-[20%] opacity-40" />

      {/* Floating mood chips */}
      {floatingChips.map((chip) => (
        <motion.div
          key={chip.label}
          className="absolute hidden lg:flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-white/60 border border-white/10 z-10 select-none"
          style={{ left: chip.x, top: chip.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: chip.delay + 1, duration: 0.5 },
            scale: { delay: chip.delay + 1, duration: 0.5 },
            y: { delay: chip.delay + 1.5, duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          {chip.label}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-purple-300 mb-8 border border-purple-500/20"
        >
          <Sparkles className="w-3 h-3" />
          <span>Your mood has a room here</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-syne text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.0] tracking-tight mb-6"
        >
          A place to land
          <br />
          <span className="gradient-text text-glow-purple">when your mind</span>
          <br />
          is too loud.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg text-white/50 max-w-xl leading-relaxed mb-10"
        >
          Choose your vibe, pick your mood, enter your personalized room. Comfort, chaos, girlhood, football, midnight thoughts — all in one place.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            to="/onboarding"
            className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
          >
            Find your room
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/signup"
            className="flex items-center gap-2 glass border border-white/10 hover:border-purple-500/30 text-white/70 hover:text-white text-sm font-medium px-7 py-3.5 rounded-full transition-all duration-200"
          >
            Explore first →
          </Link>
        </motion.div>

        {/* Mood scroll strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="w-full mt-16 overflow-hidden"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <div className="flex gap-3 w-max animate-marquee-left">
            {[...moodChips, ...moodChips].map((chip, i) => (
              <div
                key={i}
                className={`${chip.color} shrink-0 rounded-full px-4 py-1.5 text-xs text-white/60 border border-white/10 whitespace-nowrap`}
              >
                {chip.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
