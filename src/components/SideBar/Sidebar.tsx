import CodeIcon from '@mui/icons-material/Code';
import ContactIcon from '@mui/icons-material/Contacts';
import HomeIcon from '@mui/icons-material/Home';
import MovingIcon from '@mui/icons-material/Moving';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isSideMenuMinimized }: { isSideMenuMinimized: boolean }) => {
  return (
    <aside className={isSideMenuMinimized ? 'minimized-sidebar' : 'sidebar'}>
      <ul className="sidebar__menu">
        <Link to="/" className="sidebar__menu__item">
          <HomeIcon className="sidebar__menu__item__icon" />
          {!isSideMenuMinimized && (
            <div className="sidebar__menu__item__text">Home</div>
          )}
        </Link>
        <Link to="/myjourney" className="sidebar__menu__item">
          <MovingIcon className="sidebar__menu__item__icon" />
          {!isSideMenuMinimized && (
            <div className="sidebar__menu__item__text">My Journey</div>
          )}
        </Link>
        <Link to="/projects" className="sidebar__menu__item">
          <CodeIcon className="sidebar__menu__item__icon" />
          {!isSideMenuMinimized && (
            <div className="sidebar__menu__item__text">Projects</div>
          )}
        </Link>
        <Link to="/contact" className="sidebar__menu__item">
          <ContactIcon className="sidebar__menu__item__icon" />
          {!isSideMenuMinimized && (
            <div className="sidebar__menu__item__text">Contact</div>
          )}
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
