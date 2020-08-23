import React from 'react';
import Counter from './Counter';
import WindowResize from './WindowResize';
import Users from './Users';

function App() {
  return (
    <div>
      <Counter />
      <WindowResize />
      <Users />
      Statyczna treść
    </div>
  );
}

export default App;
