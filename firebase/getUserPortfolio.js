import { firestore } from './clientApp';
import { collectionGroup, query, getDocs, where } from 'firebase/firestore';

const getUserPortfolios = async (id, setPortfolios) => {
  const querySnapshot = await getDocs(
    query(collectionGroup(firestore, `portfolio`), where('uid', '==', id))
  );
  let portfolios = [];
  querySnapshot.forEach((doc) => {
    portfolios.push(doc.data());
  });
  setPortfolios(portfolios);
};

export default getUserPortfolios;
