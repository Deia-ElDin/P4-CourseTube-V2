import { screen, render } from '@testing-library/react';
import User from '../../../componenets/header/user/User';

test('Should render the user image', () => {
  render(<User />);
  const userDivElement = screen.queryByTestId('user');
  const userImg = screen.queryByAltText('Deia');
  expect(userDivElement).toBeInTheDocument();
  expect(userImg).toBeInTheDocument();
});
