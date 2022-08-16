import React, { useContext } from 'react';
import { AuthContext } from '../../firebase/context';
import getUserData from '../../firebase/getUserData';

const ProjectList = ({ projects, setSelectedUser }) => {
  console.log(projects);
  const { currentUser, userData } = useContext(AuthContext);

  return (
    <div>
      {projects.map(
        ({
          projectTitle,
          businessAvatar,
          businessUsername,
          creatorId,
          businessId,
          completedBy,
          accepted,
          completed,
          projectId,
          projectOffer,
        }) => (
          <div
            key={projectId}
            onClick={() =>
              currentUser === creatorId
                ? getUserData(businessId, setSelectedUser)
                : getUserData(creatorId, setSelectedUser)
            }
          >
            <div>
              <img src={businessAvatar} alt="" />
              <p>{projectTitle}</p>
              <p>{businessUsername}</p>
            </div>
            <div>
              Status:
              {!accepted && !completed && (
                <p>
                  Offer Receieved - Complete By:
                  {completedBy.toDate().toLocaleDateString('en-US')}
                </p>
              )}
              {accepted && !completed && (
                <p>
                  Project in Progress - Complete By:
                  {completedBy.toDate().toLocaleDateString('en-US')}
                </p>
              )}
              {accepted && completed && <p>Project Completed</p>}
            </div>
            <div>${projectOffer}</div>
          </div>
        )
      )}
    </div>
  );
};

export default ProjectList;
