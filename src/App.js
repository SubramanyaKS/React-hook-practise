//import logo from './logo.svg';
import './App.css';
import UseReduceHook from './components/UseReduce/UseReduceHook';
import UseRefHook from './components/UseRef/UseRefHook';
import UseStateHook from './components/UseState/UseStateHook';

function App() {
  return (
    <div className="App">
      {/* <UseStateHook/>
      <UseReduceHook/> */}
      <UseRefHook/>
    </div>
  );
}

export default App;
