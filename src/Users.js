import React, { useState, useEffect } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function Users() {
  const [ usersList, setUsersList ] = useState([]);
  const [ usersListLoading, setUsersListLoading ] = useState(false);
  const [ usersListError, setUsersListError ] = useState(false);

  useEffect(() => {
    setUsersListLoading(true);
    fetch(API_URL)
      .then(response => response.json())
      .then((response) =>
        setTimeout(
          () => {
            setUsersListLoading(false);
            setUsersList(response)},
          3000)
      )
      .catch((e) => setUsersListError(true));
  }, []);

  const renderUsersList = () => usersList.map(userItem => <div key={userItem.id}>{userItem.name}</div>);

  return (
    <div>
      {usersListLoading ? <div>Ładowanie...</div> : null}
      {usersListError ? <div>Błąd ładowania danych</div> : null}
      {renderUsersList()}
    </div>
  )
}

export default Users;