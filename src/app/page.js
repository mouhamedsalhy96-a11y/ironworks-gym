"use client";

import Link from 'next/link';
import { Target, MapPin, Mail, LogIn, Dumbbell, Zap, ShieldCheck, Clock, Phone, Check, Users } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);

  // Stripe Checkout Function
  const handleCheckout = async (priceId, planName) => {
    setLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId, planName }),
      });

      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("No checkout URL returned");
        setLoading(false);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Dumbbell className="w-8 h-8 text-primary" />
            <span className="text-2xl font-black uppercase tracking-tighter">IRONWORKS<span className='text-primary'>GYM</span></span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm uppercase font-semibold">
            <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
            <Link href="#location" className="hover:text-primary transition-colors">Location</Link>
            <Link href="#pt" className="hover:text-primary transition-colors">PT Services</Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">Membership</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-semibold hover:text-primary transition-colors">Client Login</Link>
            <Link href="#pricing" className="bg-primary hover:bg-red-600 px-6 py-2 rounded-full text-sm font-bold transition-colors">Join Now</Link>
          </div>
          
          <Link href="/login" className="md:hidden text-white">
            <LogIn size={24} />
          </Link>
        </nav>
      </header>

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center bg-zinc-950">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop')" 
            }}
          />
          <div className="absolute inset-0 z-10 bg-black/70"></div>

          <div className="relative z-20 container mx-auto px-6 text-center max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
              <span className='block text-primary'>BUILD</span>
              <span className='block'>YOUR</span>
              <span className='block text-primary'>LEGACY.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-300 font-medium mb-12 max-w-2xl mx-auto">
              Welcome to IRONWORKS, the definitive gym for dedicated athletes and determined beginners in Dalton-in-Furness. Features, community, and expert PT services designed to help you reach peak performance.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="#pricing" className="w-full sm:w-auto bg-primary hover:bg-red-600 px-10 py-4 rounded-full text-lg font-extrabold uppercase transition-all duration-300 transform hover:scale-105">
                Join Now
              </Link>
              <Link href="#features" className="w-full sm:w-auto border border-white hover:bg-white hover:text-black px-10 py-4 rounded-full text-lg font-bold transition-all duration-300">
                Explore The Gym
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="py-24 bg-zinc-950 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Elite <span className="text-primary">Facilities</span></h2>
              <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Everything you need to break past your limits. No gimmicks, just premium equipment and a winning environment.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black p-8 border border-white/5 rounded-2xl hover:border-primary/50 transition-colors">
                <Dumbbell className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">Free Weights Zone</h3>
                <p className="text-zinc-400">Extensive range of competition-grade plates, dumbbells up to 80kg, and multiple power racks.</p>
              </div>

              <div className="bg-black p-8 border border-white/5 rounded-2xl hover:border-primary/50 transition-colors">
                <Zap className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">Cardio & HIIT</h3>
                <p className="text-zinc-400">State-of-the-art treadmills, assault bikes, rowers, and a dedicated turf area for sled pushes.</p>
              </div>

              <div className="bg-black p-8 border border-white/5 rounded-2xl hover:border-primary/50 transition-colors">
                <Clock className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">24/7 Access</h3>
                <p className="text-zinc-400">Train on your own schedule. Secure key-fob entry and 24-hour surveillance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION SECTION */}
        <section id="location" className="py-24 bg-black border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Find <span className="text-primary">Us</span></h2>
                <p className="text-zinc-400 text-lg mb-8">
                  Located in the heart of Dalton-in-Furness, Ironworks Gym is easily accessible with plenty of free on-site parking for members.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg">Address</h4>
                      <p className="text-zinc-400">123 Iron Street, Market Square<br/>Dalton-in-Furness, LA15 8AA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg">Contact</h4>
                      <p className="text-zinc-400">01229 123456<br/>info@ironworksgym.co.uk</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="aspect-square md:aspect-video lg:aspect-square bg-zinc-900 rounded-2xl border border-white/10 overflow-hidden shadow-lg">
                <iframe 
                  src="https://maps.google.com/maps?q=Dalton-in-Furness&t=m&z=14&output=embed&iwloc=near" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ironworks Gym Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* PT SERVICES SECTION */}
        <section id="pt" className="py-24 bg-zinc-950 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div 
                  className="aspect-square md:aspect-video lg:aspect-square bg-zinc-900 rounded-2xl border border-white/10 bg-cover bg-center overflow-hidden"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop')" }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                    <div>
                      <h4 className="text-2xl font-bold uppercase text-white">Meet The Coaches</h4>
                      <p className="text-zinc-300">Certified Strength & Conditioning Specialists</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Expert <span className="text-primary">Coaching</span></h2>
                <p className="text-zinc-400 text-lg mb-8">
                  Hit a plateau? Need form correction? Our elite personal trainers are here to push you beyond your perceived limits. We offer bespoke 1-on-1 coaching, nutritional guidance, and competition prep.
                </p>
                
                <ul className="space-y-6 mb-10">
                  <li className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Custom Programs</h4>
                      <p className="text-zinc-400 text-sm">Tailored hypertrophy and strength regimes.</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">1-on-1 Sessions</h4>
                      <p className="text-zinc-400 text-sm">Undivided attention to perfect your mechanics.</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Injury Rehab</h4>
                      <p className="text-zinc-400 text-sm">Safe, effective recovery and mobility work.</p>
                    </div>
                  </li>
                </ul>

                {/* UPDATED TO A LINK INSTEAD OF A BUTTON */}
                <Link href="/inquire" className="inline-block border border-white hover:bg-white hover:text-black px-10 py-4 rounded-full text-lg font-bold uppercase transition-all duration-300">
                  Inquire About PT
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* MEMBERSHIP & PRICING SECTION */}
        <section id="pricing" className="py-24 bg-black border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Join The <span className="text-primary">Ironworks</span></h2>
              <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Simple, transparent pricing. No hidden sign-up fees or impossible cancellation policies. Choose your commitment below.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              
              <div className="bg-zinc-950 p-8 border border-white/10 rounded-2xl flex flex-col hover:border-white/30 transition-colors">
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">Day Pass</h3>
                <p className="text-zinc-400 mb-6">Perfect for visitors or drop-ins.</p>
                <div className="mb-6">
                  <span className="text-5xl font-black">£10</span>
                  <span className="text-zinc-500"> / day</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3 text-zinc-300"><Check className="w-5 h-5 text-primary" /> Single day facility access</li>
                  <li className="flex items-center gap-3 text-zinc-300"><Check className="w-5 h-5 text-primary" /> Valid during staffed hours only</li>
                </ul>
                <button 
                  onClick={() => handleCheckout('day-pass', 'Day Pass')}
                  disabled={loading}
                  className="w-full border border-white hover:bg-white hover:text-black py-4 rounded-xl font-bold uppercase transition-colors disabled:opacity-50"
                >
                  {loading ? 'Processing...' : 'Buy Day Pass'}
                </button>
              </div>

              <div className="bg-zinc-900 p-8 border-2 border-primary rounded-2xl flex flex-col relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(239,68,68,0.15)]">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">Monthly</h3>
                <p className="text-zinc-400 mb-6">The standard ironworks commitment.</p>
                <div className="mb-6">
                  <span className="text-5xl font-black">£45</span>
                  <span className="text-zinc-500"> / month</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3 text-zinc-300"><Check className="w-5 h-5 text-primary" /> Full 24/7 Access via Keyfob</li>
                  <li className="flex items-center gap-3 text-zinc-300"><Check className="w-5 h-5 text-primary" /> Unlimited group classes</li>
                  <li className="flex items-center gap-3 text-zinc-300"><Check className="w-5 h-5 text-primary" /> Rolling contract, cancel anytime</li>
                </ul>
                <button 
                  onClick={() => handleCheckout('monthly', 'Monthly Plan')}
                  disabled={loading}
                  className="w-full bg-primary hover:bg-red-600 py-4 rounded-xl font-bold uppercase transition-colors disabled:opacity-50"
                >
                  {loading ? 'Processing...' : 'Subscribe Monthly'}
                </button>
              </div>

              <div className="bg-zinc-950 p-8 border border-white/10 rounded-2xl flex flex-col hover:border-white/30 transition-colors">
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">Annual</h3>
                <p className="text-zinc-400 mb-6">Pay upfront and save big.</p>
                <div className="mb-6">
                  <span className="text-5xl font-black">£450</span>
                  <span className="text-zinc-500"> / year</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3 text-zinc-300"><Check className="w-5 h-5 text-primary" /> 12 months for the price of 10</li>
                  <li className="flex items-center gap-3 text-zinc-300"><Check className="w-5 h-5 text-primary" /> Full 24/7 Access via Keyfob</li>
                  <li className="flex items-center gap-3 text-zinc-300"><Check className="w-5 h-5 text-primary" /> Free initial PT consultation</li>
                </ul>
                <button 
                  onClick={() => handleCheckout('annual', 'Annual Plan')}
                  disabled={loading}
                  className="w-full border border-white hover:bg-white hover:text-black py-4 rounded-xl font-bold uppercase transition-colors disabled:opacity-50"
                >
                  {loading ? 'Processing...' : 'Buy Annual Plan'}
                </button>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-zinc-950 border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="flex items-center gap-2">
              <Dumbbell className="w-6 h-6 text-primary" />
              <span className="text-xl font-black uppercase tracking-tighter">IRONWORKS<span className='text-primary'>GYM</span></span>
            </div>

            {/* SOCIAL LINKS (INSTAGRAM, FACEBOOK, AND MODERN X LOGO) */}
            <div className="flex items-center gap-6 text-zinc-400">
              <Link href="/social" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </Link>
              <Link href="/social" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </Link>
              <Link href="/social" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Link>
            </div>

          </div>
          
          <div className="mt-8 pt-8 border-t border-white/5 text-center md:text-left text-zinc-500 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Ironworks Gym. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}