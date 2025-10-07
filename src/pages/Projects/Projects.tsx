// src/pages/Projects.tsx
import ProjectCard from '../../components/ProjectCard';
import { FeaturedProjectsData } from '../../lib/FeaturedProjectsData';

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {FeaturedProjectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
