import React from 'react';
import './App.css';
import  { useState } from 'react';
import Parent from './Parent';
import ValueContext from './ValueContext';
function App() {
  //let [number ,setnum]= useState(24);
  let value = useState(24);
  return (
    <ValueContext.Provider value= {value}>
      <div>
        hello world
        <Parent></Parent>
      </div>
    </ValueContext.Provider>
    
  );
}

export default App;
