import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../firebase/context';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase/clientApp';
import getProjects from '../firebase/getProjects';

//Components
import MapComponent from '../components/Find_Projects/MapComponent';
import InfoCardList from '../components/Find_Projects/InfoCardList';

//Styles
import styles from '../styles/find_projects.module.scss';

const findprojects = ({ projects }) => {
  const { currentUser, userData } = useContext(AuthContext);
  const [selectedUser, setSelectedUser] = useState();

  return (
    <div className={styles.find_projects_container}>
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
  console.log(projects);

  return {
    props: {
      projects,
    },
  };
}
