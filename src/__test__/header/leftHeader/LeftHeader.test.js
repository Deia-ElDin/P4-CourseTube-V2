import { render, screen, fireEvent } from '@testing-library/react';
import LeftHeader from '../../../componenets/header/leftHeader/LeftHeader';

const mockedHandleToggleBtnClick = jest.fn();
const mockedHandleLogoClick = jest.fn();

function createElements({
  leftHeaderDiv,
  toggleBtn,
  toggleBtnIcon,
  websiteTitle,
  logoDiv,
  logo,
}) {
  const elementsArray = [];

  if (leftHeaderDiv) {
    const leftHeaderDivElement = screen.getByTestId('left-header');
    elementsArray.push(leftHeaderDivElement);
  }
  if (toggleBtn) {
    const toggleBtnElement = screen.getByRole('button', { name: 'toggle-btn' });
    elementsArray.push(toggleBtnElement);
  }
  if (toggleBtnIcon) {
    const toggleBtnIconElement = screen.getByTestId('toggle-btn-icon');
    elementsArray.push(toggleBtnIconElement);
  }
  if (websiteTitle) {
    const websiteTitleElement = screen.getByRole('heading', {
      name: 'CourseTube',
    });
    elementsArray.push(websiteTitleElement);
  }
  if (logoDiv) {
    const logoDivElement = screen.getByTestId(/logo-div/i);
    elementsArray.push(logoDivElement);
  }
  if (logo) {
    const logoElement = screen.getByAltText('CourseTube Logo');
    elementsArray.push(logoElement);
  }

  return elementsArray;
}

describe('LeftHeader', () => {
  beforeEach(() => {
    render(
      <LeftHeader
        handleToggleBtnClick={mockedHandleToggleBtnClick}
        handleLogoClick={mockedHandleLogoClick}
      />
    );
  });

  test('should render the leftHeaderDiv', () => {
    const [leftHeaderDiv] = createElements({ leftHeaderDiv: true });
    expect(leftHeaderDiv).toBeInTheDocument();
  });

  describe('Layout', () => {
    describe('Toggle Btn', () => {
      test("should render the toggleBtn & it's icon", () => {
        const [toggleBtn, toggleBtnIcon] = createElements({
          toggleBtn: true,
          toggleBtnIcon: true,
        });
        expect(toggleBtn).toBeInTheDocument();
        expect(toggleBtnIcon).toBeInTheDocument();
      });
    });

    describe('Logo', () => {
      test('should render the LogoDiv & the logo', () => {
        const [logoDiv, logo] = createElements({ logoDiv: true, logo: true });
        expect(logoDiv).toBeInTheDocument();
        expect(logo).toBeInTheDocument();
      });
    });

    describe('website title', () => {
      test('should render the website title', () => {
        const [websiteTitle] = createElements({ websiteTitle: true });
        expect(websiteTitle).toBeInTheDocument();
      });
    });
  });

  describe('User Actions', () => {
    test('should call mockedHandleToggleBtnClick once the user clicks on the toggleBtn', () => {
      const [toggleBtn] = createElements({ toggleBtn: true });
      fireEvent.click(toggleBtn);
      expect(mockedHandleToggleBtnClick).toHaveBeenCalledTimes(1);
    });

    test('should call mockedHandleLogoClick once the user clicks on the Logo', () => {
      const [logoDiv] = createElements({ logoDiv: true });
      fireEvent.click(logoDiv);
      expect(mockedHandleLogoClick).toHaveBeenCalledTimes(1);
    });

    test('should call mockedHandleLogoClick once the user clicks on the website title', () => {
      const [websiteTitle] = createElements({ websiteTitle: true });
      fireEvent.click(websiteTitle);
      expect(mockedHandleLogoClick).toHaveBeenCalledTimes(1);
    });
  });
});
