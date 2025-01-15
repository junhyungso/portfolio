// src/pages/Home.tsx
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
          <div>
            <Banner />
            <div className="main-content">
              <div className="profile-container">
                <img
                  src={Me}
                  alt="me"
                  width="250px"
                  height="250px"
                  className="profile-image"
                />
              </div>
              <div className="intro">
                <h1>About me</h1>
                <p>Hi, I'm Junhyung So. Explore my work and skills!</p>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
