import React from 'react';
import { useFetchData } from '../customHooks/useFetchData';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function Users() {
  const usersData = useFetchData(API_URL);

  const renderUsersList = () => usersData.data.map(userItem => <div key={userItem.id}>{userItem.name}</div>);

  const { dataLoading, dataError} = usersData;

  return (
    <div>
      {dataLoading ? <div>Ładowanie...</div> : null}
      {dataError ? <div>Błąd ładowania danych</div> : null}
      {renderUsersList()}
    </div>
  )
}

export default Users;