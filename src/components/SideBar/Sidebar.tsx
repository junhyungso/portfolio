import CodeIcon from '@mui/icons-material/Code';
import ContactIcon from '@mui/icons-material/Contacts';
import HomeIcon from '@mui/icons-material/Home';
import MovingIcon from '@mui/icons-material/Moving';
import styles from './SideBar.module.css';
import SideBarItem from './SideBarItem';

const Sidebar = ({ isSideMenuMinimized }: { isSideMenuMinimized: boolean }) => {
  const sideBarMenuItems = [
    { name: 'Home', icon: <HomeIcon />, path: '/' },
    { name: 'My Journey', icon: <MovingIcon />, path: '/myjourney' },
    { name: 'Projects', icon: <CodeIcon />, path: '/projects' },
    { name: 'Contact', icon: <ContactIcon />, path: '/contact' },
  ];

  return (
    <aside
      className={isSideMenuMinimized ? styles.minimizedSideBar : styles.sideBar}
    >
      <ul className={styles.sideBarMenu}>
        {sideBarMenuItems.map((item) => (
          <SideBarItem
            item={item}
            isSideMenuMinimized={isSideMenuMinimized}
            key={item.name}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
