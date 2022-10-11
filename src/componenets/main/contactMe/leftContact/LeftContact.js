import React from 'react';
import ContactBlock from './dependencies/ContactBlock';
import contactData from '../../../../data/contactData';
import AnchorButton from './dependencies/AnchorButton';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

function LeftContact() {
  const ContactArray = contactData.map((contact) => {
    const { id, icon, title, text } = contact;
    return (
      <ContactBlock key={id} id={id} icon={icon} title={title} text={text} />
    );
  });

  return (
    <div className="left-contact" data-testid="left-contact">
      <dl>{ContactArray}</dl>
      <div className="anchor-btns">
        <AnchorButton
          link="https://www.linkedin.com/in/deia-hamad-577a1814a/"
          icon={<AiFillLinkedin data-testid="linkedin-icon" />}
          testId="linkedin-btn"
        />
        <AnchorButton
          link="https://www.github.com/DeiaHamad"
          icon={<AiFillGithub data-testid="github-icon" />}
          testId="github-btn"
        />
      </div>
    </div>
  );
}

export default LeftContact;
