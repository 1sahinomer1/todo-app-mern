import { Redirect, Route, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  component: React.FC<any>;
}

const PrivateRoute = ({
  component: Component,
  ...theRest
}: PrivateRouteProps) => {
  return <Route {...theRest}></Route>;
};

export default PrivateRoute;
