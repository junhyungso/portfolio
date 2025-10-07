import { ProjectData } from '../../types/types';
import styles from './FeaturedProject.module.css';

const FeaturedProject = ({ project }: { project: ProjectData }) => {
  return (
    <li className={styles.project}>
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className={styles.projectImage}
        />
      )}
      <h2 className={styles.projectTitle}>{project.title}</h2>
      <p className={styles.projectDescription}>{project.description}</p>
      {project.link && (
        <a href={project.link} className={styles.projectLink}>
          View Project
        </a>
      )}
    </li>
  );
};

export default FeaturedProject;
