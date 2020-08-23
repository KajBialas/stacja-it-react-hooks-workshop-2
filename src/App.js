import React from 'react';
import Counter from './components/Counter';
import WindowResize from './components/WindowResize';
import Users from './components/Users';
import PostsList from './components/PostList';

function App() {
  return (
    <div>
      <Counter />
      <WindowResize />
      <Users />
      <PostsList/>
      Statyczna treść
    </div>
  );
}

export default App;
