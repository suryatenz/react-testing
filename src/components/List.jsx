import React, { useState } from 'react'

export const List = () => {

  const arr = ['This is cricket', 'This is Shit', 'This is my life']
  const [myarr,setArr] = useState(arr)

  const deletebutton = (a) =>{
    const newarr=myarr.slice(0,a).concat(myarr.slice(a+1))
    setArr(newarr)
  }

  return (
    <>
      <ul>{
        myarr.map((item, index) => {
          return (
          <>
          <li>{item}</li> 
          <input type="checkbox" onChange={()=>deletebutton(index)}/>
          </>
          )
        })
      }
      </ul>
    </>
  )
}
