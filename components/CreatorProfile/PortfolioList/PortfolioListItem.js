import React from 'react';
import styles from '../../../styles/portfolio_list.module.scss';

const PortfolioListItem = ({
  category,
  selectedPortolio,
  setSelectedPortfolio,
}) => {
  console.log(category, selectedPortolio);
  return (
    <div
      onClick={() => setSelectedPortfolio(category)}
      className={styles.portfolio_list_item}
    >
      {category}
    </div>
  );
};

export default PortfolioListItem;
