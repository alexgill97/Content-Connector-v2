import React from 'react';
import styles from '../../styles/creator_profile.module.scss';

const Portfolio = () => {
  return (
    <div className={styles.interface_portfolio}>
      <div className={styles.portfolio_list}>portfolio list</div>
      <div className={styles.portfolio_render}>
        <div className={styles.portfolio_carousel}>portfolio image</div>
        <div className={styles.portfolio_description}>
          portfolio description
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
