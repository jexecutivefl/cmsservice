import React from 'react';
import styles from './Grid.module.css';

export function GridContainer({ children }) {
  return <div className={styles.gridContainer}>{children}</div>;
}

export function GridItem({ width, children }) {
  const itemClass = width
   ? `${styles.gridItem} ${styles['gridItemWidth' + width]}`
   : styles.gridItem;

  return <div className={itemClass}>{children}</div>;
}
