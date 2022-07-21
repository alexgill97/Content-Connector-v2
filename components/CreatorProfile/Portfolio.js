import React, { useState, useEffect } from 'react';
import styles from '../../styles/creator_profile.module.scss';

import Carousel from '../Carousel';

const Portfolio = ({ uid }) => {
  return (
    <div className={styles.interface_portfolio}>
      <div className={styles.portfolio_list}>portfolio list</div>
      <div className={styles.portfolio_render}>
        <div className={styles.portfolio_carousel}>
          {/* <div className={styles.portfolio_carousel_container}>
          </div> */}
          <Carousel uid={uid} />
        </div>
        <div className={styles.portfolio_description}>
          portfolio description
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
