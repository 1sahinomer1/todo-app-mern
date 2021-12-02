import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';

import Login from 'pages/Login';
import Register from 'pages/Register';

import { Router } from 'react-router';

test('SignIn snapshot', async () => {
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

test('SignIn page loaded properly', () => {
  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <Login />
      <Register />
    </Router>
  );
  expect(screen.getByText(/register account/i)).toBeInTheDocument();
  const signUpLink = screen.getByTestId('signInLink');
  userEvent.click(signUpLink);
  expect(screen.getByText(/welcome todoapp/i)).toBeInTheDocument();
});

test('Trying to register with unfilled form', async () => {
  //When I clicked the button,,
  // it gave an act error and when wrapped in this way, the error disappeared.
  await act(async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Register />
      </Router>
    );
    const registerButton = screen.getByRole('button');
    await waitFor(() => {
      userEvent.click(registerButton);
    });

    screen.debug();
    // expect(
    //   screen.getByText('Full name is a required field')
    // ).toBeInTheDocument();
    // expect(screen.getByText('Email is a required field')).toBeInTheDocument();
    // expect(
    //   screen.getByText('Password is a required field')
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByText('Confirm Password is required')
    // ).toBeInTheDocument();
  });
});
