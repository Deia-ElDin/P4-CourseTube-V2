import React from 'react';
import PropTypes from 'prop-types';

function Logo(props) {
  return (
    <div className="logo" onClick={props.handleClick} data-testid="logo-div">
      <img
        src={process.env.PUBLIC_URL + '/img/logo.png'}
        alt="CourseTube Logo"
      />
    </div>
  );
}

Logo.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Logo;
