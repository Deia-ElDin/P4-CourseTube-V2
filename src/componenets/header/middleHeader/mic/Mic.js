import React from 'react';
import PropTypes from 'prop-types';
import { BsFillMicFill } from 'react-icons/bs';
import { BsFillMicMuteFill } from 'react-icons/bs';

function Mic(props) {
  console.log(props.listening);
  return (
    <button
      className="search-mic"
      onClick={props.listening ? props.stopRecording : props.startRecording}
      title="Search with your voice"
    >
      {props.listening ? (
        <BsFillMicFill className="icon-2" data-testid="mic-on" />
      ) : (
        <BsFillMicMuteFill className="icon-2" data-testid="mic-off" />
      )}
      {props.listening && <div className="outer-1" data-testid="outer-1"></div>}
      {props.listening && <div className="outer-2" data-testid="outer-2"></div>}
    </button>
  );
}

Mic.propTypes = {
  startRecording: PropTypes.func.isRequired,
  stopRecording: PropTypes.func.isRequired,
  listening: PropTypes.bool.isRequired,
};

export default Mic;
