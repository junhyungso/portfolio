// src/pages/Projects.tsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const projectList = [
    {
      title: 'Project 1',
      description: 'Description here',
      image: '/path/to/image',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'Description here',
      image: '/path/to/image',
      link: '#',
    },
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
