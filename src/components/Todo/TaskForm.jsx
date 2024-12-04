import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../../store/todoSlice';

const TaskForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(addNewTask({ text: values.text }));
  };
  return (
    <Formik initialValues={{ text: '' }} onSubmit={onSubmit}>
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
