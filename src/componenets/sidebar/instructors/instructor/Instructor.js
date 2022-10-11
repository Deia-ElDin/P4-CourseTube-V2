import React from 'react';
import PropTypes from 'prop-types';

function Instructor(props) {
  return (
    <div
      className="instructor"
      onClick={props.handleClick}
      data-testid="instructor"
    >
      <div className="logo" data-testid="instructor-logo">
        <img
          className="sidebar-img"
          src={process.env.PUBLIC_URL + props.instructorLogo}
          alt={props.instructorAlt}
        />
      </div>
      <h4 className="name" aria-label="instructor-name">
        {props.instructorName}
      </h4>
    </div>
  );
}

Instructor.propTypes = {
  handleClick: PropTypes.func.isRequired,
  instructorLogo: PropTypes.string.isRequired,
  instructorAlt: PropTypes.string.isRequired,
  instructorName: PropTypes.string.isRequired,
};

export default Instructor;
