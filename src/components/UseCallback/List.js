import React, { useEffect, useState } from 'react'

const List = ({getItem}) => {
    const [item,setItem] = useState([]);
    useEffect(()=>{
        setItem(getItem())
        console.log("updating items");
    },[getItem])
  return item.map(it=><div key={it}>{it}</div>)
}

export default List