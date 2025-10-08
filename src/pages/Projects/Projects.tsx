// src/pages/Projects.tsx
import { motion } from 'framer-motion';
import { FeaturedProjectsData as projects } from '../../lib/FeaturedProjectsData';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section className={styles.carouselSection}>
      <h2 className={styles.heading}>My Projects</h2>

      <motion.div
        className={styles.carouselContainer}
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.card}
            whileHover={{ y: -8 }}
          >
            <div className={styles.imageWrapper}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
              </div>
              <a
                href={`${'/projects'}${project.href}`}
                className={styles.viewProject}
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
