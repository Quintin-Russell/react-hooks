import React, {useReducer} from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useReducer(
    (number) => number+1
    ,
    0
  )
  return (
    <>
    <h1>{number}</h1>
    <button onClick={setNumber}>CLick Me</button>
    </>

  );
}

export default App;
