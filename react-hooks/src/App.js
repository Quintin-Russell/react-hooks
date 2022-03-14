import React from 'react';
import StarRating from './components/StarRating'
import './App.css';

function App() {

  return (
    <>
    <div className='centered col'>
        <StarRating
        totalStars={5}/>
    </div>
  </>

  );
}

export default App;
