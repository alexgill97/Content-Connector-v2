import React from 'react';
import styles from '../../../styles/portfolio_list.module.scss';
import CreatePortfolio from '../../Modal/CreatePortfolio';
import PortfolioListItem from './PortfolioListItem';

const PortfolioList = ({ selectedPortolio, setSelectedPortfolio }) => {
  return (
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
      <div>
        <CreatePortfolio />
        <button>Delete</button>
      </div>
    </>
  );
};

export default PortfolioList;
