import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function App() {
  const [delivered, setDelivered] = useState(false)
  const [checked, setChecked] = useState(false)
  return (
    <>
    <div>
      <h1>
        The package is: {(delivered) ? "Delivered" : "Not Delivered"}
      </h1>
      <button
      onClick={() => setDelivered(!delivered)}>
        Change Delivery Status
        </button>
    </div>

    <div>
      <input
      type="checkbox"
      value={checked}
      onClick={() => setChecked((checked) => !checked)}/>
      <p>
        {(checked) ? "Hey I'm checked" : "I'm not checked yet"}
      </p>
    </div>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
