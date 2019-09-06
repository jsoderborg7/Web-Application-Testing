import React from 'react';

const Dashboard = props =>{
  return(
    <div>
      <button className="ball" onClick={props.addBall}>Ball</button>
      <button className="strike" onClick={props.addStrike}>Strike</button>
      <button className="foul" onClick={props.addFoul}>Foul</button>
      <button className="hit" onClick={props.addHit}>Hit</button>
    </div>
  )
}

export default Dashboard;