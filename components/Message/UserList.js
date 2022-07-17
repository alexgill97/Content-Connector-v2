import React from 'react';
import User from './User';

const UserList = ({ users, setSelectedUser }) => {
  return (
    <div>
      {users.map((user) => (
        <div onClick={() => setSelectedUser(user)}>
          <User key={user.uid} user={user} />
        </div>
      ))}
    </div>
  );
};

export default UserList;
