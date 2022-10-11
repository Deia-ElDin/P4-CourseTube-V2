import React, { useState, useEffect, createContext } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import Header from './componenets/header/Header';
import Sidebar from './componenets/sidebar/Sidebar';
import Main from './componenets/main/Main';
import Colors from './componenets/header/rightHeader/color/Colors';
import Course from './componenets/sidebar/courses/course/Course';
import Instructor from './componenets/sidebar/instructors/instructor/Instructor';
import Video from './componenets/main/courseTube/video/Video';
import coursesLogo from './data/coursesLogo';
import coursesData from './data/coursesData';
import colorData from './data/colorData';
import { nanoid } from 'nanoid';
import './sass/App.css';

export const ThemeContext = createContext(null);

function App() {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  const [headerSection, setHeaderSection] = useState({
    // === Left Header === //
    displayLeftHeader: true,
    displayLogo: false,
    toggleBtn: false,
    // === Middle Header === //
    displayMiddleHeader: true,
    displayMiniSearchButton: false,
    displaySearchArrowBtn: false,
    searchValue: '',
    // === Right Header === //
    displayRightHeader: true,
    displayMiniOptionsButton: false,
    displayOptionsArrowBtn: false,
    // Theme Btn
    themeBtn: true,
    displayColors: false,
    // Grid Btn
    gridBtn: true,
    displaySlider: false,
    sliderValue: 0,
    sliderMin: 0,
    sliderMax: 0,
    userSliderValue: false,
    innerWidth: window.innerWidth,
    // Contact Me Btn
    contactMeBtn: true,
    nameValue: '',
    emailValue: '',
    subjectValue: '',
    messageValue: '',
    // Close Btn
    closeBtn: false,
    // === User === //
    displayUser: true,
  });

  const [theme, setTheme] = useState('light');

  const [sidebarSection, setSidebarSection] = useState({
    mainClass: '',
    secondaryClass: '',
    home: true,
    courses: true,
    instructors: true,
    displayArrowBtn: false,
  });

  const [mainSection, setMainSection] = useState({
    mainClass: '',
    secondaryClass: '',
    displayMain: true,
    displayContact: false,
    displayAllCourses: true,
    seekingCourse: false,
    requiredCourse: '',
    seekingInstructor: false,
    requiredInstructor: '',
  });

  const [courseTube, setCourseTube] = useState();

  const { innerWidth } = headerSection;

  // ================ Header ================ //
  // === Left Header === //
  // Toggle Btn
  function handleToggleBtnClick() {
    setHeaderSection((prevHeaderSection) => {
      return {
        ...prevHeaderSection,
        toggleBtn: !prevHeaderSection.toggleBtn,
      };
    });
  }

  // Logo Btn
  function handleLogoClick() {
    window.location.reload();
    window.scrollTo(0, 0);
  }

  // === Middle Header === //
  // Search Input
  function handleSearchInputChange(e) {
    const currentValue = e.target.value;
    setHeaderSection((prevHeaderSection) => {
      return {
        ...prevHeaderSection,
        searchValue: currentValue,
      };
    });
  }

  function handleSearchValue() {
    const userInput = headerSection.searchValue.toLowerCase();
    const userTargetsCourse = checkCourse(userInput);
    const userTargetsInstructor = checkInstructor(userInput);

    function checkCourse(userInput) {
      let keyword = '';
      if (
        userInput.includes('html') &&
        userInput.includes('css') &&
        userInput.includes('javascript')
      ) {
        keyword = 'htmlCssJavascript';
      } else if (userInput.includes('html') && userInput.includes('css')) {
        keyword = 'htmlCss';
      } else if (userInput.includes('html')) {
        keyword = 'html';
      } else if (userInput.includes('css')) {
        keyword = 'css';
      } else if (userInput.includes('javascript')) {
        keyword = 'javascript';
      } else if (
        (userInput.includes('web') && userInput.includes('development')) ||
        userInput.includes('web')
      ) {
        keyword = 'webDevelopment';
      } else if (userInput.includes('python')) {
        keyword = 'python';
      } else if (userInput.includes('react')) {
        keyword = 'react';
      } else if (userInput.includes('sass')) {
        keyword = 'sass';
      }

      return keyword;
    }

    function checkInstructor(userInput) {
      let keyword = '';
      if (userInput.includes('bro') && userInput.includes('code')) {
        keyword = 'Bro Code';
      } else if (
        userInput.includes('london') &&
        userInput.includes('app') &&
        userInput.includes('brewery')
      ) {
        keyword = 'London App Brewery';
      } else if (userInput.includes('london') && userInput.includes('app')) {
        keyword = 'London App Brewery';
      } else if (
        userInput.includes('free') &&
        userInput.includes('code') &&
        userInput.includes('camp')
      ) {
        keyword = 'freeCodeCamp.org';
      } else if (userInput.includes('free') && userInput.includes('code')) {
        keyword = 'freeCodeCamp.org';
      } else if (
        userInput.includes('super') &&
        userInput.includes('simple') &&
        userInput.includes('dev')
      ) {
        keyword = 'SuperSimpleDev';
      } else if (userInput.includes('super') && userInput.includes('simple')) {
        keyword = 'SuperSimpleDev';
      }

      return keyword;
    }

    return [userTargetsCourse, userTargetsInstructor];
  }

  function handleSearchInputKeyDown(e) {
    const [course, instructor] = handleSearchValue();

    if (e.key === 'Enter') {
      if (course) {
        handleCourseClick(course);
      } else if (instructor) {
        handleInstructorClick(instructor);
      }

      setHeaderSection((prevHeaderSection) => {
        return {
          ...prevHeaderSection,
          searchValue: '',
        };
      });
    } else if (e.keyCode === 27) {
      setHeaderSection((prevHeaderSection) => {
        return {
          ...prevHeaderSection,
          searchValue: '',
        };
      });
    }
  }

  function handleSearchInputFocus() {
    if (innerWidth > 585 && innerWidth <= 900) {
      setHeaderSection((prevHeaderSection) => {
        return {
          ...prevHeaderSection,
          displayLeftHeader: false,
          displayLogo: true,
        };
      });
    }
  }

  function handleSearchInputBlur() {
    if (innerWidth > 585 && innerWidth <= 900) {
      setHeaderSection((prevHeaderSection) => {
        return {
          ...prevHeaderSection,
          displayLeftHeader: true,
          displayLogo: false,
        };
      });
    }
  }

  // Search Btn
  function handleSearchBtnClick() {
    const [course, instructor] = handleSearchValue();

    if (course) {
      handleCourseClick(course);
    } else if (instructor) {
      handleInstructorClick(instructor);
    }

    setHeaderSection((prevHeaderSection) => {
      return {
        ...prevHeaderSection,
        searchValue: '',
      };
    });
  }

  // Mic Btn
  const { transcript, listening } = useSpeechRecognition();

  useEffect(() => {
    const currentValue = transcript.toLowerCase();
    setHeaderSection((prevHeaderSection) => {
      return {
        ...prevHeaderSection,
        searchValue: currentValue,
      };
    });

    const [course, instructor] = handleSearchValue();

    if (!listening) {
      if (course) {
        handleCourseClick(course);
      } else if (instructor) {
        handleInstructorClick(instructor);
      }

      setHeaderSection((prevHeaderSection) => {
        return {
          ...prevHeaderSection,
          searchValue: '',
        };
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript, listening]);

  // === Right Header === //
  // Theme Btn
  function handleThemeBtnClick() {
    setHeaderSection((prevHeaderSection) => {
      return {
        ...prevHeaderSection,
        closeBtn: !prevHeaderSection.closeBtn,
        themeBtn: !prevHeaderSection.themeBtn,
        gridBtn: !prevHeaderSection.gridBtn,
        contactMeBtn: !prevHeaderSection.contactMeBtn,
        displayColors: !prevHeaderSection.displayColors,
      };
    });
  }

  const colorList = colorData.map((color) => {
    const { id, colors } = color;

    if (id !== theme) {
      return (
        <Colors
          key={id}
          id={id}
          c1={colors[0]}
          c2={colors[1]}
          c3={colors[2]}
          c4={colors[3]}
          handleClick={() => {
            toggleTheme(id);
          }}
        />
      );
    } else return null;
  });

  function toggleTheme(themeName) {
    setTheme(themeName);
    handleThemeBtnClick();
  }

  // Grid Btn
  function handleGridBtnClick() {
    setHeaderSection((prevHeaderSection) => {
      return {
        ...prevHeaderSection,
        closeBtn: !prevHeaderSection.closeBtn,
        themeBtn: !prevHeaderSection.themeBtn,
        contactMeBtn: !prevHeaderSection.contactMeBtn,
        gridBtn: !prevHeaderSection.gridBtn,
        displaySlider: true,
      };
    });
  }

  function handleSliderChange(e) {
    const currentValue = Number(e.target.value);

    setHeaderSection((prevHeaderSection) => {
      return {
        ...prevHeaderSection,
        userSliderValue: true,
        sliderValue: currentValue,
      };
    });
  }

  useEffect(() => {
    function watchWidth() {
      setHeaderSection((prevHeaderSection) => {
        return {
          ...prevHeaderSection,
          innerWidth: window.innerWidth,
        };
      });
    }

    window.addEventListener('resize', watchWidth);

    // ================ Notes ================ //
    // 1) toggleBtn => (initially) = false.
    // 2) toggleBtn => (onClick) = true.
    // 3) ArrowBtns => to notify the user to minimize the
    //                 section

    // if(!toggleBtn) =>
    // 1- sidebarMainClass
    // 2- mainMainClass
    // else if(toggleBtn) =>
    // 1- sidebarSecondaryClass
    // 2- mainSecondaryClass

    // Desktop / pc
    // if(!toggleBtn) => ['sidebar-max', 'main-min']
    // else if(toggleBtn) => ['sidebar-min', 'main-max']
    // Grid 2++ (depends on the innerWidth)

    // iPad
    // if(!toggleBtn) => ['sidebar-min', 'main-max']
    // else if(toggleBtn) => ['sidebar-off', 'main-full']
    // [sidebar-max, main-min] => Canceled
    // Grid <= 3

    // Phone
    // if(!toggleBtn) => ['sidebar-off', 'main-full']
    // else if(toggleBtn) => ['sidebar-min', 'main-max']
    // [sidebar-max, main-min] => Canceled
    // Grid <= 2

    let device;
    let minGridNum;
    let maxGridNum;
    let sideBarArrowBtn = false;
    let minMiddleHeader = false;
    let minRightHeader = false;

    // Phone
    if (innerWidth <= 450) {
      device = 'phone';
      minMiddleHeader = true;
      minRightHeader = true;
      minGridNum = 0;
      maxGridNum = 0;
    } else if (innerWidth <= 500) {
      device = 'phone';
      minMiddleHeader = true;
      minRightHeader = true;
      sideBarArrowBtn = true;
      minGridNum = 1;
      maxGridNum = 2;
    } else if (innerWidth <= 585) {
      device = 'phone';
      minMiddleHeader = true;
      minRightHeader = true;
      sideBarArrowBtn = true;
      minGridNum = 1;
      maxGridNum = 2;
    }
    // iPad
    else if (innerWidth <= 810) {
      device = 'iPad';
      minRightHeader = true;
      minGridNum = 1;
      maxGridNum = 2;
    } else if (innerWidth <= 880) {
      device = 'iPad';
      minGridNum = 1;
      maxGridNum = 3;
    } else if (innerWidth <= 1000) {
      device = 'iPad';
      minGridNum = 2;
      maxGridNum = 3;
    }
    // Desktop / Pc
    else if (innerWidth <= 1300) {
      device = 'desktop';
      minGridNum = 2;
      maxGridNum = 3;
    } else if (innerWidth <= 1600) {
      device = 'desktop';
      minGridNum = 3;
      maxGridNum = 4;
    } else {
      device = 'desktop';
      minGridNum = 3;
      maxGridNum = 5;
    }

    function setClass(device) {
      if (device === 'phone') {
        return ['sidebar-off', 'main-full', 'sidebar-min', 'main-max'];
      } else if (device === 'iPad') {
        return ['sidebar-min', 'main-max', 'sidebar-off', 'main-full'];
      } else {
        return ['sidebar-max', 'main-min', 'sidebar-min', 'main-max'];
      }
    }

    const classArray = setClass(device);
    const sidebarMainClass = classArray[0];
    const mainMainClass = classArray[1];
    const sidebarSecondaryClass = classArray[2];
    const mainSecondaryClass = classArray[3];

    setHeaderSection((prevHeaderSection) => {
      return {
        ...prevHeaderSection,
        gridBtn: minGridNum >= 1 ? true : false,
        sliderMin: minGridNum,
        sliderMax: maxGridNum,
        sliderValue: prevHeaderSection.userSliderValue
          ? prevHeaderSection.sliderValue
          : maxGridNum,

        displayMiddleHeader: minMiddleHeader ? false : true,
        displayMiniSearchButton: minMiddleHeader ? true : false,
        displaySearchArrowBtn: minMiddleHeader ? true : false,

        displayRightHeader: minRightHeader ? false : true,
        displayMiniOptionsButton: minRightHeader ? true : false,
        displayOptionsArrowBtn: minRightHeader ? true : false,
      };
    });

    setSidebarSection((prevSidebarSection) => {
      return {
        ...prevSidebarSection,
        mainClass: sidebarMainClass,
        secondaryClass: sidebarSecondaryClass,
        displayArrowBtn: sideBarArrowBtn,
      };
    });

    setMainSection((prevMainSection) => {
      return {
        ...prevMainSection,
        mainClass: mainMainClass,
        secondaryClass: mainSecondaryClass,
      };
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [innerWidth]);

  // Contact Me Btn
  function handleContactMeBtnClick() {
    setMainSection((prevMainSection) => {
      return {
        ...prevMainSection,
        displayMain: false,
        displayContact: true,
      };
    });
  }

  function handleContactMeInputsChange(e) {
    const target = e.target.id;
    const value = e.target.value;

    setHeaderSection((prevHeaderSection) => {
      return {
        ...prevHeaderSection,
        [target]: value,
      };
    });
  }

  function handleContactMeInputsReset() {
    setHeaderSection((prevHeaderSection) => {
      return {
        ...prevHeaderSection,
        nameValue: '',
        emailValue: '',
        subjectValue: '',
        messageValue: '',
      };
    });
  }

  // Close Btn
  function handleCloseBtnClick() {
    setHeaderSection((prevHeaderSection) => {
      return {
        ...prevHeaderSection,
        themeBtn: true,
        gridBtn: true,
        contactMeBtn: true,
        closeBtn: false,
        displayColors: false,
        displaySlider: false,
      };
    });
  }

  // Mini Search Btn
  function handleMiniSearchBtnClick() {
    // MiniSearchBtn Activated:
    // onClick => miniOption => (innerWidth <= 750px)
    // onLoad => (innerWidth <= 585px)

    setHeaderSection((prevHeaderSection) => {
      if (innerWidth <= 585) {
        // Phone
        // Middle Header (Search Input) takes all the width
        // Left Header & Right Heder disapear
        return {
          ...prevHeaderSection,
          displayMiddleHeader: true,
          displayLeftHeader: false,
          displayLogo: false,
          displayMiniSearchButton: false,
          displayRightHeader: false,
          displayMiniOptionsButton: false,
          displayUser: false,
        };
      } else {
        // Controls Both Right & Middle Headers
        return {
          ...prevHeaderSection,
          displayMiddleHeader: true,
          displayMiniSearchButton: false,
          displayRightHeader: false,
          displayMiniOptionsButton: true,
        };
      }
    });
  }

  // Mini Options Btn
  function handleMiniOptionsBtnClick() {
    // MiniOptionsBtn Activated => (innerWidth <= 810px)

    setHeaderSection((prevHeaderSection) => {
      if (innerWidth <= 585) {
        // Phone
        return {
          ...prevHeaderSection,
          displayLeftHeader: false,
          displayLogo: true,
          displayRightHeader: true,
          displayMiniOptionsButton: false,
          displayMiddleHeader: false,
          displayMiniSearchButton: true,
        };
      } else if (innerWidth <= 750) {
        // Controls Both Right & Middle Headers
        return {
          ...prevHeaderSection,
          displayRightHeader: true,
          displayMiniOptionsButton: false,
          displayMiddleHeader: false,
          displayMiniSearchButton: true,
        };
      } else {
        // Controls only the Right Header
        return {
          ...prevHeaderSection,
          displayRightHeader: true,
          displayMiniOptionsButton: false,
        };
      }
    });
  }

  // Arrow Btn
  function handleArrowBtnClick(id) {
    if (id === 'sidebarArrowBtn') {
      handleToggleBtnClick();
    } else if (id === 'rightHeaderArrowBtn') {
      if (innerWidth <= 585) {
        setHeaderSection((prevHeaderSection) => {
          return {
            ...prevHeaderSection,
            displayLeftHeader: true,
            displayMiniSearchButton: true,
            displayMiniOptionsButton: true,
            displayLogo: false,
            displayMiddleHeader: false,
            displayRightHeader: false,
          };
        });
      } else if (innerWidth > 585 && innerWidth <= 750) {
        handleMiniSearchBtnClick();
      } else {
        setHeaderSection((prevHeaderSection) => {
          return {
            ...prevHeaderSection,
            displayRightHeader: false,
            displayMiniOptionsButton: true,
          };
        });
      }
    } else {
      // middleHeaderArrowBtn
      setHeaderSection((prevHeaderSection) => {
        return {
          ...prevHeaderSection,
          displayLeftHeader: true,
          displayMiniSearchButton: true,
          displayMiniOptionsButton: true,
          displayUser: true,
          displayMiddleHeader: false,
          displayRightHeader: false,
        };
      });
    }
  }

  // ================ Sidebar ================ //
  // Titles (Home, Courses, Instructors)
  function handleSidebarTitlesClick(target) {
    if (target === 'home') {
      setSidebarSection((prevSidebarSection) => {
        return {
          ...prevSidebarSection,
          home: true,
        };
      });

      setMainSection((prevMainSection) => {
        return {
          ...prevMainSection,
          displayMain: true,
          displayContact: false,
          displayAllCourses: true,
          seekingCourse: false,
          seekingInstructor: false,
        };
      });
    } else {
      setSidebarSection((prevSidebarSection) => {
        return {
          ...prevSidebarSection,
          [target]:
            target === 'courses'
              ? !prevSidebarSection.courses
              : !prevSidebarSection.instructors,
        };
      });
    }
  }

  // Courses
  function setId(input) {
    let id = '';
    let capIndex = [];
    let emptySpace = ' ';

    input = input.toLowerCase();

    for (let index in input) {
      if (input[index] === emptySpace) {
        capIndex.push(Number(index) + 1);
      }
    }

    for (let i = 0; i < input.length; i++) {
      if (capIndex.includes(i)) {
        id += input[i].toUpperCase();
      } else {
        id += input[i];
      }
    }

    for (let letter of id) {
      if (letter === emptySpace) {
        id = id.replace(letter, '');
      }
    }

    return id;
  }

  const coursesList = coursesLogo.map((course) => {
    const imgSrc = `/img/${course}.png`;
    const ID = setId(course);

    return (
      <Course
        key={ID}
        id={ID}
        courseLogo={imgSrc}
        courseAlt={course}
        courseName={course}
        handleClick={() => handleCourseClick(ID)}
      />
    );
  });

  function handleCourseClick(courseName) {
    setMainSection((prevMainSection) => {
      return {
        ...prevMainSection,
        displayContact: false,
        displayMain: true,
        displayAllCourses: false,
        seekingInstructor: false,
        seekingCourse: true,
        requiredCourse: courseName,
      };
    });
  }

  // Instructors
  const instructorsList = coursesData.map((instructor) => {
    const { name } = instructor;
    const imgSrc = `/img/instructors/${name}/logo.jpg`;

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

  function handleInstructorClick(instructorName) {
    setMainSection((prevMainSection) => {
      return {
        ...prevMainSection,
        displayContact: false,
        displayMain: true,
        displayAllCourses: false,
        seekingCourse: false,
        seekingInstructor: true,
        requiredInstructor: instructorName,
      };
    });
  }

  // ================ Main ================ //
  useEffect(() => {
    function courseTubeFun(input) {
      const webBody = coursesData.map((instructor) => {
        const { name, channelLink, verified, courses } = instructor;

        return courses.map((course) => {
          const {
            category,
            courseLink,
            courseDuration,
            courseTitle,
            courseDetails,
          } = course;
          const jpgExtension = '.jpg';
          const webpExtension = '.webp';
          const src = `/img/instructors/${name}/${category.toLowerCase()}`;
          const videoImgSrc =
            name === 'London App Brewery'
              ? `${src}${jpgExtension}`
              : `${src}${webpExtension}`;
          const channelLogo = `/img/instructors/${name}/logo.jpg`;
          const ID = nanoid();

          if (mainSection.displayAllCourses) {
            return videoFun();
          } else if (mainSection.seekingCourse) {
            if (category === input) {
              return videoFun();
            } else return null;
          } else {
            if (name === input) {
              return videoFun();
            } else return null;
          }

          function videoFun() {
            return (
              <Video
                key={ID}
                videoLink={courseLink}
                videoImg={videoImgSrc}
                videoAlt={category}
                videoDuration={courseDuration}
                channelLink={channelLink}
                channelImg={channelLogo}
                channelAlt={name}
                videoTitle={courseTitle}
                channelName={name}
                verified={verified}
                videoDetails={courseDetails}
              />
            );
          }
        });
      });

      return webBody;
    }

    if (mainSection.displayAllCourses) {
      setCourseTube(courseTubeFun());
    } else if (mainSection.seekingCourse) {
      setCourseTube(courseTubeFun(mainSection.requiredCourse));
    } else {
      setCourseTube(courseTubeFun(mainSection.requiredInstructor));
    }
  }, [mainSection]);

  // Close Btn
  function handleMainCloseBtnClick() {
    setMainSection((prevMainSection) => {
      return {
        ...prevMainSection,
        displayMain: true,
        displayContact: false,
        displayAllCourses: true,
      };
    });
  }

  // ================ Components Input ================ //
  const headerFunctions = [
    handleToggleBtnClick,
    handleLogoClick,
    handleSearchInputChange,
    handleSearchInputKeyDown,
    handleSearchInputFocus,
    handleSearchInputBlur,
    handleSearchBtnClick,
    handleThemeBtnClick,
    handleGridBtnClick,
    handleSliderChange,
    handleContactMeBtnClick,
    handleCloseBtnClick,
    handleMiniSearchBtnClick,
    handleMiniOptionsBtnClick,
    handleArrowBtnClick,
  ];

  const headerDependencies = [colorList];

  const sidebarFunctions = [handleArrowBtnClick, handleSidebarTitlesClick];

  const sidebarDependencies = [
    headerSection.toggleBtn,
    coursesList,
    instructorsList,
  ];

  const mainFunctions = [
    handleMainCloseBtnClick,
    handleContactMeInputsChange,
    handleContactMeInputsReset,
  ];

  const mainDependencies = [
    headerSection.toggleBtn,
    headerSection.sliderValue,
    headerSection.nameValue,
    headerSection.emailValue,
    headerSection.subjectValue,
    headerSection.messageValue,
    mainSection.displayMain,
    mainSection.displayContact,
    courseTube,
  ];

  return (
    <section className="App" id={theme}>
      <Header
        section={headerSection}
        functions={headerFunctions}
        dependencies={headerDependencies}
        startRecording={SpeechRecognition.startListening}
        stopRecording={SpeechRecognition.stopListening}
        listening={listening}
      />
      <Sidebar
        section={sidebarSection}
        functions={sidebarFunctions}
        dependencies={sidebarDependencies}
      />
      <Main
        section={mainSection}
        functions={mainFunctions}
        dependencies={mainDependencies}
      />
    </section>
  );
}

export default App;
