import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from './closeButton/CloseButton';
import LeftContact from './leftContact/LeftContact';
import RightContact from './rightContact/RightContact';

function ContactMe(props) {
  return (
    <div className="contact-div" data-testid="contact-page">
      <CloseButton handleMainCloseBtnClick={props.handleMainCloseBtnClick} />
      <div className="contact-me">
        <LeftContact />
        <RightContact
          handleInputsChange={props.handleInputsChange}
          handleContactMeInputsReset={props.handleContactMeInputsReset}
          nameValue={props.nameValue}
          emailValue={props.emailValue}
          subjectValue={props.subjectValue}
          messageValue={props.messageValue}
        />
      </div>
    </div>
  );
}

ContactMe.propTypes = {
  handleMainCloseBtnClick: PropTypes.func.isRequired,
  handleInputsChange: PropTypes.func.isRequired,
  handleContactMeInputsReset: PropTypes.func.isRequired,
  nameValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  subjectValue: PropTypes.string.isRequired,
  messageValue: PropTypes.string.isRequired,
};

export default ContactMe;
