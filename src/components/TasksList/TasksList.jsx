import { useState, useEffect } from 'react';
import Task from '../Task/Task';
import tasks from './data';

function TasksList() {
  const [archiv, setArchiv] = useState([]);
  const [dataTasks, setDataTasks] = useState(tasks);
  const setDoneTask = (id) => {
    let archivTask;
    const newTasks = dataTasks.map((task) => {
      if (task.id === id) {
        archivTask = { id: task.id, text: task.text };
        return { ...task, isDone: true };
      }
      return task;
    });
    setDataTasks(newTasks);
    const newArchiv = [...archiv, archivTask];
    setArchiv(newArchiv);
  };
  useEffect(() => {
      const saveArchiv = JSON.parse(localStorage.getItem('archiv'));
      setArchiv(saveArchiv);
  }, []);
  useEffect(() => {
    localStorage.setItem('archiv', JSON.stringify(archiv));
  }, [archiv]);
  return (
    <>
      {dataTasks.map((task) => (
        <Task key={task.id} dataTask={task} setDoneTask={setDoneTask} />
      ))}
      <hr />
      <h3>Done task: </h3>
      {archiv.map((task) => (
        <p key={task.id}>{task.text}</p>
      ))}
    </>
  );
}

export default TasksList;
