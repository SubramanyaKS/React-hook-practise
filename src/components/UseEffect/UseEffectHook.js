import React,{useEffect} from 'react'

const UseEffectHook = () => {
    useEffect(()=>{
      console.log("Executed");
    },[])
  return (
    <div>UseEffectHook</div>
  )
}

export default UseEffectHook