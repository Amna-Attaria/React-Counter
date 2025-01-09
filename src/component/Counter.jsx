import React, { useState, useEffect } from 'react';
import './Counter.CSS';

const Counter = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   // Effect triggered when count is reset to 0
  //   if (count === 0) {
  //     alert('Reset the Value');
  //   }
  // }, [count]); // Dependency array with count

  return (
    <div className="main">
      <h1 className="heading">The count is {count}</h1>
      <div className="BTN">
        <button onClick={() => setCount(count + 1)} className="btn1">
          Increment
        </button>
        <button onClick={() => setCount(0)} className="btn2">
          Reset
        </button>
        <button onClick={() => setCount(count - 1)} className="btn3">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
