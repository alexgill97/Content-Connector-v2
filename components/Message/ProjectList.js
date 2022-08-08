import React, { useContext } from 'react';
import { AuthContext } from '../../firebase/context';
import getUserData from '../../firebase/getUserData';

const ProjectList = ({ projects, setSelectedUser }) => {
  console.log(projects);
  const { currentUser, userData } = useContext(AuthContext);

  return (
    <div>
      {projects.map(({ projectTitle, creator, business, accepted }) => (
        <div
          onClick={() =>
            currentUser === creator
              ? getUserData(business, setSelectedUser)
              : getUserData(creator, setSelectedUser)
          }
        >
          <p>{projectTitle}</p>
          <p>Status: {accepted ? 'On Going' : 'pending'}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
