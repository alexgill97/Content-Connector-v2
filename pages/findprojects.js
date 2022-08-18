import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../firebase/context';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase/clientApp';

import getProjects from '../firebase/getProjects';
import getProjectsFilters from '../firebase/getProjectsFilters';

//Components
import MapComponent from '../components/FindProjects/MapComponent';
import InfoCardList from '../components/FindProjects/InfoCardList';

//Styles
import styles from '../styles/find_projects.module.scss';
import Filter from '../components/FindProjects/Filter';

const findprojects = ({ projects }) => {
  const { currentUser, userData } = useContext(AuthContext);
  const [selectedUser, setSelectedUser] = useState();

  const [minimum, setMinimum] = useState(0);
  const [maximum, setMaximum] = useState(0);
  const [distance, setDistance] = useState(80);
  const [mediaType, setMediaType] = useState('both');
  const [checkboxCategories, setCheckboxCategories] = useState([
    { displayName: 'Wedding', id: 'wedding', value: true },
    { displayName: 'Lifestyle', id: 'lifestyle', value: true },
    { displayName: 'Product', id: 'product', value: true },
    { displayName: 'Fashion', id: 'fashion', value: true },
    { displayName: 'Sport', id: 'sport', value: true },
    { displayName: 'Real Estate', id: 'realEstate', value: true },
    { displayName: 'Automotive', id: 'automotive', value: true },
    { displayName: 'Portrait', id: 'portrait', value: true },
    { displayName: 'Brand', id: 'brand', value: true },
    { displayName: 'Event', id: 'event', value: true },
  ]);

  console.log(projects);

  const getFilteredProjects = () => {
    getProjectsFilters(
      minimum,
      maximum,
      distance,
      mediaType,
      checkboxCategories
    );
  };
  return (
    <div className={styles.find_projects_container}>
      <Filter
        getFilteredProjects={getFilteredProjects}
        minimum={minimum}
        setMinimum={setMinimum}
        maximum={maximum}
        setMaximum={setMaximum}
        distance={distance}
        setDistance={setDistance}
        mediaType={mediaType}
        setMediaType={setMediaType}
        checkboxCategories={checkboxCategories}
        setCheckboxCategories={setCheckboxCategories}
      />
      <main className={styles.find_projects_main}>
        <section className={styles.project_list_container}>
          <h5>Projects In Your Area</h5>
          {projects && (
            <InfoCardList
              projects={projects}
              currentUser={currentUser}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
            />
          )}
        </section>
        <section className={styles.map_section}>
          <MapComponent searchResults={projects} />
        </section>
      </main>
    </div>
  );
};

export default findprojects;

export async function getStaticProps() {
  const projects = await getProjects('toronto');

  return {
    props: {
      projects,
    },
  };
}
