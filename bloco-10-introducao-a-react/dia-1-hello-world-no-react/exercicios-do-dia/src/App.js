import logo from './logo.svg';
import './App.css';

const tarefas = ["Estudar React", "Estudar Redux", "Estudar React Native"];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const List = () => {
  return (
    <ul>
      { tarefas.map(item => Task(item)) }
    </ul>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        { List() }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
