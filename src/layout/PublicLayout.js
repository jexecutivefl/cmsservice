// PublicLayout.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import styles from './PublicLayout.module.css';
import PublicSidebar from "@/layout/PublicSidebar/PublicSidebar";
import PublicNav from "@/layout/PublicNav/PublicNav";

const PublicLayout = ({ children, handleSignIn }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkForMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    checkForMobile();
    window.addEventListener('resize', checkForMobile);

    return () => {
      window.removeEventListener('resize', checkForMobile);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
   <div className={styles.layout}>
     {!isMobile && <PublicNav onMenuClick={toggleSidebar} />}

     {isMobile && <button onClick={toggleSidebar} className={styles.hamburger}><FiMenu /></button>}

     {isMobile && <PublicSidebar sidebarOpen={sidebarOpen} />}

     <main className={styles.main}>
       {children}
     </main>
   </div>
  );
};

export default PublicLayout;
