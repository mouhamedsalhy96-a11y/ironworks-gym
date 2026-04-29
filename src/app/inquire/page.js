import Link from 'next/link';
import { Dumbbell, ArrowLeft, Send } from 'lucide-react';

export default function Inquire() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white relative">
      
      {/* Back to Home Link */}
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
        <ArrowLeft size={20} />
        <span className="text-sm font-bold uppercase">Back to Gym</span>
      </Link>

      <div className="w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl mt-16 md:mt-0">
        
        {/* Logo */}
        <div className="flex justify-center items-center gap-2 mb-8">
          <Dumbbell className="w-8 h-8 text-primary" />
          <span className="text-2xl font-black uppercase tracking-tighter">IRONWORKS<span className='text-primary'>GYM</span></span>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Level Up Your <span className="text-primary">Training</span></h1>
          <p className="text-zinc-400">Fill out the form below and one of our elite coaches will reach out to schedule your consultation.</p>
        </div>

        {/* Inquiry Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold uppercase text-zinc-300 mb-2">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase text-zinc-300 mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="athlete@example.com" 
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                required 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase text-zinc-300 mb-2">Phone Number</label>
            <input 
              type="tel" 
              placeholder="07000 000000" 
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
            />
          </div>

          <div>
            <label className="block text-sm font-bold uppercase text-zinc-300 mb-2">What are your primary goals?</label>
            <textarea 
              rows="4" 
              placeholder="Strength, weight loss, competition prep, injury rehab..." 
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" 
              required
            ></textarea>
          </div>

          <Link 
            href="/success" 
            className="w-full bg-primary hover:bg-red-600 text-white font-bold uppercase py-4 rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <Send size={20} />
            Send Inquiry
          </Link>
        </form>

      </div>
    </div>
  );
}