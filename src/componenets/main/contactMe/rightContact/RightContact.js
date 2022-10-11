import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';

function RightContact(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_9erde3c',
      'template_scgnj68',
      form.current,
      'kYyrBu7_DWsFnU3V8'
    );
    props.handleContactMeInputsReset();
  };

  return (
    <form
      className="right-contact"
      onSubmit={sendEmail}
      ref={form}
      data-testid="form"
    >
      <div className="person-details">
        <input
          type="text"
          id="nameValue"
          placeholder="Your Name"
          name="Name"
          required
          value={props.nameValue}
          onChange={props.handleInputsChange}
        />
        <input
          type="email"
          id="emailValue"
          placeholder="Your Email"
          name="Email"
          required
          value={props.emailValue}
          onChange={props.handleInputsChange}
        />
      </div>
      <input
        type="text"
        id="subjectValue"
        placeholder="Subject"
        className="subject-input"
        name="Subject"
        required
        value={props.subjectValue}
        onChange={props.handleInputsChange}
      />
      <textarea
        name="Message"
        placeholder="Your Message"
        id="messageValue"
        cols="30"
        rows="10"
        required
        value={props.messageValue}
        onChange={props.handleInputsChange}
      ></textarea>
      <button className="form-btn">Say Hello</button>
    </form>
  );
}

RightContact.propTypes = {
  handleContactMeInputsReset: PropTypes.func.isRequired,
  handleInputsChange: PropTypes.func.isRequired,
  nameValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  subjectValue: PropTypes.string.isRequired,
  messageValue: PropTypes.string.isRequired,
};

export default RightContact;
