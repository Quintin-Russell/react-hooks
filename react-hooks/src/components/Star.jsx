import React from "react";
import {FaStar} from 'react-icons/fa';

export default function Star( {selected = false, setSelectedStars}) {
  return (
    <FaStar
    color={(selected) ? "teal" : "gray"}
    onClick={setSelectedStars}/>
  )
}
