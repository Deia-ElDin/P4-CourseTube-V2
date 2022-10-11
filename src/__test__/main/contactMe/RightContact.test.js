import { render, screen, fireEvent } from '@testing-library/react';
import RightContact from '../../../componenets/main/contactMe/rightContact/RightContact';

const mockedHandleContactMeInputsReset = jest.fn();
const mockedHandleInputsChange = jest.fn();

const rightContactProps = {
  handleContactMeInputsReset: mockedHandleContactMeInputsReset,
  handleInputsChange: mockedHandleInputsChange,
  nameValue: '',
  emailValue: '',
  subjectValue: '',
  messageValue: '',
};

function createElements({ form, name, email, subject, message, submitBtn }) {
  const elementsArray = [];
  if (form) {
    const formElement = screen.getByTestId('form');
    elementsArray.push(formElement);
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
  if (submitBtn) {
    const submitBtnElement = screen.getByRole('button', { name: /say hello/i });
    elementsArray.push(submitBtnElement);
  }

  return elementsArray;
}

describe('RightContact', () => {
  beforeEach(() => {
    render(<RightContact {...rightContactProps} />);
  });

  test('should render the form Element', () => {
    const [form] = createElements({ form: true });
    expect(form).toBeInTheDocument();
  });

  describe('Layout', () => {
    test('should render the nameInputElement', () => {
      const [name] = createElements({
        name: true,
      });
      expect(name).toBeInTheDocument();
    });

    test('should render the emailInputElement', () => {
      const [email] = createElements({
        email: true,
      });
      expect(email).toBeInTheDocument();
    });

    test('should render the subjectInputElement', () => {
      const [subject] = createElements({
        subject: true,
      });
      expect(subject).toBeInTheDocument();
    });

    test('should render the messageElement', () => {
      const [message] = createElements({
        message: true,
      });
      expect(message).toBeInTheDocument();
    });

    test('should render the submitBtn', () => {
      const [submitBtn] = createElements({
        submitBtn: true,
      });
      expect(submitBtn).toBeInTheDocument();
    });
  });

  describe('User Actions', () => {
    describe('Name Input / handleInputsChange', () => {
      test('should trigger mockedHandleInputsChange once the user start typing', () => {
        const [name] = createElements({ name: true });
        fireEvent.change(name, { target: { value: 'De' } });
        expect(mockedHandleInputsChange).toHaveBeenCalledTimes(1);
        fireEvent.change(name, { target: { value: 'Deia' } });
        expect(mockedHandleInputsChange).toHaveBeenCalledTimes(2);
      });
    });

    describe('Email Input / handleInputsChange', () => {
      test('should trigger mockedHandleInputsChange once the user start typing', () => {
        const [email] = createElements({ email: true });
        fireEvent.change(email, { target: { value: 'Deia' } });
        expect(mockedHandleInputsChange).toHaveBeenCalledTimes(1);
        fireEvent.change(email, { target: { value: 'Deia@gmail.com' } });
        expect(mockedHandleInputsChange).toHaveBeenCalledTimes(2);
      });
    });

    describe('Subject Input / handleInputsChange', () => {
      test('should trigger mockedHandleInputsChange once the user start typing', () => {
        const [subject] = createElements({ subject: true });
        fireEvent.change(subject, { target: { value: 'Testing' } });
        expect(mockedHandleInputsChange).toHaveBeenCalledTimes(1);
        fireEvent.change(subject, {
          target: { value: 'Testing The Form Inputs' },
        });
        expect(mockedHandleInputsChange).toHaveBeenCalledTimes(2);
      });
    });

    describe('Message Input / handleInputsChange', () => {
      test('should trigger mockedHandleInputsChange once the user start typing', () => {
        const [message] = createElements({ message: true });
        fireEvent.change(message, { target: { value: 'Will' } });
        expect(mockedHandleInputsChange).toHaveBeenCalledTimes(1);
        fireEvent.change(message, { target: { value: 'Will Pass' } });
        expect(mockedHandleInputsChange).toHaveBeenCalledTimes(2);
      });
    });
  });
});
