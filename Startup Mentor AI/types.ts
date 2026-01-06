
export enum MentorId {
  ELON = 'elon',
  SUNDAR = 'sundar',
  SATYA = 'satya'
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  description: string;
  personality: string;
  image: string;
  accentColor: string;
  experience: string;
  techExpertise: string[];
}

export interface MentorshipResponse {
  perspective: string;
  evaluation: string;
  problem: string;
  solution: string;
  plan: string[];
  techStack: {
    frontend: string;
    backend: string;
    database: string;
    ai: string;
    hosting: string;
  };
  growthStrategy: string;
  finalAdvice: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: string;
}
