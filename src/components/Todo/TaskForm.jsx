import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../../store/todoSlice';
import { taskSchema } from '../../helpers/validation';

const TaskForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (values, formikBag) => {
    dispatch(addNewTask({ text: values.text }));
    formikBag.resetForm();
  };
  return (
    <Formik initialValues={{ text: '' }} onSubmit={onSubmit} validationSchema={taskSchema}>
      {() => {
        return (
          <Form>
            <p>Enter your task here:</p>
            <Field name="text" />
            <ErrorMessage name="text" />
            <button type='submit'>add task</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default TaskForm;
