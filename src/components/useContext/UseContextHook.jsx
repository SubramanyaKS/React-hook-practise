import React from 'react';
import { ThemeState } from './ThemeContext';

export const UseContextHook = () => {
    const {dark,setDark} = ThemeState();
    console.log(dark);
  return (
    <div>
        <h1>Use Context Example</h1>
        <p>Dark: {dark?<p>Dark</p>:<p>Light</p>}</p>
        <button onClick ={()=>setDark((prev)=>!prev)}>Toggle</button>
    </div>

  )
}
