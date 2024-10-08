import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    liveDemo: string;
  };
  isEven: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isEven }) => {
  return (
    <div className={`project-card ${isEven ? 'project-card-even' : 'project-card-odd'}`}>
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
          <div className="flex flex-wrap mb-2">
            {project.tags.map((tag, index) => (
              <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded mr-2 mb-2 text-xs">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
          <div className="flex space-x-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              <Github size={20} />
            </a>
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;