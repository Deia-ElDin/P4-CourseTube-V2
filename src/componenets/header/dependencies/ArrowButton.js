import React from 'react';
import PropTypes from 'prop-types';

function ArrowButton(props) {
  return (
    <div className="btn-container">
      <button
        className="arrows-btn"
        id={props.id}
        onClick={() => {
          props.handleClick(props.id);
        }}
        aria-label={props.ariaLabel}
      ></button>
    </div>
  );
}

ArrowButton.propTypes = {
  id: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default ArrowButton;
