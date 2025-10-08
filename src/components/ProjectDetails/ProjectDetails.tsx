import { useParams } from 'react-router-dom';
import { FeaturedProjectsData } from '../../lib/FeaturedProjectsData';
import styles from './ProjectDetails.module.css';

const ProjectDetails = () => {
  const { projectId = '' } = useParams();
  const project = FeaturedProjectsData.filter(
    (project) => project.id === projectId
  )[0];

  return (
    <div className={styles.projectDetailPage}>
      <section className={styles.hero}>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.tags}></div>
        <div className={styles.images}>
          {project.images?.map((img, i) => (
            <img key={i} src={img} alt={`Screenshot ${i + 1}`} />
          ))}
        </div>
      </section>

      <div className={styles.content}>
        <h2>Overview</h2>
        <p>{project.description}</p>
        <div className={styles.links}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
