import React, {useState, useEffect, useReducer} from 'react';
import { apiReducer, INITIAL_STATE, API_TYPES } from '../reducers/apiReducer';
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function PostsList() {
  const [ postsData, postsDataDispatch ] = useReducer(apiReducer, INITIAL_STATE);


  useEffect(() => {
    postsDataDispatch({
      type: API_TYPES.DATA_LOADING,
    });

    fetch(API_URL)
      .then(response => response.json())
      .then((response) =>
        setTimeout(
          () => {
            postsDataDispatch({
              type: API_TYPES.DATA_SUCCESS,
              data: response,
            });
          },
          3000)
      )
      .catch((e) => postsDataDispatch({
        type: API_TYPES.DATA_ERROR,
      }));
  }, []);

  const renderPostsList = () => postsData.data.map(postItem => <div key={postItem.id}>{postItem.title}</div>);

  const { dataLoading, dataError} = postsData;

  return (
    <div>
      {dataLoading ? <div>Ładowanie...</div> : null}
      {dataError ? <div>Błąd ładowania danych</div> : null}
      {renderPostsList()}
    </div>
  )
}

export default PostsList;