import { render, screen, fireEvent } from '@testing-library/react';
import MiddleHeader from '../../../componenets/header/middleHeader/MiddleHeader';

const mockedHandleSearchInputChange = jest.fn();
const mockedHandleKeyDown = jest.fn();
const mockedHandleFocus = jest.fn();
const mockedHandleBlur = jest.fn();
const mockedHandleSearchBtnClick = jest.fn();
const mockedStartRecording = jest.fn();
const mockedStopRecording = jest.fn();

const middleHeaderProps = {
  searchValue: '',
  handleSearchInputChange: mockedHandleSearchInputChange,
  handleSearchInputKeyDown: mockedHandleKeyDown,
  handleSearchInputFocus: mockedHandleFocus,
  handleSearchInputBlur: mockedHandleBlur,
  handleSearchBtnClick: mockedHandleSearchBtnClick,
  startRecording: mockedStartRecording,
  stopRecording: mockedStopRecording,
  listening: false,
};

function createElements({
  middleHeaderDiv,
  arrowBtn,
  searchInput,
  searchBtn,
  mic,
}) {
  const elementsArray = [];

  if (middleHeaderDiv) {
    const middleHeaderDivElement = screen.queryByTestId(/middle-header/i);
    elementsArray.push(middleHeaderDivElement);
  }
  if (arrowBtn) {
    const arrowBtnElement = screen.queryByRole('button', {
      name: 'middle-header-arrow-btn',
    });
    elementsArray.push(arrowBtnElement);
  }
  if (searchInput) {
    const searchInputElement = screen.queryByPlaceholderText('Search');
    elementsArray.push(searchInputElement);
  }
  if (searchBtn) {
    const searchBtnElement = screen.queryByTitle('Search Button');
    elementsArray.push(searchBtnElement);
  }
  if (mic) {
    const micElement = screen.queryByTitle('Search with your voice');
    elementsArray.push(micElement);
  }

  return elementsArray;
}

describe('Middle Header', () => {
  beforeEach(() => {
    render(<MiddleHeader {...middleHeaderProps} />);
  });

  test('should render the middleHeaderDiv', () => {
    const [middleHeaderDiv] = createElements({ middleHeaderDiv: true });
    expect(middleHeaderDiv).toBeInTheDocument();
  });

  test('initially should not render the arrowBtn', () => {
    const [arrowBtn] = createElements({
      arrowBtn: true,
    });
    expect(arrowBtn).not.toBeInTheDocument();
  });

  describe('Layout', () => {
    describe('Search Input', () => {
      test('should render the searchInput', () => {
        const [searchInput] = createElements({
          searchInput: true,
        });
        expect(searchInput).toBeInTheDocument();
      });
    });

    describe('Search Button', () => {
      test('should render the searchBtn', () => {
        const [searchBtn] = createElements({
          searchBtn: true,
        });
        expect(searchBtn).toBeInTheDocument();
      });
    });

    describe('Mic', () => {
      test('should render the mic', () => {
        const [mic] = createElements({
          mic: true,
        });
        expect(mic).toBeInTheDocument();
      });
    });
  });

  describe('User Actions', () => {
    describe('searchInput change / handleSearchInputChange', () => {
      test('should trigger mockedHandleSearchInputChange once the user start typing', () => {
        const [searchInput] = createElements({ searchInput: true });
        fireEvent.change(searchInput, { target: { value: 'D' } });
        expect(mockedHandleSearchInputChange).toHaveBeenCalledTimes(1);
        fireEvent.change(searchInput, { target: { value: 'De' } });
        expect(mockedHandleSearchInputChange).toHaveBeenCalledTimes(2);
        fireEvent.change(searchInput, { target: { value: 'Dei' } });
        expect(mockedHandleSearchInputChange).toHaveBeenCalledTimes(3);
        fireEvent.change(searchInput, { target: { value: 'Deia' } });
        expect(mockedHandleSearchInputChange).toHaveBeenCalledTimes(4);
      });
    });

    describe('searchBtn click / handleSearchBtnClick', () => {
      test('should trigger mockedHandleSearchBtnClick once the user clicks on searchBtn', () => {
        const [searchBtn] = createElements({ searchBtn: true });
        fireEvent.click(searchBtn);
        expect(mockedHandleSearchBtnClick).toHaveBeenCalledTimes(1);
      });
    });

    describe('mic click / startRecording', () => {
      test('should trigger mockedStartRecording once the user clicks on the mic', () => {
        const [mic] = createElements({ mic: true });
        fireEvent.click(mic);
        expect(mockedStartRecording).toHaveBeenCalledTimes(1);
      });
    });
  });
});
