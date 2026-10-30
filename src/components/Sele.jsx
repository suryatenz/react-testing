import React, { useState } from 'react'
export const Sele = () => {
  const contries = [
    {
      name: 'India', code: 'IN', cities: [
        'Delhi',
        'mumbai'
      ],
    },
    {
      name: 'Pak', code: 'pk', cities: [
        'Lahore',
        'Karachi',
      ],
    },
    {
      name: 'Bangladesh', code: 'bd', cities: [
        'Dhaka',
        'Chittagong'
      ],
    },
  ]
  const [country, setCountry] = useState(0)
  return (
    <>
      <select
        value={country}
        onChange={(e) => {setCountry(e.target.value) ;console.log(country)}}
      >
        {
          contries.map((item,index)=>{
            return <option value={index}>{item.name}</option>
          })
        }
      </select>
      <select>
        {contries[country].cities.map((item,index)=>{
          return <option value={index}>{item}</option>
        })}
      </select>
    </>
  )
}
