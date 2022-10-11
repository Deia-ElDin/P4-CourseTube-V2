import React from 'react';
import PropTypes from 'prop-types';
import { FaChalkboardTeacher } from 'react-icons/fa';

function Instructors(props) {
  return (
    <section className="instructors" data-testid="instructors">
      <div
        className="title"
        onClick={() => props.handleTitlesClick('instructors')}
      >
        <FaChalkboardTeacher
          className="sidebar-icon"
          data-testid="instructors-icon"
        />
        <h2>Instructors</h2>
      </div>
      {props.displayInstructors && props.instructorsArray}
    </section>
  );
}

Instructors.propTypes = {
  handleTitlesClick: PropTypes.func.isRequired,
  displayInstructors: PropTypes.bool.isRequired,
  instructorsArray: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Instructors;
