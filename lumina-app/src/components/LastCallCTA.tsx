import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76 0-1.5-.5-2.7-1.4-3.6.1-.3.6-1.7-.1-3.5 0 0-1-.3-3.3 1.2a11.5 11.5 0 0 0-6 0c-2.3-1.5-3.3-1.2-3.3-1.2-.7 1.8-.2 3.2-.1 3.5-1 .9-1.4 2.1-1.4 3.6 0 5.2 3 6.4 6 6.76A4.8 4.8 0 0 0 7 18v4" />
    <path d="M9 18c-4.5 1.5-5-2.5-7-3" />
  </svg>
);

export function LastCallCTA() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-10 overflow-hidden bg-transparent border-t border-white/5">
      
      {/* ASCII Art Background Decorations */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] text-white/30 font-mono text-[8px] leading-[8px] select-none pointer-events-none whitespace-pre hidden md:block"
      >
{`   n
  nnn
 nnnnn
nnnnnnnn
 nnnnnn
  nnn
   n`}
      </motion.div>

      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-[20%] text-white/30 font-mono text-[8px] leading-[8px] select-none pointer-events-none whitespace-pre hidden md:block"
      >
{`   /\\
  /nn\\
 /nnnn\\
 \\nnnn/
  \\nn/
   \\/`}
      </motion.div>

      <motion.div 
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-40 right-[15%] text-white/30 font-mono text-[8px] leading-[8px] select-none pointer-events-none whitespace-pre hidden md:block"
      >
{`     oo
    oooo
 oooo oooo
oooooooooo
  ooooo
 ooo ooo
oo     oo`}
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-32 right-[25%] text-white/30 font-mono text-[8px] leading-[8px] select-none pointer-events-none whitespace-pre hidden md:block"
      >
{` +++++
 +   +
 ++ ++
  +++
 ++ ++
 +   +
 +++++`}
      </motion.div>

      <div className="max-w-[70rem] mx-auto text-center flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <p className="text-[#ff4f64] text-[10px] font-mono font-medium tracking-[0.2em] uppercase mb-6">
            // EMERGENCY
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-sans font-medium mb-8 leading-tight tracking-tight">
            Tonight is <span className="text-[#ff4f64]">bad.</span>
          </h2>
          
          <p className="text-white/45 text-[15px] leading-relaxed max-w-xl mb-12">
            One click opens your emergency comfort pack — breathing orb, calm audio, comfort note, meme, journal box, and a prompt to reach someone real. Small thoughtful actions are very welcome.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-[#ff4f64] hover:bg-[#ff3b52] text-white text-[13px] font-sans font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
              Save my night <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-transparent hover:bg-white/5 border border-white/10 text-white/90 text-[13px] font-sans font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
              <GithubIcon className="w-4 h-4" /> Open source
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
