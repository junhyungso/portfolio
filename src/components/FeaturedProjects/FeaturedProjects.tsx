import { motion } from 'framer-motion';
import { ProjectData } from '../../types/types';
import FeaturedProject from './FeaturedProject';
import styles from './FeaturedProjects.module.css';

const FeaturedProjects = ({ projects }: { projects: ProjectData[] }) => {
  return (
    <>
      <h1 className={styles.title}>Featured Projects</h1>
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false }}
      >
        <ul className={styles.projects}>
          {projects.map((project) => (
            <FeaturedProject key={project.id} project={project} />
          ))}
        </ul>
      </motion.section>
    </>
  );
};

export default FeaturedProjects;
