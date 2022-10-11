import React from 'react';
import PropTypes from 'prop-types';
import Button from '../dependencies/Button';
import Logo from './logo/Logo';
import { AiOutlineMenu } from 'react-icons/ai';

function LeftHeader(props) {
  return (
    <div className="left-header" data-testid="left-header">
      <Button
        handleBtnClick={props.handleToggleBtnClick}
        title="Toggle Button"
        icon={<AiOutlineMenu className="icon" data-testid="toggle-btn-icon" />}
        ariaLabel="toggle-btn"
      />
      <div className="logo-div">
        <Logo handleClick={props.handleLogoClick} />
        <h1 onClick={props.handleLogoClick}>CourseTube</h1>
      </div>
    </div>
  );
}

LeftHeader.propTypes = {
  handleToggleBtnClick: PropTypes.func.isRequired,
  handleLogoClick: PropTypes.func.isRequired,
};

export default LeftHeader;
