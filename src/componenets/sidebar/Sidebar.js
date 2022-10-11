import React from 'react';
import PropTypes from 'prop-types';
import Home from './home/Home';
import Courses from './courses/Courses';
import Instructors from './instructors/Instructors';
import Footer from './footer/Footer';
import ArrowButton from '../header/dependencies/ArrowButton';

function Sidebar(props) {
  const { mainClass, secondaryClass, displayArrowBtn, courses, instructors } =
    props.section;

  const [handleArrowBtnClick, handleSidebarTitlesClick] = props.functions;

  const [toggleBtn, coursesList, instructorsList] = props.dependencies;

  return (
    <div
      className={toggleBtn ? secondaryClass : mainClass}
      data-testid="sidebar"
    >
      {displayArrowBtn && (
        <ArrowButton
          id="sidebarArrowBtn"
          handleClick={handleArrowBtnClick}
          ariaLabel="sidebar-arrow-btn"
        />
      )}
      <Home handleTitlesClick={handleSidebarTitlesClick} />
      <Courses
        displayCourses={courses}
        coursesArray={coursesList}
        handleTitlesClick={handleSidebarTitlesClick}
      />
      <Instructors
        displayInstructors={instructors}
        instructorsArray={instructorsList}
        handleTitlesClick={handleSidebarTitlesClick}
      />
      <Footer />
    </div>
  );
}

Sidebar.propTypes = {
  section: PropTypes.object.isRequired,
  functions: PropTypes.arrayOf(PropTypes.func).isRequired,
  dependencies: PropTypes.array.isRequired,
};

export default Sidebar;
