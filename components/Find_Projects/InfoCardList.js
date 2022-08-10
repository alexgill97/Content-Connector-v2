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
          <div onClick={() => setSelectedUser(project.business)}>
            <InfoCard
              key={project.projectId}
              uid={project.business}
              avatar={project.businessAvatar}
              postTitle={project.projectTitle}
              description={project.text}
            />

            {selectedUser === project.uid && (
              <div className={styles.message_container}>
                <Message
                  currentUser={currentUser}
                  selectedUser={project.business}
                  selectedUserAvatar={project.businessAvatar}
                  selectedUserUsername={project.businessUsername}
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
