import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/sections/ProjectCard';
import ProjectModal from '../components/sections/ProjectModal';
import { projects, Project } from '../data/projects';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const technologies = Array.from(new Set(projects.flatMap(p => p.technologies)));
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.technologies.includes(filter));

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">My Projects</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Here's a collection of projects I've worked on, showcasing my skills in fullstack development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setFilter('all')}
            className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline'}`}
          >
            All Projects
          </button>
          {technologies.slice(0, 6).map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`btn ${filter === tech ? 'btn-primary' : 'btn-outline'}`}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </div>
  );
};

export default Projects;