import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Do I need an account to use Neurome?",
    answer: "No. You can jump into any mood room, use the breathing orb, and access comfort tools completely anonymously without ever signing up."
  },
  {
    question: "Is Neurome free? Are any features paid?",
    answer: "Neurome is 100% free. We believe that finding a safe space and accessing mental comfort tools shouldn't come with a premium subscription."
  },
  {
    question: "What happens to my Brain Dumps?",
    answer: "Everything you type in the Brain Dump is entirely private. It stays on your device and vanishes when you clear it. We don't save your thoughts to any server."
  },
  {
    question: "Are there any algorithms or feeds?",
    answer: "Zero. Neurome is completely anti-algorithm. There are no engagement feeds, no infinite scroll designed to keep you hooked, and no toxic content recommendations."
  },
  {
    question: "Can I use Neurome on my phone?",
    answer: "Yes! Neurome is fully optimized for mobile devices, so you can access your comfort room anytime, anywhere."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-10 overflow-hidden bg-transparent">
      <div className="max-w-[70rem] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-[#ff4f64] text-[10px] font-mono font-medium tracking-[0.2em] uppercase mb-4">
            // FAQ
          </p>
          <h2 className="text-3xl md:text-4xl text-white font-sans font-medium leading-snug">
            Common questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="border border-white/10 rounded-xl bg-[#0a0a0a] overflow-hidden"
        >
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`border-white/10 ${i !== faqs.length - 1 ? 'border-b' : ''}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-white/90 font-sans text-[15px]">{faq.question}</span>
                  <ChevronDown 
                    className={`w-4 h-4 text-white/40 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                {openIndex === i && (
                  <div className="px-6 pb-6 text-white/50 text-[14px] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
      </div>
    </section>
  );
}
