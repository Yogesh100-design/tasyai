import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  LayoutDashboard, 
  Compass,
  Bug
} from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#020617] font-sans overflow-hidden antialiased">
      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .hero-404 {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.1) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>

      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.5, 0.4]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[500px] h-[500px] -top-20 -left-20 bg-[#4245f0] rounded-full blur-[80px] opacity-40"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute w-[400px] h-[400px] bottom-10 right-10 bg-teal-500 rounded-full blur-[80px] opacity-40"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.08, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute w-[300px] h-[300px] top-1/2 left-1/3 bg-indigo-600 rounded-full blur-[80px]"
        />
        
        {/* Grain Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative z-10 flex h-screen w-full flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-8 lg:px-20 py-6">
          <div className="flex items-center gap-3 text-white cursor-pointer group">
            <div className="size-8 bg-[#4245f0] rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Rocket className="text-white size-5" />
            </div>
            <h2 className="text-white text-xl font-bold leading-tight tracking-tight group-hover:text-[#4245f0] transition-colors">StartupCollab</h2>
          </div>
          
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-9">
              {['Discover', 'Projects', 'Network'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-slate-300 hover:text-white text-sm font-medium transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4245f0] transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>
            <button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all backdrop-blur-md hover:border-white/20">
              Support
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card max-w-2xl w-full rounded-xl p-12 text-center relative overflow-hidden"
          >
            {/* Visual Element: Floating Node Illustration */}
            <div className="absolute -top-12 -right-12 opacity-20 transform rotate-12">
              <div className="w-64 h-64 border-4 border-dashed border-[#4245f0] rounded-full animate-spin-slow"></div>
            </div>

            <div className="relative z-10">
              {/* 404 Hero */}
              <div className="relative inline-block">
                <span className="text-[140px] md:text-[180px] font-black leading-none hero-404 select-none tracking-tighter">
                  404
                </span>
                <div className="absolute inset-0 flex items-center justify-center opacity-40 blur-sm select-none pointer-events-none">
                  <span className="text-[140px] md:text-[180px] font-black leading-none text-[#4245f0]">404</span>
                </div>
              </div>

              {/* Typography */}
              <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4 mt-2 tracking-tight">Lost in Space?</h1>
              <p className="text-slate-400 text-lg max-w-md mx-auto leading-relaxed mb-10">
                The page you are looking for doesn't exist or has been moved. Let's get you back to collaborating.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button 
                  whileHover={{ y: -2, boxShadow: '0 0 30px rgba(66,69,240,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-br from-[#4245f0] to-[#6366f1] text-white px-8 py-4 rounded-xl font-bold text-base transition-all"
                >
                  <LayoutDashboard className="size-5" />
                  Go to Dashboard
                </motion.button>
                
                <motion.button 
                  whileHover={{ y: -2, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 glass-card text-white px-8 py-4 rounded-xl font-bold text-base transition-all"
                >
                  <Compass className="size-5" />
                  Back to Discover
                </motion.button>
              </div>
            </div>

            {/* Floating Illustration */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-12 flex justify-center"
            >
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-[#4245f0]/20 rounded-full blur-2xl animate-pulse"></div>
                {/* Astronaut SVG Illustration */}
                <svg 
                  viewBox="0 0 200 200" 
                  className="w-full h-full relative z-10 drop-shadow-2xl"
                  fill="none"
                >
                  {/* Astronaut Body */}
                  <circle cx="100" cy="80" r="40" fill="rgba(255,255,255,0.1)" stroke="#4245f0" strokeWidth="2"/>
                  <circle cx="100" cy="80" r="30" fill="#1e293b" stroke="#4245f0" strokeWidth="1"/>
                  <circle cx="100" cy="80" r="20" fill="#0f172a"/>
                  
                  {/* Visor Reflection */}
                  <ellipse cx="90" cy="75" rx="8" ry="5" fill="rgba(66,69,240,0.6)"/>
                  
                  {/* Body */}
                  <path d="M70 120 Q100 140 130 120 L130 160 Q100 180 70 160 Z" fill="rgba(255,255,255,0.05)" stroke="#4245f0" strokeWidth="2"/>
                  
                  {/* Backpack */}
                  <rect x="50" y="100" width="20" height="60" rx="5" fill="rgba(66,69,240,0.2)" stroke="#4245f0" strokeWidth="1"/>
                  <rect x="130" y="100" width="20" height="60" rx="5" fill="rgba(66,69,240,0.2)" stroke="#4245f0" strokeWidth="1"/>
                  
                  {/* Floating Particles */}
                  <circle cx="40" cy="60" r="2" fill="#4245f0" opacity="0.6">
                    <animate attributeName="cy" values="60;50;60" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="160" cy="100" r="3" fill="#14b8a6" opacity="0.6">
                    <animate attributeName="cy" values="100;90;100" dur="4s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="150" cy="40" r="2" fill="#6366f1" opacity="0.6">
                    <animate attributeName="cy" values="40;30;40" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex items-center gap-6 text-slate-500 text-sm font-medium"
          >
            <a href="#" className="hover:text-[#4245f0] transition-colors flex items-center gap-1 group">
              <Bug className="size-4 group-hover:rotate-12 transition-transform" />
              Report a bug
            </a>
            <span className="size-1 bg-slate-700 rounded-full"></span>
            <a href="#" className="hover:text-[#4245f0] transition-colors">Help Center</a>
            <span className="size-1 bg-slate-700 rounded-full"></span>
            <a href="#" className="hover:text-[#4245f0] transition-colors">System Status</a>
          </motion.div>
        </main>

        {/* Footer Decoration */}
        <footer className="py-8 text-center text-slate-600 text-xs tracking-widest uppercase">
          © 2024 StartupCollab Ecosystem. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default NotFound;