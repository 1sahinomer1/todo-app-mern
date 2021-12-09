import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';

import Login from 'pages/Login';
import Register from 'pages/Register';

import { MemoryRouter, Router, Switch } from 'react-router';
import Home from 'pages/Home';
import { Provider } from 'react-redux';
import store from 'store';
import { PrivateRoute } from 'components';
import { ROUTES } from 'constants/routes';

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

// test('User logins correctly', async () => {
//   const wrapper = render(
//     <Provider store={store}>
//       <MemoryRouter>
//         <Switch>
//           <Login />
//           <PrivateRoute exact path={ROUTES.HOME} component={Home} />
//         </Switch>
//       </MemoryRouter>
//     </Provider>
//   );
//   const emailInput = wrapper.getAllByTestId('input')[0];
//   const passwordInput = wrapper.getAllByTestId('input')[1];
//   const loginButton = wrapper.getByTestId('loginBtn');

//   await waitFor(() => {
//     userEvent.type(emailInput, 'test@test.com');
//     userEvent.type(passwordInput, 'testtest');
//     userEvent.click(loginButton);
//   });
//   await waitFor(() => {
//     expect(wrapper.getByTestId('welcomeText')).toHaveTextContent(
//       'Welcome testuser !'
//     );
//   });
// });
