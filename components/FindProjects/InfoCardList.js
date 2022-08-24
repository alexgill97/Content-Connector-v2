import React, { useState } from 'react';
import InfoCard from './InfoCard';
import Message from '../Message';
import styles from '../../styles/find_projects.module.scss';

import ApplyProject from '../Modal/ApplyProject';

const InfoCardList = ({
  projects,
  currentUser,
  userData,
  selectedUser,
  setSelectedUser,
}) => {
  const [selectedApplyProjectId, setSelectedApplyProjectId] = useState('');

  return (
    <div className={styles.infocardlist}>
      {projects.map((project) => {
        return (
          <div key={project.projectId}>
            <InfoCard
              key={project.projectId}
              projectId={project.projectId}
              setSelectedUser={setSelectedUser}
              uid={project.businessId}
              avatar={project.businessAvatar}
              username={project.businessUsername}
              postTitle={project.projectTitle}
              description={project.projectOutline}
              projectOffer={project.projectOffer}
              setSelectedApplyProjectId={setSelectedApplyProjectId}
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

            {selectedApplyProjectId === project.projectId && (
              <ApplyProject
                setOpen={setSelectedApplyProjectId}
                project={project}
                userData={userData}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default InfoCardList;
