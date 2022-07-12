import React from 'react';

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <div>{user.username}</div>
      ))}
    </div>
  );
};

export default UserList;
