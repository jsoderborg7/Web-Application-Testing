import React, {useState} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

// these are here for math testing
export const ballTest = currentScore =>{
  return currentScore + 1;
};

export const strikeTest = currentScore =>{
  return currentScore + 1;
}



function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const addBall = () =>{
    if(balls <= 2){
      setBalls(balls + 1);
    } else {
      setBalls(0);
      setStrikes(0);
    }
  }

  const addStrike = () =>{
    if(strikes <= 1){
      setStrikes(strikes + 1);
    } else {
      setStrikes(0);
      setBalls(0);
    }
  }

  const addFoul = () =>{
    if(strikes <= 1){
      setStrikes(strikes + 1);
    } else {
      setStrikes(strikes);
    }
  }

  const addHit = () =>{
    setStrikes(0);
    setBalls(0);
  }
  

  return(
    <div>
      <h1>Player Stats</h1>
      <Display
        strikes={strikes}
        balls={balls} 
      />
      <Dashboard
        addBall={addBall}
        addStrike={addStrike}
        addFoul={addFoul}
        addHit={addHit}
      />
    </div>
      
  )
}

export default App;
