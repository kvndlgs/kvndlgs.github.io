import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group"
    >
      <figure className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <button
            onClick={() => onViewDetails(project)}
            className="btn btn-circle btn-primary"
            aria-label="View project details"
          >
            <Eye className="w-5 h-5" />
          </button>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-secondary"
            aria-label="View live demo"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-accent"
            aria-label="View source code"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
        {project.featured && (
          <div className="badge badge-primary absolute top-4 right-4">Featured</div>
        )}
      </figure>
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <div key={tech} className="badge badge-outline">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;