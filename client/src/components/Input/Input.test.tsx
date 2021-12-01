import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom/extend-expect';

import { Input } from 'components';

test('password input show-hide toggle works properly', () => {
  render(
    <Input
      label="password"
      hasValue="sifre"
      placeholder="password"
      type="password"
    />
  );
  const passwordInput = screen.getByPlaceholderText(
    /password/i
  ) as HTMLInputElement;
  const passwordShowToggle = screen.getByTestId('eye');

  //When first opened, the type of my password input is password
  expect(passwordInput.type).toEqual('password');
  userEvent.click(passwordShowToggle);
  expect(passwordInput.type).toEqual('text');

  //When the icon is pressed, set the input type to password.
  const passwordHideToggle = screen.getByTestId('hiddedEye');
  userEvent.click(passwordHideToggle);
  expect(passwordInput.type).toEqual('password');
});
