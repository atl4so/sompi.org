import { Project } from '../types/project';

export const projects: Project[] = [
  {
    name: 'Euroleague.bet',
    description: 'A full-stack web application for Euroleague basketball predictions, featuring automated points calculation, comprehensive game statistics, detailed prediction analytics, and user performance tracking powered by Supabase.',
    category: 'fullstack',
    url: 'https://euroleague.bet',
    githubUrl: 'https://github.com/atl4so/hoops-prediction-hub',
    netlifyUrl: 'https://app.netlify.com/sites/euroleaguebet/deploys',
    netlifyBadgeId: '96d4e135-d308-4819-ad0c-6fe6ae78f374',
    netlifyBranch: 'main',
    technologies: [
      { name: 'React 18', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Vite', category: 'frontend' },
      { name: 'Tailwind CSS', category: 'frontend' },
      { name: 'Shadcn UI', category: 'frontend' },
      { name: 'TanStack Query', category: 'frontend' },
      { name: 'Supabase', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Netlify', category: 'deployment' },
      { name: 'Google Analytics', category: 'analytics' },
    ],
    keyFeatures: [
      {
        title: 'Automated Points System',
        description: 'Smart points calculation based on prediction accuracy and game outcomes.'
      },
      {
        title: 'Real-time Updates',
        description: 'Live updates of game results and leaderboard standings.'
      },
      {
        title: 'Comprehensive Statistics',
        description: 'Detailed game statistics and prediction analytics powered by Basketball API.'
      },
      {
        title: 'User Performance Tracking',
        description: 'Personal statistics dashboard showing prediction success rates and points earned.'
      },
      {
        title: 'Responsive Design',
        description: 'Mobile-first approach ensuring perfect display across all device sizes.'
      },
      {
        title: 'Analytics Integration',
        description: 'Comprehensive tracking with Google Analytics 4 for user behavior insights.'
      }
    ],
    technicalHighlights: [
      'Built with React 18 and TypeScript for type-safe development',
      'Optimized build process using Vite for faster development and production builds',
      'Integrated with Supabase for secure authentication and real-time database updates',
      'Automated points calculation system using PostgreSQL triggers',
      'Mobile-first responsive design with adaptive layouts and touch interactions',
      'Comprehensive SEO optimization with dynamic meta tags and rich snippets',
      'Basketball API integration for comprehensive game statistics',
      'Continuous Integration/Deployment through GitHub and Netlify',
      'Automated build and deployment pipeline with Netlify for instant updates',
      'Google Analytics 4 integration for user behavior tracking',
      'XML sitemap generation and Google Search Console integration',
      'Automated deployment status badges and preview deployments',
      'Edge Functions for secure backend operations and complex calculations',
      'Responsive images and optimized assets for mobile devices'
    ]
  },
  {
    name: 'Euronba.com',
    description: 'A specialized web application focused on EuroLeague basketball statistics, providing game schedules and comprehensive team and player statistics. Built to serve basketball fans with accurate, real-time EuroLeague data.',
    category: 'frontend',
    url: 'https://euronba.com',
    githubUrl: 'https://github.com/atl4so/euroball-stats-hub',
    netlifyUrl: 'https://app.netlify.com/sites/euroleaguedata/deploys',
    netlifyBadgeId: 'f82fc9a8-2200-4395-838d-ace53742ce23',
    netlifyBranch: 'main',
    technologies: [
      { name: 'React 18', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Vite', category: 'frontend' },
      { name: 'Tailwind CSS', category: 'frontend' },
      { name: 'Shadcn UI', category: 'frontend' },
      { name: 'TanStack Query', category: 'frontend' },
      { name: 'Framer Motion', category: 'frontend' },
      { name: 'Date-fns', category: 'frontend' },
      { name: 'Netlify', category: 'deployment' },
      { name: 'Google Analytics', category: 'analytics' },
    ],
    keyFeatures: [
      {
        title: 'Live Game Center',
        description: 'Real-time game schedules, scores, and round-by-round navigation with arena information.'
      },
      {
        title: 'Team Hub',
        description: 'Comprehensive team profiles including rosters, game schedules, and arena details.'
      },
      {
        title: 'Player Information',
        description: 'Detailed player profiles with position, number, and team affiliation.'
      },
      {
        title: 'Direct API Integration',
        description: 'Custom XML parsing and transformation for real-time data from EuroLeague API.'
      },
      {
        title: 'Mobile-First Design',
        description: 'Responsive layouts with smooth animations and intuitive navigation.'
      }
    ],
    technicalHighlights: [
      'Built with React 18 and TypeScript for type-safe development',
      'Efficient data fetching and caching with TanStack Query',
      'Custom XML to JSON transformation for EuroLeague API integration',
      'Modular component architecture with reusable shadcn/ui components',
      'Smooth list animations using Framer Motion',
      'Mobile-first responsive design using Tailwind CSS',
      'Optimized data fetching with efficient cache invalidation',
      'Continuous deployment through GitHub and Netlify',
      'Implemented code splitting for optimal performance',
      'Google Analytics 4 integration for user behavior tracking',
      'Responsive layouts optimized for all device sizes'
    ]
  },
  {
    name: 'Kasparchive.com',
    description: 'A modern web application for debunking myths about Kaspa cryptocurrency, serving as a comprehensive knowledge base with FAQ, myth debunking, and fact verification capabilities.',
    category: 'frontend',
    url: 'https://kasparchive.com',
    githubUrl: 'https://github.com/atl4so/kaspa-truth-teller',
    netlifyUrl: 'https://app.netlify.com/sites/kasparchive/deploys',
    netlifyBadgeId: '85d21141-ac20-4728-999c-84a2eee44a7f',
    netlifyBranch: 'main',
    technologies: [
      { name: 'React 18', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Vite', category: 'frontend' },
      { name: 'Tailwind CSS', category: 'frontend' },
      { name: 'Shadcn UI', category: 'frontend' },
      { name: 'React Router', category: 'frontend' },
      { name: 'React Query', category: 'frontend' },
      { name: 'Netlify', category: 'deployment' },
      { name: 'Google Analytics', category: 'analytics' },
    ],
    keyFeatures: [
      {
        title: 'Comprehensive FAQ',
        description: 'Well-organized frequently asked questions about Kaspa cryptocurrency with detailed answers.'
      },
      {
        title: 'Category Filtering',
        description: 'Advanced filtering system to easily find relevant information by categories.'
      },
      {
        title: 'SEO Optimization',
        description: 'Optimized content structure with dynamic meta tags for better search engine visibility.'
      },
      {
        title: 'Social Sharing',
        description: 'Built-in functionality to easily share content across social media platforms.'
      },
      {
        title: 'Responsive Design',
        description: 'Mobile-first approach ensuring perfect display across all device sizes.'
      },
      {
        title: 'Analytics Integration',
        description: 'Comprehensive tracking with Google Analytics 4 for user behavior insights.'
      }
    ],
    technicalHighlights: [
      'Built with React 18 and TypeScript for type-safe, modern development',
      'Optimized build process using Vite for faster development and production builds',
      'Component-based architecture with custom hooks for reusable logic',
      'Efficient state management with React Query for data fetching',
      'Comprehensive SEO optimization with meta tags, Open Graph, and Twitter Cards',
      'Mobile-first responsive design using Tailwind CSS and Shadcn UI',
      'Continuous deployment through GitHub and Netlify integration',
      'Implemented code splitting and lazy loading for optimal performance',
      'Google Analytics 4 integration for user behavior tracking',
      'XML sitemap generation and Google Search Console integration',
      'Automated deployment status badges and preview deployments',
      'Responsive images and optimized assets for mobile devices',
      'Progressive Web App (PWA) capabilities for offline access'
    ]
  }
];
