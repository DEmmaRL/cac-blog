import React from 'react';
import styles from './Highlight.module.css';

const Highlight = ({ children, color = 'grey', emoji = '' }) => {
  return (
    <div className={styles.highlight} style={{ marginColor: color }}>
      <span className={styles.emoji}>{emoji}</span>
      <span>{children}</span>
    </div>
  );
};

export default Highlight;
