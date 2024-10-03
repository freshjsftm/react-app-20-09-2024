import { useState } from 'react';
import Task from '../Task/Task';
import tasks from './data';

const dataTaskInitial = {
  id: 1,
  text: 'Learning prop-types',
  days: 4,
  isDone: false,
};

function TasksList() {
  const [dataTask, setDataTask] = useState(dataTaskInitial);
  const setDoneTask = () => {
    setDataTask({
      ...dataTask,
      isDone: true,
    });
  };
  return (
    <>
      <Task dataTask={dataTask} setDoneTask={setDoneTask} />
      {
        tasks.map((task)=><Task key={task.id} dataTask={task} setDoneTask={setDoneTask} />)
      }
    </>
  );
}

export default TasksList;
