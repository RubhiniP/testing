import './App.css';
import PostUsers from './components/post/PostUsers';
// import Muimode from './components/mui/Muimode';
// import Application from './components/application/Application';
// import Counter2 from './components/counter/Counter2';
// import Greet from './components/greet/Greet';
import Appprovider from './components/providers/Appprovider';
import Users from './components/users/Users';

function App() {
  return (
    <Appprovider>
      <div className="App">
        <PostUsers />

        {/* <Muimode /> */}

        {/* <Greet />

        <Counter2 /> */}
        
        {/* <Users /> */}

        {/* <Application /> */}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </Appprovider>
  );
}

export default App;
