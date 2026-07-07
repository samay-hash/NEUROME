import { motion } from 'motion/react';
import { Music2, MessageCircle, Hash, Video, Camera } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { PortfolioSection } from '../PortfolioSection';
import { UseCasesSection } from '../UseCasesSection';
import { HowItWorks } from '../components/HowItWorks';
import { FeaturesSection } from '../components/FeaturesSection';
import { CompetitorTable } from '../components/CompetitorTable';
import { Testimonials } from '../components/Testimonials';
import { FaqSection } from '../components/FaqSection';
import { PricingCTA } from '../components/PricingCTA';
import { LastCallCTA } from '../components/LastCallCTA';
import { Footer } from '../components/Footer';
import { TwinklingGrid } from '../components/TwinklingGrid';

export function LandingPage() {
  return (
    <div className="min-h-screen relative bg-[#050505]">
      <TwinklingGrid />
      <Navbar />
      
      {/* Lumina Hero Section */}
      <main className="relative w-full min-h-[115vh] overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[0]"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260525_052706_d2e390fd-1846-4fe7-a4d8-8d2f1c875358.mp4"
        />
        {/* Gradient blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 bg-gradient-to-t from-[#08080f] via-[#08080f]/80 to-transparent z-[1] pointer-events-none" />
        <div className="z-10 w-full max-w-7xl flex flex-col min-h-screen px-4 md:px-8 pb-10">
          <div className="flex-1 flex flex-col justify-start pt-40 md:pt-60 items-center">
            {/* Neurome Presents with decorative lines */}
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-12 h-[0.5px] bg-white/30" />
              <p className="font-orbitron text-white/60 uppercase tracking-[0.5em] text-[9px] md:text-[11px] font-light">
                Neurome Presents
              </p>
              <div className="w-12 h-[0.5px] bg-white/30" />
            </motion.div>

            <h1 
              className="text-center drop-shadow-2xl"
              style={{ letterSpacing: '0.18em' }}
            >
              <motion.span
                initial={{ opacity: 0, filter: 'blur(12px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="block text-4xl md:text-7xl lg:text-[82px] text-white font-orbitron font-extralight text-shimmer"
              >
                FIND YOUR SPACE
              </motion.span>
              
              {/* Dust particle letter animation */}
              <span className="block mt-3 tracking-[0.15em] flex justify-center flex-wrap">
                {'WHEN YOUR MIND IS TOO LOUD'.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      opacity: 0,
                      y: (Math.random() - 0.5) * 80,
                      x: (Math.random() - 0.5) * 60,
                      filter: 'blur(8px)',
                      scale: 0.3,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      x: 0,
                      filter: 'blur(0px)',
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 1.2 + i * 0.04,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="text-lg md:text-2xl lg:text-3xl text-white font-orbitron font-extralight inline-block"
                    style={{ minWidth: char === ' ' ? '0.5em' : undefined }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>
          
          <motion.footer
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="w-full px-8 md:px-12 py-10 mt-32 md:mt-64 text-white/90 z-10 relative rounded-3xl bg-black/30 backdrop-blur-md border border-white/10 shadow-2xl"
            style={{
              backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.6) 1.5px, transparent 1.5px)',
              backgroundSize: '12px 12px'
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-10">
              <div className="md:col-span-5">
                <div className="flex items-center gap-3 text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M 4.688 136 C 68.373 136 120 187.627 120 251.312 C 120 252.883 119.967 254.445 119.905 256 L 0 256 L 0 136.096 C 1.555 136.034 3.117 136 4.688 136 Z M 251.312 136 C 252.883 136 254.445 136.034 256 136.096 L 256 256 L 136.095 256 C 136.032 254.438 136.001 252.875 136 251.312 C 136 187.627 187.627 136 251.312 136 Z M 119.905 0 C 119.967 1.555 120 3.117 120 4.688 C 120 68.373 68.373 120 4.687 120 C 3.117 120 1.555 119.967 0 119.905 L 0 0 Z M 256 119.905 C 254.445 119.967 252.883 120 251.312 120 C 187.627 120 136 68.373 136 4.687 C 136 3.117 136.033 1.555 136.095 0 L 256 0 Z" />
                  </svg>
                  <span className="font-orbitron text-lg font-light tracking-[0.15em]">NEUROME</span>
                </div>
                <p className="font-orbitron text-xs font-extralight leading-relaxed max-w-sm tracking-wide text-white/60">
                  Neurome provides a safe space when your mind is too loud. Comfort, chaos, girlhood, football, midnight thoughts - shared with all for free.
                </p>
              </div>

              <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-orbitron text-[10px] uppercase tracking-[0.2em] text-white font-light mb-4">Discover</h3>
                  <ul className="text-xs space-y-2 flex flex-col"> 
                    {['Mood Rooms', 'Interest Universes', 'Comfort Tools', 'Premium Packs'].map((link) => (
                      <a key={link} href="#" className="font-orbitron text-[10px] font-extralight tracking-wide hover:text-white transition-colors">{link}</a>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-orbitron text-[10px] uppercase tracking-[0.2em] text-white font-light mb-4">The Mission</h3>
                  <ul className="text-xs space-y-2 flex flex-col">
                    {['Origin Story', 'The Collective', 'Mental Health', 'Join the Team'].map((link) => (
                      <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-orbitron text-[10px] uppercase tracking-[0.2em] text-white font-light mb-4">Concierge</h3>
                  <ul className="text-xs space-y-2 flex flex-col">
                    {['Get in Touch', 'Legal Privacy', 'User Agreement', 'Report Concern'].map((link) => (
                      <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
              <p className="font-orbitron text-[9px] uppercase tracking-[0.3em] opacity-40 font-extralight">
                Curated by @GotInGeorgiG
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <span className="font-orbitron text-[9px] uppercase tracking-[0.3em] opacity-40 font-extralight">Join the Journey:</span>
                <div className="flex items-center gap-4">
                  <a href="#" className="opacity-70 hover:opacity-100 hover:text-white transition-colors"><Music2 size={16} /></a>
                  <a href="#" className="opacity-70 hover:opacity-100 hover:text-white transition-colors"><MessageCircle size={16} /></a>
                  <a href="#" className="opacity-70 hover:opacity-100 hover:text-white transition-colors"><Hash size={16} /></a>
                  <a href="#" className="opacity-70 hover:opacity-100 hover:text-white transition-colors"><Video size={16} /></a>
                  <a href="#" className="opacity-70 hover:opacity-100 hover:text-white transition-colors"><Camera size={16} /></a>
                </div>
              </div>
            </div>
          </motion.footer>
        </div>
      </main>

      <PortfolioSection />
      <UseCasesSection />
      
      <div className="w-full max-w-7xl mx-auto border-x border-dashed border-white/15 px-2">
        <HowItWorks />
        <FeaturesSection />
        <CompetitorTable />
        <Testimonials />
        <FaqSection />
        <PricingCTA />
      </div>

      <LastCallCTA />
      <Footer />
    </div>
  );
}
