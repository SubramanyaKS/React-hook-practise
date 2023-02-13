import React,{useRef, useState, useEffect} from 'react'

const UseRefHook = () => {
  const[name,setName]= useState('');
  const prevName= useRef('');

  useEffect(()=>{
      prevName.current=name;
  },[name])
  return (
    <div>
        <h1>Example for useRef</h1>
      <input value={name} onChange={(e)=>{setName(e.target.value)}} />
      <p>My Name is {name} and it is used to be {prevName.current}</p>
    </div>
  )
}

export default UseRefHook;
