import { getDocs, collection, where } from 'firebase/firestore';
import { firestore } from './clientApp';

const getProjects = async (city, setProjects) => {
  const querySnapshot = await getDocs(
    collection(firestore, 'projects'),
    where('city', '==', city)
  );
  const projects = [];
  querySnapshot.forEach((doc) => {
    projects.push(doc.data());
  });
  setProjects(projects);
};

export default getProjects;
