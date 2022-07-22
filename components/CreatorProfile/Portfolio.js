import React, { useState, useEffect } from 'react';
import styles from '../../styles/creator_profile.module.scss';

import Carousel from '../Carousel';
import PortfolioList from './PortfolioList';

const Portfolio = ({ uid }) => {
  return (
    <div className={styles.interface_portfolio}>
      <div className={styles.portfolio_list}>
        <PortfolioList />
      </div>
      <div className={styles.portfolio_render}>
        <div className={styles.portfolio_carousel}>
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
