// src/components/Header.tsx
import AccountIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import YoutubeIcon from '@mui/icons-material/Youtube';

import { Link } from 'react-router-dom';

import Resume from '../../assets/Resume_JunhyungSo.pdf';
import './Header.css';

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
    <div className="navbar">
      <div className="menu-logo">
        <MenuIcon className="menu-icon" onClick={handleMenuIconClicked} />
        <Link to="/">
          <div className="logo">
            <YoutubeIcon fontSize="large" style={{ fill: 'red' }} />
            <div className="logo-text">JunTube</div>
          </div>
        </Link>
        {/* <Link to="/">Home</Link> */}
      </div>
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search projects..."
        />
        <button className="header__search-button">
          <SearchIcon />
        </button>
      </div>
      <div className="side-menu-container">
        <button onClick={() => window.open(Resume)} className="resume-button">
          Resume
        </button>
        <div className="icons-container">
          <Link to="/about">
            <AppsIcon
              onClick={() => window.open('https://github.com/junhyungso/')}
              className="link-icon"
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
