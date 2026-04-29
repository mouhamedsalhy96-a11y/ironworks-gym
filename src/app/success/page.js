import Link from 'next/link';
import { Dumbbell, ArrowLeft, CheckCircle } from 'lucide-react';

export default function Success() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white text-center">
      
      <div className="w-full max-w-lg bg-zinc-950 border border-white/10 rounded-3xl p-12 shadow-[0_0_50px_rgba(239,68,68,0.05)]">
        
        <div className="flex justify-center mb-6">
          <div className="bg-primary/10 p-4 rounded-full">
            <CheckCircle className="w-16 h-16 text-primary" />
          </div>
        </div>

        <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">Inquiry <span className="text-primary">Sent</span></h1>
        
        <p className="text-lg text-zinc-400 mb-10">
          Your details have been securely submitted. One of our elite coaches will review your goals and reach out within 24 hours to schedule your consultation. Prepare to put in the work.
        </p>

        <Link href="/" className="inline-flex items-center gap-2 bg-primary hover:bg-red-600 px-8 py-4 rounded-full font-bold uppercase transition-all duration-300">
          <ArrowLeft size={20} />
          Return to Gym
        </Link>

      </div>
    </div>
  );
}