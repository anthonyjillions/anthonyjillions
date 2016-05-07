import React from 'react';
import Icon from '../Icon';
import styles from './styles.css';

export default function Info() {
  const list = [
    'MERN stack dev',
    '3rd party API integrations',
    'Custom JS/CSS/HTML for tools like Tumblr, Shopify, Square etc.',
  ];
  const list1 = [
    'Full service music production',
    'Engineering, production, mixing, sound design',
  ];
  return (
    <div className={styles.Info} >
      <div className={styles.listContainer}>
        <Icon name="code" size="2x" />
        {list.map((value, i) => {
          const render = (
            <div key={i} className={styles.listItem}>
              {value}
            </div>
          );
          return render;
        })
      }
      </div>

      <div className={styles.listContainer}>
        <Icon name="music" size="2x" />
        {list1.map((value, i) => {
          const render = (
            <div key={i} className={styles.listItem}>
              {value}
            </div>
          );
          return render;
        })
      }
      </div>
    </div>
  );
}
