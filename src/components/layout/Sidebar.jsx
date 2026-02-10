import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Rocket,
  Compass,
  Star,
  User,
  Book,
  Settings,
  X
} from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`w-72 h-full flex flex-col sidebar-glass fixed left-0 top-0 z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-8 flex flex-col h-full relative">
          {/* Close Button (Mobile) */}
          <button 
            onClick={toggleSidebar}
            className="absolute right-4 top-4 p-2 text-slate-400 hover:text-white md:hidden"
          >
            <X className="size-5" />
          </button>

          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <div className="size-10 rounded-lg bg-gradient-to-br from-[#6467f2] to-indigo-400 flex items-center justify-center indigo-glow">
              <Rocket className="text-white size-5 font-bold" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white">Tasyai</h1>
              <p className="text-xs text-slate-400">Discovery Engine</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            <Link 
              to="/dashboard" 
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive('/dashboard')
                  ? 'bg-[#6467f2]/20 text-[#6467f2] border border-[#6467f2]/20'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Compass className={`size-[22px] ${isActive('/dashboard') ? 'fill-current' : ''}`} />
              <span className="text-sm font-semibold">Discover Companies</span>
            </Link>
            
            <Link 
              to="/dashboard" 
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all"
            >
              <Star className="size-[22px]" />
              <span className="text-sm font-medium">My Interests</span>
            </Link>
            
            <Link 
              to="/dashboard" 
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all"
            >
              <Book className="size-[22px]" />
              <span className="text-sm font-medium">Saved Companies</span>
            </Link>

            <Link 
              to="/found-talent" 
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive('/found-talent')
                  ? 'bg-[#6467f2]/20 text-[#6467f2] border border-[#6467f2]/20'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <User className={`size-[22px] ${isActive('/found-talent') ? 'fill-current' : ''}`} />
              <span className="text-sm font-semibold">Peoples</span>
            </Link>
          </nav>

          {/* Bottom Section */}
          <div className="mt-auto pt-6 border-t border-white/10">
            <Link 
              to="/profile" 
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all"
            >
              <Settings className="size-[22px]" />
              <span className="text-sm font-medium">Settings</span>
            </Link>
            
            {/* Profile */}
            <Link to="/profile" className="mt-4 flex items-center gap-3 px-2 hover:bg-white/5 rounded-xl py-2 transition-colors">
              <div className="size-10 rounded-full border border-white/10 overflow-hidden bg-gradient-to-br from-primary/30 to-purple-500/30">
                <div className="w-full h-full flex items-center justify-center text-white font-bold text-sm">
                  AR
                </div>
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-semibold text-white truncate">Alex Rivera</p>
                <p className="text-xs text-slate-500 truncate">Product Designer</p>
              </div>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
