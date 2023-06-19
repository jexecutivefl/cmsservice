// PublicSidebar.js
import Link from 'next/link';
import styles from './PublicSidebar.module.css';
import MenuItems from "@/layout/publicNavigation";

const PublicSidebar = ({ sidebarOpen }) => {
  return (
   <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
     {MenuItems.map((item, index) => (
      <Link key={index} href={item.href} className={styles.sidebarLink}>
        {item.label}
      </Link>
     ))}
   </aside>
  );
};

export default PublicSidebar;
