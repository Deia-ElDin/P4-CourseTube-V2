import { screen, render, fireEvent } from '@testing-library/react';
import RightHeader from '../../../componenets/header/rightHeader/RightHeader';

const mockedCloseBtnClick = jest.fn();
const mockedThemeBtnClick = jest.fn();
const mockedGridBtnClick = jest.fn();
const mockedSliderChange = jest.fn();
const mockedContactMeBtnClick = jest.fn();

const rightHeaderProps = {
  displayOptionsArrowBtn: false,
  closeBtnStatus: false,
  themeBtnStatus: true,
  gridBtnStatus: true,
  displaySlider: false,
  contactMeBtnStatus: true,
  displayColors: false,
  handleCloseBtnClick: mockedCloseBtnClick,
  handleThemeBtnClick: mockedThemeBtnClick,
  handleGridBtnClick: mockedGridBtnClick,
  handleSliderChange: mockedSliderChange,
  handleContactMeBtnClick: mockedContactMeBtnClick,
  sliderMin: 3,
  sliderMax: 4,
  sliderValue: 4,
  colorArray: [],
};

function createElements({
  rightHeaderDiv,
  arrowBtn,
  closeBtn,
  closeIcon,
  themeBtn,
  themeBtnIcon,
  gridBtn,
  gridBtnIcon,
  slider,
  contactMeBtn,
  contactMeIcon,
}) {
  const elementsArray = [];
  if (rightHeaderDiv) {
    const rightHeaderDivElement = screen.getByTestId('right-header');
    elementsArray.push(rightHeaderDivElement);
  }
  if (arrowBtn) {
    const arrowBtnElement = screen.queryByRole('button', {
      name: 'right-header-arrow-btn',
    });
    elementsArray.push(arrowBtnElement);
  }
  if (closeBtn) {
    const closeBtnElement = screen.queryByTitle('Close');
    elementsArray.push(closeBtnElement);
  }
  if (closeIcon) {
    const closeIconElement = screen.queryByTestId('close-icon');
    elementsArray.push(closeIconElement);
  }
  if (themeBtn) {
    const themeBtnElement = screen.queryByTitle('Select Color Theme');
    elementsArray.push(themeBtnElement);
  }
  if (themeBtnIcon) {
    const themeBtnIconElement = screen.queryByTestId('theme-icon');
    elementsArray.push(themeBtnIconElement);
  }
  if (gridBtn) {
    const gridBtnElement = screen.queryByTitle('Select Grid Template');
    elementsArray.push(gridBtnElement);
  }
  if (gridBtnIcon) {
    const gridBtnIconElement = screen.queryByTestId('grid-icon');
    elementsArray.push(gridBtnIconElement);
  }
  if (slider) {
    const sliderElement = screen.queryByTestId('slider');
    elementsArray.push(sliderElement);
  }
  if (contactMeBtn) {
    const contactMeBtnElement = screen.queryByTitle('Contact Me');
    elementsArray.push(contactMeBtnElement);
  }
  if (contactMeIcon) {
    const contactIconElement = screen.queryByTestId('contact-icon');
    elementsArray.push(contactIconElement);
  }

  return elementsArray;
}

describe('Right Header', () => {
  beforeEach(() => {
    render(<RightHeader {...rightHeaderProps} />);
  });

  describe('Layout', () => {
    test('should render the rightHeaderDiv', () => {
      const [rightHeaderDiv] = createElements({ rightHeaderDiv: true });
      expect(rightHeaderDiv).toBeInTheDocument();
    });

    test('initially should not render the arrowBtn & closeBtn', () => {
      const [arrowBtn, closeBtn] = createElements({
        arrowBtn: true,
        closeBtn: true,
      });
      expect(arrowBtn).not.toBeInTheDocument();
      expect(closeBtn).not.toBeInTheDocument();
    });

    describe('Theme Btn', () => {
      test("should render the  themeBtn & it's icon", () => {
        const [themeBtn, themeBtnIcon] = createElements({
          themeBtn: true,
          themeBtnIcon: true,
        });
        expect(themeBtn).toBeInTheDocument();
        expect(themeBtnIcon).toBeInTheDocument();
      });
    });

    describe('Grid Btn', () => {
      test("should render the  gridBtn & it's icon", () => {
        const [gridBtn, gridBtnIcon] = createElements({
          gridBtn: true,
          gridBtnIcon: true,
        });
        expect(gridBtn).toBeInTheDocument();
        expect(gridBtnIcon).toBeInTheDocument();
      });
    });

    describe('Contact Me Btn', () => {
      test("should render the  contactMeBtn & it's icon", () => {
        const [contactMeBtn, contactMeIcon] = createElements({
          contactMeBtn: true,
          contactMeIcon: true,
        });
        expect(contactMeBtn).toBeInTheDocument();
        expect(contactMeIcon).toBeInTheDocument();
      });
    });
  });

  describe('User Action', () => {
    describe('themeBtn click / handleThemeBtnClick', () => {
      test('should trigger mockedThemeBtnClick once the user clicks on themeBtn', () => {
        const [themeBtn] = createElements({
          themeBtn: true,
        });
        fireEvent.click(themeBtn);
        expect(mockedThemeBtnClick).toHaveBeenCalledTimes(1);
      });
    });

    describe('gridBtn click / handleGridBtnClick', () => {
      test('should trigger mockedGridBtnClick once the user clicks on gridBtn', () => {
        const [gridBtn] = createElements({
          gridBtn: true,
        });
        fireEvent.click(gridBtn);
        expect(mockedGridBtnClick).toHaveBeenCalledTimes(1);
      });
    });

    describe('contactMeBtn click / handleContactMeBtnClick', () => {
      test('should trigger mockedContactMeBtnClick once the user clicks on contactMe', () => {
        const [contactMeBtn] = createElements({
          contactMeBtn: true,
        });
        fireEvent.click(contactMeBtn);
        expect(mockedContactMeBtnClick).toHaveBeenCalledTimes(1);
      });
    });
  });
});
