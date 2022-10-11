import React from 'react';
import PropTypes from 'prop-types';
import { BsCheckCircleFill } from 'react-icons/bs';

function ChannelDetails(props) {
  return (
    <a
      href={props.channelLink}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="right-channelLink-anchor-tag"
    >
      <div className="channel-details" data-testid="channel-details">
        <small data-testid="channel-name">{props.channelName}</small>
        {props.verified && (
          <BsCheckCircleFill className="verified" data-testid="verified-icon" />
        )}
      </div>
    </a>
  );
}

ChannelDetails.propTypes = {
  channelLink: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  verified: PropTypes.bool.isRequired,
};

export default ChannelDetails;
