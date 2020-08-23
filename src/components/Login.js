import React, { useState, useContext } from 'react';
import { UserContext } from '../App';

function Login() {
  const [email, setEmail] = useState ('');
  const userService = useContext(UserContext);

  const handleChange = e => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    userService.login(email);
  };
  return (
    <div>
      {userService.userName ? <div>Użytkownik zalogowany jako: {userService.userName}</div> :
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={email} type="text"/>
          <button type="submit">LOGUJ</button>
        </form>
      }
    </div>
  )
}

export default Login;