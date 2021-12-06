import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { PrivateRoute } from './components';

import { ROUTES } from './constants/routes';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<h2>loading</h2>}>
        <Switch>
          <PrivateRoute exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.LOGIN} component={Login} />
          <Route exact path={ROUTES.REGISTER} component={Register} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
