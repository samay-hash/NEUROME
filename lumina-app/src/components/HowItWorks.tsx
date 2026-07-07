import { motion } from 'motion/react';
import { Plus, X } from 'lucide-react';

const steps = [
  {
    step: '01',
    short: 'VIBE',
    title: 'Pick your interest universe',
    desc: 'Choose your interest worlds — girlhood, football, art, gym, dark humor — whatever you actually are into.',
    active: false,
  },
  {
    step: '02',
    short: 'MOOD',
    title: 'Define your headspace',
    desc: 'Tell us how you feel right now. Anxious? Lonely? Overthinking? Bored? Heartbroken? We\'ve got the right room.',
    active: false,
  },
  {
    step: '03',
    short: 'ENTER',
    title: 'Step into your sanctuary',
    desc: 'A fully personalized space built for your exact vibe + mood combo opens up. Content, tools, comfort — all curated for you.',
    active: true, // Making the 3rd step active to match the screenshot
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-10 overflow-hidden bg-transparent">
      <div className="max-w-[70rem] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-[#ff4f64] text-[10px] font-mono font-medium tracking-[0.2em] uppercase mb-4">
            // HOW IT WORKS
          </p>
          <h2 className="text-3xl md:text-4xl text-white font-sans font-medium mb-6 leading-snug">
            A guided tour of the real experience.
          </h2>
          <p className="text-white/45 text-[15px] leading-relaxed max-w-2xl">
            The preview uses the same dynamic engine shown in the product mockup. Click a step to move the spotlight over the matching part of the flow.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start border border-white/10 rounded-xl bg-[#0a0a0a] overflow-hidden">
          
          {/* Left Column: Image/Mockup container */}
          <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-white/10 p-6 md:p-10 flex items-center justify-center min-h-[400px] bg-transparent">
            <div className="w-full h-full border border-white/10 rounded-lg bg-black/40 relative overflow-hidden flex items-center justify-center">
              <span className="text-white/20 font-mono text-[10px] uppercase tracking-widest">[ Editor Interface Placeholder ]</span>
              
              {/* Fake UI dots to look like an app */}
              <div className="absolute top-4 left-4 flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
            </div>
          </div>

          {/* Right Column: Step List */}
          <div className="lg:col-span-5 flex flex-col">
            {steps.map((step, i) => (
              <div 
                key={step.step}
                className={`flex flex-col px-6 py-6 ${i !== steps.length - 1 ? 'border-b border-white/10' : ''} cursor-pointer hover:bg-white/[0.02] transition-colors`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-white/40 font-mono text-[10px] tracking-widest">{step.step}</span>
                    <div className={`w-[9px] h-[9px] rounded-sm ${step.active ? 'bg-[#ff4f64]' : 'bg-white/20'}`} />
                    <span className={`text-[10px] font-mono tracking-[0.15em] uppercase ${step.active ? 'text-[#ff4f64]' : 'text-[#209f53]'}`}>
                      {step.short}
                    </span>
                  </div>
                  {step.active ? (
                    <X className="w-4 h-4 text-[#ff4f64]" strokeWidth={2} />
                  ) : (
                    <Plus className="w-4 h-4 text-white/40" strokeWidth={2} />
                  )}
                </div>
                
                {step.active && (
                  <div className="pl-14 pt-3 pr-4">
                    <h4 className="text-white font-sans font-medium text-[15px] mb-2">{step.title}</h4>
                    <p className="text-white/45 text-[13px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                )}
                {!step.active && (
                  <div className="pl-14 pt-1">
                    <h4 className="text-white font-sans font-medium text-[15px]">{step.title}</h4>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
