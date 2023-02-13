import React, {useState} from 'react'

const UseStateHook = () => {
    const [count,setCount]= useState(0);

    function increment(){
        setCount(prevCount =>prevCount+1);
    }
    function decrement(){
        setCount(prevCount=>prevCount-1);
    } 
  return (
    <div>
      <h1>Counter Example for USESTATE hook</h1>
        <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default UseStateHook
