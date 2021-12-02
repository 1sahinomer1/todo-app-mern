import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';

import Login from 'pages/Login';
import Register from 'pages/Register';

import { Router } from 'react-router';

test('SignUp snapshot', async () => {
  const history = createMemoryHistory();

  const pages = render(
    <Router history={history}>
      <Login />
      <Register />
    </Router>
  );
  await waitFor(() => pages);
  expect(pages).toMatchSnapshot();
});

test('SignUp page loaded properly', () => {
  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <Login />
      <Register />
    </Router>
  );
  expect(screen.getByText(/welcome todoapp/i)).toBeInTheDocument();
  const signUpLink = screen.getByTestId('signupLink');
  userEvent.click(signUpLink);
  expect(screen.getByText(/register account/i)).toBeInTheDocument();
});
