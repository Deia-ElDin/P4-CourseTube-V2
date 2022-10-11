import React from 'react';
import PropTypes from 'prop-types';

function CourseTube(props) {
  return (
    <div
      className="course-tube"
      style={props.style}
      data-testid="coursetube-page"
    >
      {props.courseTubeArray}
    </div>
  );
}

CourseTube.propTypes = {
  courseTubeArray: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.element)),
};

export default CourseTube;
