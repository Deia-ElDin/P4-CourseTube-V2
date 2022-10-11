import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';

function CloseButton(props) {
  return (
    <div className="btn-div">
      <button
        className="close-btn"
        title="Close"
        onClick={props.handleMainCloseBtnClick}
        aria-label="main-close-btn"
      >
        <AiOutlineClose className="close-icon" />
      </button>
    </div>
  );
}

CloseButton.propTypes = {
  handleMainCloseBtnClick: PropTypes.func.isRequired,
};

export default CloseButton;
