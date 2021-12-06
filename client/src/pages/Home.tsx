import { Navbar } from 'components';
import { useCookies } from 'react-cookie';

const Home = () => {
  const [cookies, setCookie] = useCookies(['users']);
  console.log(cookies);
  return (
    <div>
      <Navbar />
      {cookies.users.user.name}
    </div>
  );
};

export default Home;
