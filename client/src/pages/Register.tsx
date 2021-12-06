import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { Button, Input } from 'components';

import LoginRegister from 'layouts/LoginRegister/LoginRegister';
import { formTypes } from 'constants/layouts/loginRegister';
import { formValidations } from 'utils';

import * as S from 'styles/Pages/Register';
import axios from 'axios';

interface IFormInputs {
  fullname: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const Register = () => {
  const history = useHistory();

  const validationSchema = yup
    .object()
    .shape({
      fullname: formValidations.fullNameValidation,
      email: formValidations.emailValidation,
      password: formValidations.passwordValidation,
      passwordConfirmation: formValidations.passwordConfirmation,
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
      name: data.fullname,
      email: data.email,
      password: data.password,
    };
    try {
      const response = await axios.post('/users/register', User);
      setTimeout(() => {
        history.push('/login');
      }, 3000);
      toast.success(response.data.message);
    } catch (error) {
      toast.error((error as any).response.data.message);
    }
  };

  return (
    <LoginRegister formType={formTypes.REGISTER}>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('fullname')}
          type="text"
          placeholder="Full name"
          error={errors.fullname?.message}
          label="Fullname"
          hasValue={watch('fullname')}
        />

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
        <Input
          {...register('passwordConfirmation')}
          type="password"
          label="Password Again"
          placeholder="Password Again"
          error={errors.passwordConfirmation?.message}
          hasValue={watch('passwordConfirmation')}
        />
        <Button data-testid="registerBtn">Register</Button>

        <S.Redirect>
          Already have Account ?
          <Link to="/login">
            <S.LinkText data-testid="signInLink">Sign In</S.LinkText>
          </Link>
        </S.Redirect>
      </S.Form>
    </LoginRegister>
  );
};

export default Register;
