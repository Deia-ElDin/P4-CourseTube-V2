import React from 'react';
import PropTypes from 'prop-types';

function LeftBottom(props) {
  return (
    <div className="left-bottom" data-testid="left-bottom">
      <a
        href={props.channelLink}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="left-anchor-tag"
      >
        <img
          src={process.env.PUBLIC_URL + props.channelImg}
          alt={props.channelAlt}
          data-testid="channel-logo"
        />
      </a>
    </div>
  );
}

LeftBottom.propTypes = {
  channelLink: PropTypes.string.isRequired,
  channelImg: PropTypes.string.isRequired,
  channelAlt: PropTypes.string.isRequired,
};

export default LeftBottom;
