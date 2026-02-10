import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/layout/Sidebar';
import { 
  Rocket,
  ChevronDown,
  Plus,
  Filter,
  ArrowUpDown,
  Bookmark,
  UserPlus,
  Menu
} from 'lucide-react';
import { candidates, roles, stats } from '../data/foundTalentData';

import { useNavigate } from 'react-router-dom';

const FoundTalent = () => {
  const navigate = useNavigate();
  const [activeRole, setActiveRole] = useState('All Roles');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  


  const getStatusColor = (status) => {
    const colors = {
      online: 'bg-emerald-500',
      offline: 'bg-slate-500',
      away: 'bg-amber-500'
    };
    return colors[status] || 'bg-slate-500';
  };

  const getBadgeColor = (color) => {
    const colors = {
      emerald: 'bg-emerald-500/10 text-emerald-500',
      blue: 'bg-blue-500/10 text-blue-500',
      primary: 'bg-[#4245f0]/10 text-[#4245f0]',
      amber: 'bg-amber-500/10 text-amber-500',
      purple: 'bg-purple-500/10 text-purple-500'
    };
    return colors[color] || colors.primary;
  };

  return (
    <div className="bg-[#020617] text-slate-100 font-sans min-h-screen overflow-hidden h-screen">
      {/* Global Styles */}


      <div className="flex h-screen w-full relative">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className={`flex-1 overflow-y-auto h-full bg-[#020617] transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-0'}`}>
          {/* Header */}
          <header className="sticky top-0 z-50 w-full glass border-b border-white/10 px-6 py-4">
            <div className="max-w-[1600px] mx-auto flex items-center justify-between">
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
                >
                  <Menu className="size-6" />
                </button>
                
                {/* Branding */}
                <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center shadow-lg shadow-[#4245f0]/20">
                <Rocket className="text-white size-5" />
              </div>
              <div>
                <h1 className="text-xl font-extrabold tracking-tight">Tasyai</h1>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-500">Active</span>
                </div>
              </div>
            </div>
            
            {/* Company Switcher */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
                <span className="text-sm font-medium">Switch Company</span>
                <ChevronDown className="size-4 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="px-5 py-2.5 text-sm font-semibold rounded-lg border border-white/10 hover:bg-white/5 transition-all">
              Edit Company
            </button>
            <motion.button 
              onClick={() => navigate('/add-company')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 text-sm font-semibold rounded-lg gradient-primary text-white shadow-xl shadow-[#4245f0]/20 flex items-center gap-2 hover:opacity-90 transition-all"
            >
              <Plus className="size-4" />
              Add New Role
            </motion.button>
            
            <div className="ml-4 pl-4 border-l border-white/10">
              <div className="w-10 h-10 rounded-full border-2 border-[#4245f0]/50 bg-gradient-to-br from-primary/30 to-purple-500/30 flex items-center justify-center text-white font-bold text-sm">
                FR
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-6 py-8 space-y-8">
        {/* Insights Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const colorClasses = {
              primary: 'bg-[#4245f0]/10 text-[#4245f0]',
              emerald: 'bg-emerald-500/10 text-emerald-500',
              amber: 'bg-amber-500/10 text-amber-500'
            };
            
            return (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl flex items-center justify-between"
              >
                <div>
                  <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">{stat.label}</p>
                  <h3 className="text-3xl font-extrabold">{stat.value}</h3>
                </div>
                <div className={`p-3 rounded-lg ${colorClasses[stat.color]}`}>
                  <IconComponent className="size-6" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Roles Navigation */}
        <div className="flex items-center gap-4 overflow-x-auto pb-2 no-scrollbar">
          {roles.map((role) => {
            const isActive = activeRole === role.name;
            return (
              <motion.button
                key={role.name}
                onClick={() => setActiveRole(role.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-6 py-3 rounded-full whitespace-nowrap transition-all ${
                  isActive 
                    ? 'bg-[#4245f0] text-white font-semibold' 
                    : 'glass hover:bg-white/10'
                }`}
              >
                <span className="font-medium">{role.name}</span>
                {!isActive && (
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-[#4245f0]/20 text-[#4245f0] group-hover:bg-[#4245f0] group-hover:text-white transition-colors">
                    {role.count}
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Main Talent List Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold">
              Interested Talent <span className="text-[#4245f0] font-normal text-lg ml-2">(128)</span>
            </h2>
            <div className="flex items-center gap-3">
              <button className="glass p-2 rounded-lg flex items-center justify-center hover:bg-white/10">
                <Filter className="size-5" />
              </button>
              <button className="glass p-2 rounded-lg flex items-center justify-center hover:bg-white/10">
                <ArrowUpDown className="size-5" />
              </button>
            </div>
          </div>

          {/* Candidate Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {candidates.map((candidate, index) => (
              <motion.div
                key={candidate.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl space-y-6 glass-hover group cursor-pointer"
              >
                {/* Card Header */}
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <div className="relative">
                      <img 
                        alt={candidate.name} 
                        className="w-16 h-16 rounded-xl object-cover border border-white/10"
                        src={candidate.image}
                      />
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-4 border-[#020617] ${getStatusColor(candidate.status)}`}></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-[#4245f0] transition-colors">{candidate.name}</h3>
                      <p className="text-slate-400 text-sm">{candidate.experience} • {candidate.location}</p>
                      <div className={`mt-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase ${getBadgeColor(candidate.badgeColor)}`}>
                        {candidate.badge}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-extrabold text-[#4245f0]">{candidate.matchScore}%</div>
                    <div className="text-[10px] uppercase font-bold text-slate-500">Match Score</div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <p className="text-sm text-slate-300 line-clamp-2 italic leading-relaxed">
                    "{candidate.quote}"
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {candidate.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <button className="flex-1 py-2.5 text-xs font-bold rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
                    View Profile
                  </button>
                  <button className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all group/btn">
                    <Bookmark className="size-5 text-slate-400 group-hover/btn:text-[#4245f0]" />
                  </button>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-2.5 text-xs font-bold rounded-lg gradient-primary text-white shadow-lg shadow-[#4245f0]/20 hover:opacity-90 transition-all"
                  >
                    Contact
                  </motion.button>
                </div>
              </motion.div>
            ))}

            {/* Empty State Card */}
            <div className="glass p-6 rounded-xl flex flex-col items-center justify-center opacity-50 border-dashed border-2 border-white/10 min-h-[320px]">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <UserPlus className="size-8" />
              </div>
              <div className="text-center space-y-1">
                <h3 className="font-bold">Discover more talent</h3>
                <p className="text-xs text-slate-400">Boost your role listing to reach more candidates.</p>
              </div>
              <button className="mt-4 px-6 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-all">
                Promote Listing
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 pb-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2024 Tasyai Talent Dashboard. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#4245f0] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#4245f0] transition-colors">Help Center</a>
            <a href="#" className="hover:text-[#4245f0] transition-colors">System Status</a>
          </div>
        </footer>
      </div>
    </main>
  </div>
</div>
  );
};

export default FoundTalent;