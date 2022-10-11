import React from 'react';
import PropTypes from 'prop-types';

function Slider(props) {
  return (
    <div className="slider">
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={props.sliderValue}
        steps="1"
        onChange={props.handleSliderChange}
      />
    </div>
  );
}

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  sliderValue: PropTypes.number.isRequired,
  handleSliderChange: PropTypes.func.isRequired,
};

export default Slider;
