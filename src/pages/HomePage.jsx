import Counter from '../components/Counter/Counter';
import TaskForm from '../components/Todo/TaskForm';

const HomePage = () => {
  return (
    <section>
      <h1>Home page</h1>
      <TaskForm />
      <hr />
      <Counter />
    </section>
  );
};

export default HomePage;
