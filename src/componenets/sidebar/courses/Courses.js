import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineCastForEducation } from 'react-icons/md';

function Courses(props) {
  return (
    <section className="courses" data-testid="courses">
      <div className="title" onClick={() => props.handleTitlesClick('courses')}>
        <MdOutlineCastForEducation
          className="sidebar-icon"
          data-testid="courses-icon"
        />
        <h2>Courses</h2>
      </div>
      {props.displayCourses && props.coursesArray}
    </section>
  );
}

Courses.propTypes = {
  handleTitlesClick: PropTypes.func.isRequired,
  displayCourses: PropTypes.bool.isRequired,
  coursesArray: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Courses;
