import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskIsDone } from '../../store/todoSlice';

const TasksList = () => {
  const { tasks } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const showTask = (task) => (
    <li key={task.id}>
      <strong
        onClick={() => {
          dispatch(toggleTaskIsDone({ id: task.id }));
        }}
        style={{ textDecoration: task.isDone && 'line-through' }}
      >
        {task.content}
      </strong>
    </li>
  );
  return (
    <section>
      <h3>Tasks list</h3>
      <ol>{tasks.map(showTask)}</ol>
    </section>
  );
};

export default TasksList;
