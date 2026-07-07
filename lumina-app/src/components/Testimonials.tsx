import { motion } from 'motion/react';

const quotes = [
  { text: "finally a place where i can just be anxious without being told to meditate for 30 days or see a therapist lol", tag: 'Girlhood universe user', name: 'Sarah' },
  { text: "the midnight room literally saved me from texting my ex at 2am. 10/10 would not recommend testing it but it works", tag: 'Heartbreak room user', name: 'Alex' },
  { text: "sent my room code to my situationship. we're vibing. no cap.", tag: 'Vibe Match user', name: 'Jay' },
  { text: "bro the gym universe just hits different. discipline edits + stoic quotes + a calm orb when i'm spiraling. perfect combo.", tag: 'Football + Gym user', name: 'Chris' },
  { text: "it's not trying to fix me. it's just... with me. that's actually all i needed.", tag: 'Anxiety room user', name: 'Mia' },
  { text: "the brain dump box is carrying my entire second semester of college", tag: 'Study calm user', name: 'Sam' },
];

export function Testimonials() {
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
            // TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl text-white font-sans font-medium mb-6 leading-snug">
            Real people. Real moments.
          </h2>
          <p className="text-white/45 text-[15px] leading-relaxed">
            Neurome isn't just a platform—it's a sanctuary for thousands finding their peace in the chaos. Here's what they have to say.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-dotted border border-white/10 rounded-xl p-7 bg-[#0a0a0a] flex flex-col gap-4 hover:border-white/20 transition-colors"
            >
              <span className="text-[#ff4f64] font-sans font-bold text-sm tracking-wide">{q.name}</span>
              <p className="text-white/70 text-[14px] leading-relaxed flex-1">"{q.text}"</p>
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/30 pt-4 border-t border-white/5">
                — {q.tag}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
