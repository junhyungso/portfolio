import { Link } from 'react-router-dom';
import styles from './SideBarItem.module.css';

const SideBarItem = ({
  item,
  isSideMenuMinimized,
  isMobile,
  setIsSideMenuMinimized,
}: {
  item: { name: string; icon: JSX.Element; path: string };
  isSideMenuMinimized: boolean;
  isMobile: boolean;
  setIsSideMenuMinimized: (isSideMenuMinimized: boolean) => void;
}) => {
  return (
    <Link
      onClick={() => {
        setIsSideMenuMinimized(true);
      }}
      to={item.path}
      className={styles.sidebarMenuItem}
      key={item.name}
    >
      {!isSideMenuMinimized && isMobile && (
        <div className={styles.sidebarMenuItemIcon}>{item.icon}</div>
      )}
      {isSideMenuMinimized && isMobile && ''}

      {isSideMenuMinimized && !isMobile && (
        <div className={styles.sidebarMenuItemIcon}>{item.icon}</div>
      )}
      {!isSideMenuMinimized && !isMobile && (
        <div className={styles.sidebarMenuItemContainer}>
          <div className={styles.sidebarMenuItemIcon}>{item.icon}</div>
          <div className={styles.sidebarMenuItemText}>{item.name}</div>
        </div>
      )}
    </Link>
  );
};

export default SideBarItem;
