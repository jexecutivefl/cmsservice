import React from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css'; // Import the styles

const Sidebar = ({ onSignOut, user }) => {
  return (
   <aside className={styles.sidebar}>
     <Link href={"/project-dashboard"} className={styles.navItem}>
       Projects Dashboard
     </Link>
   </aside>
  );
};

export default Sidebar;
