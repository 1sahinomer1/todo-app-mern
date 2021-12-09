import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';

import { Button, Input } from 'components';

import { formTypes } from 'constants/layouts/loginRegister';
import LoginRegister from 'layouts/LoginRegister/LoginRegister';
import { formValidations } from 'utils';

import * as S from 'styles/Pages/Register';

const Login = () => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(['users']);

  interface IFormInputs {
    fullname: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  }
  const validationSchema = yup
    .object()
    .shape({
      email: formValidations.emailValidation,
      password: formValidations.passwordValidation,
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = async (data: IFormInputs) => {
    const User = {
      email: data.email,
      password: data.password,
    };
    try {
      const response = await axios.post('/users/login', User);
      setTimeout(() => {
        history.push('/');
      }, 3000);
      toast.success(response.data.message);
      setCookie('users', response.data, { path: '/' });
    } catch (error) {
      toast.error((error as any).response.data.message);
    }
  };
  return (
    <LoginRegister formType={formTypes.LOGIN}>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email')}
          type="text"
          label="Email"
          placeholder="Email"
          error={errors.email?.message}
          hasValue={watch('email')}
        />
        <Input
          {...register('password')}
          type="password"
          label="Password"
          placeholder="Password"
          error={errors.password?.message}
          hasValue={watch('password')}
        />

        <Button data-testid="loginBtn">Login</Button>
        <S.Redirect>
          Don't you have an account ?
          <Link to="/register">
            <S.LinkText data-testid="signupLink">Sign Up</S.LinkText>
          </Link>
        </S.Redirect>
      </S.Form>
    </LoginRegister>
  );
};

export default Login;
