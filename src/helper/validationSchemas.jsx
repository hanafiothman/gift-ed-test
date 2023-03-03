/* eslint-disable no-useless-escape */
import * as Yup from 'yup';

const emailValidation = Yup.string()
  .email('Invalid email format');

const passwordValidation = Yup.string()
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/, 'Password must contain at least 8 characters, contains uppercase and lowercase letters, a number or symbol.')
  .min(8, 'Password must contain at least 8 characters');

const validationSchemas = {
  createAccount: Yup.object({
    name: Yup.string().required('Full name is required'),
    email: emailValidation.required('Email is required'),
    password: passwordValidation.required('Password is required')
  }),
  login: Yup.object({
    email: emailValidation.required('Email is required'),
    password: Yup.string().required('Password is required')
  }),
}

export default validationSchemas;