import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button
      className={props.class}
      title={props.title}
      onClick={props.handleBtnClick}
      aria-label={props.ariaLabel}
    >
      {props.icon}
      <div className="outer"></div>
    </button>
  );
}

Button.defaultProps = {
  class: 'btn',
};

Button.propTypes = {
  class: PropTypes.string,
  title: PropTypes.string,
  ariaLabel: PropTypes.string,
  handleBtnClick: PropTypes.func.isRequired,
};

export default Button;
