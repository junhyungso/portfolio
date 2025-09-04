// src/pages/Projects.tsx
import React from 'react';
import ProjectCard from '../../components/ProjectCard';

const Projects: React.FC = () => {
  const projectList = [
    {
      title: 'Adopt a Dog',
      description:
        'A web application that allows users to adopt dogs from a shelter.',
      image: '/path/to/image',
      link: '/projects/adopt-a-dog',
    },
    {
      title: 'Rosary Prayer',
      description:
        'A web application that allows users to say the rosary prayer without a rosary in hand',
      image: '/path/to/image',
      link: '/projects/rosary',
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
