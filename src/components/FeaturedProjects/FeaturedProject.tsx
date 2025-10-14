import { Link } from 'react-router-dom';
import { ProjectData } from '../../types/types';
import styles from './FeaturedProject.module.css';

const FeaturedProject = ({ project }: { project: ProjectData }) => {
  return (
    <li className={styles.project}>
      <Link to={`${'/projects/'}${project.id}`}>
        {project.images && (
          <div className={styles.imageWrapper}>
            <img
              src={project.images?.[0]}
              alt={project.title}
              className={styles.projectImage}
            />
          </div>
        )}
      </Link>
      <h2 className={styles.projectTitle}>{project.title}</h2>
    </li>
  );
};

export default FeaturedProject;
