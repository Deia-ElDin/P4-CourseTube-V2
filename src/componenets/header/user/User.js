import React from 'react';

function User() {
  return (
    <div className="user" data-testid="user">
      <img src={process.env.PUBLIC_URL + '/img/Deia.jpg'} alt="Deia" />
    </div>
  );
}

export default User;
