import React from 'react';
import { useLocalStorage } from '../customHooks/useLocalStorage';

function Counter() {
  const [counterValue, setCounterValue] = useLocalStorage('counter', 20);
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