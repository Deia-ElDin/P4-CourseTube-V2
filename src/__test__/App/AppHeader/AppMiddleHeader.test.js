import { render, screen, fireEvent } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';
import App from '../../../App';
import coursesData from '../../../data/coursesData';

let totalCourses = 0;
coursesData.forEach((instructor) => {
  return (totalCourses += instructor.courses.length);
});

function targetedCourses(courseName) {
  let totalCourses = 0;
  coursesData.forEach((instructor) => {
    const coursesList = instructor.courses;
    coursesList.forEach((course) => {
      course.category === courseName.toLowerCase() ? (totalCourses += 1) : null;
    });
  });
  return totalCourses;
}

function createElements({
  searchInput,
  searchBtn,
  videoContainers,
  videoTitle,
}) {
  const elementsArray = [];

  if (searchInput) {
    const searchInputElement = screen.queryByPlaceholderText('Search');
    elementsArray.push(searchInputElement);
  }
  if (searchBtn) {
    const searchBtnElement = screen.queryByTitle('Search Button');
    elementsArray.push(searchBtnElement);
  }
  if (videoContainers) {
    const videoContainerElements = screen.getAllByTestId('video-container');
    elementsArray.push(videoContainerElements);
  }
  if (videoTitle) {
    const instructorNameElement = screen.getAllByRole('heading', {
      name: 'video-title',
    });
    elementsArray.push(instructorNameElement);
  }

  return elementsArray;
}

describe('App / MiddleHeader (innerWidth = 1300)', () => {
  beforeEach(() => {
    render(<App />);
    global.innerWidth = 1300;
  });

  describe('Search Input & Search Button', () => {
    test('should be able to type into the searchInput and clicking on the searchBtn', () => {
      // Step 1: Initially the searchInput should be empty
      const [searchInput, searchBtn, videoContainers] = createElements({
        searchInput: true,
        searchBtn: true,
        videoContainers: true,
      });
      expect(searchInput.value).toBe('');
      expect(videoContainers.length).toBe(totalCourses);

      // Step 2: Typing into the searchInput
      fireEvent.change(searchInput, { target: { value: 'React' } });
      expect(searchInput.value).toBe('React');

      // Step 3: Clicking on the searchBtn
      fireEvent.click(searchBtn);

      // Step 4: should render only the courses that matche the user search & clears the searchInput
      const [searchInput2, videoContainers2, videoTitle] = createElements({
        searchInput: true,
        videoContainers: true,
        videoTitle: true,
      });
      expect(videoContainers2.length).toBe(targetedCourses('React'));
      expect(videoTitle.length).toBe(targetedCourses('React'));
      expect(videoTitle[0]).toHaveTextContent(
        "React Course - Beginner's Tutorial for React JavaScript Library [2022]"
      );
      expect(searchInput2.value).toBe('');
    });
  });
});
