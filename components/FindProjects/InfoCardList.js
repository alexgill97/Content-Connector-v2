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
    <div className={styles.infocardlist}>
      {projects.map((project) => {
        return (
          <div>
            <InfoCard
              key={project.projectId}
              setSelectedUser={setSelectedUser}
              uid={project.businessId}
              avatar={project.businessAvatar}
              username={project.businessUsername}
              postTitle={project.projectTitle}
              description={project.projectOutline}
            />

            {selectedUser === project.businessId && (
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
