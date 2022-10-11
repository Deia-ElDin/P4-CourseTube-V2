import React from 'react';
import PropTypes from 'prop-types';
import LeftBottom from './leftBottom/LeftBottom';
import RightBottom from './rightBottom/RightBottom';

function BottomSection(props) {
  return (
    <div className="bottom-section" data-testid="bottom-section">
      <LeftBottom
        channelLink={props.channelLink}
        channelImg={props.channelImg}
        channelAlt={props.channelAlt}
      />
      <RightBottom
        videoLink={props.videoLink}
        videoTitle={props.videoTitle}
        channelLink={props.channelLink}
        channelName={props.channelName}
        verified={props.verified}
        videoDetails={props.videoDetails}
      />
    </div>
  );
}

BottomSection.propTypes = {
  channelLink: PropTypes.string.isRequired,
  channelImg: PropTypes.string.isRequired,
  channelAlt: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  videoTitle: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  verified: PropTypes.bool.isRequired,
  videoDetails: PropTypes.string.isRequired,
};

export default BottomSection;
