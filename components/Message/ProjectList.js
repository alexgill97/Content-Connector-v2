import React, { useContext } from 'react';
import { AuthContext } from '../../firebase/context';

const ProjectList = ({ projects, setSelectedUser }) => {
  console.log(projects);
  const { currentUser, userData } = useContext(AuthContext);

  return (
    <div>
      {projects.map(({ projectTitle, creator, business }) => (
        <div
          onClick={() =>
            setSelectedUser(currentUser === creator ? business : creator)
          }
        >
          {projectTitle}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
