import { projects } from './data/projects';
import ProjectCard from './components/ProjectCard';
import ParticleBackground from './components/ParticleBackground';
import { Code2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-gray-900 to-black text-white">
      <ParticleBackground />
      
      <header className="pt-24 pb-16 px-4 text-center relative animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Code2 className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-gradient bg-clip-text text-transparent 
                       bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
            Full Stack Developer
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-up">
            Crafting modern web applications with cutting-edge technologies
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 gap-8 animate-fade-in-up">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
            />
          ))}
        </div>
      </main>

      <footer className="py-12 px-4 text-center text-gray-400">
      </footer>
    </div>
  );
}

export default App;