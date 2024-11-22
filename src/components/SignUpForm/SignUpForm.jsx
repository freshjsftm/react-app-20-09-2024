import { useFormik, Form, Field, ErrorMessage, FormikProvider } from 'formik';
import { signUpSchema } from '../../helpers/validation';

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      login: '',
      email: '',
      password: '',
      confirmPassword: '',
      year: '',
    },
    validationSchema: signUpSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  //console.log(formik);
  
  return (
    <FormikProvider value={formik}>
      <Form>
        <label>
          <Field type="text" name="login" placeholder='login'/>
          <ErrorMessage name="login" />
        </label>
        <label>
          <Field type="email" name="email" placeholder='email'/>
          <ErrorMessage name="email" />
        </label>
        <label>
          <Field type="password" name="password" placeholder='password'/>
          <ErrorMessage name="password" />
        </label>
        <label>
          <Field type="password" name="confirmPassword" placeholder='confirmPassword'/>
          <ErrorMessage name="confirmPassword" />
        </label>
        <label>
          <Field type="" name="year" min="1900" placeholder='year of bith'/>
          <ErrorMessage name="year" />
        </label>
        <button type="submit">registar me</button>
      </Form>
    </FormikProvider>
  );
};

export default SignUpForm;
