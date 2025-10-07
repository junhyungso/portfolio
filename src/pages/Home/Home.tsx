import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Me from '../../assets/me.jpeg';
import Resume from '../../assets/Resume_JunhyungSo.pdf';
import Banner from '../../components/Banner/Banner';
import FeaturedProjects from '../../components/FeaturedProjects/FeaturedProjects';
import { FeaturedProjectsData } from '../../lib/FeaturedProjectsData';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.mainContent}>
        <Banner />
        <div className={styles.aboutContent}>
          <div className={styles.profileContainer}>
            <img
              src={Me}
              alt="me"
              width="200px"
              height="200px"
              className={styles.profileImage}
            />
          </div>
          <div className={styles.intro}>
            <h1 className={styles.aboutTitle}>About me</h1>
            <p>
              Hi, I'm Junhyung So, a Frontend Software Engineer with great
              passion for creating intuitive and user-friendly interfaces. With
              strong foundation in React and TypeScript, I specialize in
              building responsive, accessible, and performant web applications.
              I'm constantly driven to push boundaries, which includes learning
              new technologies to expand my skillset.
            </p>
            <p>
              Outside of work, I enjoy my personal time watching movies, playing
              the piano, and participating in community volunteering services.
              This portfolio website is inspired by my favorite website Youtube
              (Dark Mode).
            </p>
            <div className={styles.linkIconContainer}>
              <button
                onClick={() => window.open(Resume)}
                className={styles.resumeButton}
              >
                Resume
              </button>
              <LinkedInIcon
                onClick={() =>
                  window.open('https://www.linkedin.com/in/junhyungso/')
                }
                className={styles.linkIcon}
                fontSize="large"
              />
              <GithubIcon
                onClick={() => window.open('https://github.com/junhyungso/')}
                className={styles.linkIcon}
                fontSize="large"
              />
            </div>
          </div>
        </div>
        <FeaturedProjects projects={FeaturedProjectsData} />
      </div>
    </>
  );
};

export default Home;
