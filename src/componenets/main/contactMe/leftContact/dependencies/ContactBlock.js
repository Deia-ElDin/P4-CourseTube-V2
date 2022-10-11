import React from 'react';
import PropTypes from 'prop-types';

function ContactBlock(props) {
  return (
    <>
      <dt>
        <div className="icon" data-testid="contact-icon">
          {props.icon}
        </div>
        <p data-testid="contact-title">{props.title}</p>
      </dt>
      <dd data-testid="contact-text">{props.text}</dd>
    </>
  );
}

ContactBlock.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ContactBlock;
