import { motion } from 'motion/react';
import { Wind, Moon, MessageCircle, Music } from 'lucide-react';

const steps = [
  { id: '01', title: 'FIND YOUR VIBE', active: true },
  { id: '02', title: 'TUNE YOUR MOOD', active: false },
  { id: '03', title: 'ENTER YOUR ROOM', active: false },
];

const useCases = [
  {
    icon: Moon,
    tag: '3:00 AM / LATE NIGHT',
    title: 'Late night overthinking',
    desc: 'When everyone else is asleep but your brain refuses to shut off. Open the Midnight Room for comfort notes and a zero-pressure environment.',
  },
  {
    icon: Wind,
    tag: 'ANXIETY / PANIC',
    title: 'Mid-day panic',
    desc: 'Breathe through it without leaving your desk. The Anxiety Room provides instant grounding tools and a 60-second calm orb.',
  },
  {
    icon: MessageCircle,
    tag: 'VENTING / NO JUDGMENT',
    title: 'Screaming into the void',
    desc: 'Type exactly what you are feeling into the Brain Dump, tag it, and let it go. No comments, no likes, just release.',
  },
  {
    icon: Music,
    tag: 'FOCUS / CHILL',
    title: 'Vibe zoning',
    desc: 'Need to get work done or just chill? Pick your Interest Universe, let the ambient audio sync, and fall into a flow state.',
  },
];

export function UseCasesSection() {
  return (
    <section className="relative py-24 px-6 sm:px-8 lg:px-20 overflow-hidden bg-transparent">
      <div className="max-w-[65rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
        
        {/* Left Column */}
        <div className="lg:col-span-5 lg:pr-8 flex flex-col h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#ff4f64] text-[10px] font-mono font-medium tracking-[0.2em] uppercase mb-4">
              // USE CASES
            </p>
            <h2 className="text-3xl md:text-4xl text-white font-sans font-medium mb-6 leading-snug">
              Made for the moments that keep coming back.
            </h2>
            <p className="text-white/45 text-[15px] leading-relaxed mb-10">
              Neurome keeps the mental friction low: choose your current headspace, let the environment adapt to you, grab the comfort tool you need, and breathe.
            </p>
          </motion.div>

          {/* Interactive Steps List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="border border-white/10 rounded-xl overflow-hidden bg-[#0a0a0a]"
          >
            {steps.map((step, i) => (
              <div 
                key={step.id} 
                className={`flex items-center justify-between px-6 py-5 ${i !== steps.length - 1 ? 'border-b border-white/10' : ''}`}
              >
                <div className="flex items-center gap-4">
                  {step.active ? (
                    <div className="w-[18px] h-[18px] text-[#ff4f64]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                      </svg>
                    </div>
                  ) : (
                    <div className="w-[18px] h-[18px] text-[#ff4f64]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14"/>
                      </svg>
                    </div>
                  )}
                  <span className={`text-[11px] font-mono tracking-[0.15em] uppercase ${step.active ? 'text-white' : 'text-white/40'}`}>
                    {step.title}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-white/30 tracking-widest">{step.id}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: 2x2 Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {useCases.map((uc, i) => {
            const glowColor = i === 0 ? '#7c6fff' : i === 1 ? '#ff4f64' : i === 2 ? '#4fc8a0' : '#ff8c00';
            
            return (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-xl p-7 flex flex-col gap-10 overflow-hidden border border-white/[0.08] hover:border-white/20 transition-all duration-500"
              >
                {/* Background base */}
                <div className="absolute inset-0 bg-[#0a0a0a] z-0" />
                
                {/* Subtle dynamic glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
                  style={{ 
                    background: `radial-gradient(circle at 100% 100%, ${glowColor}15 0%, transparent 70%)` 
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10 flex items-start justify-between">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/5 bg-white/[0.02] transition-colors duration-500"
                    style={{ color: glowColor }}
                  >
                    <uc.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-white/20 text-[9px] font-mono uppercase tracking-[0.2em]">{uc.tag}</span>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-white text-[15px] font-sans font-medium mb-3 group-hover:text-white transition-colors">
                    {uc.title}
                  </h3>
                  <p className="text-white/45 text-[13px] leading-relaxed group-hover:text-white/60 transition-colors">
                    {uc.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
