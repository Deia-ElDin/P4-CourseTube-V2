import React from 'react';
import PropTypes from 'prop-types';

function TopSection(props) {
  return (
    <div className="top-section" data-testid="top-section">
      <a
        href={props.videoLink}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="top-anchor-tag"
      >
        <img
          src={process.env.PUBLIC_URL + props.videoImg}
          alt={props.videoAlt}
          data-testid="video-img"
        />
        <small data-testid="video-duration">{props.videoDuration}</small>
      </a>
    </div>
  );
}

TopSection.propTypes = {
  videoLink: PropTypes.string.isRequired,
  videoImg: PropTypes.string.isRequired,
  videoAlt: PropTypes.string.isRequired,
  videoDuration: PropTypes.string.isRequired,
};

export default TopSection;
