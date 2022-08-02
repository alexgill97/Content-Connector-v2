import { getDoc } from 'firebase/firestore';
import { firestore } from './clientApp';

const getUserData = async (uid) => {
  const userData = await getDoc(doc(firestore, 'users', uid));
  return userData;
};

export default getUserData;
