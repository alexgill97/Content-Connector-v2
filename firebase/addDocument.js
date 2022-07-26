import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { firestore } from './clientApp';

const addDocument = (collectionName, documentObj, id) => {
  const docRef = doc(collection(firestore, collectionName), id);
  return setDoc(docRef, {
    ...documentObj,
    timestamp: serverTimestamp(),
  });
};

export default addDocument;
