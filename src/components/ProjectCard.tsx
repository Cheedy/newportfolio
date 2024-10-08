import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github?: string;
    liveDemo: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-center">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <div className="flex justify-center space-x-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-300 transition-colors duration-200"
                >
                  <Github size={24} />
                </a>
              )}
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors duration-200"
              >
                <ExternalLink size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap mb-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white px-2 py-1 rounded-full mr-2 mb-2 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-300 text-sm">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
