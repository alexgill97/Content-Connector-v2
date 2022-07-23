import React, { useState, useEffect } from 'react';
import styles from '../../styles/creator_profile.module.scss';

import Carousel from '../Carousel';
import PortfolioList from './PortfolioList';

const Portfolio = ({ uid }) => {
  const [selectedPortolio, setSelectedPortfolio] = useState('');
  return (
    <div className={styles.interface_portfolio}>
      <div className={styles.portfolio_list}>
        <PortfolioList
          selectedPortolio={selectedPortolio}
          setSelectedPortfolio={setSelectedPortfolio}
        />
      </div>
      <div className={styles.portfolio_render}>
        <div className={styles.portfolio_header}>
          {selectedPortolio || 'Select A Portfolio'}
        </div>
        <Carousel uid={uid} />
        <div className={styles.portfolio_description}>
          portfolio description
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
