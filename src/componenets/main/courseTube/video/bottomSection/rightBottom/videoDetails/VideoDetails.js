import React from 'react';
import PropTypes from 'prop-types';

function VideoDetails(props) {
  return (
    <small className="video-details" data-testid="video-details">
      {props.videoDetails}
    </small>
  );
}

VideoDetails.propTypes = {
  videoDetails: PropTypes.string.isRequired,
};

export default VideoDetails;
