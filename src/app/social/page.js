import Link from 'next/link';
import { Dumbbell, ArrowLeft } from 'lucide-react';

export default function SocialPlaceholder() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white text-center">
      
      <div className="w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-3xl p-12 shadow-[0_0_50px_rgba(239,68,68,0.05)]">
        
        <div className="flex justify-center mb-6">
          <div className="bg-primary/10 p-6 rounded-full">
             {/* Raw SVG for a globe/social icon to avoid Lucide crashes */}
             <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
        </div>

        <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">Social Media <span className="text-primary">Integration</span></h1>
        
        <p className="text-lg text-zinc-400 mb-10 max-w-md mx-auto">
          This is a placeholder page for the portfolio. In a live production environment, this space will be customized to embed your live Instagram gallery, Facebook updates, and X (Twitter) feeds to keep your community engaged.
        </p>

        <Link href="/" className="inline-flex items-center gap-2 border border-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-bold uppercase transition-all duration-300">
          <ArrowLeft size={20} />
          Back to Homepage
        </Link>

      </div>
    </div>
  );
}