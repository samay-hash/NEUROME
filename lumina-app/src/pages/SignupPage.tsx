import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { apiFetch, setAuthToken } from '../lib/api';

export function SignupPage() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSignup = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError(null);

    if (!formData.username || !formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const data = await apiFetch('/auth/register', {
        data: formData
      });
      setAuthToken(data.token);
      navigate('/onboarding');
    } catch (err: any) {
      setError(err.message || 'Failed to register');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="absolute w-[400px] h-[400px] rounded-full bg-[#ff4f64]/5 blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[400px]"
      >
        {/* Logo */}
        <div className="mb-10 text-center">
          <Link to="/" className="inline-block">
            <span className="font-serif font-medium text-2xl text-white tracking-tight">Neurome</span>
          </Link>
        </div>

        {/* Card */}
        <div className="border border-white/[0.08] rounded-2xl p-8 bg-[#0a0a0a]">
          
          <div className="mb-8">
            <p className="text-[#ff4f64] text-[10px] font-mono font-medium tracking-[0.2em] uppercase mb-3">
              // CREATE ACCOUNT
            </p>
            <h1 className="text-2xl font-sans font-medium text-white leading-snug">
              Find your space.
            </h1>
            <p className="text-white/35 text-[13px] mt-1">Free forever. No card needed.</p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
              <p className="text-red-400 text-[13px] font-medium text-center">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSignup} className="flex flex-col gap-4">
            <div>
              <label className="text-[11px] font-mono text-white/40 uppercase tracking-widest mb-2 block">Display Name</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="How should we call you?"
                className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-white/20 rounded-xl px-4 py-3 text-[13px] text-white placeholder:text-white/20 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-[11px] font-mono text-white/40 uppercase tracking-widest mb-2 block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-white/20 rounded-xl px-4 py-3 text-[13px] text-white placeholder:text-white/20 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-[11px] font-mono text-white/40 uppercase tracking-widest mb-2 block">Password</label>
              <div className="relative">
                <input
                  type={show ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-white/20 rounded-xl px-4 py-3 pr-11 text-[13px] text-white placeholder:text-white/20 focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/50 transition-colors"
                >
                  {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <p className="text-[11px] text-white/20 leading-relaxed -mt-1">
              By creating an account, you agree to our <a href="#" className="text-white/40 hover:text-white/60 underline">Terms</a> and <a href="#" className="text-white/40 hover:text-white/60 underline">Privacy Policy</a>.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#ff4f64] hover:bg-[#ff3b52] disabled:opacity-60 text-white text-[13px] font-sans font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 mt-1"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Setting up...
                </span>
              ) : (
                <>Set up your profile <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-[13px] text-white/25 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-[#ff4f64] hover:text-[#ff3b52] transition-colors">
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
