import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { apiFetch, setAuthToken } from '../lib/api';

export function LoginPage() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError(null);

    if (!formData.email || !formData.password) {
      setError('Please enter your email and password');
      return;
    }

    setLoading(true);
    try {
      const data = await apiFetch('/auth/login', {
        data: formData
      });
      setAuthToken(data.token);
      navigate('/dashboard'); // or wherever they should go after login
    } catch (err: any) {
      setError(err.message || 'Invalid email or password');
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
      
      {/* Subtle background grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Very subtle glow behind the card */}
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
              // WELCOME BACK
            </p>
            <h1 className="text-2xl font-sans font-medium text-white leading-snug">
              Your room is waiting.
            </h1>
          </div>

          {/* Google OAuth */}
          <button className="w-full flex items-center justify-center gap-3 border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.03] text-white/70 hover:text-white py-3 rounded-xl text-[13px] font-sans transition-all mb-6">
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-white/[0.06]" />
            <span className="text-white/20 text-[11px] font-mono">or</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
              <p className="text-red-400 text-[13px] font-medium text-center">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
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

            <div className="flex justify-end -mt-1">
              <a href="#" className="text-[12px] text-white/30 hover:text-white/60 transition-colors">Forgot password?</a>
            </div>

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
                  Entering...
                </span>
              ) : (
                <>Enter your room <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-[13px] text-white/25 mt-6">
          New here?{' '}
          <Link to="/signup" className="text-[#ff4f64] hover:text-[#ff3b52] transition-colors">
            Create your space
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
