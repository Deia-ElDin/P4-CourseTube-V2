import { render, screen, fireEvent } from '@testing-library/react';
import Courses from '../../componenets/sidebar/courses/Courses';
import Course from '../../componenets/sidebar/courses/course/Course';
import coursesLogo from '../../data/coursesLogo';

const mockedHandleTitlesClick = jest.fn();

const coursesList = coursesLogo.map((course) => {
  const imgSrc = `img/${course}.png`;
  return (
    <Course
      key={course}
      id={course}
      courseLogo={imgSrc}
      courseAlt={course}
      courseName={course}
      handleClick={() => hanldeCourseClick(ID)}
    />
  );
});

const coursesProps = {
  handleTitlesClick: mockedHandleTitlesClick,
  displayCourses: true,
  coursesArray: coursesList,
};

function createElements({
  coursesDiv,
  title,
  icon,
  courseDiv,
  courseImg,
  courseName,
}) {
  const elementsArray = [];

  if (coursesDiv) {
    const coursesDivElement = screen.getByTestId('courses');
    elementsArray.push(coursesDivElement);
  }
  if (title) {
    const titleElement = screen.getByText('Courses');
    elementsArray.push(titleElement);
  }
  if (icon) {
    const iconElement = screen.getByTestId('courses-icon');
    elementsArray.push(iconElement);
  }
  if (courseDiv) {
    const courseDivElement = screen.getAllByTestId('course');
    elementsArray.push(courseDivElement);
  }
  if (courseImg) {
    const courseImgElement = screen.getAllByRole('img');
    elementsArray.push(courseImgElement);
  }
  if (courseName) {
    const courseNameElement = screen.getAllByRole('heading', {
      name: 'course-name',
    });
    elementsArray.push(courseNameElement);
  }

  return elementsArray;
}

describe('Courses', () => {
  beforeEach(() => {
    render(<Courses {...coursesProps} />);
  });

  test('should render the coursesDiv', () => {
    const [coursesDiv] = createElements({
      coursesDiv: true,
    });
    expect(coursesDiv).toBeInTheDocument();
  });

  describe('Layout', () => {
    test('should render the coursesDiv components: title, icon', () => {
      const [title, icon] = createElements({
        title: true,
        icon: true,
      });
      expect(title).toBeInTheDocument();
      expect(icon).toBeInTheDocument();
    });

    test('should render coursesList.length items', () => {
      const [courseDiv, courseImg, courseName] = createElements({
        courseDiv: true,
        courseImg: true,
        courseName: true,
      });
      expect(courseDiv.length).toBe(coursesList.length);
      expect(courseImg.length).toBe(coursesList.length);
      expect(courseName.length).toBe(coursesList.length);
    });
  });

  describe('User Action', () => {
    describe('Courses Icon click / handleTitlesClick', () => {
      test('should trigger mockedHandleTitlesClick once the user clicks on the courses icon', () => {
        const [icon] = createElements({ icon: true });
        fireEvent.click(icon);
        expect(mockedHandleTitlesClick).toHaveBeenCalledTimes(1);
      });
    });

    describe('Courses Title click / handleTitlesClick', () => {
      test('should trigger mockedHandleTitlesClick once the user clicks on the courses title', () => {
        const [title] = createElements({ title: true });
        fireEvent.click(title);
        expect(mockedHandleTitlesClick).toHaveBeenCalledTimes(1);
      });
    });
  });
});
