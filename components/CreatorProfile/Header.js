import React from 'react';

const Header = ({ username, city }) => {
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
      </div>
    </div>
  );
};

export default Header;
