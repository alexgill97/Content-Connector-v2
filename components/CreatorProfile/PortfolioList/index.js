import React from 'react';
import styles from '../../../styles/portfolio_list.module.scss';
import PortfolioListItem from './PortfolioListItem';

const PortfolioList = ({ selectedPortolio, setSelectedPortfolio }) => {
  return (
    <div className={styles.portfolio_list_container}>
      <>
        <PortfolioListItem
          category={'wedding'}
          selectedPortolio={selectedPortolio}
          setSelectedPortfolio={setSelectedPortfolio}
        />
        <PortfolioListItem
          category={'product'}
          selectedPortolio={selectedPortolio}
          setSelectedPortfolio={setSelectedPortfolio}
        />
        <PortfolioListItem
          category={'sports'}
          selectedPortolio={selectedPortolio}
          setSelectedPortfolio={setSelectedPortfolio}
        />
        <PortfolioListItem
          category={'event'}
          selectedPortolio={selectedPortolio}
          setSelectedPortfolio={setSelectedPortfolio}
        />
      </>

      <div>
        <button>Upload</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default PortfolioList;
