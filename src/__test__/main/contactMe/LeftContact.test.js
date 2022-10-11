import { render, screen } from '@testing-library/react';
import LeftContact from '../../../componenets/main/contactMe/leftContact/LeftContact';
import contactData from '../../../data/contactData';

function createElements({
  leftContactDiv,
  contactIcons,
  contactTitle,
  contactText,
  linkedinBtn,
  linkedinIcon,
  githubBtn,
  githubIcon,
}) {
  const elementsArray = [];

  if (leftContactDiv) {
    const leftContactDivElement = screen.getByTestId('left-contact');
    elementsArray.push(leftContactDivElement);
  }
  if (contactIcons) {
    const contactIconsElement = screen.getAllByTestId('contact-icon');
    elementsArray.push(contactIconsElement);
  }
  if (contactTitle) {
    const contactTitleElement = screen.getAllByTestId('contact-title');
    elementsArray.push(contactTitleElement);
  }
  if (contactText) {
    const contactTextElement = screen.getAllByTestId('contact-text');
    elementsArray.push(contactTextElement);
  }
  if (linkedinBtn) {
    const linkedinBtnElement = screen.getByTestId('linkedin-btn');
    elementsArray.push(linkedinBtnElement);
  }
  if (linkedinIcon) {
    const linkedinIconElement = screen.getByTestId('linkedin-icon');
    elementsArray.push(linkedinIconElement);
  }
  if (githubBtn) {
    const githubBtnElement = screen.getByTestId('github-btn');
    elementsArray.push(githubBtnElement);
  }
  if (githubIcon) {
    const githubIconElement = screen.getByTestId('github-icon');
    elementsArray.push(githubIconElement);
  }

  return elementsArray;
}

describe('LeftContact', () => {
  beforeEach(() => {
    render(<LeftContact />);
  });

  test('should render the leftContactDiv', () => {
    const [leftContactDiv] = createElements({ leftContactDiv: true });
    expect(leftContactDiv).toBeInTheDocument();
  });

  describe('Layout', () => {
    describe('ContactBlock', () => {
      test('should render the contact block with 5 elements', () => {
        const [contactIcons, contactTitle, contactText] = createElements({
          contactIcons: true,
          contactTitle: true,
          contactText: true,
        });
        expect(contactIcons.length).toBe(contactData.length);
        expect(contactTitle.length).toBe(contactData.length);
        expect(contactText.length).toBe(contactData.length);
      });
    });

    describe('Linkedin Button', () => {
      test('should render the linkedinBtn', () => {
        const [linkedinBtn] = createElements({
          linkedinBtn: true,
        });
        expect(linkedinBtn).toBeInTheDocument();
      });
    });

    describe('Github Button', () => {
      test('should render the githubBtn', () => {
        const [githubBtn] = createElements({
          githubBtn: true,
        });
        expect(githubBtn).toBeInTheDocument();
      });
    });
  });
});
