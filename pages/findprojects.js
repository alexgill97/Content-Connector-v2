import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../firebase/context';

import getProjects from '../firebase/getProjects';
import getProjectsFilters from '../firebase/getProjectsFilters';

//Components
import MapComponent from '../components/FindProjects/MapComponent';
import InfoCardList from '../components/FindProjects/InfoCardList';

//Styles
import styles from '../styles/find_projects.module.scss';
import Filter from '../components/FindProjects/Filter';

const findprojects = () => {
  const { currentUser, userData } = useContext(AuthContext);
  const [selectedUser, setSelectedUser] = useState();
  const [showMap, setShowMap] = useState(true);
  const [projects, setProjects] = useState([]);

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

  const getFilteredProjects = async () => {
    setProjects(
      await getProjectsFilters(
        minimum,
        maximum,
        distance,
        mediaType,
        checkboxCategories,
        setProjects
      )
    );
  };

  useEffect(() => {
    getFilteredProjects();
  }, []);
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
        showMap={showMap}
        setShowMap={setShowMap}
      />
      <main className={styles.find_projects_main}>
        <section className={styles.project_list_container}>
          <h5 className={styles.findprojects__container_header}>
            Projects In Your Area
          </h5>
          {projects && (
            <InfoCardList
              projects={projects}
              currentUser={currentUser}
              userData={userData}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
            />
          )}
        </section>
        <section className={styles.map_section}>
          {projects?.length && showMap && (
            <MapComponent searchResults={projects} />
          )}
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
