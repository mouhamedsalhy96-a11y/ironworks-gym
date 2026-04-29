import Link from 'next/link';
import { Dumbbell, ArrowLeft } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white">
      
      {/* Back to Home Link */}
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
        <ArrowLeft size={20} />
        <span className="text-sm font-bold uppercase">Back to Gym</span>
      </Link>

      <div className="w-full max-w-md bg-zinc-950 border border-white/10 rounded-2xl p-8 shadow-2xl">
        
        {/* Logo */}
        <div className="flex justify-center items-center gap-2 mb-8">
          <Dumbbell className="w-8 h-8 text-primary" />
          <span className="text-2xl font-black uppercase tracking-tighter">IRONWORKS<span className='text-primary'>GYM</span></span>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold uppercase tracking-tight mb-2">Member Login</h1>
          <p className="text-zinc-400 text-sm">Access your training plans and billing.</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-bold uppercase text-zinc-300 mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="athlete@example.com"
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-bold uppercase text-zinc-300">Password</label>
              <a href="#" className="text-xs text-primary hover:text-red-400 transition-colors">Forgot?</a>
            </div>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          <button 
            type="button" 
            className="w-full bg-primary hover:bg-red-600 text-white font-bold uppercase py-4 rounded-xl transition-all transform hover:scale-[1.02]"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-zinc-500">
          Not a member yet? <Link href="/#pricing" className="text-white hover:text-primary transition-colors font-bold">Join the Ironworks</Link>
        </div>

      </div>
    </div>
  );
}