import React, { useReducer, useEffect } from 'react';
import { apiReducer, INITIAL_STATE, API_TYPES } from '../reducers/apiReducer';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function Users() {
  const [ usersData, usersDataDispatch ] = useReducer(apiReducer, INITIAL_STATE);

  useEffect(() => {
    usersDataDispatch({
      type: API_TYPES.DATA_LOADING,
    });

    fetch(API_URL)
      .then(response => response.json())
      .then((response) =>
        setTimeout(
          () => {
            usersDataDispatch({
              type: API_TYPES.DATA_SUCCESS,
              data: response,
            });
          },
          3000)
      )
      .catch((e) => usersDataDispatch({
        type: API_TYPES.DATA_ERROR,
      }));
  }, []);

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