import { ArrowUpRight, Sparkle, Pen, Frame, Palette, PenTool, Layers, Type, Aperture, Globe, Camera, Brush, Box, Wand2 } from 'lucide-react';

export function PortfolioSection() {
  return (
    <section className="relative z-10 bg-transparent text-white font-sans antialiased w-full lg:h-screen px-4 sm:px-6 md:px-10 lg:px-14 py-6 sm:py-8 md:py-10 flex flex-col">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-8 md:mb-10">
        <div className="max-w-3xl">
          <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.15] font-normal tracking-tight mb-3">
            Anxiety Relief & Focus
          </h2>
          <p className="text-sm md:text-[15px] leading-[1.6] text-white/60">
            A digital sanctuary offering guided breathing, anonymous brain dumps, and mood-curated universes. With a focus on real moments, we help you navigate anxiety and find your vibe.
          </p>
        </div>
        <button className="liquid-glass rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-white/5 transition-colors">
          Enter Your Room Today
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 flex-1 min-h-0">
        
        {/* Column 1 */}
        <div className="rounded-2xl bg-black relative overflow-hidden flex flex-col justify-between min-h-[400px] lg:min-h-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_150203_44a5bd32-516a-47ce-a077-8acbf9aa8991.mp4"
          />
          <div className="relative z-10 flex items-center justify-center gap-2 mt-6">
            <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
            <span className="uppercase tracking-[0.22em] text-[11px] text-white/70">Peace</span>
            <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
          </div>
          
          <div className="relative z-10 grid grid-cols-[auto_auto_1fr_auto] gap-x-3 gap-y-3 mb-8 mx-4 sm:mx-6 text-xs sm:text-[13px] items-center">
            <span className="text-white/80 whitespace-nowrap"></span>
            <Sparkle className="h-3 w-3 text-white/40" strokeWidth={1.5} />
            <span className="text-white whitespace-nowrap">Anxiety Relief</span>
            <span className="text-white/60 whitespace-nowrap justify-self-end">Safe Space</span>

            <span className="text-white/80 whitespace-nowrap"></span>
            <Sparkle className="h-3 w-3 text-white/40" strokeWidth={1.5} />
            <span className="text-white whitespace-nowrap">Deep Focus</span>
            <span className="text-white/60 whitespace-nowrap justify-self-end">Study Rooms</span>

            <span className="text-white/80 whitespace-nowrap"></span>
            <Sparkle className="h-3 w-3 text-white/40" strokeWidth={1.5} />
            <span className="text-white whitespace-nowrap">Midnight Thoughts</span>
            <span className="text-white/60 whitespace-nowrap justify-self-end">Late Night</span>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 md:gap-5 h-full">
          {/* Top - Client Voice */}
          <div className="rounded-2xl bg-[#324444] p-5 md:p-6 noise-overlay relative overflow-hidden flex flex-col gap-4 min-h-[200px]">
            <div className="relative z-10 flex items-center justify-start gap-2">
              <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
              <span className="uppercase tracking-[0.22em] text-[11px] text-white/70">Client Voice</span>
              <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
            </div>
            <p className="relative z-10 text-[13px] sm:text-[13.5px] leading-[1.6] text-white/85">
              "Neurome gave me a place to just be anxious without being told to meditate for 30 days. The process feels graceful, and the comfort speaks for itself."
            </p>
            <p className="relative z-10 text-xs text-white/60 mt-auto pt-2">
              <strong className="text-white font-medium">Midnight Room User</strong>
            </p>
          </div>

          {/* Bottom - 10M+ */}
          <div className="rounded-2xl bg-black relative overflow-hidden flex-1 flex flex-col justify-center items-center min-h-[200px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154543_d5b83fc1-9cea-44f3-b5e8-8f325935211a.mp4"
            />
            <h3 className="relative z-10 text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-light tracking-tight drop-shadow-lg mb-1">
              100+
            </h3>
            <p className="relative z-10 text-white/85 text-sm">
              Moods Matched
            </p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4 md:gap-5 h-full">
          {/* Top - Daily Software */}
          <div className="rounded-2xl bg-black relative overflow-hidden flex-1 flex flex-col justify-between min-h-[260px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_153148_d7a3e1dd-e5d0-4ce6-8306-00d7522ecc44.mp4"
            />
            <div className="relative z-10 flex items-center justify-center gap-2 mt-6">
              <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
              <span className="uppercase tracking-[0.22em] text-[11px] text-white/70">Daily Tools</span>
              <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
            </div>

            <div 
              className="relative z-10 flex flex-col gap-2 md:gap-3 mb-6 overflow-hidden w-full mt-8"
              style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
            >
              {/* Row 1 */}
              <div className="flex gap-3 w-max animate-marquee-left">
                {[Pen, Frame, Palette, PenTool, Layers, Type, Aperture, Globe, Pen, Frame, Palette, PenTool, Layers, Type, Aperture, Globe].map((Icon, i) => (
                  <div key={i} className="h-14 w-14 md:h-16 md:w-16 rounded-xl liquid-glass flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                  </div>
                ))}
              </div>
              {/* Row 2 */}
              <div className="flex gap-3 w-max animate-marquee-right">
                {[Camera, Brush, Box, Wand2, Pen, Frame, Type, Layers, Camera, Brush, Box, Wand2, Pen, Frame, Type, Layers].map((Icon, i) => (
                  <div key={i} className="h-14 w-14 md:h-16 md:w-16 rounded-xl liquid-glass flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom - Reach Me */}
          <div className="rounded-2xl bg-[#324444] p-5 md:p-6 noise-overlay relative overflow-hidden flex flex-col justify-between min-h-[160px]">
            <div className="relative z-10 flex justify-between items-start">
              <div className="flex items-center gap-2">
                <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
                <span className="uppercase tracking-[0.22em] text-[11px] text-white/70">Reach Me</span>
              </div>
              <button className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <ArrowUpRight className="h-5 w-5 text-white" strokeWidth={1.5} />
              </button>
            </div>
            <div className="relative z-10 mt-6 flex flex-col gap-1">
              <a href="mailto:hello@neurome.app" className="text-white text-[15px] hover:text-white/80 transition-colors">hello@neurome.app</a>
              <a href="tel:+442078163" className="text-white/60 text-sm hover:text-white/80 transition-colors">+44 207 81 63</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
































