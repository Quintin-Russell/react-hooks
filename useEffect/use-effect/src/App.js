import React, {
  useState,
  useEffect
} from 'react'
import './App.css';

function App() {
const [data, setData] = useState([])

useEffect(() => {
  fetch('http://api.github.com/users')
  .then(res=>res.json())
  .then(setData)
}, [])

 if (data) {
   return (
     <>
       <ul>
         {
           data.map(item => <li key={item.id}>{item.login}</li>)
         }
       </ul>
       <button onClick={() => setData(data.slice(1))}>Change Data</button>
     </>
   )
 } else {
   return (
     <h1>No data to display!</h1>
   )
 }
}

export default App;
