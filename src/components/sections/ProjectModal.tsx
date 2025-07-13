import React from 'react';
import { X, ExternalLink, Github, Calendar, Users } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  features?: string[];
  duration?: string;
  teamSize?: string;
  role?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-base-100 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 btn btn-circle btn-sm"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {project.duration && (
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium">Duration</div>
                  <div className="text-sm text-base-content/60">{project.duration}</div>
                </div>
              </div>
            )}
            {project.teamSize && (
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium">Team Size</div>
                  <div className="text-sm text-base-content/60">{project.teamSize}</div>
                </div>
              </div>
            )}
            {project.role && (
              <div>
                <div className="font-medium">My Role</div>
                <div className="text-sm text-base-content/60">{project.role}</div>
              </div>
            )}
          </div>

          <p className="text-base-content/80 mb-6 leading-relaxed">
            {project.longDescription || project.description}
          </p>

          {project.features && (
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <div key={tech} className="badge badge-primary">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline gap-2"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;