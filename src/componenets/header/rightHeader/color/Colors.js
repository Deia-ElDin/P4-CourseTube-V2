import React from 'react';
import PropTypes from 'prop-types';

function Colors(props) {
  return (
    <div
      className="color"
      id={props.id}
      onClick={props.handleClick}
      data-testid="theme"
    >
      <div
        style={{ backgroundColor: props.c1 }}
        className="color-div"
        data-testid="color-div1"
      ></div>
      <div
        style={{ backgroundColor: props.c2 }}
        className="color-div"
        data-testid="color-div2"
      ></div>
      <div
        style={{ backgroundColor: props.c3 }}
        className="color-div"
        data-testid="color-div3"
      ></div>
      <div
        style={{ backgroundColor: props.c4 }}
        className="color-div"
        data-testid="color-div4"
      ></div>
    </div>
  );
}

Colors.propTypes = {
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  c1: PropTypes.string.isRequired,
  c2: PropTypes.string.isRequired,
  c3: PropTypes.string.isRequired,
  c4: PropTypes.string.isRequired,
};

export default Colors;
