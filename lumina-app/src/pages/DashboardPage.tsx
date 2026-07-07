import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Wind, Moon, FileText, RefreshCw, Radio,
  ChevronRight, Bell, Settings, Search, ArrowRight, Zap,
  Home, Compass, LayoutGrid, User, Menu, X
} from 'lucide-react';

// ─── Data ─────────────────────────────────────
const timeGreeting = () => {
  const h = new Date().getHours();
  if (h < 5)  return { hi: 'Still up?',      sub: 'The midnight room is quiet and waiting.' };
  if (h < 12) return { hi: 'Good morning.',  sub: 'A soft start is still a start.' };
  if (h < 17) return { hi: 'Hey there.',     sub: 'How\'s the afternoon treating you?' };
  if (h < 21) return { hi: 'Good evening.',  sub: 'Take it slow. You\'ve earned it.' };
  return       { hi: 'Late night?',           sub: 'The midnight room is open. So are we.' };
};

const rooms = [
  { id: 'anxiety',  label: 'Anxiety Room',      tag: 'Active',  desc: 'A pressure-free zone. No solutions, just space.',           accent: '#ff4f64', online: 12 },
  { id: 'midnight', label: 'Midnight Room',      tag: 'Active',  desc: 'Late night thoughts. No curfew, no judgment.',             accent: '#7c6fff', online: 8  },
  { id: 'girlhood', label: 'Girlhood Universe',  tag: 'Active',  desc: 'Soft life, sisterhood, and everything in between.',        accent: '#ff6fa0', online: 21 },
];

const allRooms = [
  { id: 'anxiety',    label: 'Anxiety Room',       accent: '#ff4f64', online: 12, joined: true  },
  { id: 'midnight',   label: 'Midnight Room',       accent: '#7c6fff', online: 8,  joined: true  },
  { id: 'girlhood',   label: 'Girlhood Universe',   accent: '#ff6fa0', online: 21, joined: true  },
  { id: 'gym',        label: 'Football + Gym',       accent: '#ff8c00', online: 34, joined: false },
  { id: 'heartbreak', label: 'Heartbreak Room',      accent: '#e05c7a', online: 6,  joined: false },
  { id: 'study',      label: 'Study Calm',           accent: '#4fc8a0', online: 17, joined: false },
];

const tools = [
  { id: 'orb',   label: 'Calm Orb',      desc: 'Guided breathing',  icon: Wind,      href: '/tools/calm-orb'    },
  { id: 'dump',  label: 'Brain Dump',    desc: 'Private + clears',  icon: FileText,  href: '/tools/brain-dump'  },
  { id: 'cards', label: 'Reset Cards',   desc: 'Micro affirmations', icon: RefreshCw, href: '/tools/reset-cards' },
  { id: 'audio', label: 'Ambient Audio', desc: 'Drift into calm',   icon: Radio,     href: '/tools/audio'       },
];

const quotes = [
  { text: "You're not broken, you're processing.", room: 'Anxiety Room' },
  { text: "Rest is productive. Full stop.",         room: 'Girlhood Universe' },
  { text: "It's okay to not have it figured out.",  room: 'Midnight Room' },
];

const moods = ['Calm', 'Anxious', 'Sad', 'Focused', 'Low', 'Okay'];

const navLinks = [
  { label: 'Home',    icon: Home,       href: '/dashboard' },
  { label: 'Explore', icon: Compass,    href: '/rooms'     },
  { label: 'Tools',   icon: LayoutGrid, href: '/tools'     },
  { label: 'Profile', icon: User,       href: '/profile'   },
];

