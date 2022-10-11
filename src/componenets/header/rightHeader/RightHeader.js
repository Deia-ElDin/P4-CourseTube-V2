import React from 'react';
import PropTypes from 'prop-types';
import ArrowButton from '../dependencies/ArrowButton';
import Button from '../dependencies/Button';
import Slider from './slider/Slider';
import { VscColorMode } from 'react-icons/vsc';
import { CgMenuGridO } from 'react-icons/cg';
import { MdContacts } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';

function RightHeader(props) {
  return (
    <div className="right-header" data-testid="right-header">
      {props.displayOptionsArrowBtn && (
        <ArrowButton
          id="rightHeaderArrowBtn"
          handleClick={props.handleArrowBtnClick}
          ariaLabel="right-header-arrow-btn"
        />
      )}

      {props.closeBtnStatus && (
        <Button
          title="Close"
          handleBtnClick={props.handleCloseBtnClick}
          icon={<AiOutlineClose className="icon" data-testid="close-icon" />}
          ariaLabel="right-header-close-btn"
        />
      )}

      {props.themeBtnStatus && (
        <Button
          title="Select Color Theme"
          handleBtnClick={props.handleThemeBtnClick}
          icon={<VscColorMode className="icon" data-testid="theme-icon" />}
        />
      )}
      {props.displayColors && props.colorArray}

      {props.gridBtnStatus && (
        <Button
          title="Select Grid Template"
          handleBtnClick={props.handleGridBtnClick}
          icon={<CgMenuGridO className="icon" data-testid="grid-icon" />}
          data-testid="grid-btn"
        />
      )}
      {props.displaySlider && (
        <Slider
          min={props.sliderMin}
          max={props.sliderMax}
          sliderValue={props.sliderValue}
          handleSliderChange={props.handleSliderChange}
        />
      )}

      {props.contactMeBtnStatus && (
        <Button
          title="Contact Me"
          handleBtnClick={props.handleContactMeBtnClick}
          icon={<MdContacts className="icon" data-testid="contact-icon" />}
        />
      )}
    </div>
  );
}

RightHeader.propTypes = {
  displayOptionsArrowBtn: PropTypes.bool.isRequired,
  closeBtnStatus: PropTypes.bool.isRequired,
  themeBtnStatus: PropTypes.bool.isRequired,
  gridBtnStatus: PropTypes.bool.isRequired,
  displaySlider: PropTypes.bool.isRequired,
  contactMeBtnStatus: PropTypes.bool.isRequired,
  displayColors: PropTypes.bool.isRequired,
  handleCloseBtnClick: PropTypes.func.isRequired,
  handleThemeBtnClick: PropTypes.func.isRequired,
  handleGridBtnClick: PropTypes.func.isRequired,
  handleSliderChange: PropTypes.func.isRequired,
  handleContactMeBtnClick: PropTypes.func.isRequired,
  sliderMin: PropTypes.number.isRequired,
  sliderMax: PropTypes.number.isRequired,
  sliderValue: PropTypes.number.isRequired,
  colorArray: PropTypes.arrayOf(PropTypes.element),
};

export default RightHeader;
