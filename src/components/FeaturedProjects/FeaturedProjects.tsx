import { ProjectData } from '../../types/types';
import FeaturedProject from './FeaturedProject';
import styles from './FeaturedProjects.module.css';

const FeaturedProjects = ({ projects }: { projects: ProjectData[] }) => {
  return (
    <>
      <h1 className={styles.title}>Featured Projects</h1>
      <ul className={styles.projects}>
        {projects.map((project) => (
          <FeaturedProject key={project.id} project={project} />
        ))}
      </ul>
    </>
  );
};

export default FeaturedProjects;
