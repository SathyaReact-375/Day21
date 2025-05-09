import React from 'react';
import { useSelector } from 'react-redux';

function CounterDisplay() {
  const counterValue = useSelector((state) => state.counter.count);

  return (
    <div style={{textAlign:"center"}}>
    
      <p>The current counter value is: {counterValue}</p>
    </div>
  );
}

export default CounterDisplay;