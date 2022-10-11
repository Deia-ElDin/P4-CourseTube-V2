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
      course.category === courseName ? (totalCourses += 1) : null;
    });
  });
  return totalCourses;
}

function targetedInstructor(instructorName) {
  let totalCourses = 0;
  coursesData.forEach((instructor) => {
    instructor.name === instructorName
      ? (totalCourses += instructor.courses.length)
      : null;
  });
  return totalCourses;
}

function createElements({
  leftHeaderDiv,
  middleHeaderDiv,
  rightHeaderDiv,
  toggleBtn,
  sidebar,
  home,
  courses,
  courseName,
  instructors,
  instructorName,
  sidebarArrowBtn,
  main,
  videoContainers,
  videoTitle,
}) {
  const elementsArray = [];

  if (leftHeaderDiv) {
    const leftHeaderDivElement = screen.queryByTestId('left-header');
    elementsArray.push(leftHeaderDivElement);
  }
  if (middleHeaderDiv) {
    const middleHeaderDivElement = screen.queryByTestId(/middle-header/i);
    elementsArray.push(middleHeaderDivElement);
  }
  if (rightHeaderDiv) {
    const rightHeaderDivElement = screen.queryByTestId('right-header');
    elementsArray.push(rightHeaderDivElement);
  }
  if (toggleBtn) {
    const toggleBtnElement = screen.getByRole('button', { name: 'toggle-btn' });
    elementsArray.push(toggleBtnElement);
  }
  if (sidebar) {
    const sidebarElement = screen.queryByTestId('sidebar');
    elementsArray.push(sidebarElement);
  }
  if (home) {
    const homeElement = screen.getByText('Home');
    elementsArray.push(homeElement);
  }
  if (courses) {
    const coursesElement = screen.getByText('Courses');
    elementsArray.push(coursesElement);
  }
  if (courseName) {
    const courseNameElement = screen.getAllByRole('heading', {
      name: 'course-name',
    });
    elementsArray.push(courseNameElement);
  }
  if (instructors) {
    const instructorsElement = screen.getByText('Instructors');
    elementsArray.push(instructorsElement);
  }
  if (instructorName) {
    const instructorNameElement = screen.getAllByRole('heading', {
      name: 'instructor-name',
    });
    elementsArray.push(instructorNameElement);
  }
  if (sidebarArrowBtn) {
    const sidebarArrowBtnElement = screen.queryByRole('button', {
      name: 'sidebar-arrow-btn',
    });
    elementsArray.push(sidebarArrowBtnElement);
  }
  if (main) {
    const sidebarElement = screen.getByRole('main');
    elementsArray.push(sidebarElement);
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

function initiallyShouldRender({ device }) {
  const [leftHeaderDiv, middleHeaderDiv, rightHeaderDiv] = createElements({
    leftHeaderDiv: true,
    middleHeaderDiv: true,
    rightHeaderDiv: true,
  });

  if (device === 'Pc') {
    expect(leftHeaderDiv).toBeInTheDocument();
    expect(middleHeaderDiv).toBeInTheDocument();
    expect(rightHeaderDiv).toBeInTheDocument();
  } else if (device === 'IPad') {
    expect(leftHeaderDiv).toBeInTheDocument();
    expect(middleHeaderDiv).toBeInTheDocument();
  } else {
    expect(leftHeaderDiv).toBeInTheDocument();
  }
}

function renderSidebarArrowBtn({ exist }) {
  const [sideBarArrowBtn] = createElements({ sidebarArrowBtn: true });
  exist
    ? expect(sideBarArrowBtn).toBeInTheDocument()
    : expect(sideBarArrowBtn).not.toBeInTheDocument();
}

function currentClass({ sidebarClass, mainClass }) {
  const [sidebar, main] = createElements({ sidebar: true, main: true });
  expect(sidebar).toHaveClass(sidebarClass);
  expect(main).toHaveClass(mainClass);
}

function handleToggleBtnClick({ sidebarClass, mainClass }) {
  const [toggleBtn, sidebar, main] = createElements({
    toggleBtn: true,
    sidebar: true,
    main: true,
  });
  fireEvent.click(toggleBtn);
  expect(sidebar).toHaveClass(sidebarClass);
  expect(main).toHaveClass(mainClass);
}

function handleSidebarArrowBtnClick({ sidebarClass, mainClass }) {
  const [toggleBtn, sidebar, sidebarArrowBtn, main] = createElements({
    toggleBtn: true,
    sidebar: true,
    sidebarArrowBtn: true,
    main: true,
  });
  fireEvent.click(toggleBtn);
  fireEvent.click(sidebarArrowBtn);

  expect(sidebar).toHaveClass(sidebarClass);
  expect(main).toHaveClass(mainClass);
}

describe('App / Sidebar', () => {
  describe('Courses & Home', () => {
    beforeEach(() => {
      render(<App />);
    });

    test("should render the right (course) based on the user's choice", () => {
      // Step 1: Initially the videoContainers.length === totalCourses (renders all the courses)
      const [home, courseName, videoContainers] = createElements({
        home: true,
        courseName: true,
        videoContainers: true,
      });
      expect(videoContainers.length).toBe(totalCourses);

      // Step 2: Clicking on the (first course) in the provided Courses Section (Web Development)
      fireEvent.click(courseName[0]);

      // Step 3: should render (only the course) that match the user selection
      const [videoContainers2, videoTitle] = createElements({
        videoContainers: true,
        videoTitle: true,
      });
      expect(videoContainers2.length).toBe(targetedCourses('webDevelopment'));
      expect(videoTitle.length).toBe(targetedCourses('webDevelopment'));
      expect(videoTitle[0]).toHaveTextContent(
        'The Complete 2022 Web Development Bootcamp'
      );

      // Step 4: Clicking on the Home
      fireEvent.click(home);

      // Setp 5: should render back the whole courses
      const [videoContainers3] = createElements({
        videoContainers: true,
      });
      expect(videoContainers3.length).toBe(totalCourses);
    });

    test("should render the right (courses) based on the user's choice", () => {
      // Step 1: Initially the videoContainers.length === totalCourses (renders all the courses)
      const [home, courseName, videoContainers] = createElements({
        home: true,
        courseName: true,
        videoContainers: true,
      });
      expect(videoContainers.length).toBe(totalCourses);

      // Step 2: Clicking on the (fourth course) in the provided Courses Section (Javascript)
      fireEvent.click(courseName[3]);

      // Step 3: should render (the courses) that match the user selection
      const [videoContainers2, videoTitle] = createElements({
        videoContainers: true,
        videoTitle: true,
      });
      expect(videoContainers2.length).toBe(targetedCourses('javascript'));
      expect(videoTitle.length).toBe(targetedCourses('javascript'));
      expect(videoTitle[0]).toHaveTextContent(
        'JavaScript Full Course 🌐【𝙁𝙧𝙚𝙚】'
      );
      expect(videoTitle[1]).toHaveTextContent(
        'JavaScript Programming - Full Course'
      );

      // Step 4: Clicking on the Home
      fireEvent.click(home);

      // Setp 5: should render back the whole courses
      const [videoContainers3] = createElements({
        videoContainers: true,
      });
      expect(videoContainers3.length).toBe(totalCourses);
    });
  });

  describe('Instructors & Home', () => {
    beforeEach(() => {
      render(<App />);
    });

    test("should render the right course/courses based on the user's choice", () => {
      // Step 1: Initially the videoContainers.length === totalCourses (renders all the courses)
      const [home, instructorName, videoContainers] = createElements({
        home: true,
        instructorName: true,
        videoContainers: true,
      });
      expect(videoContainers.length).toBe(totalCourses);

      // Step 2: Clicking on the (first instructor) in the provided Instructors Section (Bro Code)
      fireEvent.click(instructorName[0]);

      // Step 3: should render (only the courses) made by (Bro Code)
      const [videoContainers2, videoTitle] = createElements({
        videoContainers: true,
        videoTitle: true,
      });
      expect(videoContainers2.length).toBe(targetedInstructor('Bro Code'));
      expect(videoTitle.length).toBe(targetedInstructor('Bro Code'));
      expect(videoTitle[0]).toHaveTextContent(
        'JavaScript Full Course 🌐【𝙁𝙧𝙚𝙚】'
      );
      expect(videoTitle[1]).toHaveTextContent(
        'HTML & CSS Full Course 🌎【𝙁𝙧𝙚𝙚】'
      );
      expect(videoTitle[2]).toHaveTextContent(
        'Learn HTML in 1 hour 🌎【𝙁𝙧𝙚𝙚】'
      );
      expect(videoTitle[3]).toHaveTextContent('Learn CSS in 1 hour 🎨【𝙁𝙧𝙚𝙚】');

      // Step 4: Clicking on the Home
      fireEvent.click(home);

      // Setp 5: should render back the whole courses
      const [videoContainers3] = createElements({
        videoContainers: true,
      });
      expect(videoContainers3.length).toBe(totalCourses);
    });
  });

  describe('SidebarArrowBtn', () => {
    describe('Pc', () => {
      describe('innerwidth > 1300', () => {
        beforeEach(() => {
          render(<App />);
          global.innerWidth = 1300;
        });
        test('initially should render', () => {
          initiallyShouldRender({ device: 'Pc' });
        });
        test('should not render the sidebarArrowBtn', () => {
          renderSidebarArrowBtn({ exist: false });
        });
        test('sidebar class should be sidebar-max, main class should be main-min', () => {
          currentClass({ sidebarClass: 'sidebar-max', mainClass: 'main-min' });
        });
        test('should change the sidebar class to sidebar-min & the main class to main-max once the user clicks on the toggleBtn ', () => {
          handleToggleBtnClick({
            sidebarClass: 'sidebar-min',
            mainClass: 'main-max ',
          });
        });
      });
    });

    describe('IPad', () => {
      describe('innerwidth > 1000', () => {
        beforeEach(() => {
          render(<App />);
          global.innerWidth = 1000;
        });
        test('initially should render', () => {
          initiallyShouldRender({ device: 'IPad' });
        });
        test('should not render the sidebarArrowBtn', () => {
          renderSidebarArrowBtn({ exist: false });
        });
        test('sidebar class should be sidebar-min, main class should be main-max', () => {
          currentClass({ sidebarClass: 'sidebar-min', mainClass: 'main-max' });
        });
        test('should change the sidebar class to sidebar-off & the main class to main-full once the user clicks on the toggleBtn ', () => {
          handleToggleBtnClick({
            sidebarClass: 'sidebar-off',
            mainClass: 'main-full ',
          });
        });
      });

      describe('innerwidth > 880', () => {
        beforeEach(() => {
          render(<App />);
          global.innerWidth = 880;
        });
        test('initially should render', () => {
          initiallyShouldRender({ device: 'IPad' });
        });
        test('should not render the sidebarArrowBtn', () => {
          renderSidebarArrowBtn({ exist: false });
        });
        test('sidebar class should be sidebar-min, main class should be main-max', () => {
          currentClass({ sidebarClass: 'sidebar-min', mainClass: 'main-max' });
        });
        test('should change the sidebar class to sidebar-off & the main class to main-full once the user clicks on the toggleBtn ', () => {
          handleToggleBtnClick({
            sidebarClass: 'sidebar-off',
            mainClass: 'main-full ',
          });
        });
      });

      describe('innerwidth > 810', () => {
        beforeEach(() => {
          render(<App />);
          global.innerWidth = 810;
        });
        test('initially should render', () => {
          initiallyShouldRender({ device: 'IPad' });
        });
        test('should not render the sidebarArrowBtn', () => {
          renderSidebarArrowBtn({ exist: false });
        });
        test('sidebar class should be sidebar-min, main class should be main-max', () => {
          currentClass({ sidebarClass: 'sidebar-min', mainClass: 'main-max' });
        });
        test('should change the sidebar class to sidebar-off & the main class to main-full once the user clicks on the toggleBtn ', () => {
          handleToggleBtnClick({
            sidebarClass: 'sidebar-off',
            mainClass: 'main-full ',
          });
        });
      });
    });

    describe('Mobile', () => {
      describe('innerwidth > 585', () => {
        beforeEach(() => {
          render(<App />);
          global.innerWidth = 585;
        });
        test('initially should render', () => {
          initiallyShouldRender({ device: 'Mobile' });
        });
        test('should render the sidebarArrowBtn', () => {
          renderSidebarArrowBtn({ exist: true });
        });
        test('sidebar class should be sidebar-off, main class should be main-full', () => {
          currentClass({ sidebarClass: 'sidebar-off', mainClass: 'main-full' });
        });
        test('should change the sidebar class to sidebar-min & the main class to main-max once the user clicks on the toggleBtn ', () => {
          handleToggleBtnClick({
            sidebarClass: 'sidebar-min',
            mainClass: 'main-max ',
          });
        });
        test('should change the sidebar class back to sidebar-off & the main class to main-full once the user clicks on the sidebarArrowBtn', () => {
          handleSidebarArrowBtnClick({
            sidebarClass: 'sidebar-off',
            mainClass: 'main-full ',
          });
        });
      });

      describe('innerwidth > 500', () => {
        beforeEach(() => {
          render(<App />);
          global.innerWidth = 500;
        });
        test('initially should render', () => {
          initiallyShouldRender({ device: 'Mobile' });
        });
        test('should render the sidebarArrowBtn', () => {
          renderSidebarArrowBtn({ exist: true });
        });
        test('sidebar class should be sidebar-off, main class should be main-full', () => {
          currentClass({ sidebarClass: 'sidebar-off', mainClass: 'main-full' });
        });
        test('should change the sidebar class to sidebar-min & the main class to main-max once the user clicks on the toggleBtn ', () => {
          handleToggleBtnClick({
            sidebarClass: 'sidebar-min',
            mainClass: 'main-max ',
          });
        });
        test('should change the sidebar class back to sidebar-off & the main class to main-full once the user clicks on the sidebarArrowBtn', () => {
          handleSidebarArrowBtnClick({
            sidebarClass: 'sidebar-off',
            mainClass: 'main-full ',
          });
        });
      });

      describe('innerwidth > 450', () => {
        beforeEach(() => {
          render(<App />);
          global.innerWidth = 450;
        });
        test('initially should render', () => {
          initiallyShouldRender({ device: 'Mobile' });
        });
        test('should not render the sidebarArrowBtn', () => {
          renderSidebarArrowBtn({ exist: false });
        });
        test('sidebar class should be sidebar-off, main class should be main-full', () => {
          currentClass({ sidebarClass: 'sidebar-off', mainClass: 'main-full' });
        });
        test('should change the sidebar class to sidebar-min & the main class to main-max once the user clicks on the toggleBtn ', () => {
          handleToggleBtnClick({
            sidebarClass: 'sidebar-min',
            mainClass: 'main-max ',
          });
        });
      });
    });
  });
});
