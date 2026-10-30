import React, { useReducer } from 'react'
export const New = () => {
    const reducer = (state,action) => {
        if (action.type === "add_money") return {money:state.money+10};
        if (action.type === "deduct_money") return {money:state.money-10};
        return state;
    }
  const initialState = {money:10}
  const [state,dispach] = useReducer(reducer,initialState);
  return (
    <>
    <div className="App">
        <h1>{state.money}</h1>
        <button onClick={() => dispach({type:"add_money"})}>Add Money</button>
        <button onClick={()=>dispach({type:"deduct_money"})}>Detuct Money</button>
    </div>
    </>
  )
}
