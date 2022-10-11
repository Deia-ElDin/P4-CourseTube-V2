import { render, screen, fireEvent } from '@testing-library/react';
import Instructors from '../../componenets/sidebar/instructors/Instructors';
import Instructor from '../../componenets/sidebar/instructors/instructor/Instructor';
import coursesData from '../../data/coursesData';

const mockedHandleTitlesClick = jest.fn();

const instructorsList = coursesData.map((instructor) => {
  const { name } = instructor;
  const imgSrc = `img/instructors/${name}/logo.jpg`;

  return (
    <Instructor
      key={name}
      instructorLogo={imgSrc}
      instructorAlt={name}
      instructorName={name}
      handleClick={() => handleInstructorClick(name)}
    />
  );
});

const instructorsProps = {
  handleTitlesClick: mockedHandleTitlesClick,
  displayInstructors: true,
  instructorsArray: instructorsList,
};

function createElements({
  instructorsDiv,
  title,
  icon,
  instructorDiv,
  instructorImg,
  instructorName,
}) {
  const elementsArray = [];
  if (instructorsDiv) {
    const instructorsDivElement = screen.getByTestId('instructors');
    elementsArray.push(instructorsDivElement);
  }
  if (title) {
    const titleElement = screen.getByText('Instructors');
    elementsArray.push(titleElement);
  }
  if (icon) {
    const iconElement = screen.getByTestId('instructors-icon');
    elementsArray.push(iconElement);
  }
  if (instructorDiv) {
    const instructorDivElement = screen.getAllByTestId('instructor');
    elementsArray.push(instructorDivElement);
  }
  if (instructorImg) {
    const instructorImgElement = screen.getAllByRole('img');
    elementsArray.push(instructorImgElement);
  }
  if (instructorName) {
    const instructorNameElement = screen.getAllByRole('heading', {
      name: 'instructor-name',
    });
    elementsArray.push(instructorNameElement);
  }

  return elementsArray;
}

describe('Instructors', () => {
  beforeEach(() => {
    render(<Instructors {...instructorsProps} />);
  });

  test('should render the instructorsDiv', () => {
    const [instructorsDiv] = createElements({
      instructorsDiv: true,
    });
    expect(instructorsDiv).toBeInTheDocument();
  });

  describe('Layout', () => {
    test('should render the instructorsDiv components: title, icon', () => {
      const [title, icon] = createElements({
        title: true,
        icon: true,
      });
      expect(title).toBeInTheDocument();
      expect(icon).toBeInTheDocument();
    });

    test('should render instructorsList.length items', () => {
      const [instructorDiv, instructorImg, instructorName] = createElements({
        instructorDiv: true,
        instructorImg: true,
        instructorName: true,
      });
      expect(instructorDiv.length).toBe(instructorsList.length);
      expect(instructorImg.length).toBe(instructorsList.length);
      expect(instructorName.length).toBe(instructorsList.length);
    });
  });

  describe('User Action', () => {
    describe('Instructors Icon click / handleTitlesClick', () => {
      test('should trigger mockedHandleTitlesClick once the user clicks on the home icon', () => {
        const [icon] = createElements({ icon: true });
        fireEvent.click(icon);
        expect(mockedHandleTitlesClick).toHaveBeenCalledTimes(1);
      });
    });

    describe('Instructors Title click / handleTitlesClick', () => {
      test('should trigger mockedHandleTitlesClick once the user clicks on the home title', () => {
        const [title] = createElements({ title: true });
        fireEvent.click(title);
        expect(mockedHandleTitlesClick).toHaveBeenCalledTimes(1);
      });
    });
  });
});
