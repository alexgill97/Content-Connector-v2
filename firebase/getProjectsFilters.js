import { collection, getDocs, where, query } from 'firebase/firestore';
import { firestore } from './clientApp';

async function getProjectsFilters(
  minimum,
  maximum,
  distance,
  mediaType,
  checkboxCategories,
  setProjects
) {
  const filteredCategories = checkboxCategories.filter(
    (category) => category.value
  );
  const searchCategories = filteredCategories.map((category) => category.id);
  console.log(searchCategories);
  console.log(minimum, maximum, mediaType);

  const max = maximum === 0 ? 100000 : maximum;

  const projectsRef = collection(firestore, 'projects');
  const q = query(
    projectsRef,

    where('accepted', '==', false),
    where('projectOffer', '>', minimum),
    where('projectOffer', '<', max),
    where('projectMediaType', '==', mediaType),
    where('projectCategory', 'in', searchCategories)
  );

  const querySnapshot = await getDocs(q);

  const projects = [];
  querySnapshot.forEach((project) => {
    projects.push(project.data());
  });

  return projects;
}

export default getProjectsFilters;