// ─── Component ────────────────────────────────
export function DashboardPage() {
  const [activeRoom, setActiveRoom]   = useState('anxiety');
  const [activeMood, setActiveMood]   = useState('');
  const [quoteIdx]                    = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const greeting = timeGreeting();

  return (
    <div className="min-h-screen bg-[#050505] text-white flex">

      {/* ── BG grid ───────────────────────────── */}
      <div
        className="fixed inset-0 opacity-[0.018] pointer-events-none z-0"
        style={{
        }}
      />

      {/* ── LEFT SIDEBAR (desktop) ─────────────── */}
      <aside className="hidden lg:flex flex-col w-56 shrink-0 border-r border-white/[0.06] bg-[#050505] fixed top-0 left-0 h-screen z-20 py-5">
        {/* Logo */}
        <Link to="/" className="px-5 mb-8 block">
          <span className="font-serif font-medium text-[20px] text-white tracking-tight">Neurome</span>
        </Link>

        {/* Nav */}
        <nav className="flex flex-col gap-0.5 px-3 flex-1">
          {navLinks.map(l => (
            <Link
              key={l.label}
              to={l.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-sans transition-all ${
                l.label === 'Home'
                  ? 'bg-white/[0.05] text-white border border-white/[0.07]'
                  : 'text-white/40 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              <l.icon className="w-4 h-4 shrink-0" />
              {l.label}
            </Link>
          ))}
        </nav>

        {/* User chip */}
        <div className="px-3 mt-auto">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02]">
            <div className="w-7 h-7 rounded-full bg-[#ff4f64]/20 border border-[#ff4f64]/30 flex items-center justify-center shrink-0">
              <span className="text-[10px] font-mono text-[#ff4f64] font-bold">S</span>
            </div>
            <div className="min-w-0">
              <p className="text-[12px] text-white/80 font-sans leading-none truncate">Sarah</p>
              <p className="text-[10px] text-white/30 mt-0.5">Anonymous mode</p>
            </div>
            <Settings className="w-3.5 h-3.5 text-white/20 shrink-0 ml-auto" />
          </div>
        </div>
      </aside>

      {/* ── MOBILE DRAWER ─────────────────────── */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-30 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: -240 }} animate={{ x: 0 }} exit={{ x: -240 }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 left-0 h-screen w-56 bg-[#080808] border-r border-white/[0.08] z-40 flex flex-col py-5"
            >
              <Link to="/" className="px-5 mb-8 block">
                <span className="font-serif font-medium text-[20px] text-white tracking-tight">Neurome</span>
              </Link>
              <nav className="flex flex-col gap-0.5 px-3 flex-1">
                {navLinks.map(l => (
                  <Link key={l.label} to={l.href}
                    onClick={() => setSidebarOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] text-white/40 hover:text-white hover:bg-white/[0.04] transition-all"
                  >
                    <l.icon className="w-4 h-4" />{l.label}
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ── CONTENT AREA ───────────────────────── */}
      <div className="flex-1 flex flex-col lg:ml-56 min-w-0">

        {/* ── TOP NAV (mobile + tablet) ─────────── */}
        <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-[#050505]/90 backdrop-blur-md">
          <div className="flex items-center justify-between px-4 sm:px-6 h-14">
            {/* Mobile: hamburger + logo */}
            <div className="flex items-center gap-3 lg:hidden">
              <button onClick={() => setSidebarOpen(true)} className="text-white/40 hover:text-white/70 transition-colors">
                <Menu className="w-5 h-5" />
              </button>
              <Link to="/">
                <span className="font-serif font-medium text-[18px] text-white tracking-tight">Neurome</span>
              </Link>
            </div>

            {/* Desktop: search bar */}
            <div className="hidden lg:flex items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-lg px-3 py-1.5 w-64">
              <Search className="w-3.5 h-3.5 text-white/25 shrink-0" />
              <span className="text-[12px] text-white/25 font-sans">Search rooms, tools…</span>
            </div>

            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg text-white/30 hover:text-white/60 hover:bg-white/[0.04] transition-all">
                <Bell className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg text-white/30 hover:text-white/60 hover:bg-white/[0.04] transition-all lg:hidden">
                <Settings className="w-4 h-4" />
              </button>
              <div className="w-8 h-8 rounded-full bg-[#ff4f64]/20 border border-[#ff4f64]/30 flex items-center justify-center">
                <span className="text-[11px] font-mono text-[#ff4f64] font-bold">S</span>
              </div>
            </div>
          </div>
        </header>

        {/* ── SCROLLABLE PAGE BODY ──────────────── */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-8 sm:py-10">

            {/* GREETING */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-8"
            >
              <p className="text-[#ff4f64] text-[10px] font-mono font-medium tracking-[0.2em] uppercase mb-2">
                // WELCOME BACK
              </p>
              <h1 className="text-2xl sm:text-3xl font-sans font-medium text-white leading-snug">{greeting.hi}</h1>
              <p className="text-white/40 text-[13px] sm:text-[14px] mt-1">{greeting.sub}</p>
            </motion.div>

            {/* ── 2-COL LAYOUT ────────────────────── */}
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-5 sm:gap-6">

              {/* ── LEFT ─────────────────────────────── */}
              <div className="flex flex-col gap-5 sm:gap-6 min-w-0">

                {/* EMERGENCY BANNER */}
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}>
                  <Link
                    to="/emergency"
                    className="flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl border border-[#ff4f64]/20 bg-[#ff4f64]/[0.04] hover:bg-[#ff4f64]/[0.08] hover:border-[#ff4f64]/35 transition-all group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-[#ff4f64]/15 flex items-center justify-center shrink-0">
                        <Zap className="w-3.5 h-3.5 text-[#ff4f64]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[13px] font-sans font-semibold text-white">Tonight is bad?</p>
                        <p className="text-[11px] text-white/35 truncate">One tap opens your emergency comfort pack</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#ff4f64] shrink-0 group-hover:translate-x-1 transition-transform ml-3" />
                  </Link>
                </motion.div>

                {/* YOUR ROOMS */}
                <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Your Rooms</p>
                    <Link to="/rooms" className="text-[11px] text-white/30 hover:text-white/60 transition-colors flex items-center gap-1">
                      Browse all <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    {rooms.map((room, i) => (
                      <motion.button
                        key={room.id}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: 0.13 + i * 0.07 }}
                        onClick={() => setActiveRoom(room.id)}
                        className={`w-full text-left px-4 sm:px-5 py-4 rounded-xl border transition-all duration-200 group ${
                          activeRoom === room.id
                            ? 'border-white/12 bg-white/[0.04]'
                            : 'border-white/[0.07] hover:border-white/12 hover:bg-white/[0.02]'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <div
                              className="w-2.5 h-2.5 rounded-full shrink-0 transition-all"
                              style={{ backgroundColor: activeRoom === room.id ? room.accent : 'rgba(255,255,255,0.12)' }}
                            />
                            <div className="min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <p className="text-[14px] font-sans font-medium text-white">{room.label}</p>
                                <span
                                  className="text-[9px] font-mono px-1.5 py-0.5 rounded-md shrink-0"
                                  style={{ color: room.accent, backgroundColor: `${room.accent}15`, border: `1px solid ${room.accent}25` }}
                                >
                                  {room.online} online
                                </span>
                              </div>
                              <p className="text-[12px] text-white/35 mt-0.5 truncate">{room.desc}</p>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/50 group-hover:translate-x-0.5 transition-all shrink-0" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.section>

                {/* QUICK TOOLS */}
                <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.18 }}>
                  <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-3">Quick Tools</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {tools.map((tool, i) => (
                      <motion.div
                        key={tool.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.22 + i * 0.05 }}
                      >
                        <Link
                          to={tool.href}
                          className="flex flex-col items-center gap-3 px-3 py-5 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-white/14 hover:bg-white/[0.04] transition-all group text-center"
                        >
                          <div className="w-9 h-9 rounded-xl bg-[#ff4f64]/10 border border-[#ff4f64]/20 flex items-center justify-center group-hover:bg-[#ff4f64]/16 transition-colors">
                            <tool.icon className="w-4 h-4 text-[#ff4f64]" strokeWidth={1.5} />
                          </div>
                          <div>
                            <p className="text-[12px] sm:text-[13px] font-sans font-medium text-white/80">{tool.label}</p>
                            <p className="text-[10px] sm:text-[11px] text-white/30 mt-0.5">{tool.desc}</p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* EXPLORE MORE ROOMS */}
                <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.26 }}>
                  <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-3">Explore More Rooms</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {allRooms.filter(r => !r.joined).map((room, i) => (
                      <motion.button
                        key={room.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.3 + i * 0.05 }}
                        className="text-left px-4 py-3.5 rounded-xl border border-white/[0.07] hover:border-white/14 hover:bg-white/[0.02] transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: room.accent }} />
                            <p className="text-[13px] font-sans text-white/75">{room.label}</p>
                          </div>
                          <span className="text-[10px] font-mono text-white/25">{room.online}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.section>
              </div>

              {/* ── RIGHT SIDEBAR ─────────────────────── */}
              <div className="flex flex-col gap-4 xl:gap-5">

                {/* MOOD CHECK */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.14 }}
                  className="border border-white/[0.07] rounded-xl p-5 bg-[#0a0a0a]"
                >
                  <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">Mood Check</p>
                  <p className="text-[12px] text-white/45 mb-4">How are you right now?</p>
                  <div className="grid grid-cols-3 gap-2">
                    {moods.map(m => (
                      <button
                        key={m}
                        onClick={() => setActiveMood(m)}
                        className={`py-2 rounded-lg border text-[11px] font-sans transition-all ${
                          activeMood === m
                            ? 'border-[#ff4f64]/50 bg-[#ff4f64]/[0.08] text-white'
                            : 'border-white/[0.07] text-white/45 hover:border-white/15 hover:text-white/70'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* TODAY'S QUOTE */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="border border-white/[0.07] rounded-xl p-5 bg-[#0a0a0a]"
                >
                  <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-4">Today's Reminder</p>
                  <p className="text-[14px] text-white/80 leading-relaxed italic">
                    "{quotes[quoteIdx].text}"
                  </p>
                  <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <p className="text-[10px] font-mono text-white/25 uppercase tracking-widest">— {quotes[quoteIdx].room}</p>
                  </div>
                </motion.div>

                {/* STREAK */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.26 }}
                  className="border border-white/[0.07] rounded-xl p-5 bg-[#0a0a0a]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">This Week</p>
                    <span className="text-[10px] font-mono text-[#ff4f64]">5 day streak</span>
                  </div>
                  <div className="flex gap-1.5 mb-3">
                    {['M','T','W','T','F','S','S'].map((d,i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                        <div className={`w-full h-6 rounded-md ${
                          i < 4 ? 'bg-[#ff4f64]/30' : i === 4 ? 'bg-[#ff4f64]' : 'bg-white/[0.05]'
                        }`} />
                        <span className="text-[8px] font-mono text-white/25">{d}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-white/35">Keep showing up for yourself.</p>
                </motion.div>

                {/* ACTIVE ROOM SHORTCUT */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.32 }}
                >
                  <Link
                    to="/room/midnight"
                    className="flex items-center justify-between px-4 py-3.5 rounded-xl border border-white/[0.07] hover:border-white/14 hover:bg-white/[0.02] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Moon className="w-4 h-4 text-[#7c6fff]" />
                        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#7c6fff] border border-[#050505]" />
                      </div>
                      <div>
                        <p className="text-[13px] font-sans text-white/80">Midnight Room</p>
                        <p className="text-[11px] text-white/30">8 people in right now</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/50 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE BOTTOM NAV ────────────────────── */}
        <nav className="lg:hidden sticky bottom-0 bg-[#050505]/95 backdrop-blur-md border-t border-white/[0.06] z-20">
          <div className="flex items-center justify-around px-2 py-2">
            {navLinks.map(l => (
              <Link
                key={l.label}
                to={l.href}
                className={`flex flex-col items-center gap-1 px-4 py-1.5 rounded-lg transition-all ${
                  l.label === 'Home' ? 'text-[#ff4f64]' : 'text-white/30 hover:text-white/60'
                }`}
              >
                <l.icon className="w-5 h-5" />
                <span className="text-[9px] font-mono">{l.label}</span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
