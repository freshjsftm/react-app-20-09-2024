import Task from './components/Task/Task';

function App() {
  return (
    <>
      <Task text="text for first task" days={5} isDone={false} />
      <Task text="text for 2 task" days={2}  isDone={true}/>
    </>
  );
}

export default App;
