import React from 'react';
import styles from '../../../styles/portfolio_list.module.scss';

const PortfolioListItem = ({
  category,
  portfolio,
  selectedPortolio,
  setSelectedPortfolio,
}) => {
  console.log(category, selectedPortolio);
  return (
    <div
      onClick={() => setSelectedPortfolio(portfolio)}
      className={styles.portfolio_list_item}
    >
      {category}
    </div>
  );
};

export default PortfolioListItem;
