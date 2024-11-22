import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import styles from './SignInForm.module.scss';
import { signInSchema } from '../../helpers/validation';

const SignInForm = () => {
  const navigate = useNavigate();
  const onSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
    navigate('/');
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={onSubmit}
      validationSchema={signInSchema}
      validateOnMount
    >
      {(formikProps) => {
        return (
          <Form className={styles.form}>
            <label>
              <span>email: </span>
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                component="span"
                className={styles.error}
              />
            </label>
            <label>
              <span>password: </span>
              <Field type="password" name="password" />
              <ErrorMessage
                name="password"
                component="span"
                className={styles.error}
              />
            </label>
            <input
              type="submit"
              value="sign in"
              disabled={!formikProps.isValid || formikProps.isSubmitting}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
