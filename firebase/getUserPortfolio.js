import { firestore } from './clientApp';
import { collectionGroup, query, getDocs, where } from 'firebase/firestore';

const getUserPortfolios = async (id, setPortfolios, term = 0) => {
  if (!term) {
    const querySnapshot = await getDocs(
      query(collectionGroup(firestore, `portfolio`), where('uid', '==', id))
    );
    let portfolios = [];
    querySnapshot.forEach((doc) => {
      portfolios.push(doc.data());
    });
    setPortfolios(portfolios);
  } else {
    const querySnapshot = await getDocs(
      query(
        collectionGroup(firestore, `portfolio`),
        where('uid', '==', id),
        where('tags', 'array-contains-any', term)
      )
    );
    let portfolios = [];
    querySnapshot.forEach((doc) => {
      portfolios.push(doc.data());
    });
    setPortfolios(portfolios);
  }
};

export default getUserPortfolios;
