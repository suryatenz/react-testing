import React, { useEffect, useRef, useState } from 'react'
export const News = () => {
  const [myArray, setMyArray] = useState([]);
  const addItem = () => {
    setMyArray([...myArray, 'New Item']);
  };
  const removeItem = (index) => {
    const newArray = myArray.slice(0, index).concat(myArray.slice(index + 1));
    setMyArray(newArray);
  };
  return (
    <>
      <div>
      <h1>useState Array Example</h1>
      <ul>
        {myArray.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
    </>
  )
}
// function usePrevious(val) {
//     const ref = useRef();
//     useEffect(() => {
//         ref.current=val;
//     },[val]);
//     return ref.current;
//    }  