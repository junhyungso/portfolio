import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Me from '../../assets/me.jpeg';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.contactContent}>
          <h1>Contact</h1>
          <div className={styles.profileContainer}>
            <img
              src={Me}
              alt="me"
              width="200px"
              height="200px"
              className={styles.profileImage}
            />
          </div>
          <div className={styles.contactInfo}>
            <p>Feel free to reach out to me any time about anything!</p>
            <p>
              You can reach me at: <b>junso5551@gmail.com</b>
            </p>
            <p>
              or through LinkedIn:
              <LinkedInIcon
                onClick={() =>
                  window.open('https://www.linkedin.com/in/junhyungso/')
                }
                className={styles.linkIcon}
                fontSize="large"
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
