import React, {useReducer} from 'react';
import './App.css';

function call(state, action) {
  return (action.type === "yell")
    ? {message: "IIIII WILLLL ALLLWAAYYYS LOOOVVVEE YOOOUU"}
    : (action.type === "whisper")
      ? {message: "shhhh i'm trying to sleep"}
      : {message: "New York sucks balls"}
}

function App() {
  const [verbalVol, setVerbalVol] = useReducer(
    call,
    {message: "Hi, Click the buttons!"}
  )
  return (
    <>
        <p>{verbalVol.message}</p>
    <button
    onClick={() => setVerbalVol({type: "yell"})}>
      Yell
      </button>
          <button
        onClick={() => setVerbalVol({type: "talk"})}>
      Talk
      </button>
          <button
        onClick={() => setVerbalVol({type: "whisper"})}>
      whisper
      </button>
    </>

  );
}

export default App;
