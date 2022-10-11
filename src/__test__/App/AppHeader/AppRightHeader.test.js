import { render, screen, fireEvent } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';
import App from '../../../App';

function createElements({
  // RightHeader
  themeBtn,
  gridBtn,
  contactMeBtn,
  themes,
  slider,
  rightHeaderCloseBtn,
  // Main
  mainCourseTubePage,
  mainContactPage,
  leftContactDiv,
  rightContactDiv,
  mainCloseBtn,
}) {
  const elementsArray = [];

  if (themeBtn) {
    const themeBtnElement = screen.queryByTitle('Select Color Theme');
    elementsArray.push(themeBtnElement);
  }
  if (gridBtn) {
    const gridBtnElement = screen.queryByTitle('Select Grid Template');
    elementsArray.push(gridBtnElement);
  }
  if (contactMeBtn) {
    const contactMeBtnElement = screen.queryByTitle('Contact Me');
    elementsArray.push(contactMeBtnElement);
  }
  if (themes) {
    const themeElements = screen.queryAllByTestId('theme');
    elementsArray.push(themeElements);
  }
  if (slider) {
    const sliderElement = screen.queryByRole('slider');
    elementsArray.push(sliderElement);
  }
  if (rightHeaderCloseBtn) {
    const rightHeaderCloseBtnElement = screen.queryByRole('button', {
      name: 'right-header-close-btn',
    });
    elementsArray.push(rightHeaderCloseBtnElement);
  }
  if (mainCourseTubePage) {
    const mainCourseTubePageElement = screen.queryByTestId('coursetube-page');
    elementsArray.push(mainCourseTubePageElement);
  }
  if (mainContactPage) {
    const mainContactPageElement = screen.queryByTestId('contact-page');
    elementsArray.push(mainContactPageElement);
  }
  if (leftContactDiv) {
    const leftContactDivElement = screen.getByTestId('left-contact');
    elementsArray.push(leftContactDivElement);
  }
  if (rightContactDiv) {
    const rightContactDivElement = screen.getByTestId('form');
    elementsArray.push(rightContactDivElement);
  }
  if (mainCloseBtn) {
    const mainCloseBtnElement = screen.queryByRole('button', {
      name: 'main-close-btn',
    });
    elementsArray.push(mainCloseBtnElement);
  }

  return elementsArray;
}

