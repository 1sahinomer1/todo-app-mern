import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { formValidations } from 'utils';

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
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('fullname')} />
      <p>{errors.fullname?.message}</p>

      <input {...register('email')} />
      <p>{errors.email?.message}</p>
      <input {...register('password')} />
      <p>{errors.password?.message}</p>

      <input {...register('passwordConfirmation')} />
      <p>{errors.passwordConfirmation?.message}</p>

      <input type="submit" />
    </form>
  );
};

export default Register;
