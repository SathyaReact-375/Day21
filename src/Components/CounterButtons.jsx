import React from 'react';
import { useDispatch } from 'react-redux';

function CounterButtons() {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default CounterButtons;