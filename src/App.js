//import logo from './logo.svg';
import './App.css';
import UseReduceHook from './components/UseReduce/UseReduceHook';
import UseStateHook from './components/UseState/UseStateHook';

function App() {
  return (
    <div className="App">
      <UseStateHook/>
      <UseReduceHook/>
    </div>
  );
}

export default App;
