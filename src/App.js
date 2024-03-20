import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <div className='mt-5 w-7/12 mx-auto flex items-center flex-col'>
      <h1 className='text-center font-bold text-orange-400 text-xl mb-4'>Todo App Redux</h1>
      <TodoContainer />
    </div>
  );
}

export default App;
