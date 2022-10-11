import React from 'react';
import PropTypes from 'prop-types';
import LeftHeader from './leftHeader/LeftHeader';
import Logo from './leftHeader/logo/Logo';
import MiddleHeader from './middleHeader/MiddleHeader';
import MiniSearchButton from './middleHeader/miniSearchButton/MiniSearchButton';
import RightHeader from './rightHeader/RightHeader';
import MiniOptionsButton from './rightHeader/miniOptionsButton/MiniOptionsButton';
import User from './user/User';

function Header(props) {
  const {
    displayLeftHeader,
    displayLogo,
    displayMiddleHeader,
    displayMiniSearchButton,
    displaySearchArrowBtn,
    searchValue,
    displayRightHeader,
    displayMiniOptionsButton,
    displayOptionsArrowBtn,
    themeBtn,
    displayColors,
    gridBtn,
    displaySlider,
    sliderValue,
    sliderMin,
    sliderMax,
    contactMeBtn,
    closeBtn,
    displayUser,
  } = props.section;

  const [
    handleToggleBtnClick,
    handleLogoClick,
    handleSearchInputChange,
    handleSearchInputKeyDown,
    handleSearchInputFocus,
    handleSearchInputBlur,
    handleSearchBtnClick,
    handleThemeBtnClick,
    handleGridBtnClick,
    handleSliderChange,
    handleContactMeBtnClick,
    handleCloseBtnClick,
    handleMiniSearchBtnClick,
    handleMiniOptionsBtnClick,
    handleArrowBtnClick,
  ] = props.functions;

  const [colorList] = props.dependencies;

  return (
    <header>
      {displayLeftHeader && (
        <LeftHeader
          // Toggle Btn
          handleToggleBtnClick={handleToggleBtnClick}
          // Logo Btn
          handleLogoClick={handleLogoClick}
        />
      )}
      {displayLogo && <Logo handleClick={handleLogoClick} />}

      {displayMiddleHeader && (
        <MiddleHeader
          // Search Input
          searchValue={searchValue}
          handleSearchInputChange={handleSearchInputChange}
          handleSearchInputKeyDown={handleSearchInputKeyDown}
          handleSearchInputFocus={handleSearchInputFocus}
          handleSearchInputBlur={handleSearchInputBlur}
          // Search Btn
          handleSearchBtnClick={handleSearchBtnClick}
          // Search Mic
          startRecording={props.startRecording}
          stopRecording={props.stopRecording}
          listening={props.listening}
          // Arrow Btn
          displaySearchArrowBtn={displaySearchArrowBtn}
          handleArrowBtnClick={handleArrowBtnClick}
        />
      )}
      {displayMiniSearchButton && (
        <MiniSearchButton handleMiniSearchBtnClick={handleMiniSearchBtnClick} />
      )}

      {displayRightHeader && (
        <RightHeader
          // Theme Btn
          themeBtnStatus={themeBtn}
          handleThemeBtnClick={handleThemeBtnClick}
          displayColors={displayColors}
          colorArray={colorList}
          // Grid Btn
          gridBtnStatus={gridBtn}
          handleGridBtnClick={handleGridBtnClick}
          handleSliderChange={handleSliderChange}
          displaySlider={displaySlider}
          sliderValue={sliderValue}
          sliderMin={sliderMin}
          sliderMax={sliderMax}
          // Contact Me Btn
          contactMeBtnStatus={contactMeBtn}
          handleContactMeBtnClick={handleContactMeBtnClick}
          // Close Btn
          closeBtnStatus={closeBtn}
          handleCloseBtnClick={handleCloseBtnClick}
          // Arrow Btn
          displayOptionsArrowBtn={displayOptionsArrowBtn}
          handleArrowBtnClick={handleArrowBtnClick}
        />
      )}

      {displayMiniOptionsButton && (
        <MiniOptionsButton
          handleMiniOptionsBtnClick={handleMiniOptionsBtnClick}
        />
      )}

      {displayUser && <User />}
    </header>
  );
}

Header.propTypes = {
  section: PropTypes.object.isRequired,
  functions: PropTypes.arrayOf(PropTypes.func).isRequired,
  dependencies: PropTypes.array.isRequired,
  startRecording: PropTypes.func.isRequired,
  stopRecording: PropTypes.func.isRequired,
  listening: PropTypes.bool.isRequired,
};

export default Header;
