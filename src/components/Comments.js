import React, { useContext } from 'react';
import { UserContext } from '../App';

function Comments() {
  const userService = useContext(UserContext);

  return(
    <div>
      <p>Komentarz 1</p>
      <p>Komentarz 2</p>

      {userService.userName ?
        <form>
          <input type="text"/>
        </form> :
        <div>Jestes niezalogowany</div>
      }
    </div>
  )
}

export default Comments;