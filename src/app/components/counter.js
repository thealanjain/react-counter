"use client"; 

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // Function to handle increment
  const handleIncrement = () => {
    setCount(count + 1);
  };
  // Function to handle decrement
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <center>
        <br />
        <h1>Welcome to the Counter App</h1>
        <br />
        <div>
          <button disabled={count === 10} onClick={handleIncrement}>+</button>
          <span style={{ margin: "0 10px" }}>Count: {count}</span>
          <button disabled={count === 0} onClick={handleDecrement}>
            -
          </button>
        </div>
      </center>
    </div>
  );
}
