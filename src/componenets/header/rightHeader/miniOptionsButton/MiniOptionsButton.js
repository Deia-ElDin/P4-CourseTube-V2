import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../dependencies/Button';
import { IoIosOptions } from 'react-icons/io';

function MiniOptionsButton(props) {
  return (
    <div className="mini-options">
      <Button
        title="Options"
        handleBtnClick={props.handleMiniOptionsBtnClick}
        icon={<IoIosOptions className="icon-2" />}
      />
    </div>
  );
}

MiniOptionsButton.propTypes = {
  handleMiniOptionsBtnClick: PropTypes.func.isRequired,
};

export default MiniOptionsButton;
