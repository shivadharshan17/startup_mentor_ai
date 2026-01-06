
import { Mentor, FeatureCard } from './types';

/**
 * Using weserv.nl proxy to ensure images are correctly processed and bypass hotlinking restrictions.
 * These specific links provided by the user are wrapped in the proxy for stable loading.
 */
const proxy = (url: string) => `https://images.weserv.nl/?url=${encodeURIComponent(url)}&w=800&h=800&fit=cover&a=top`;

export const MENTORS: Mentor[] = [
  {
    id: "elon",
    name: "Elon Musk",
    role: "CEO, Tesla & SpaceX",
    description: "Expert in first-principles thinking and hard-engineering innovation.",
    personality: "Physics-driven, extremely high risk tolerance, and focused on vertically integrated scale.",
    image: proxy("https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg"),
    accentColor: "from-[#1A73E8] to-slate-500",
    experience: "Founder of PayPal, SpaceX, Tesla, Neuralink, and xAI. Master of manufacturing and AI hardware.",
    techExpertise: ["C++", "Python", "Rocketry", "Neural Nets"]
  },
  {
    id: "sundar",
    name: "Sundar Pichai",
    role: "CEO, Google & Alphabet",
    description: "Master of global scale and the AI-first transition.",
    personality: "Measured, collaborative, and focused on organized information accessibility for everyone.",
    image: proxy("https://media.licdn.com/dms/image/v2/D4E03AQFrmDuWUxQoMg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715645354619?e=2147483647&v=beta&t=dkLl7DSveuVd5sakuJ-nk0akumosrA4bx8UCOytIsh0"),
    accentColor: "from-[#4285F4] to-[#34A853]",
    experience: "Led Google Chrome and Android. Now spearheading the Gemini era and global search infrastructure.",
    techExpertise: ["Distributed Systems", "Cloud Computing", "AI Strategy"]
  },
  {
    id: "sam_altman",
    name: "Sam Altman",
    role: "CEO, OpenAI",
    description: "Visionary behind AGI and exponential startup scaling.",
    personality: "Strategically aggressive, fast-moving, and scale-obsessed builder.",
    image: proxy("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4GxnI2bOzOAQ9NpRvvHCkHQBXFQriXj8pgg&s"),
    accentColor: "from-slate-700 to-blue-400",
    experience: "Former President of Y Combinator. Co-founder of OpenAI. Expert in scaling power laws and AGI.",
    techExpertise: ["LLMs", "AGI Safety", "Venture Growth"]
  },
  {
    id: "bill_gates",
    name: "Bill Gates",
    role: "Co-founder, Microsoft",
    description: "Pioneer of the PC era and global software standard architecture.",
    personality: "Analytical, polymathic, and deeply systematic in approach to complex global systems.",
    image: proxy("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZVtiDW6ZhvvWgq5SYoD8X2c2LtS5nycvLA&s"),
    accentColor: "from-[#1A73E8] to-blue-800",
    experience: "Dominated the PC software era. Now architecting global climate and public health solutions.",
    techExpertise: ["System Architecture", "Software Licensing", "BASIC"]
  },
  {
    id: "jeff_bezos",
    name: "Jeff Bezos",
    role: "Founder, Amazon",
    description: "Master of customer obsession and long-term flywheel strategy.",
    personality: "Operationally rigorous, data-driven, and focused on 'Day 1' philosophy.",
    image: proxy("https://i.guim.co.uk/img/media/ef573276855d9e04aaed3dae615757a8725e52d9/297_329_2974_1784/master/2974.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=54907bf26973da8d098262abe333b802"),
    accentColor: "from-[#FF9900] to-slate-800",
    experience: "Built Amazon and AWS. Invented the infrastructure for modern e-commerce and cloud computing.",
    techExpertise: ["Cloud Economics", "Logistics", "AWS"]
  },
  {
    id: "pavel_durov",
    name: "Pavel Durov",
    role: "CEO, Telegram",
    description: "Privacy-first advocate and decentralized platform pioneer.",
    personality: "Independent, defiant, and focused on secure, neutral, high-performance communication.",
    image: proxy("https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2187899877.jpg?c=16x9&q=h_833,w_1480,c_fill"),
    accentColor: "from-sky-500 to-blue-600",
    experience: "Founder of VK and Telegram. Expert in massive-scale messaging infrastructure and cryptography.",
    techExpertise: ["Cryptography", "C++", "Platform Neutrality"]
  }
];

export const FEATURES: FeatureCard[] = [
  {
    title: "Legendary Mentorship",
    description: "Deep-fidelity strategic mentorship from the world's most successful technical pioneers.",
    icon: "🌟"
  },
  {
    title: "Strategic Roadmaps",
    description: "Battle-tested plans taking you from concept to global scale with absolute precision.",
    icon: "🚀"
  },
  {
    title: "Intelligent Guidance",
    description: "Utilizing Gemini 3 for coherent, persona-driven business analysis and deep reasoning.",
    icon: "⚡"
  },
  {
    title: "Technical Depth",
    description: "Detailed stack recommendations tailored to each mentor's specific engineering philosophy.",
    icon: "🎓"
  }
];
