import React, {useContext} from 'react';
import ValueContext from './ValueContext';

function Child() {
    let value = useContext(ValueContext);
  return (
    <div>
        hello Child
        <br/>
      number  {value}  
      <button onClick={()=>{value[1](++value[0])}}>Update value</button>    
    </div>
  );
}

export default Child;
