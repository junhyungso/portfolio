import { Link } from 'react-router-dom';
import { ProjectData } from '../../types/types';
import styles from './FeaturedProject.module.css';

const FeaturedProject = ({ project }: { project: ProjectData }) => {
  return (
    <li className={styles.project}>
      {project.images && (
        <img
          src={project.images?.[0]}
          alt={project.title}
          className={styles.projectImage}
        />
      )}
      <h2 className={styles.projectTitle}>{project.title}</h2>
      <p className={styles.projectDescription}>{project.description}</p>
      {project.link && (
        <Link
          to={`${'/projects/'}${project.id}`}
          className={styles.projectLink}
        >
          View Project
        </Link>
      )}
    </li>
  );
};

export default FeaturedProject;
