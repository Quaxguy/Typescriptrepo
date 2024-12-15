import React, { useState } from 'react';
import './Counter.css';

const Counter: React.FC = () => {
  // Step 1: Declare state
  const [count, setCount] = useState(0);

  // Step 2: Event Handlers
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // Step 3: Determine dynamic classes
  const counterClass =
    count > 0 ? 'counter positive' : count < 0 ? 'counter negative' : 'counter neutral';

  return (
    <div className="counter-container">
      <h1 className={counterClass}>Counter: {count}</h1>
      <div className="button-group">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
