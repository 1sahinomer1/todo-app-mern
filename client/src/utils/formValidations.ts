import * as yup from 'yup';

export const fullNameValidation = yup
  .string()
  .required('Full name is a required field');

export const emailValidation = yup
  .string()
  .email()
  .required('Email is a required field');

export const passwordValidation = yup
  .string()
  .min(8, 'Password must be at least 8 characters')
  .required('Password is a required field');

export const passwordConfirmation = yup
  .string()
  .oneOf([yup.ref('password'), null], 'Passwords must match')
  .required('Confirm Password is required');
