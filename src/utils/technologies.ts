import { Project } from '../types/project';

export interface CombinedTechnology {
  name: string;
  category: string;
  projectCount: number;
  projects: string[];
}

export function combineTechnologies(projects: Project[]): CombinedTechnology[] {
  const techMap = new Map<string, CombinedTechnology>();

  projects.forEach(project => {
    project.technologies.forEach(tech => {
      const existing = techMap.get(tech.name);
      if (existing) {
        existing.projectCount++;
        existing.projects.push(project.name);
      } else {
        techMap.set(tech.name, {
          name: tech.name,
          category: tech.category,
          projectCount: 1,
          projects: [project.name]
        });
      }
    });
  });

  return Array.from(techMap.values()).sort((a, b) => b.projectCount - a.projectCount);
}
