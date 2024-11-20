import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './SignInForm.module.scss';

const signInSchema = Yup.object({
  email: Yup.string().trim().email('enter correct email, please').required('required'), 
  password: Yup.string().min(6, 'must be more 6').max(16).required('required')
})

const SignInForm = () => {
  const onSubmit = (values, formikBag) => {
    console.log(values);
    // console.log(formikBag);  
    formikBag.resetForm();  
  };
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit} validationSchema={signInSchema}>
      {(formikProps) => {
        console.log(formikProps.isValid);
        console.log(formikProps.isValidating);
        
        return (
          <Form className={styles.form}>
            <label>
              <span>email: </span>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component='span' className={styles.error}/>
            </label>
            <label>
              <span>password: </span>
              <Field type="password" name="password" />
              <ErrorMessage name="password"  component='span' className={styles.error}/>
            </label>
            <input type="submit" value="sign in" />
            {/* disabled={true} */}
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
