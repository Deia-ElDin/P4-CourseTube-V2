import { render, screen, fireEvent } from '@testing-library/react';
import MiniSearchButton from '../../../componenets/header/middleHeader/miniSearchButton/MiniSearchButton';

const mockedHandleMiniSearchBtnClick = jest.fn();

describe('MiniSearchButton', () => {
  beforeEach(() => {
    render(
      <MiniSearchButton
        handleMiniSearchBtnClick={mockedHandleMiniSearchBtnClick}
      />
    );
  });

  test('should render the MiniSearchButton', () => {
    const miniSearchButtonElement = screen.getByTitle(
      'Display Search Components'
    );
    expect(miniSearchButtonElement).toBeInTheDocument();
  });

  test('should trigger mockedHandleMiniSearchBtnClick once the user clicks on the miniSearchButtonElement', () => {
    const miniSearchButtonElement = screen.getByTitle(
      'Display Search Components'
    );
    fireEvent.click(miniSearchButtonElement);
    expect(mockedHandleMiniSearchBtnClick).toHaveBeenCalledTimes(1);
  });
});
