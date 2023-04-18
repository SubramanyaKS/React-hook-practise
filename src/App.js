//import logo from './logo.svg';
import './App.css';
import UseCallBackHook from './components/UseCallback/UseCallBackHook';
import UseLayoutHook from './components/UseLayout/UseLayoutHook';
import UseReduceHook from './components/UseReduce/UseReduceHook';
import UseRefHook from './components/UseRef/UseRefHook';
import UseStateHook from './components/UseState/UseStateHook';
import ThemeContext from './components/useContext/ThemeContext';
import { UseContextHook } from './components/useContext/UseContextHook';

function App() {
  return (
    <ThemeContext>
    <div className="App">
      {/* <UseStateHook/>
      <UseReduceHook/> */}
      {/* <UseLayoutHook/> */}
      <UseCallBackHook/>
      {/* <UseContextHook/> */}
      {/* <UseRefHook/> */}
    </div>
    </ThemeContext>
  );
}

export default App;
