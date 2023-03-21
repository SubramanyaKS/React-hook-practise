import React, { createContext, useContext, useState } from "react";

export const Theme = createContext(null);

const ThemeContext = ({children}) => {
    const [dark, setDark] = useState(false);
    
  return (
    <Theme.Provider value={{dark,setDark}}>
        {children}
    </Theme.Provider>
  )
}
export const ThemeState=()=>{
    return useContext(Theme);
}

export default ThemeContext;

