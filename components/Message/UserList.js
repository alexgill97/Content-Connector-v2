import React from 'react';

const UserList = ({ users, setSelectedUser }) => {
  return (
    <div>
      {users.map((user) => (
        <div onClick={() => setSelectedUser(user.uid)}>{user.username}</div>
      ))}
    </div>
  );
};

export default UserList;
