import React from 'react';
import PropTypes from 'prop-types';

function VideoTitle(props) {
  return (
    <a
      href={props.videoLink}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="right-videoLink-anchor-tag"
    >
      <h2 aria-label="video-title">{props.videoTitle}</h2>
    </a>
  );
}

VideoTitle.propTypes = {
  videoLink: PropTypes.string.isRequired,
  videoTitle: PropTypes.string.isRequired,
};

export default VideoTitle;
