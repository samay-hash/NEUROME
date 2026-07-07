import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const free = ['All mood rooms access', 'All interest universes', '4 comfort tools', 'Brain dump (private)', 'Calm Orb', 'Tiny reset cards', 'Anonymous note wall', 'Vibe Match room codes', 'Basic themes'];
const premium = [...free, 'Premium room packs', 'Exclusive ambient audio', 'Private vault for notes', 'Curated "Save My Night" packs', 'Dark neon + custom themes', 'Ad-free forever', 'Early access to new rooms'];

export function PricingCTA() {
  return (
    <section id="pricing" className="relative py-12 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div className="max-w-[70rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-[#ff4f64] text-[10px] font-mono font-medium tracking-[0.2em] uppercase mb-4">
            // PRICING
          </p>
          <h2 className="text-3xl md:text-4xl text-white font-sans font-medium leading-snug">
            Free forever. Upgrade if you love it.
          </h2>
          <p className="text-white/45 text-[15px] leading-relaxed mt-4">
            No paywalled mental health tools. Ever.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Free */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-dotted border border-white/10 rounded-2xl p-8 flex flex-col"
          >
            <div className="mb-6">
              <div className="text-xs font-bold text-white/30 uppercase tracking-widest mb-2">Free</div>
              <div className="font-sans text-5xl font-light text-white tracking-wide">₹0</div>
              <div className="text-white/30 text-[11px] font-bold uppercase tracking-widest mt-2">Forever. No card needed.</div>
            </div>
            <ul className="flex flex-col gap-2.5 flex-1 mb-8">
              {free.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-white/55">
                  <Check className="w-4 h-4 text-white/40 shrink-0 mt-0.5" strokeWidth={2.5} />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to="/signup"
              className="w-full text-center glass border border-white/20 hover:bg-white/5 text-white/70 hover:text-white text-[11px] font-bold uppercase tracking-widest py-3 rounded-full transition-all"
            >
              Get started free
            </Link>
          </motion.div>

          {/* Premium */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-dotted border border-white/20 rounded-2xl p-8 flex flex-col relative overflow-hidden bg-white/[0.02]"
          >
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="text-xs font-bold text-white uppercase tracking-widest">Premium</div>
                <span className="text-[9px] font-bold tracking-widest uppercase bg-white text-black rounded-full px-2 py-0.5">Recommended</span>
              </div>
              <div className="font-sans text-5xl font-light text-white tracking-wide">₹99<span className="text-xl text-white/40 font-light">/mo</span></div>
              <div className="text-white/50 text-[11px] font-bold uppercase tracking-widest mt-2">Less than one coffee.</div>
            </div>
            <ul className="flex flex-col gap-2.5 flex-1 mb-8">
              {premium.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" strokeWidth={2.5} />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to="/signup"
              className="w-full text-center bg-white hover:bg-white/90 text-black text-[11px] font-bold uppercase tracking-widest py-3 rounded-full transition-all flex items-center justify-center gap-2"
            >
              Start with Premium <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
