export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'deployment' | 'analytics';
}

export interface Feature {
  title: string;
  description: string;
}

export interface ProjectImage {
  url: string;
  title: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  longDescription?: string;
  url?: string;
  githubUrl?: string;
  netlifyUrl?: string;
  netlifyBadgeId?: string;
  netlifyBranch?: string;
  technologies: Technology[];
  keyFeatures: Feature[];
  technicalHighlights: string[];
  category: 'fullstack' | 'frontend' | 'backend' | 'mobile';
}
