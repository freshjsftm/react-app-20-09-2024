import Task from './components/Task/Task';

const dataTask = {
  id:1,
  text: 'Learning prop-types',
  days:4,
  isDone: false
}

function App() {
  return (
    <>
      <Task dataTask={dataTask}/>
    </>
  );
}

export default App;
