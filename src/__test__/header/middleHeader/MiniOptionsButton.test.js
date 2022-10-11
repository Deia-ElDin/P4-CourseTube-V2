import { render, screen, fireEvent } from '@testing-library/react';
import MiniOptionsButton from '../../../componenets/header/rightHeader/miniOptionsButton/MiniOptionsButton';

const mockedHandleMiniOptionsBtnClick = jest.fn();

describe('MiniOptionsButton', () => {
  beforeEach(() => {
    render(
      <MiniOptionsButton
        handleMiniOptionsBtnClick={mockedHandleMiniOptionsBtnClick}
      />
    );
  });

  test('should render the MiniOptionsButton', () => {
    const miniOptionsButtonElement = screen.getByTitle('Options');
    expect(miniOptionsButtonElement).toBeInTheDocument();
  });

  test('should trigger mockedHandleMiniOptionsBtnClick once the user clicks on the miniOptionsButtonElement', () => {
    const miniOptionsButtonElement = screen.getByTitle('Options');
    fireEvent.click(miniOptionsButtonElement);
    expect(mockedHandleMiniOptionsBtnClick).toHaveBeenCalledTimes(1);
  });
});
