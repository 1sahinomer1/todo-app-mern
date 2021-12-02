import { render, screen, waitFor } from '@testing-library/react';
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
  const history = createMemoryHistory();
  const wrapper = render(
    <Router history={history}>
      <Register />
    </Router>
  );
  const registerButton = wrapper.getByTestId('registerBtn');

  await waitFor(() => {
    userEvent.click(registerButton);
  });

  expect(wrapper.getAllByTestId('errorMessage')[0]).toHaveTextContent(
    'Full name is a required field'
  );
});

test('email validation', async () => {
  const history = createMemoryHistory();
  const wrapper = render(
    <Router history={history}>
      <Register />
    </Router>
  );
  const emailInput = wrapper.getAllByTestId('input')[1];
  const registerButton = wrapper.getByTestId('registerBtn');

  await waitFor(() => {
    userEvent.type(emailInput, 'test@test.com');
    userEvent.click(registerButton);
  });
  expect(wrapper.getAllByTestId('errorMessage')[1]).not.toHaveTextContent(
    'Email is a required field'
  );
});
