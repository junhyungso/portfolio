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

import { useMediaQuery } from '@custom-react-hooks/use-media-query';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from '../../context/ThemeContext';

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
  const [showMenu, setShowMenu] = useState(false);
  const [highlightedMenuIndex, setHighlightedMenuIndex] = useState(-1);

  const { theme, toggleTheme } = useTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const menuList = ['LinkedIn', 'Github', 'Link to Portfolio'];

  const handleMenuSelect = (menuItem: string) => {
    const menuIndex = menuList.findIndex((menu) => menu === menuItem);
    setHighlightedMenuIndex(menuIndex);
    if (menuItem === 'LinkedIn') {
      window.open('https://www.linkedin.com/in/junhyungso/');
    } else if (menuItem === 'Github') {
      window.open('https://github.com/junhyungso/');
    } else {
      window.open('https://github.com/junhyungso/portfolio');
    }
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
      </div>
      {!isMobile && (
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          projects={FeaturedProjectsData}
        />
      )}
      <div className={styles.sideMenuContainer}>
        <button onClick={toggleTheme} className={styles.themeButton}>
          {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
        <button
          onClick={() => window.open(Resume)}
          className={styles.resumeButton}
        >
          Resume
        </button>
        {!isMobile && (
          <div className={styles.iconsContainer}>
            <AppsIcon
              onClick={() => setShowMenu((prev) => !prev)}
              className={styles.linkIcon}
              fontSize="large"
            />
            {showMenu && (
              <ul className={styles.menuList}>
                {menuList.map((menuItem, index) => (
                  <li
                    key={index}
                    onClick={() => handleMenuSelect(menuItem)}
                    className={`${styles.suggestionItem} ${
                      index === highlightedMenuIndex ? styles.highlighted : ''
                    }`}
                  >
                    {menuItem}
                  </li>
                ))}
              </ul>
            )}
            <Link to="/contact">
              <AccountIcon fontSize="large" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
