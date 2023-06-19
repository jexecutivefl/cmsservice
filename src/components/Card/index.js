// SprintCard/index.js

import styles from './Card.module.css';

export default function Card({ title, children }) {
  return (
   <div className={styles.card}>
     {title && <h2 className={styles.title}>{title}</h2>}
     {children}
   </div>
  );
}

