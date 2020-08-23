import React, { useState } from 'react';

function Counter() {
  const [counterValue, setCounterValue] = useState(10);
  const handleIncrementCounter = () => setCounterValue(counterValue + 1);
  const handleSafeIncrementCounter = () => setCounterValue(prevCounter => prevCounter + 1);

  return (
    <div>
      Counter: {counterValue}
      <button onClick={handleSafeIncrementCounter}>+</button>
    </div>
  )
}

export default Counter;