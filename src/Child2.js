import React, {useContext} from 'react';
import ValueContext from './ValueContext';
import Reducer from './Reducer';
import { useReducer } from 'react'

function Child2() {
    let [state, dispatch]= useReducer(Reducer,52);
  return (
    <div>
        hello Child2
        <br/>
        {state}
        <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
     
    </div>
  );
}

export default Child2;
