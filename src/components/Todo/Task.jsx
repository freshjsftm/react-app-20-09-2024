import Icon from '@mdi/react';
import { mdiTrashCanOutline } from '@mdi/js';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskIsDone } from '../../store/todoSlice';

const Task = (props) => {
  const { task } = props;
  const dispatch = useDispatch();
  const changeIsDone = () => {
    dispatch(toggleTaskIsDone({ id: task.id }));
  };
  const changeDelete = () => {
    dispatch(deleteTask({ id: task.id }));
  };
  return (
    <li>
      <strong onClick={changeIsDone} style={{ textDecoration: task.isDone && 'line-through' }}>
        {task.content}
      </strong>
      <span onClick={changeDelete}>
        <Icon path={mdiTrashCanOutline} size={0.7} />
      </span>
    </li>
  );
};

export default Task;
