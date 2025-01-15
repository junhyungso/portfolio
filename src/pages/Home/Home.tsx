// src/pages/Home.tsx
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useState } from 'react';
import Me from '../../assets/me.jpeg';
import Banner from '../../components/Banner/Banner';
import LoadingBar from '../../components/LoadingBar/LoadingBar';
import Sidebar from '../../components/SideBar/Sidebar';
import './Home.css';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <div style={{ padding: '20px' }}>
          <h1>Loading...</h1>
          <LoadingBar duration={1000} onComplete={handleComplete} />
        </div>
      )}
      {!isLoading && (
        <div className="container">
          <div>
            <Sidebar />
          </div>
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
                  passion for creating intuitive and user-friendly interfaces.
                  With strong foundation in React and TypeScript, I specialize
                  in building responsive, accessible, and performant web
                  applications.
                </p>
                <button>Subscribe</button>
                <LinkedInIcon />
                <GithubIcon />
              </div>
            </div>
            <hr />
            <div>
              <h1>Featured Projects</h1>
              <div className="project-list">
                <div className="project">A</div>
                <div className="project">B</div>
                <div className="project-last">C</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
