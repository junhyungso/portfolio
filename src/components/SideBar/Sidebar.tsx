import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar__menu">
        <Link to="/" className="sidebar__menu__item">
          Home
        </Link>
        <Link to="/about" className="sidebar__menu__item">
          My Journey
        </Link>
        <Link to="/projects" className="sidebar__menu__item">
          Projects
        </Link>
        <Link to="/contact" className="sidebar__menu__item">
          Contact
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
