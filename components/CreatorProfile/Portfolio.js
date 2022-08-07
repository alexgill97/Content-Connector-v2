import React, { useState, useEffect } from 'react';
import styles from '../../styles/creator_profile.module.scss';

import getUserPortfolios from '../../firebase/getUserPortfolio';
import Carousel from '../Carousel';
import PortfolioList from './PortfolioList';

const Portfolio = ({ uid, userSelf }) => {
  const [selectedPortolio, setSelectedPortfolio] = useState({});
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    getUserPortfolios(uid, setPortfolios);
    console.log(portfolios);
  }, []);

  const logPortfolios = () => {
    console.log(portfolios);
  };

  return (
    <div className={styles.interface_portfolio}>
      <div className={styles.portfolio_list}>
        <div className={styles.portfolio_header}>
          {selectedPortolio.title || 'Select A Portfolio'}
        </div>
        <PortfolioList
          portfolios={portfolios}
          selectedPortolio={selectedPortolio}
          setSelectedPortfolio={setSelectedPortfolio}
          userSelf={userSelf}
        />
      </div>
      <div className={styles.portfolio_render}>
        {selectedPortolio && (
          <Carousel uid={uid} images={selectedPortolio.images} />
        )}
      </div>
    </div>
  );
};

export default Portfolio;
