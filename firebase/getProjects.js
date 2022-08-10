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
      const project = doc.data();
      project.createdAt = project.createdAt
        .toDate()
        .toLocaleDateString('en-US');
      project.completedBy = project.completedBy
        .toDate()
        .toLocaleDateString('en-US');
      projects.push(project);
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
  if (!setProjects) return projects;
  setProjects(projects);
};

export default getProjects;
