import { 
  MapPin, 
  Coins, 
  Clock, 
  Brain, 
  Leaf, 
  Share2, 
  Sun, 
  Cloud, 
  HeartPulse, 
  Bot, 
  Shield 
} from 'lucide-react';

export const filters = [
  { name: 'All Roles', icon: null },
  { name: 'Remote', icon: MapPin },
  { name: 'Equity', icon: Coins },
  { name: 'Full-time', icon: Clock },
  { name: 'AI/ML', icon: Brain },
  { name: 'Sustainability', icon: Leaf },
];

export const companies = [
  {
    id: 1,
    name: 'Aura AI',
    description: 'Building the next generation of generative AI agents for enterprise automation and creative workflows.',
    icon: Share2,
    color: 'primary',
    roles: ['Lead Dev', 'UX Designer'],
    saved: false
  },
  {
    id: 2,
    name: 'Lumina',
    description: 'Sustainable energy solutions for modern cities through smart grid integration and storage.',
    icon: Sun,
    color: 'orange',
    roles: ['Frontend Eng', 'Product Manager'],
    saved: false
  },
  {
    id: 3,
    name: 'Nebula Systems',
    description: 'Decentralized cloud infrastructure optimized for Web3 applications and high-security distributed data storage.',
    icon: Cloud,
    color: 'emerald',
    roles: ['Backend Eng', 'DevOps'],
    saved: true
  },
  {
    id: 4,
    name: 'Pulse Tech',
    description: 'Real-time health monitoring and predictive analytics for personalized healthcare and athlete performance.',
    icon: HeartPulse,
    color: 'rose',
    roles: ['Data Scientist', 'ML Eng'],
    saved: false
  },
  {
    id: 5,
    name: 'Vertex Labs',
    description: 'Next-gen robotics for automated logistics, specialized in last-mile delivery and warehouse efficiency.',
    icon: Bot,
    color: 'cyan',
    roles: ['Hardware Eng', 'Product Designer'],
    saved: false
  },
  {
    id: 6,
    name: 'Cipher Stream',
    description: 'Privacy-first data streaming and encryption services for high-compliance industries like Finance and Defense.',
    icon: Shield,
    color: 'purple',
    roles: ['Security Lead', 'Fullstack Dev'],
    saved: false
  }
];
