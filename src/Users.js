import React, { useState, useEffect } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function Users() {
  const [ usersList, setUsersList ] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then((response) => setUsersList(response));
  }, []);

  const renderUsersList = () => usersList.map(userItem => <div key={userItem.id}>{userItem.name}</div>);

  return (
    <div>
      {renderUsersList()}
    </div>
  )
}

export default Users;