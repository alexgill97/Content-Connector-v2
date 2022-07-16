import React from 'react';
import User from './User';

const UserList = ({ users, setSelectedUser }) => {
  return (
    <div>
      {users.map((user) => (
        <div onClick={() => setSelectedUser(user.uid)}>
          <User user={user} />
        </div>
      ))}
    </div>
  );
};

export default UserList;
