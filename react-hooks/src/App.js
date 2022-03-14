import React, { useState } from 'react';
import StarRating from './components/StarRating'
import './App.css';

function App() {

  const [selectedStars, setSelectedStars] = useState(0)

  return (
    <>
    <div className='centered col'>
        <StarRating
        selectedStars={selectedStars}
        setSelectedStars={setSelectedStars}
        totalStars={5}/>
    </div>
  </>

  );
}

export default App;
