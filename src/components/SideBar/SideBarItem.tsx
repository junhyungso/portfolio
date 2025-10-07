import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const SideBarItem = ({
  item,
  isSideMenuMinimized,
}: {
  item: { name: string; icon: JSX.Element; path: string };
  isSideMenuMinimized: boolean;
}) => {
  return (
    <Link to={item.path} className={styles.sidebarMenuItem} key={item.name}>
      <div className={styles.sidebarMenuItemIcon}>{item.icon}</div>
      {!isSideMenuMinimized && (
        <div className={styles.sidebarMenuItemText}>{item.name}</div>
      )}
    </Link>
  );
};

export default SideBarItem;
