import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../../componenets/sidebar/home/Home';

const mockedHandleTitlesClick = jest.fn();

const homeProps = {
  handleTitlesClick: mockedHandleTitlesClick,
};

function createElements({ homeDiv, title, icon }) {
  const elementsArray = [];
  if (homeDiv) {
    const homeDivElement = screen.getByTestId('home');
    elementsArray.push(homeDivElement);
  }
  if (title) {
    const titleElement = screen.getByText('Home');
    elementsArray.push(titleElement);
  }
  if (icon) {
    const iconElement = screen.getByTestId('home-icon');
    elementsArray.push(iconElement);
  }

  return elementsArray;
}

describe('Home', () => {
  beforeEach(() => {
    render(<Home {...homeProps} />);
  });

  test('should render the homeDiv', () => {
    const [homeDiv] = createElements({
      homeDiv: true,
    });
    expect(homeDiv).toBeInTheDocument();
  });

  describe('Layout', () => {
    test('should render the homeDiv components: title, icon', () => {
      const [title, icon] = createElements({
        title: true,
        icon: true,
      });
      expect(title).toBeInTheDocument();
      expect(icon).toBeInTheDocument();
    });
  });

  describe('User Action', () => {
    describe('Home Icon click / handleTitlesClick', () => {
      test('should trigger mockedHandleTitlesClick once the user clicks on the home icon', () => {
        const [icon] = createElements({ icon: true });
        fireEvent.click(icon);
        expect(mockedHandleTitlesClick).toHaveBeenCalledTimes(1);
      });
    });

    describe('Home Title click / handleTitlesClick', () => {
      test('should trigger mockedHandleTitlesClick once the user clicks on the home title', () => {
        const [title] = createElements({ title: true });
        fireEvent.click(title);
        expect(mockedHandleTitlesClick).toHaveBeenCalledTimes(1);
      });
    });
  });
});