describe('App / RightHeader (innerWidth = 1300)', () => {
  beforeEach(() => {
    render(<App />);
    global.innerWidth = 1300;
  });

  describe('Click on themeBtn', () => {
    test('once the user clicks on the themeBtn, the 3 buttons (themeBtn, gridBtn, contactMeBtn) should disappear, 3 theme buttons should appear (not including the current theme) and the rightHeaderCloseBtn should appear', () => {
      // Step 1: Initially we should have (themeBtn, gridBtn, contactMeBtn) rendered on the screen
      const [themeBtn, gridBtn, contactMeBtn, themes, rightHeaderCloseBtn] =
        createElements({
          themeBtn: true,
          gridBtn: true,
          contactMeBtn: true,
          themes: true,
          rightHeaderCloseBtn: true,
        });
      expect(themeBtn).toBeInTheDocument();
      expect(gridBtn).toBeInTheDocument();
      expect(contactMeBtn).toBeInTheDocument();
      expect(themes.length).toBe(0);
      expect(rightHeaderCloseBtn).not.toBeInTheDocument();

      // Step 2: Clicking on the themeBtn
      fireEvent.click(themeBtn);

      // Step 3: (themeBtn, gridBtn, contactMeBtn) should disappear, 3 themes (blue, lightBrown, dark) should appear
      // Note: The initial theme id === light (App.js Line 309)
      const [themes2, rightHeaderCloseBtn2] = createElements({
        themes: true,
        rightHeaderCloseBtn: true,
      });
      const [firstTheme, secondTheme, thirdTheme] = themes2;
      expect(themeBtn).not.toBeInTheDocument();
      expect(gridBtn).not.toBeInTheDocument();
      expect(contactMeBtn).not.toBeInTheDocument();
      expect(themes2.length).toBe(3);
      expect(rightHeaderCloseBtn2).toBeInTheDocument();
      expect(firstTheme).toBeInTheDocument();
      expect(firstTheme).toHaveAttribute('id', 'blue');
      expect(secondTheme).toBeInTheDocument();
      expect(secondTheme).toHaveAttribute('id', 'lightBrown');
      expect(thirdTheme).toBeInTheDocument();
      expect(thirdTheme).toHaveAttribute('id', 'dark');

      // Step 4: Clicking on the first theme which got the id === blue
      fireEvent.click(firstTheme);

      // Step 5: The 3 themes should disappear and (themeBtn, gridBtn, contactMeBtn) should appear back again
      expect(firstTheme).not.toBeInTheDocument();
      expect(secondTheme).not.toBeInTheDocument();
      expect(thirdTheme).not.toBeInTheDocument();
      const [
        themeBtn2,
        gridBtn2,
        contactMeBtn2,
        themes3,
        rightHeaderCloseBtn3,
      ] = createElements({
        themeBtn: true,
        gridBtn: true,
        contactMeBtn: true,
        themes: true,
        rightHeaderCloseBtn: true,
      });
      expect(themeBtn2).toBeInTheDocument();
      expect(gridBtn2).toBeInTheDocument();
      expect(contactMeBtn2).toBeInTheDocument();
      expect(themes3.length).toBe(0);
      expect(rightHeaderCloseBtn3).not.toBeInTheDocument();

      // Step 6: Clicking on the themeBtn again (confirming that the theme with id === blue doesn't exist in the list and already applied)
      fireEvent.click(themeBtn2);

      // Step 7: (themeBtn, gridBtn, contactMeBtn) should disappear, 3 themes (light, lightBrown, dark) should appear
      // Note: The current theme id === blue (App.js Line 309)
      const [themes4, rightHeaderCloseBtn4] = createElements({
        themes: true,
        rightHeaderCloseBtn: true,
      });
      const [firstTheme2, secondTheme2, thirdTheme2] = themes4;
      expect(themeBtn2).not.toBeInTheDocument();
      expect(gridBtn2).not.toBeInTheDocument();
      expect(contactMeBtn2).not.toBeInTheDocument();
      expect(themes4.length).toBe(3);
      expect(rightHeaderCloseBtn4).toBeInTheDocument();
      expect(firstTheme2).toHaveAttribute('id', 'light');
      expect(secondTheme2).toHaveAttribute('id', 'lightBrown');
      expect(thirdTheme2).toHaveAttribute('id', 'dark');

      // Step 8: Clicking on the rightHeaderCloseBtn (incase the user doesn't want to change the theme)
      fireEvent.click(rightHeaderCloseBtn4);

      // Step 9: The 3 themes should disappear and (themeBtn, gridBtn, contactMeBtn) should appear back again
      expect(firstTheme2).not.toBeInTheDocument();
      expect(secondTheme2).not.toBeInTheDocument();
      expect(thirdTheme2).not.toBeInTheDocument();
      const [
        themeBtn3,
        gridBtn3,
        contactMeBtn3,
        themes5,
        rightHeaderCloseBtn5,
      ] = createElements({
        themeBtn: true,
        gridBtn: true,
        contactMeBtn: true,
        themes: true,
        rightHeaderCloseBtn: true,
      });
      expect(themeBtn3).toBeInTheDocument();
      expect(gridBtn3).toBeInTheDocument();
      expect(contactMeBtn3).toBeInTheDocument();
      expect(themes5.length).toBe(0);
      expect(rightHeaderCloseBtn5).not.toBeInTheDocument();
    });
  });

  describe('Click on gridBtn', () => {
    test('once the user clicks on the gridBtn, the 3 buttons (themeBtn, gridBtn, contactMeBtn) should disappear, the slider and the rightHeaderCloseBtn should appear', () => {
      // Step 1: Initially we should have (themeBtn, gridBtn, contactMeBtn) rendered on the screen
      const [
        themeBtn,
        gridBtn,
        contactMeBtn,
        slider,
        rightHeaderCloseBtn,
        mainCourseTubePage,
      ] = createElements({
        themeBtn: true,
        gridBtn: true,
        contactMeBtn: true,
        slider: true,
        rightHeaderCloseBtn: true,
        mainCourseTubePage: true,
      });
      expect(themeBtn).toBeInTheDocument();
      expect(gridBtn).toBeInTheDocument();
      expect(contactMeBtn).toBeInTheDocument();
      expect(slider).not.toBeInTheDocument();
      expect(rightHeaderCloseBtn).not.toBeInTheDocument();
      expect(mainCourseTubePage).toBeInTheDocument();

      // Step 2: Clicking on the gridBtn
      fireEvent.click(gridBtn);

      // Step 3: (themeBtn, gridBtn, contactMeBtn) should disappear, the rightHeaderCloseBtn & the slider should appear
      // Note: innerwidth === 1300, slider min === 2, slider max === 3, slider value === max value unless the user controls it (App.js Lines 444, 480, 345))
      const [slider2, rightHeaderCloseBtn2] = createElements({
        slider: true,
        rightHeaderCloseBtn: true,
      });
      expect(themeBtn).not.toBeInTheDocument();
      expect(gridBtn).not.toBeInTheDocument();
      expect(contactMeBtn).not.toBeInTheDocument();
      expect(slider2).toBeInTheDocument();
      expect(rightHeaderCloseBtn2).toBeInTheDocument();
      expect(slider2).toHaveAttribute('min', '2');
      expect(slider2).toHaveAttribute('max', '3');
      expect(slider2).toHaveAttribute('value', '3');

      // Step 4: Changing the slider value
      // Note: once the user starts changing the slider value, headerSection.userSliderValue (App.js Line 48) will switch to true (App.js Line 351) & there's nothing that will switch it back to false and the slider value will be always controlled by the user and not by the max value
      fireEvent.change(slider2, { target: { value: 2 } });
      expect(slider2).toHaveAttribute('value', '2');

      // Step 5: The slider still on the screen
      expect(themeBtn).not.toBeInTheDocument();
      expect(gridBtn).not.toBeInTheDocument();
      expect(contactMeBtn).not.toBeInTheDocument();
      expect(slider2).toBeInTheDocument();

      // Step 6: The user must click on the rightHeaderCloseBtn to go back to get out of the slider section
      fireEvent.click(rightHeaderCloseBtn2);

      const [
        themeBtn2,
        gridBtn2,
        contactMeBtn2,
        slider3,
        rightHeaderCloseBtn3,
        mainCourseTubePage2,
      ] = createElements({
        themeBtn: true,
        gridBtn: true,
        contactMeBtn: true,
        slider: true,
        rightHeaderCloseBtn: true,
        mainCourseTubePage: true,
      });
      expect(themeBtn2).toBeInTheDocument();
      expect(gridBtn2).toBeInTheDocument();
      expect(contactMeBtn2).toBeInTheDocument();
      expect(slider3).not.toBeInTheDocument();
      expect(rightHeaderCloseBtn3).not.toBeInTheDocument();
      expect(mainCourseTubePage2).toBeInTheDocument();
    });
  });

  describe('Click on contactMeBtn', () => {
    test('once the user clicks on the contactMeBtn, the 3 buttons (themeBtn, gridBtn, contactMeBtn) will still be in the document, the mainCourseTubePage should disappear, the mainContactPage and the mainCloseBtn should appear', () => {
      // Step 1: Initially we should have (themeBtn, gridBtn, contactMeBtn) rendered on the screen
      const [
        themeBtn,
        gridBtn,
        contactMeBtn,
        rightHeaderCloseBtn,
        mainCourseTubePage,
        mainContactPage,
        mainCloseBtn,
      ] = createElements({
        themeBtn: true,
        gridBtn: true,
        contactMeBtn: true,
        rightHeaderCloseBtn: true,
        mainCourseTubePage: true,
        mainContactPage: true,
        mainCloseBtn: true,
      });
      expect(themeBtn).toBeInTheDocument();
      expect(gridBtn).toBeInTheDocument();
      expect(contactMeBtn).toBeInTheDocument();
      expect(rightHeaderCloseBtn).not.toBeInTheDocument();
      expect(mainCourseTubePage).toBeInTheDocument();
      expect(mainContactPage).not.toBeInTheDocument();
      expect(mainCloseBtn).not.toBeInTheDocument();

      // Step 2: Clicking on the contactMeBtn
      fireEvent.click(contactMeBtn);

      // Step 3: (themeBtn, gridBtn, contactMeBtn) will still be in the document, the mainCourseTubePage should disappear, the mainContactPage (leftContactDiv, rightContactDiv) and the mainCloseBtn should appear
      expect(themeBtn).toBeInTheDocument();
      expect(gridBtn).toBeInTheDocument();
      expect(contactMeBtn).toBeInTheDocument();
      expect(rightHeaderCloseBtn).not.toBeInTheDocument();
      expect(mainCourseTubePage).not.toBeInTheDocument();
      const [mainContactPage2, leftContactDiv, rightContactDiv, mainCloseBtn2] =
        createElements({
          mainContactPage: true,
          leftContactDiv: true,
          rightContactDiv: true,
          mainCloseBtn: true,
        });
      expect(mainContactPage2).toBeInTheDocument();
      expect(leftContactDiv).toBeInTheDocument();
      expect(rightContactDiv).toBeInTheDocument();
      expect(mainCloseBtn2).toBeInTheDocument();

      // Step 5: Clicking on the mainCloseBtn
      fireEvent.click(mainCloseBtn2);

      // Step6: the mainContactPage should disappear, the mainCourseTubePage should appear
      const [mainCourseTubePage2, mainContactPage3, mainCloseBtn3] =
        createElements({
          mainCourseTubePage: true,
          mainContactPage: true,
          mainCloseBtn: true,
        });
      expect(mainCourseTubePage2).toBeInTheDocument();
      expect(mainContactPage3).not.toBeInTheDocument();
      expect(mainCloseBtn3).not.toBeInTheDocument();
    });
  });
});
