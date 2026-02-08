import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot,
  Rocket,
  Users,
  DollarSign,
  MoreHorizontal,
  Send,
  CheckCircle2,
  Briefcase,
  MapPin,
  Code2,
  Target,
  Sparkles
} from 'lucide-react';

const OnboardingChatbot = ({ onComplete }) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({
    role: '',
    experience: '',
    location: '',
    skills: [],
    interests: '',
    goals: ''
  });
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    { type: 'bot', content: "Hi! Let's set up your profile 👋", delay: 0 },
    { type: 'bot', content: "What role best describes your position in the startup ecosystem?", delay: 500 }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const messagesEndRef = useRef(null);

  const totalSteps = 7;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const steps = [
    {
      id: 'role',
      question: "What role best describes your position in the startup ecosystem?",
      options: [
        { id: 'founder', label: 'Founder', icon: Rocket, desc: 'Building the vision and managing the core team.' },
        { id: 'employee', label: 'Employee / Collaborator', icon: Users, desc: 'Contributing expertise to help the startup scale.' },
        { id: 'investor', label: 'Investor', icon: DollarSign, desc: 'Providing capital and strategic guidance.' },
        { id: 'other', label: 'Other', icon: MoreHorizontal, desc: 'Mentors, advisors, or curious explorers.' }
      ]
    },
    {
      id: 'experience',
      question: "How many years of experience do you have in startups?",
      options: [
        { id: '0-2', label: '0-2 years', icon: Sparkles, desc: 'Just getting started' },
        { id: '3-5', label: '3-5 years', icon: Briefcase, desc: 'Building momentum' },
        { id: '6-10', label: '6-10 years', icon: Target, desc: 'Seasoned professional' },
        { id: '10+', label: '10+ years', icon: CheckCircle2, desc: 'Veteran expert' }
      ]
    },
    {
      id: 'location',
      question: "Where are you currently based?",
      input: true,
      placeholder: "e.g., San Francisco, CA or Remote"
    },
    {
      id: 'skills',
      question: "What are your top skills? (Select all that apply)",
      multiSelect: true,
      options: [
        { id: 'react', label: 'React/Frontend' },
        { id: 'node', label: 'Node.js/Backend' },
        { id: 'product', label: 'Product Management' },
        { id: 'design', label: 'UI/UX Design' },
        { id: 'marketing', label: 'Growth Marketing' },
        { id: 'sales', label: 'Sales/Business Dev' }
      ]
    },
    {
      id: 'interests',
      question: "What industries are you most interested in?",
      input: true,
      placeholder: "e.g., AI, FinTech, HealthTech, Climate..."
    },
    {
      id: 'goals',
      question: "What's your main goal on this platform?",
      options: [
        { id: 'find-cofounder', label: 'Find a Co-founder', icon: Users },
        { id: 'find-job', label: 'Find a Job', icon: Briefcase },
        { id: 'hire-talent', label: 'Hire Talent', icon: Rocket },
        { id: 'invest', label: 'Invest in Startups', icon: DollarSign },
        { id: 'network', label: 'Network & Learn', icon: Sparkles }
      ]
    },
    {
      id: 'complete',
      question: "Perfect! Here's a summary of your profile:",
      summary: true
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (type, content, delay = 0) => {
    setTimeout(() => {
      setMessages(prev => [...prev, { type, content }]);
    }, delay);
  };

  const handleOptionSelect = (optionId) => {
    const currentStepData = steps[currentStep];
    
    if (currentStepData.multiSelect) {
      setSelectedOptions(prev => {
        const newSelection = prev.includes(optionId)
          ? prev.filter(id => id !== optionId)
          : [...prev, optionId];
        return newSelection;
      });
    } else {
      setUserData(prev => ({ ...prev, [currentStepData.id]: optionId }));
      setIsTyping(true);
      
      // Add user message
      const selectedOption = currentStepData.options.find(opt => opt.id === optionId);
      addMessage('user', selectedOption.label, 300);
      
      // Move to next step
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsTyping(false);
        
        const nextStep = steps[currentStep + 1];
        if (nextStep) {
          addMessage('bot', nextStep.question, 500);
          if (nextStep.options) {
            // Options will render automatically
          }
        }
      }, 1000);
    }
  };

  const handleMultiSelectConfirm = () => {
    if (selectedOptions.length === 0) return;
    
    setUserData(prev => ({ ...prev, [steps[currentStep].id]: selectedOptions }));
    setIsTyping(true);
    
    const labels = selectedOptions.map(id => 
      steps[currentStep].options.find(opt => opt.id === id).label
    ).join(', ');
    
    addMessage('user', labels, 300);
    
    setTimeout(() => {
      setCurrentStep(prev => prev + 1);
      setSelectedOptions([]);
      setIsTyping(false);
      
      const nextStep = steps[currentStep + 1];
      if (nextStep) {
        addMessage('bot', nextStep.question, 500);
      }
    }, 1000);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const currentStepData = steps[currentStep];
    setUserData(prev => ({ ...prev, [currentStepData.id]: inputValue }));
    
    addMessage('user', inputValue, 0);
    setInputValue('');
    setIsTyping(true);
    
    setTimeout(() => {
      setCurrentStep(prev => prev + 1);
      setIsTyping(false);
      
      const nextStep = steps[currentStep + 1];
      if (nextStep) {
        addMessage('bot', nextStep.question, 500);
      }
    }, 1000);
  };

  const handleSkip = () => {
    setCurrentStep(prev => prev + 1);
    const nextStep = steps[currentStep + 1];
    if (nextStep) {
      addMessage('bot', nextStep.question, 300);
    }
  };

  const handleComplete = () => {
    if (onComplete) {
      onComplete(userData);
    }
    console.log('Profile completed:', userData);
    navigate('/profile');
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="bg-[#020617] text-slate-100 font-sans fixed inset-0 overflow-hidden flex items-center justify-center">
      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          background-color: #020617;
        }
        
        .glass-container {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .bot-bubble {
          background: rgba(30, 41, 59, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .interactive-tile {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .interactive-tile:hover {
          background: rgba(90, 92, 242, 0.1);
          border-color: #5a5cf2;
          transform: translateY(-2px);
        }
        
        .interactive-tile.selected {
          background: rgba(90, 92, 242, 0.2);
          border-color: #5a5cf2;
        }
        
        .ambient-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(90, 92, 242, 0.15) 0%, rgba(90, 92, 242, 0) 70%);
          border-radius: 50%;
          pointer-events: none;
        }
      `}</style>

      {/* Ambient Background */}
      <div className="ambient-glow top-[-10%] left-[-10%]"></div>
      <div className="ambient-glow bottom-[-10%] right-[-10%]"></div>

      <div className="relative w-full max-w-4xl h-[90vh] flex items-center justify-center p-4 md:p-8">
        {/* Main Chat Container */}
        <div className="glass-container w-full h-full flex flex-col rounded-xl overflow-hidden shadow-2xl">
          {/* Top Bar */}
          <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#5a5cf2]/20 flex items-center justify-center border border-[#5a5cf2]/30">
                <Bot className="text-[#5a5cf2] size-5" />
              </div>
              <div>
                <h1 className="text-sm font-semibold text-white">Startup Assistant</h1>
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Always Active</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-slate-400">Step {currentStep + 1} of {totalSteps}</span>
                <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#5a5cf2] shadow-[0_0_8px_rgba(90,92,242,0.6)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </header>

          {/* Conversation Area */}
          <main className="flex-1 overflow-y-auto p-6 space-y-6">
            <AnimatePresence>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`flex items-end gap-3 ${msg.type === 'user' ? 'flex-row-reverse ml-auto' : 'max-w-[80%]'}`}
                >
                  {msg.type === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-white/5">
                      <Bot className="text-slate-400 size-4" />
                    </div>
                  )}
                  <div className={`p-4 rounded-xl ${msg.type === 'user' ? 'bg-[#5a5cf2] text-white rounded-br-none' : 'bot-bubble rounded-bl-none'}`}>
                    <p className="text-sm leading-relaxed text-slate-200">{msg.content}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Options/Input Area */}
            {currentStepData && !isTyping && currentStep < totalSteps - 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="ml-11 max-w-[600px]"
              >
                {/* Options Grid */}
                {currentStepData.options && !currentStepData.input && (
                  <div className={`grid gap-4 ${currentStepData.options.length > 4 ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                    {currentStepData.options.map((option) => {
                      const IconComponent = option.icon;
                      const isSelected = selectedOptions.includes(option.id);
                      
                      return (
                        <button
                          key={option.id}
                          onClick={() => handleOptionSelect(option.id)}
                          className={`interactive-tile group p-5 rounded-xl text-left flex flex-col gap-3 ${isSelected ? 'selected' : ''}`}
                        >
                          {IconComponent && (
                            <div className="w-10 h-10 rounded-lg bg-[#5a5cf2]/10 flex items-center justify-center group-hover:bg-[#5a5cf2]/20 transition-colors">
                              <IconComponent className="text-[#5a5cf2] size-5" />
                            </div>
                          )}
                          <div>
                            <h3 className="font-bold text-white text-base">{option.label}</h3>
                            {option.desc && <p className="text-xs text-slate-400 mt-1">{option.desc}</p>}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Multi-select Confirm Button */}
                {currentStepData.multiSelect && selectedOptions.length > 0 && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={handleMultiSelectConfirm}
                    className="mt-4 px-6 py-3 bg-[#5a5cf2] text-white rounded-xl font-semibold hover:bg-[#5a5cf2]/80 transition-all flex items-center gap-2"
                  >
                    <CheckCircle2 className="size-4" />
                    Confirm Selection ({selectedOptions.length})
                  </motion.button>
                )}


              </motion.div>
            )}

            {/* Summary View */}
            {currentStepData?.summary && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="ml-11 max-w-[600px] glass-container rounded-xl p-6 space-y-4"
              >
                <h3 className="text-lg font-bold text-white mb-4">Your Profile Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-slate-400">Role</span>
                    <span className="text-white font-medium capitalize">{userData.role}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-slate-400">Experience</span>
                    <span className="text-white font-medium">{userData.experience}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-slate-400">Location</span>
                    <span className="text-white font-medium">{userData.location}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-slate-400">Skills</span>
                    <span className="text-white font-medium text-right">
                      {Array.isArray(userData.skills) ? userData.skills.join(', ') : userData.skills}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-slate-400">Interests</span>
                    <span className="text-white font-medium">{userData.interests}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-400">Goal</span>
                    <span className="text-white font-medium capitalize">{userData.goals?.replace('-', ' ')}</span>
                  </div>
                </div>
                <button
                  onClick={handleComplete}
                  className="w-full mt-6 py-4 bg-[#5a5cf2] text-white rounded-xl font-bold hover:bg-[#5a5cf2]/80 transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="size-5" />
                  Complete Profile Setup
                </button>
              </motion.div>
            )}

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-end gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-white/5">
                  <Bot className="text-slate-400 size-4" />
                </div>
                <div className="bot-bubble px-4 py-3 rounded-xl rounded-bl-none flex gap-1">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </main>

          {/* Bottom Input Area */}
          <footer className="p-6 border-t border-white/10">
            {currentStep < totalSteps - 1 && (
              <div className="flex items-center gap-4">
                <button 
                  onClick={handleSkip}
                  className="text-slate-400 hover:text-white transition-colors text-sm font-medium px-4 py-2"
                >
                  Skip
                </button>
                <div className="flex-1 relative group">
                  <form onSubmit={handleInputSubmit} className="w-full">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={currentStepData?.input ? currentStepData.placeholder : "Type your answer here..."}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-6 pr-14 text-white focus:outline-none focus:ring-2 focus:ring-[#5a5cf2]/50 focus:border-[#5a5cf2] transition-all placeholder:text-slate-500"
                    />
                    <button
                      type="submit"
                      disabled={!inputValue.trim()}
                      className="absolute right-2 top-2 bottom-2 w-10 h-10 bg-[#5a5cf2] text-white rounded-lg flex items-center justify-center shadow-lg shadow-[#5a5cf2]/20 hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="size-4" />
                    </button>
                  </form>
                </div>
              </div>
            )}
            <p className="text-center text-[10px] text-slate-500 mt-4 uppercase tracking-[0.2em]">
              Press <span className="text-slate-300 font-bold">Enter</span> to send
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default OnboardingChatbot;