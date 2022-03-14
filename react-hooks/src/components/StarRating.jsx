import React from "react";
import Star from "./Star";
import '../App.css'

const createdArr = (len) => [...Array(len)]

export default function StarRating({totalStars = 5, selectedStars, setSelectedStars}) {
  // const [selectedStars, setSelectedStars] = useState(0)

  return (
<>
    <div className='row'>
{
  createdArr(totalStars).map((n,i) => (
    <Star key={i}
    selected={selectedStars > i}
    setSelectedStars={() => setSelectedStars(i+1)}/>
  ))
}
</div >
      <div className='col text-center '>
        <p className='text'>How Are We Doing? Leave A Review!</p>
        <p className='rating-text'>{selectedStars} of {totalStars}</p>
    </div >
  </>
)
}
