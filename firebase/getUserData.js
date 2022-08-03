import { getDoc, doc } from 'firebase/firestore';
import { firestore } from './clientApp';

const getUserData = async (uid, setState = 0) => {
  const userData = await getDoc(doc(firestore, 'users', uid));
  if (setState) {
    setState(userData.data());
  } else {
    return userData.data();
  }
};

export default getUserData;
