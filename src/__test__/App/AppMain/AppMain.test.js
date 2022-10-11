import { render, screen, fireEvent } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';
import App from '../../../App';

function createElements({
  // RightHeader
  contactMeBtn,
  // Main
  mainCourseTubePage,
  mainContactPage,
  // Form
  name,
  email,
  subject,
  message,
}) {
  const elementsArray = [];

  if (contactMeBtn) {
    const contactMeBtnElement = screen.queryByTitle('Contact Me');
    elementsArray.push(contactMeBtnElement);
  }
  if (mainCourseTubePage) {
    const mainCourseTubePageElement = screen.queryByTestId('coursetube-page');
    elementsArray.push(mainCourseTubePageElement);
  }
  if (mainContactPage) {
    const mainContactPageElement = screen.queryByTestId('contact-page');
    elementsArray.push(mainContactPageElement);
  }
  if (name) {
    const nameInputElement = screen.getByPlaceholderText('Your Name');
    elementsArray.push(nameInputElement);
  }
  if (email) {
    const emailInputElement = screen.getByPlaceholderText('Your Email');
    elementsArray.push(emailInputElement);
  }
  if (subject) {
    const subjectInputElement = screen.getByPlaceholderText('Subject');
    elementsArray.push(subjectInputElement);
  }
  if (message) {
    const messageElement = screen.getByPlaceholderText('Your Message');
    elementsArray.push(messageElement);
  }

  return elementsArray;
}

describe('App / Main (Form)', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('should be able to type into the form inputs', () => {
    // Step 1: Clicking on contactMeBtn
    const [contactMeBtn, mainCourseTubePage, mainContactPage] = createElements({
      contactMeBtn: true,
      mainCourseTubePage: true,
      mainContactPage: true,
    });
    expect(mainCourseTubePage).toBeInTheDocument();
    expect(mainContactPage).not.toBeInTheDocument();
    fireEvent.click(contactMeBtn);
    const [mainCourseTubePage2, mainContactPage2] = createElements({
      mainCourseTubePage: true,
      mainContactPage: true,
    });
    expect(mainCourseTubePage2).not.toBeInTheDocument();
    expect(mainContactPage2).toBeInTheDocument();

    const [name, email, subject, message] = createElements({
      rightContactDiv: true,
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    // Step 2: The inputs should be empty
    expect(name.value).toBe('');
    expect(email.value).toBe('');
    expect(subject.value).toBe('');
    expect(message.value).toBe('');

    // Step 3: Type into the inputs
    fireEvent.change(name, { target: { value: 'Deia' } });
    fireEvent.change(email, { target: { value: 'Deia@gmail.com' } });
    fireEvent.change(subject, { target: { value: 'Testing the Form' } });
    fireEvent.change(message, { target: { value: 'Will pass' } });
    expect(name.value).toBe('Deia');
    expect(email.value).toBe('Deia@gmail.com');
    expect(subject.value).toBe('Testing the Form');
    expect(message.value).toBe('Will pass');
  });
});
