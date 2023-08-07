import './App.css';
import Application from './components/application/Application';
import Users from './components/users/Users';

function App() {
  return (
    <div className="App">
        
        <Users />

        <Application />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
