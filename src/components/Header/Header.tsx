// src/components/Header.tsx
import AccountIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import YoutubeIcon from '@mui/icons-material/Youtube';

import { Link } from 'react-router-dom';

import Resume from '../../assets/Resume_JunhyungSo.pdf';
import styles from './Header.module.css';

const Header = ({
  isSideMenuMinimized,
  setIsSideMenuMinimized,
}: {
  isSideMenuMinimized: boolean;
  setIsSideMenuMinimized: (isSideMenuMinimized: boolean) => void;
}) => {
  const handleMenuIconClicked = () => {
    setIsSideMenuMinimized(!isSideMenuMinimized);
  };
  return (
    <div className={styles.navBar}>
      <div className={styles.menuLogo}>
        <MenuIcon className={styles.menuIcon} onClick={handleMenuIconClicked} />
        <Link to="/">
          <div className={styles.logo}>
            <YoutubeIcon fontSize="large" style={{ fill: 'red' }} />
            <div className={styles.logoText}>JunTube</div>
          </div>
        </Link>
        {/* <Link to="/">Home</Link> */}
      </div>
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Search projects..."
        />
        <button className={styles.headerSearchButton}>
          <SearchIcon />
        </button>
      </div>
      <div className={styles.sideMenuContainer}>
        <button
          onClick={() => window.open(Resume)}
          className={styles.resumeButton}
        >
          Resume
        </button>
        <div className={styles.iconsContainer}>
          <Link to="/myjourney">
            <AppsIcon
              onClick={() => window.open('https://github.com/junhyungso/')}
              className={styles.linkIcon}
              fontSize="large"
            />
          </Link>
          <Link to="/contact">
            <AccountIcon fontSize="large" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
