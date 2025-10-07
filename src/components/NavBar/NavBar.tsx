// src/components/Header.tsx
import AccountIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import YoutubeIcon from '@mui/icons-material/Youtube';

import { Link } from 'react-router-dom';

import { useState } from 'react';
import Resume from '../../assets/Resume_JunhyungSo.pdf';
import { FeaturedProjectsData } from '../../lib/FeaturedProjectsData';
import SearchBar from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';

const NavBar = ({
  isSideMenuMinimized,
  setIsSideMenuMinimized,
}: {
  isSideMenuMinimized: boolean;
  setIsSideMenuMinimized: (isSideMenuMinimized: boolean) => void;
}) => {
  const handleMenuIconClicked = () => {
    setIsSideMenuMinimized(!isSideMenuMinimized);
  };
  const [searchQuery, setSearchQuery] = useState('');

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
      </div>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        projects={FeaturedProjectsData}
        onSelect={(p) => console.log('Selected project:', p)}
      />
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

export default NavBar;
