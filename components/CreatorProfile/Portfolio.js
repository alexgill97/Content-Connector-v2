import React, { useState, useEffect } from 'react';
import styles from '../../styles/creator_profile.module.scss';

import Carousel from '../Carousel';
import PortfolioList from './PortfolioList';

const Portfolio = ({ uid }) => {
  const [selectedPortolio, setSelectedPortfolio] = useState('');
  return (
    <div className={styles.interface_portfolio}>
      <div className={styles.portfolio_list}>
        <div className={styles.portfolio_header}>
          {selectedPortolio || 'Select A Portfolio'}
        </div>
        <PortfolioList
          selectedPortolio={selectedPortolio}
          setSelectedPortfolio={setSelectedPortfolio}
        />
      </div>
      <div className={styles.portfolio_render}>
        <Carousel uid={uid} />
      </div>
    </div>
  );
};

export default Portfolio;
