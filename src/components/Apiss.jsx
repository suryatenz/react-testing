import React, { useEffect, useState } from 'react'

export const Apiss = () => {
  const [data,setData] = useState([])

  const fe = ()=>{
    fetch('https://randomuser.me/api/?results=1')
    .then(responce => responce.json())
    .then(data=>setData(data))
  }
  useEffect(()=>{
    fe();
    console.log(data)
  },[])
    return data.length > 0 ?(
      <div className="">
      <h1>Data returned</h1>
      <h1>First name: {user.result[0].name.first}</h1>
      </div>
  ):(
    <h1>Data pending</h1>
  )
}
