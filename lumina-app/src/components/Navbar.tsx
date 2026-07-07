import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { label: 'Rooms', href: '#rooms' },
  { label: 'Universes', href: '#universes' },
  { label: 'Tools', href: '#tools' },
  { label: 'Pricing', href: '#pricing' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="absolute top-0 left-0 right-0 z-50 py-5 bg-transparent"
    >
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0 z-10">
          <span className="font-orbitron text-sm text-white/90 tracking-[0.15em] font-light">
            NEUROME
          </span>
        </Link>

        {/* Desktop nav — absolute center */}
        {isLanding && (
          <nav className="hidden md:flex items-center gap-12 lg:gap-16 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-orbitron text-[10px] font-light uppercase tracking-[0.18em] text-white/50 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* CTA & Menu */}
        <div className="flex items-center gap-4 shrink-0 z-10">
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/login"
              className="font-orbitron text-xs font-normal uppercase tracking-[0.1em] text-black hover:text-black/60 transition-colors"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="font-orbitron text-xs font-normal uppercase tracking-[0.1em] text-black hover:text-black/60 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button
            className="text-black hover:text-black/60 transition-colors cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/60 backdrop-blur-xl border-t border-white/5 overflow-hidden mt-4"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {isLanding && navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-orbitron text-xs font-light uppercase tracking-[0.15em] text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 pt-3 border-t border-white/10">
                <Link to="/login" className="font-orbitron text-xs font-light text-white/60 hover:text-white" onClick={() => setMenuOpen(false)}>Log in</Link>
                <Link to="/signup" className="font-orbitron text-xs font-light text-white bg-white/15 border border-white/20 px-4 py-2 rounded-full" onClick={() => setMenuOpen(false)}>Get started</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
