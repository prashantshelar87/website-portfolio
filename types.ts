
export interface Project {
  title: string;
  customer?: string;
  description: string;
  details?: string[];
  tags: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
  isCurrent?: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  score: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}
