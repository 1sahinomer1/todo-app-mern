import { Link, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['users']);
  const history = useHistory();

  const logout = () => {
    removeCookie('users');
    setTimeout(() => {
      history.push('/login');
    }, 3000);
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Navbar;
