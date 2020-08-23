import React, {useState} from 'react';
import Counter from './components/Counter';
import WindowResize from './components/WindowResize';
import Users from './components/Users';
import PostsList from './components/PostList';

export const UserContext = React.createContext({});

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{
      userName: user,
      login: setUser,
    }}>
      <div>
        <Counter />
        <WindowResize />
        <Users />
        <PostsList/>
        Statyczna treść
      </div>
    </UserContext.Provider>
  );
}

export default App;
