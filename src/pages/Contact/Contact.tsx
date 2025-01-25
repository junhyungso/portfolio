import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Me from '../../assets/me.jpeg';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className="main-content">
        <div className="contact-content">
          <h1>Contact</h1>
          <div className="profile-container">
            <img
              src={Me}
              alt="me"
              width="200px"
              height="200px"
              className="profile-image"
            />
          </div>
          <div className="contact-intro">
            <p>Feel free to reach out to me any time about anything!</p>
            <p>
              You can reach me at: <b>junso5551@gmail.com</b>
            </p>
            <LinkedInIcon
              onClick={() =>
                window.open('https://www.linkedin.com/in/junhyungso/')
              }
              className="link-icon"
              fontSize="large"
            />
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
