import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import Login from 'pages/Login';
import { createMemoryHistory } from 'history';

import { Router } from 'react-router';

test('SignUp page loaded properly ', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Login />
    </Router>
  );
  expect(screen.getByText(/welcome todoapp/i)).toBeInTheDocument();
  const signUpLink = screen.getByRole('link');
  expect(signUpLink).toHaveTextContent(/sign up/i);
  userEvent.click(signUpLink);
  //screen.debug();
  //expect(screen.getByText(/register account/i)).toBeInTheDocument();
});
