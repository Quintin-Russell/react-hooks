import React, {
  useState,
  useEffect
} from 'react'
import './App.css';

function App() {
const [name, setName] = useState("Quinn")

useEffect(() => {
  document.title = `Woo Hoo! Go ${name}`
}, [name])

  return (
    <section>
      <p>Good Job, {name}</p>
      <button onClick={() => setName("Ezgi")}>Click Here to Change the Name</button>
    </section>
  );
}

export default App;
