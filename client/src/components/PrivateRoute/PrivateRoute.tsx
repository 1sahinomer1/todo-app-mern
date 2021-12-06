import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';

interface PrivateRouteProps extends RouteProps {
  component: React.FC<any>;
}

const PrivateRoute = ({
  component: Component,
  ...theRest
}: PrivateRouteProps) => {
  const [cookies, setCookie] = useCookies(['users']);
  return (
    <Route
      {...theRest}
      render={(props) => {
        const token = cookies?.users?.token;
        if (token !== undefined) {
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
