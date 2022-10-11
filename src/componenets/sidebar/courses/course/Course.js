import React from 'react';
import PropTypes from 'prop-types';

function Course(props) {
  function cap(inputName) {
    let capIndex = [0];
    let capName = '';
    for (let i = 0; i < inputName.length; i++) {
      if (inputName[i] === ' ') {
        capIndex.push(i + 1);
      }
    }
    for (let i = 0; i < inputName.length; i++) {
      if (capIndex.includes(i)) {
        capName += inputName[i].toUpperCase();
      } else {
        capName += inputName[i];
      }
    }
    return capName;
  }

  return (
    <div
      className="course"
      id={props.id}
      onClick={props.handleClick}
      data-testid="course"
    >
      <div className="logo" data-testid="course-logo">
        <img
          className="sidebar-img"
          src={process.env.PUBLIC_URL + props.courseLogo}
          alt={props.courseAlt}
        />
      </div>
      <h4 className="name" aria-label="course-name">
        {cap(props.courseName)}
      </h4>
    </div>
  );
}

Course.propTypes = {
  id: PropTypes.string.isRequired,
  courseLogo: PropTypes.string.isRequired,
  courseAlt: PropTypes.string.isRequired,
  courseName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Course;
