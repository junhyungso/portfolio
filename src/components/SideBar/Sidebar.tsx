import CodeIcon from '@mui/icons-material/Code';
import ContactIcon from '@mui/icons-material/Contacts';
import HomeIcon from '@mui/icons-material/Home';
import MovingIcon from '@mui/icons-material/Moving';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = ({ isSideMenuMinimized }: { isSideMenuMinimized: boolean }) => {
  return (
    <aside
      className={isSideMenuMinimized ? styles.minimizedSideBar : styles.sideBar}
    >
      <ul className={styles.sideBarMenu}>
        <Link to="/" className={styles.sidebarMenuItem}>
          <HomeIcon className={styles.sidebarMenuItemIcon} />
          {!isSideMenuMinimized && (
            <div className={styles.sidebarMenuItemText}>Home</div>
          )}
        </Link>
        <Link to="/myjourney" className={styles.sidebarMenuItem}>
          <MovingIcon className={styles.sidebarMenuItemIcon} />
          {!isSideMenuMinimized && (
            <div className={styles.sidebarMenuItemText}>My Journey</div>
          )}
        </Link>
        <Link to="/projects" className={styles.sidebarMenuItem}>
          <CodeIcon className={styles.sidebarMenuItemIcon} />
          {!isSideMenuMinimized && (
            <div className={styles.sidebarMenuItemText}>Projects</div>
          )}
        </Link>
        <Link to="/contact" className={styles.sidebarMenuItem}>
          <ContactIcon className={styles.sidebarMenuItemIcon} />
          {!isSideMenuMinimized && (
            <div className={styles.sidebarMenuItemText}>Contact</div>
          )}
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
