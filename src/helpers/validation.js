import * as Yup from 'yup';

const emailSchema = Yup.string()
.trim()
.email('enter correct email, please')
.required('required');

const passwordSchema = Yup.string().min(6, 'must be more 6').max(16).required('required');

const loginSchema = Yup.string().trim().min(3, 'must be more 3').max(16).required('required');

export const signInSchema = Yup.object({
  email: emailSchema,
  password: passwordSchema,
});

export const signUpSchema = Yup.object({
  login: loginSchema,
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: Yup.string().oneOf([Yup.ref('password')]).required('required'),
  year: Yup.number().min(1900).max(new Date().getFullYear(), 'year cannot be in the future'),
});

export const taskSchema = Yup.object({
  text: Yup.string().trim().min(3).max(255).required(),
})