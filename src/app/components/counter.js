"use client"; 

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // Maximum and minimum count values from environment variables
  const MAX_COUNT = parseInt(process.env.NEXT_PUBLIC_MAX_COUNT, 10) || 10;
  const MIN_COUNT = parseInt(process.env.NEXT_PUBLIC_MIN_COUNT, 10) || 0;

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
          <button disabled={count === MAX_COUNT} onClick={handleIncrement}>+</button>
          <span style={{ margin: "0 10px" }}>Count: {count}</span>
          <button disabled={count === MIN_COUNT} onClick={handleDecrement}>
            -
          </button>
        </div>
      </center>
    </div>
  );
}
