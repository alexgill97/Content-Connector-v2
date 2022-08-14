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
          creatorId,
          businessId,
          accepted,
          completed,
          projectId,
        }) => (
          <div
            key={projectId}
            onClick={() =>
              currentUser === creatorId
                ? getUserData(businessId, setSelectedUser)
                : getUserData(creatorId, setSelectedUser)
            }
          >
            <p>{projectTitle}</p>
            <div>
              {!accepted && !completed && <p>Offer Receieved</p>}
              {accepted && !completed && <p>Project in Progress</p>}
              {accepted && completed && <p>Project Completed</p>}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProjectList;
