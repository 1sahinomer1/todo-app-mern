import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { Button, Input } from 'components';

import LoginRegister from 'layouts/LoginRegister/LoginRegister';
import { formTypes } from 'constants/layouts/loginRegister';
import { formValidations } from 'utils';

import * as S from 'styles/Pages/Register';

interface IFormInputs {
  fullname: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const Register = () => {
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
  const onSubmit = (data: IFormInputs) => console.log(data);

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
        <Button>Register</Button>
        <S.Redirect>
          Already have Account ?
          <Link to="/login">
            <S.LinkText>Sign In</S.LinkText>
          </Link>
        </S.Redirect>
      </S.Form>
    </LoginRegister>
  );
};

export default Register;
