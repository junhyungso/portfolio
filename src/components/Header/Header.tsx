// src/components/Header.tsx
import AccountIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import YoutubeIcon from '@mui/icons-material/Youtube';

import { Link } from 'react-router-dom';

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
            <YoutubeIcon style={{ fill: 'red' }} />
            <div>JunTube</div>
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
      <div>
        <Link to="/projects">
          <button>Create</button>
        </Link>
        <Link to="/about">
          <AppsIcon />
        </Link>
        <Link to="/contact">
          <AccountIcon />
        </Link>
      </div>
    </div>
  );
};

export default Header;
