import WaitlistForm from '@/components/WaitlistForm';
import { Instagram, Twitter, Globe } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden p-4">
      {/* Background Glow */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[80vw] max-w-[1000px] h-[500px] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-sm text-neutral-300 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Waitlist
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 tracking-tight">
          Coming soon!
        </h1>

        {/* Card */}
        <div className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col items-center space-y-6">
            <h2 className="text-3xl font-semibold text-white">Join our waitlist</h2>
            <p className="text-neutral-400 max-w-md mx-auto text-lg leading-relaxed">
              Sign up for our newsletter to receive the latest updates and insights straight to your inbox.
            </p>
            
            <div className="w-full pt-4">
              <WaitlistForm />
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 pt-8">
          <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all hover:scale-110">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all hover:scale-110">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all hover:scale-110">
            <Globe className="w-5 h-5" />
          </a>
        </div>

      </div>
    </main>
  );
}
