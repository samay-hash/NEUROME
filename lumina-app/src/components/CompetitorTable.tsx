import { motion } from 'motion/react';
import { CheckCircle2, Minus } from 'lucide-react';

const competitors = [
  {
    id: 'reddit',
    name: 'Reddit',
    desc: 'The closest match — raw, anonymous communities. Strong tool, but algorithms push negativity and it lacks built-in comfort tools.',
    neuromeWin: 'Neurome keeps the mental health workflow lean: curated mood rooms, zero toxic algorithms, and integrated tools without a subscription meter.'
  },
  {
    id: 'headspace',
    name: 'Headspace',
    desc: 'A polished app with guided meditations, sleepcasts, and mindfulness courses. The catch: almost everything is behind a paywall.',
    neuromeWin: 'Neurome gives the daily comfort workflow room to breathe: breathing orbs, brain dumps, and mood spaces are part of the free product.'
  },
  {
    id: 'twitter',
    name: 'Twitter / X',
    desc: 'Beautiful for quick thoughts and finding niches, but it is built around an engagement algorithm and does not offer true safe spaces.',
    neuromeWin: 'Neurome is the lighter, faster lane for mental reset: anonymous vent walls, mood-based rooms, and no algorithmic anxiety.'
  }
];

const rows = [
  { feature: 'Free premium tools', neurome: true, reddit: false, headspace: false, twitter: false },
  { feature: 'Mood-based rooms', neurome: true, reddit: false, headspace: false, twitter: false },
  { feature: 'Algorithmic feed', neurome: false, reddit: true, headspace: false, twitter: true }, // Neurome is 'No' which is good, but let's rephrase to 'Zero algorithmic noise'
  { feature: 'Zero algorithmic noise', neurome: true, reddit: false, headspace: true, twitter: false },
  { feature: 'Built-in comfort tools', neurome: true, reddit: false, headspace: true, twitter: false },
  { feature: 'Anonymous venting', neurome: true, reddit: true, headspace: false, twitter: true },
  { feature: 'Open source', neurome: true, reddit: false, headspace: false, twitter: false },
];

export function CompetitorTable() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div className="max-w-[70rem] mx-auto">
        
        {/* Header section matching Tokokino */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-[#ff4f64] text-[10px] font-mono font-medium tracking-[0.2em] uppercase mb-4">
            // COMPARISON
          </p>
          <h2 className="text-3xl md:text-4xl text-white font-sans font-medium mb-6 leading-snug">
            The safe space that does not turn every useful feature into a premium upgrade.
          </h2>
          <p className="text-white/45 text-[15px] leading-relaxed">
            Reddit, Headspace, and Twitter all make good platforms. Neurome is built for the part that should stay effortless: find your people, tune your environment, vent your thoughts, and access comfort without a subscription.
          </p>
        </motion.div>

        {/* Versus Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6"
        >
          {competitors.map((comp) => (
            <div key={comp.id} className="border border-white/10 rounded-xl overflow-hidden flex flex-col bg-[#0a0a0a]">
              <div className="p-6 pb-12">
                <h3 className="text-white/40 text-[10px] uppercase font-mono tracking-widest mb-4">Versus {comp.name}</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  {comp.desc}
                </p>
              </div>
              <div className="p-6 bg-[#ff4f64]/[0.03] border-t border-[#ff4f64]/10 mt-auto">
                <h4 className="text-[#ff4f64] text-[10px] uppercase font-mono tracking-widest mb-4">Neurome</h4>
                <p className="text-white/90 text-[13px] leading-relaxed">
                  {comp.neuromeWin}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="border border-white/10 rounded-xl overflow-hidden bg-[#0a0a0a]"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-5 text-white/30 font-mono text-[10px] uppercase tracking-widest w-[280px] font-normal">Feature</th>
                  <th className="px-6 py-5 text-center text-[#ff4f64] font-mono text-[10px] uppercase tracking-widest bg-[#ff4f64]/5 font-normal">Neurome</th>
                  <th className="px-6 py-5 text-center text-white/30 font-mono text-[10px] uppercase tracking-widest font-normal">Reddit</th>
                  <th className="px-6 py-5 text-center text-white/30 font-mono text-[10px] uppercase tracking-widest font-normal">Headspace</th>
                  <th className="px-6 py-5 text-center text-white/30 font-mono text-[10px] uppercase tracking-widest font-normal">Twitter / X</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-white/5 ${i === rows.length - 1 ? 'border-b-0' : ''}`}>
                    <td className="px-6 py-4 text-white/80 text-[13px]">{row.feature}</td>
                    
                    {/* Neurome Column */}
                    <td className="px-6 py-4 text-center bg-[#ff4f64]/5">
                      <div className="flex justify-center">
                        <CheckCircle2 className="w-4 h-4 text-[#ff4f64]" strokeWidth={2.5} />
                      </div>
                    </td>
                    
                    {/* Reddit Column */}
                    <td className="px-6 py-4 text-center">
                      <span className="text-white/30 text-[10px] font-mono uppercase tracking-widest">
                        {row.reddit ? <CheckCircle2 className="w-4 h-4 text-white/40 mx-auto" /> : '— N/A'}
                      </span>
                    </td>
                    
                    {/* Headspace Column */}
                    <td className="px-6 py-4 text-center">
                      <span className="text-white/30 text-[10px] font-mono uppercase tracking-widest">
                        {row.headspace ? <CheckCircle2 className="w-4 h-4 text-white/40 mx-auto" /> : '— PAID'}
                      </span>
                    </td>
                    
                    {/* Twitter Column */}
                    <td className="px-6 py-4 text-center">
                      <span className="text-white/30 text-[10px] font-mono uppercase tracking-widest">
                        {row.twitter ? <CheckCircle2 className="w-4 h-4 text-white/40 mx-auto" /> : '— N/A'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
