import { render, screen } from '@testing-library/react';
import Footer from '../../componenets/sidebar/footer/Footer';

const date = new Date();
const year = date.getFullYear();

describe('Footer', () => {
  test('should render the footer text', () => {
    render(<Footer />);
    const footerElement = screen.getByTestId('footer-text');
    expect(footerElement).toBeInTheDocument();
  });

  test('should render the current year', () => {
    render(<Footer />);
    const footerElement = screen.getByTestId('footer-text');
    expect(footerElement).toHaveTextContent(year);
  });
});
