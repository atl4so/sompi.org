import React, { useState } from 'react';
import { Project } from '../types/project';
import { TypewriterText } from './TypewriterText';
import { Github, Globe, ChevronDown, ChevronUp, Smartphone, Search } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const getGitHubBadgeUrl = (githubUrl: string) => {
    const [, org, repo] = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/) || [];
    return `https://img.shields.io/github/stars/${org}/${repo}?style=social`;
  };

  const getNetlifyBadgeUrl = (badgeId: string, branch?: string) => {
    const baseUrl = `https://api.netlify.com/api/v1/badges/${badgeId}/deploy-status`;
    return branch ? `${baseUrl}?branch=${branch}` : baseUrl;
  };

  const getTechColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'bg-blue-500/20 text-blue-300';
      case 'backend':
        return 'bg-green-500/20 text-green-300';
      case 'database':
        return 'bg-purple-500/20 text-purple-300';
      case 'analytics':
        return 'bg-yellow-500/20 text-yellow-300';
      case 'deployment':
        return 'bg-pink-500/20 text-pink-300';
      default:
        return 'bg-orange-500/20 text-orange-300';
    }
  };

  return (
    <div className="relative bg-white/5 backdrop-blur-lg rounded-xl p-4 sm:p-8 transition-all duration-500 
                border border-white/10 hover:border-blue-500/30
                hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] group">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 
                       bg-clip-text text-transparent group-hover:scale-105 transition-transform">
            <TypewriterText text={project.name} />
          </h3>
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
            project.category === 'fullstack' 
              ? 'bg-purple-500/20 text-purple-300'
              : 'bg-blue-500/20 text-blue-300'
          }`}>
            {project.category}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {project.githubUrl && (
            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <img
                src={getGitHubBadgeUrl(project.githubUrl)}
                alt="GitHub stars"
                className="h-6"
              />
            </div>
          )}
          {project.netlifyUrl && project.netlifyBadgeId && (
            <a
              href={project.netlifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src={getNetlifyBadgeUrl(project.netlifyBadgeId, project.netlifyBranch)}
                alt="Netlify Status"
                className="h-6"
              />
            </a>
          )}
        </div>
      </div>

      <p className="text-gray-400 mb-6 text-sm sm:text-base">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getTechColor(tech.category)}`}
          >
            {tech.name}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-6">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Globe size={16} />
            <span className="text-xs sm:text-sm">Visit Website</span>
          </a>
        )}
        <div className="flex items-center gap-2 text-gray-400">
          <Smartphone size={16} />
          <span className="text-xs sm:text-sm">Mobile Responsive</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Search size={16} />
          <span className="text-xs sm:text-sm">SEO Optimized</span>
        </div>
      </div>

      <button
        onClick={toggleExpand}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        <span className="text-xs sm:text-sm">{isExpanded ? 'Show Less' : 'Show More'}</span>
      </button>

      {isExpanded && (
        <div className="mt-6">
          <div className="space-y-6">
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-200 mb-3">Key Features</h4>
              <ul className="space-y-2">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index} className="text-gray-400 text-sm sm:text-base">
                    <span className="font-medium text-gray-300">{feature.title}</span> - {feature.description}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-200 mb-3">Technical Highlights</h4>
              <ul className="list-disc list-inside space-y-2">
                {project.technicalHighlights.map((highlight, index) => (
                  <li key={index} className="text-gray-400 text-sm sm:text-base">{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
