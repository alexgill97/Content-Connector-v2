import { getDocs, collection, where } from 'firebase/firestore';
import { firestore } from './clientApp';

const getProjects = async (city, setProjects, tag = 0) => {
  const projects = [];
  if (!tag) {
    const querySnapshot = await getDocs(
      collection(firestore, 'projects'),
      where('city', '==', city)
    );
    querySnapshot.forEach((doc) => {
      projects.push(doc.data());
    });
  } else {
    const querySnapshot = await getDocs(
      collection(firestore, 'projects'),
      where('city', '==', city),
      where('tags', 'array-contains', tag)
    );
    querySnapshot.forEach((doc) => {
      projects.push(doc.data());
    });
  }

  setProjects(projects);
};

export default getProjects;
