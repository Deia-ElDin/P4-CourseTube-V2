import React from 'react';
import PropTypes from 'prop-types';
import VideoTitle from './videoTitle/VideoTitle';
import ChannelDetails from './channelDetails/ChannelDetails';
import VideoDetails from './videoDetails/VideoDetails';

function RightBottom(props) {
  return (
    <div className="right-bottom" data-testid="right-bottom">
      <VideoTitle videoLink={props.videoLink} videoTitle={props.videoTitle} />
      <ChannelDetails
        channelLink={props.channelLink}
        channelName={props.channelName}
        verified={props.verified}
      />
      <VideoDetails videoDetails={props.videoDetails} />
    </div>
  );
}

RightBottom.propTypes = {
  videoLink: PropTypes.string.isRequired,
  videoTitle: PropTypes.string.isRequired,
  channelLink: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  verified: PropTypes.bool.isRequired,
  videoDetails: PropTypes.string.isRequired,
};

export default RightBottom;
