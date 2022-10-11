import { render, screen } from '@testing-library/react';
import Mic from '../../../componenets/header/middleHeader/mic/Mic';

const mockedStartRecording = jest.fn();
const mockedStopRecording = jest.fn();

const micProps = {
  listening: false,
  startRecording: mockedStartRecording,
  stopRecording: mockedStopRecording,
};

function handleElments({ mic, micOn, micOff, firstOuterDiv, secondOuterDiv }) {
  const elementsArray = [];
  if (mic) {
    const micElement = screen.getByRole('button');
    elementsArray.push(micElement);
  }
  if (micOn) {
    const micOnElement = screen.queryByTestId('mic-on');
    elementsArray.push(micOnElement);
  }
  if (micOff) {
    const micOffElement = screen.queryByTestId('mic-off');
    elementsArray.push(micOffElement);
  }
  if (firstOuterDiv) {
    const firstOuterDivElement = screen.queryByTestId('outer-1');
    elementsArray.push(firstOuterDivElement);
  }
  if (secondOuterDiv) {
    const secondOuterDivElement = screen.queryByTestId('outer-2');
    elementsArray.push(secondOuterDivElement);
  }

  return elementsArray;
}

describe('Mic', () => {
  test('should render the mic', () => {
    render(<Mic {...micProps} />);
    const [mic] = handleElments({ mic: true });
    expect(mic).toBeInTheDocument();
  });

  test('mic should be intially off', () => {
    render(<Mic {...micProps} />);
    const [micOnIcon, micOffIcon, firstOuterDiv, secondOuterDiv] =
      handleElments({
        micOn: true,
        micOff: true,
        firstOuterDiv: true,
        secondOuterDiv: true,
      });
    expect(micOnIcon).not.toBeInTheDocument();
    expect(firstOuterDiv).not.toBeInTheDocument();
    expect(secondOuterDiv).not.toBeInTheDocument();
    expect(micOffIcon).toBeInTheDocument();
  });

  test('the mic should be on if listening === true', () => {
    render(<Mic {...micProps} listening={true} />);
    const [micOnIcon, micOffIcon, firstOuterDiv, secondOuterDiv] =
      handleElments({
        micOn: true,
        micOff: true,
        firstOuterDiv: true,
        secondOuterDiv: true,
      });
    expect(micOnIcon).toBeInTheDocument();
    expect(firstOuterDiv).toBeInTheDocument();
    expect(secondOuterDiv).toBeInTheDocument();
    expect(micOffIcon).not.toBeInTheDocument();
  });
});
