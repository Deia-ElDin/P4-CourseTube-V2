import React from 'react';
import PropTypes from 'prop-types';
import TopSection from './topSection/TopSection';
import BottomSection from './bottomSection/BottomSection';

function Video(props) {
  return (
    <section className="video-container" data-testid="video-container">
      <TopSection
        videoLink={props.videoLink}
        videoImg={props.videoImg}
        videoAlt={props.videoAlt}
        videoDuration={props.videoDuration}
      />
      <BottomSection
        channelLink={props.channelLink}
        channelImg={props.channelImg}
        channelAlt={props.channelAlt}
        videoLink={props.videoLink}
        videoTitle={props.videoTitle}
        channelName={props.channelName}
        verified={props.verified}
        videoDetails={props.videoDetails}
      />
    </section>
  );
}

Video.propTypes = {
  videoLink: PropTypes.string.isRequired,
  videoImg: PropTypes.string.isRequired,
  videoAlt: PropTypes.string.isRequired,
  videoDuration: PropTypes.string.isRequired,
  channelLink: PropTypes.string.isRequired,
  channelImg: PropTypes.string.isRequired,
  channelAlt: PropTypes.string.isRequired,
  videoTitle: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  verified: PropTypes.bool.isRequired,
  videoDetails: PropTypes.string.isRequired,
};

export default Video;
