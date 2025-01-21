import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Me from '../../assets/me.jpeg';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className="main-content">
        <div className="contact-content">
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
            <h1>Contact</h1>
            <div className="link-icon-container">
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
        {/* <hr />
        <div>
          <h1>Featured Projects</h1>
          <div className="project-list">
            <div className="project">A</div>
            <div className="project">B</div>
            <div className="project-last">C</div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Contact;
