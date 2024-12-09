import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTasks, saveTasksToLocalStorage } from '../../store/todoSlice';
import Task from './Task';

const TasksList = () => {
  const { tasks } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const isOne = useRef(false);

  useEffect(() => {
    if (isOne.current === false) {
      isOne.current = true;
      dispatch(loadTasks());
    }
  }, [dispatch]);

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  const showTask = (task) => <Task key={task.id} task={task} />;
  return (
    <section>
      <h3>Tasks list</h3>
      <ol>{tasks.map(showTask)}</ol>
    </section>
  );
};

export default TasksList;
