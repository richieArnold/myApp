import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Clicked {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default HookCounter;
