import React,{useState,useLayoutEffect,useRef} from 'react'

const UseLayoutHook = () => {
    const [toggle,setToggle] = useState(false);
    const textRef = useRef();
    useLayoutEffect(() => {
      console.log("UseLayout");
      if(textRef.current!=null){
        const dimension = textRef.current.getBoundingClientRect();
      console.log(dimension);
      }
    }, [toggle])
  return (
    <>
        <button onClick={()=>setToggle(!toggle)}></button>
        {toggle && <h4 ref={textRef}>Hi User</h4>}
    </>
  )
}

export default UseLayoutHook;