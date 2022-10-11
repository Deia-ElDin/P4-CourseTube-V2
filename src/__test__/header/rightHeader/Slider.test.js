import { render, screen } from '@testing-library/react';
import Slider from '../../../componenets/header/rightHeader/slider/Slider';

const mockedHandleChange = jest.fn();

const sliderProps = {
  min: 1,
  max: 5,
  sliderValue: 1,
  handleSliderChange: mockedHandleChange,
};

describe('Slider', () => {
  test('should render the slider', () => {
    render(<Slider {...sliderProps} />);
    const sliderElement = screen.getByRole('slider');
    expect(sliderElement).toBeInTheDocument();
  });
});
