import React from 'react';
import InfoCard from './InfoCard';
import Message from '../Message';
import styles from '../../styles/find_projects.module.scss';

const InfoCardList = ({
  projects,
  currentUser,
  selectedUser,
  setSelectedUser,
}) => {
  return (
    <div className={styles.infocard_list_container}>
      {projects.map((project) => {
        return (
          <div onClick={() => setSelectedUser(project.uid)}>
            <InfoCard
              key={project.uid}
              uid={project.uid}
              avatar={project.avatar}
              postTitle={project.postTitle}
              description={project.description}
            />

            {selectedUser === project.uid && (
              <div className={styles.message_container}>
                <Message
                  currentUser={currentUser}
                  selectedUser={project}
                  setSelectedUser={setSelectedUser}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default InfoCardList;
