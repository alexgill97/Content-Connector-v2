import { firestore } from './clientApp';
import { getDocs, query, collectionGroup, where } from 'firebase/firestore';

const getTermPortfolio = async (term, setPortfolios) => {
  const querySnapshot = await getDocs(
    query(
      collectionGroup(firestore, `portfolio`),
      where('tags', 'array-contains-any', [term])
    )
  );
  let portfolios = [];
  querySnapshot.forEach((doc) => {
    portfolios.push(doc.data());
  });
  setPortfolios(portfolios);
};

export default getTermPortfolio;
