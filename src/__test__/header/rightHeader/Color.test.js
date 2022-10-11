import { render, screen } from '@testing-library/react';
import Colors from '../../../componenets/header/rightHeader/color/Colors';

const mockedHandleClick = jest.fn();

const colorProps = {
  id: 'light',
  handleClick: mockedHandleClick,
  c1: '',
  c2: '',
  c3: '',
  c4: '',
};

function createElements({
  themeDiv,
  firstColorDiv,
  secondColorDiv,
  thirdColorDiv,
  fourthColorDiv,
}) {
  const elementsArray = [];

  if (themeDiv) {
    const themeElements = screen.getByTestId('theme');
    elementsArray.push(themeElements);
  }
  if (firstColorDiv) {
    const firstColorDivElements = screen.getByTestId('color-div1');
    elementsArray.push(firstColorDivElements);
  }
  if (secondColorDiv) {
    const secondColorDivElements = screen.getByTestId('color-div2');
    elementsArray.push(secondColorDivElements);
  }
  if (thirdColorDiv) {
    const thirdColorDivElements = screen.getByTestId('color-div3');
    elementsArray.push(thirdColorDivElements);
  }
  if (fourthColorDiv) {
    const fourthColorDivElements = screen.getByTestId('color-div4');
    elementsArray.push(fourthColorDivElements);
  }

  return elementsArray;
}
describe('Themes / Colors', () => {
  test('should render theme elements', () => {
    render(<Colors {...colorProps} />);
    const [themeElements] = createElements({ themeDiv: true });
    expect(themeElements).toBeInTheDocument();
  });

  test('should render 4 color divs inside the theme element', () => {
    render(<Colors {...colorProps} />);
    const [firstColorDiv, secondColorDiv, thirdColorDiv, fourthColorDiv] =
      createElements({
        firstColorDiv: true,
        secondColorDiv: true,
        thirdColorDiv: true,
        fourthColorDiv: true,
      });
    expect(firstColorDiv).toBeInTheDocument();
    expect(secondColorDiv).toBeInTheDocument();
    expect(thirdColorDiv).toBeInTheDocument();
    expect(fourthColorDiv).toBeInTheDocument();
  });
});
