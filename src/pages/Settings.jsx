import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/layout/Sidebar';
import { 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Check,
  ToggleLeft,
  ToggleRight,
  ChevronRight,
  Mail,
  Lock,
  Globe
} from 'lucide-react';

const Settings = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('Account');
  
  // Mock State for Toggles
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: false,
    security: true
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'Public',
    showEmail: false,
    onlineStatus: true
  });

  const handleNotificationToggle = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const tabs = [
    { id: 'Account', icon: User, label: 'Account' },
    { id: 'Notifications', icon: Bell, label: 'Notifications' },
    { id: 'Privacy', icon: Shield, label: 'Privacy & Security' },
    { id: 'Billing', icon: CreditCard, label: 'Billing' },
  ];

  return (
    <div className="bg-[#020617] text-slate-100 font-sans min-h-screen flex overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <motion.main 
        layout
        className={`flex-1 overflow-y-auto h-full bg-[#020617] ${isSidebarOpen ? 'md:ml-72' : 'md:ml-20'}`}
      >
        <div className="max-w-5xl mx-auto px-8 py-12 pb-32">
          <div className="mb-10">
            <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Settings</h1>
            <p className="text-slate-400 text-lg">Manage your account preferences and configurations.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation for Settings */}
            <div className="lg:w-64 flex-shrink-0">
               <nav className="space-y-2 sticky top-8">
                 {tabs.map((tab) => {
                   const Icon = tab.icon;
                   return (
                     <button
                       key={tab.id}
                       onClick={() => setActiveTab(tab.id)}
                       className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                         activeTab === tab.id 
                           ? 'bg-[#4245f0] text-white shadow-lg shadow-[#4245f0]/20' 
                           : 'text-slate-400 hover:text-white hover:bg-white/5'
                       }`}
                     >
                       <Icon className="size-5" />
                       {tab.label}
                     </button>
                   )
                 })}
               </nav>
            </div>

            {/* Content Area */}
            <div className="flex-1 min-w-0">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.3 }}
                 className="space-y-6"
               >
                 {activeTab === 'Account' && (
                   <div className="space-y-6">
                     {/* Section: Profile */}
                     <section className="glass rounded-2xl p-8 border border-white/10">
                       <h2 className="text-xl font-bold text-white mb-6">Profile Information</h2>
                       
                       <div className="flex items-center gap-6 mb-8">
                         <div className="size-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white shadow-xl shadow-indigo-500/20">
                           AR
                         </div>
                         <div>
                           <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors mb-2">
                             Change Avatar
                           </button>
                           <p className="text-xs text-slate-500">JPG, GIF or PNG. Max size of 800K</p>
                         </div>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                           <label className="text-xs font-bold text-slate-400 uppercase">First Name</label>
                           <input type="text" defaultValue="Alex" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-[#4245f0] outline-none" />
                         </div>
                         <div className="space-y-2">
                           <label className="text-xs font-bold text-slate-400 uppercase">Last Name</label>
                           <input type="text" defaultValue="Rivera" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-[#4245f0] outline-none" />
                         </div>
                         <div className="space-y-2 md:col-span-2">
                           <label className="text-xs font-bold text-slate-400 uppercase">Bio</label>
                           <textarea rows="4" defaultValue="Building decentralized futures | UX Engineer" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-[#4245f0] outline-none resize-none" />
                         </div>
                       </div>
                       
                       <div className="mt-8 flex justify-end">
                         <button className="px-6 py-2.5 bg-[#4245f0] hover:bg-[#4245f0]/90 text-white font-bold rounded-xl shadow-lg shadow-[#4245f0]/20 transition-all flex items-center gap-2">
                           <Check className="size-4" />
                           Save Changes
                         </button>
                       </div>
                     </section>

                     {/* Section: Email */}
                     <section className="glass rounded-2xl p-8 border border-white/10">
                        <h2 className="text-xl font-bold text-white mb-6">Email Address</h2>
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/5 rounded-lg">
                              <Mail className="size-5 text-slate-300" />
                            </div>
                            <div>
                              <p className="text-white font-medium">alex.rivera@tasyai.dev</p>
                              <p className="text-xs text-green-400 flex items-center gap-1 mt-0.5">
                                <Check className="size-3" /> Verified
                              </p>
                            </div>
                          </div>
                          <button className="text-sm font-medium text-[#4245f0] hover:text-[#4245f0]/80">Change</button>
                        </div>
                     </section>
                   </div>
                 )}

                 {activeTab === 'Notifications' && (
                    <section className="glass rounded-2xl p-8 border border-white/10">
                       <h2 className="text-xl font-bold text-white mb-6">Notification Preferences</h2>
                       <div className="space-y-6">
                         {Object.entries(notifications).map(([key, value]) => (
                           <div key={key} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                             <div>
                               <p className="text-white font-medium capitalize">{key} Notifications</p>
                               <p className="text-sm text-slate-400">Receive updates about {key} events.</p>
                             </div>
                             <button 
                               onClick={() => handleNotificationToggle(key)}
                               className={`relative w-12 h-6 rounded-full transition-colors ${value ? 'bg-[#4245f0]' : 'bg-slate-700'}`}
                             >
                               <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${value ? 'translate-x-6' : 'translate-x-0'}`} />
                             </button>
                           </div>
                         ))}
                       </div>
                    </section>
                 )}

                 {activeTab === 'Privacy' && (
                    <section className="glass rounded-2xl p-8 border border-white/10">
                       <h2 className="text-xl font-bold text-white mb-6">Privacy & Security</h2>
                       <div className="space-y-6">
                         <button className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-colors group">
                           <div className="flex items-center gap-4">
                             <div className="p-3 bg-white/5 rounded-lg">
                               <Lock className="size-5 text-slate-300" />
                             </div>
                             <div className="text-left">
                               <p className="text-white font-medium">Change Password</p>
                               <p className="text-xs text-slate-400">Update your security credentials</p>
                             </div>
                           </div>
                           <ChevronRight className="size-5 text-slate-500 group-hover:text-white transition-colors" />
                         </button>
                         
                         <button className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-colors group">
                           <div className="flex items-center gap-4">
                             <div className="p-3 bg-white/5 rounded-lg">
                               <Globe className="size-5 text-slate-300" />
                             </div>
                             <div className="text-left">
                               <p className="text-white font-medium">Active Sessions</p>
                               <p className="text-xs text-slate-400">Manage your logged-in interactions</p>
                             </div>
                           </div>
                           <ChevronRight className="size-5 text-slate-500 group-hover:text-white transition-colors" />
                         </button>
                       </div>
                    </section>
                 )}

                 {activeTab === 'Billing' && (
                    <section className="glass rounded-2xl p-8 border border-white/10 text-center py-20">
                       <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                         <CreditCard className="size-10 text-slate-500" />
                       </div>
                       <h2 className="text-xl font-bold text-white mb-2">No Active Subscription</h2>
                       <p className="text-slate-400 max-w-md mx-auto mb-8">You are currently on the free plan. Upgrade to unlock premium features and higher limits.</p>
                       <button className="px-8 py-3 bg-[#4245f0] hover:bg-[#4245f0]/90 text-white font-bold rounded-xl shadow-lg shadow-[#4245f0]/20 transition-all">
                         View Plans
                       </button>
                    </section>
                 )}
               </motion.div>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default Settings;
