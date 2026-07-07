import { Link } from 'react-router-dom';

const links = {
  Product: ['Mood Rooms', 'Interest Universes', 'Vibe Match', 'Comfort Tools', 'Pricing'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-4 sm:px-6 lg:px-10 pt-16 pb-10 overflow-hidden bg-transparent">
      <div className="max-w-[70rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-5">
              <span className="font-serif font-medium text-2xl text-white tracking-tight">Neurome</span>
            </Link>
            <p className="text-white/40 text-[13px] leading-relaxed max-w-[280px]">
              A sanctuary for thousands finding peace in the chaos. Built for real minds. Small thoughtful messages are very welcome.
            </p>
            <div className="flex gap-5 mt-8">
              {['Twitter', 'Instagram', 'Discord'].map((s) => (
                <a key={s} href="#" className="text-[12px] font-sans text-white/30 hover:text-white transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">© 2025 Neurome. Built for real minds.</p>
          <p className="text-xs text-white/15">Made with 💜 somewhere at midnight</p>
        </div>
      </div>
    </footer>
  );
}
