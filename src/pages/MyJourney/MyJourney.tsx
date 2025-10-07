type Milestone = {
  year: string;
  title: string;
  description: string;
};

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './MyJourney.module.css';

const milestones: Milestone[] = [
  {
    year: 'March 2025 - Present',
    title: 'MEK Review - Operations Engineer',
    description:
      'Responsible for overseeing technical operations for the organization to create a seamless educational experience for instructors and students. Led a complex data migration from the company’s proprietary LMS platform to Salesforce, ensuring seamless transfer and data accuracy. Built API integrations to automate calendar synchronization across multiple platforms, enhancing the administrative experience. Managed Salesforce configuration and documentation to support operational efficiency.',
  },
  {
    year: 'December 2021 - October 2024',
    title: 'Acorns - Software Engineer',
    description:
      'Worked as a Frontend Web Developer for the Investment Product Team and Bank Linking Team to build and release multiple user-facing projects, specifically the Custom Portfolio feature and Bank Linking Verification feature. Other responsibilities included: Improving UI/UX of existing features for Acorns Early - investment accounts for kids, Identifying and resolving critical customer-facing bugs impacting investment experience, Improving site performance and reliability through code refactoring and unit testing.',
  },
  {
    year: 'December 2021 - November 2021',
    title: 'MEK Review - Data Management Specialist',
    description:
      'Executed administrative duties and added new functionalities and configured malfunctioning interfaces to the company’s proprietary software (LMS) to assist in an improved workflow among the administrators.',
  },
  {
    year: 'June 2020 - June 2021',
    title: 'WW International - Software Engineering Intern',
    description:
      'Worked as a Frontend Web Developer for the Login & Signup Team. Implemented cleaner UI of password-related errors and sign-in attempt warnings for the login pages. Also increased code coverage rate from 54% to 70% for the login page components by creating unit tests to ensure stronger code quality and reliability.',
  },
];

export default function MyJourney() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.journeyPage}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Journey</h1>
      </div>
      <div className={styles.timeline}>
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.content}>
              <h2>{milestone.year}</h2>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {showButton && (
        <motion.button
          className={styles.scrollTop}
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          ↑
        </motion.button>
      )}
    </div>
  );
}
