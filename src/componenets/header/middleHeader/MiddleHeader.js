import React from 'react';
import PropTypes from 'prop-types';
import Mic from './mic/Mic';
import ArrowButton from '../dependencies/ArrowButton';
import { BsSearch } from 'react-icons/bs';

function MiddleHeader(props) {
  return (
    <div className="middle-header" data-testid="middle-header">
      {props.displaySearchArrowBtn && (
        <ArrowButton
          id="middleHeaderArrowBtn"
          handleClick={props.handleArrowBtnClick}
          ariaLabel="middle-header-arrow-btn"
        />
      )}
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        value={props.searchValue}
        onChange={props.handleSearchInputChange}
        onKeyDown={props.handleSearchInputKeyDown}
        onFocus={props.handleSearchInputFocus}
        onBlur={props.handleSearchInputBlur}
      />
      <button
        className="search-btn"
        title="Search Button"
        onClick={props.handleSearchBtnClick}
      >
        <BsSearch className="icon-2" />
      </button>
      <Mic
        class="search-mic"
        startRecording={props.startRecording}
        stopRecording={props.stopRecording}
        listening={props.listening}
      />
    </div>
  );
}

MiddleHeader.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleSearchInputChange: PropTypes.func.isRequired,
  handleSearchInputKeyDown: PropTypes.func.isRequired,
  handleSearchInputFocus: PropTypes.func.isRequired,
  handleSearchInputBlur: PropTypes.func.isRequired,
  handleSearchBtnClick: PropTypes.func.isRequired,
  startRecording: PropTypes.func.isRequired,
  stopRecording: PropTypes.func.isRequired,
  listening: PropTypes.bool.isRequired,
};

export default MiddleHeader;
