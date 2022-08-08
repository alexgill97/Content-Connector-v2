import { collection, getDocs, where } from 'firebase/firestore';
import { firestore } from './clientApp';

const getCreatorProjects = async (uid, setUserProjects) => {
  const projectSnapshots = await getDocs(
    collection(firestore, 'projects'),
    where('creator', '==', uid)
  );
  const projects = [];
  projectSnapshots.forEach((project) => {
    projects.push(project.data());
  });
  setUserProjects(projects);
};

export default getCreatorProjects;
