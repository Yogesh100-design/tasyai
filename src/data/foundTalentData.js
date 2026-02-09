import { 
  Eye, 
  Zap, 
  TrendingUp 
} from 'lucide-react';

export const candidates = [
  {
    id: 1,
    name: 'Marcus Thorne',
    role: 'Senior Full-Stack Developer',
    experience: '8 Years Experience',
    location: 'London',
    matchScore: 98,
    status: 'online',
    badge: 'Top 5% Talent',
    badgeColor: 'emerald',
    quote: 'Passionate about scaling series-A startups through design-led engineering and high-performance React architectures.',
    skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    image: 'https://i.pravatar.cc/150?u=marcus'
  },
  {
    id: 2,
    name: 'Elena Rodriguez',
    role: 'Lead UI Designer',
    experience: '6 Years Experience',
    location: 'Madrid',
    matchScore: 94,
    status: 'offline',
    badge: 'UI/UX Specialist',
    badgeColor: 'blue',
    quote: 'Specialized in creating seamless glassmorphic design systems that bridge the gap between aesthetics and functionality.',
    skills: ['Figma', 'Tailwind', 'Prototyping', 'Motion'],
    image: 'https://i.pravatar.cc/150?u=elena'
  },
  {
    id: 3,
    name: 'Julian Vosh',
    role: 'Product Manager',
    experience: '10 Years Experience',
    location: 'Remote',
    matchScore: 91,
    status: 'online',
    badge: 'Former CTO',
    badgeColor: 'primary',
    quote: 'Experienced product leader with a focus on AI-driven SaaS growth and high-level technical strategy.',
    skills: ['Leadership', 'Python', 'Roadmap', 'MLOps'],
    image: 'https://i.pravatar.cc/150?u=julian'
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'Frontend Developer',
    experience: '4 Years Experience',
    location: 'Singapore',
    matchScore: 89,
    status: 'online',
    badge: 'Rising Star',
    badgeColor: 'amber',
    quote: 'Frontend wizard obsessed with micro-interactions and performance optimization in modern web apps.',
    skills: ['Vue.js', 'Nuxt', 'GSAP'],
    image: 'https://i.pravatar.cc/150?u=david'
  },
  {
    id: 5,
    name: 'Sarah Jenkins',
    role: 'Engineering Manager',
    experience: '12 Years Experience',
    location: 'New York',
    matchScore: 87,
    status: 'away',
    badge: 'Systems Architect',
    badgeColor: 'purple',
    quote: 'Deep expertise in building distributed systems and managing high-growth engineering teams in hyper-scale environments.',
    skills: ['Go', 'Kubernetes', 'Rust'],
    image: 'https://i.pravatar.cc/150?u=sarah'
  }
];

export const roles = [
  { name: 'All Roles', count: 128 },
  { name: 'Lead UI Designer', count: 12 },
  { name: 'Full-Stack Developer', count: 45 },
  { name: 'Product Manager', count: 8 },
  { name: 'Growth Marketer', count: 21 }
];

export const stats = [
  { label: 'Total Views', value: '14.2k', icon: Eye, color: 'primary' },
  { label: 'New Interests', value: '128', icon: Zap, color: 'emerald' },
  { label: 'Conversion Rate', value: '4.8%', icon: TrendingUp, color: 'amber' }
];
