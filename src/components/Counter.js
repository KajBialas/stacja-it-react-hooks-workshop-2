import React, { useState } from 'react';

function Counter() {
  const [counterValue, setCounterValue] = useState(10);
  const handleIncrementCounter = () => setCounterValue(counterValue + 1);
  const handleSafeIncrementCounter = () => setCounterValue(prevCounter => prevCounter + 1);
  const handleSafeDecrementCounter = () => setCounterValue(prevCounter => prevCounter - 1);
  const handleResetCounter = () => setCounterValue(0);

  return (
    <div>
      Counter: {counterValue}
      <button onClick={handleSafeIncrementCounter}>+</button>
      <button onClick={handleSafeDecrementCounter}>-</button>
      <button onClick={handleResetCounter}>RESET</button>
    </div>
  )
}

export default Counter;