import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import * as S from './styles';
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
    <S.Navbar>
      <p datatest-id="welcomeText">Welcome {cookies.users.user.name} !</p>
      <S.StyledDoor onClick={logout}>cikis yap </S.StyledDoor>
    </S.Navbar>
  );
};

export default Navbar;
