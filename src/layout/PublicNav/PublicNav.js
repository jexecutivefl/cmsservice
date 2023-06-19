// PublicNav.js
import Link from 'next/link';
import styles from './PublicNav.module.css';
import MenuItems from "@/layout/publicNavigation";

const PublicNav = () => {
  return (
   <nav className={styles.navbar}>
     <div className={styles.navLinks}>
       {MenuItems.map((item, index) => (
        <Link key={index} href={item.href} className={styles.navLink}>
          {item.label}
        </Link>
       ))}
     </div>
   </nav>
  );
};

export default PublicNav;
