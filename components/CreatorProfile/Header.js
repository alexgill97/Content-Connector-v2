import React from 'react';
import CreateProject from '../Modal/CreateProject';

const Header = ({ currentUser, profile, username, city }) => {
  return (
    <div>
      <div>
        <h3>{username}</h3>
        <p>{city}</p>
      </div>
      <div>
        <p>Rating</p>
        <p>4.7 X X X X X</p>
      </div>
      <div>
        <button>Message</button>
        <button>Request a Quote</button>
        <button>Report</button>
        <CreateProject currentUser={currentUser} profile={profile} />
      </div>
    </div>
  );
};

export default Header;
