import React from 'react';

const TechnologyOverview: React.FC = () => {
  const skills = {
    frontend: [
      'React 18',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Shadcn UI',
      'TanStack Query',
      'React Router',
      'Framer Motion',
      'Date-fns'
    ],
    backend: [
      'Supabase',
      'PostgreSQL',
      'RESTful APIs',
      'XML Parsing'
    ],
    deployment: [
      'Netlify',
      'Edge Functions',
      'Continuous Integration',
      'GitHub Actions'
    ],
    tools: [
      'Git',
      'GitHub',
      'VS Code',
      'ESLint',
      'Chrome DevTools'
    ]
  };

  const getTechColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'bg-blue-500/20 text-blue-300';
      case 'backend':
        return 'bg-green-500/20 text-green-300';
      case 'deployment':
        return 'bg-pink-500/20 text-pink-300';
      case 'tools':
        return 'bg-orange-500/20 text-orange-300';
      default:
        return 'bg-purple-500/20 text-purple-300';
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 sm:p-8 border border-white/10">
      <h2 className="text-2xl font-bold text-gray-100 mb-6">Technical Skills</h2>
      
      <div className="space-y-8">
        {Object.entries(skills).map(([category, technologies]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-lg font-semibold capitalize text-gray-300">
              {category}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {technologies.map(tech => (
                <div
                  key={tech}
                  className={`px-3 py-1.5 rounded-lg ${getTechColor(category)}`}
                >
                  <span className="text-sm font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyOverview;
