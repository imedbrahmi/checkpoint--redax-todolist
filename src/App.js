//import react from 'react'
import AddTask from './Components/AddTask/AddTask';
import ListTask from './Components/ListTask/ListTask';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>  My To Do List </h1>
    <AddTask/>
    <ListTask/>
    </div>
  );
}

export default App;