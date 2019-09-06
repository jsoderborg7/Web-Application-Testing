import React from 'react';
import '../App.css';

const Display = props =>{
  return(
    <div className="display">
      <h2>Balls: {props.balls}</h2>
      <h2>Strikes: {props.strikes}</h2>
    </div>
  )
}

export default Display;