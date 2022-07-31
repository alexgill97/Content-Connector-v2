import { firestore } from './clientApp';
import { collectionGroup, query, getDocs, where } from 'firebase/firestore';

const getUserPortfolio = async (uid, setPortfolios) => {
  const querySnapshot = await getDocs(
    query(collectionGroup(firestore, `portfolio`), where('uid', '==', uid))
  );
  let portfolios = [];
  querySnapshot.forEach((doc) => {
    portfolios.push(doc.data());
  });

  setPortfolios(portfolios);
};

export default getUserPortfolio;
