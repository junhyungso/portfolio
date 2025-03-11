import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Me from '../../assets/me.jpeg';
import Resume from '../../assets/Resume_JunhyungSo.pdf';
import Banner from '../../components/Banner/Banner';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="main-content">
        <Banner />
        <div className="about-content">
          <div className="profile-container">
            <img
              src={Me}
              alt="me"
              width="200px"
              height="200px"
              className="profile-image"
            />
          </div>
          <div className="intro">
            <h1>About me</h1>
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
            <div className="link-icon-container">
              <button
                onClick={() => window.open(Resume)}
                className="resume-button"
              >
                Resume
              </button>
              <LinkedInIcon
                onClick={() =>
                  window.open('https://www.linkedin.com/in/junhyungso/')
                }
                className="link-icon"
                fontSize="large"
              />
              <GithubIcon
                onClick={() => window.open('https://github.com/junhyungso/')}
                className="link-icon"
                fontSize="large"
              />
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h1>Featured Projects</h1>
          <div className="project-list">
            <div className="project">Adopt a Dog</div>
            <div className="project">B</div>
            <div className="project-last">C</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
