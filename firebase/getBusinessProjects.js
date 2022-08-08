import { collection, query, getDocs, where } from 'firebase/firestore';
import { firestore } from './clientApp';

const getBusinessProjects = async (uid, setUserProjects) => {
  const projectSnapshots = await getDocs(
    query(collection(firestore, 'projects'), where('business', '==', uid))
  );
  const projects = [];
  projectSnapshots.forEach((project) => {
    projects.push(project.data());
  });
  console.log(projects);
  setUserProjects(projects);
};

export default getBusinessProjects;
