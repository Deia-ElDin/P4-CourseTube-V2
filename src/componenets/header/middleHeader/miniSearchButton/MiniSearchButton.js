import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../dependencies/Button';
import { BsSearch } from 'react-icons/bs';

function MiniSearchButton(props) {
  return (
    <div className="mini-search">
      <Button
        title="Display Search Components"
        handleBtnClick={props.handleMiniSearchBtnClick}
        icon={<BsSearch className="icon-2" />}
      />
    </div>
  );
}

MiniSearchButton.propTypes = {
  handleMiniSearchBtnClick: PropTypes.func.isRequired,
};

export default MiniSearchButton;
