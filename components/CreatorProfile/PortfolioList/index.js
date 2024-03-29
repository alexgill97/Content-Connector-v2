import React from 'react';
import styles from '../../../styles/portfolio_list.module.scss';
import CreatePortfolio from '../../Modal/CreatePortfolio';
import PortfolioListItem from './PortfolioListItem';

const PortfolioList = ({
  portfolios,
  selectedPortolio,
  setSelectedPortfolio,
  userSelf,
}) => {
  return (
    <>
      {portfolios.map((portfolio) => (
        <PortfolioListItem
          category={portfolio.title}
          portfolio={portfolio}
          selectedPortolio={selectedPortolio}
          setSelectedPortfolio={setSelectedPortfolio}
        />
      ))}

      {userSelf && (
        <div>
          <CreatePortfolio />
          <button>Delete</button>
        </div>
      )}
    </>
  );
};

export default PortfolioList;
