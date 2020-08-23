import React from 'react';
import { useFetchData } from '../customHooks/useFetchData';
import Comments from './Comments';
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function PostsList() {
  const postsData = useFetchData(API_URL);

  const renderPostsList = () => postsData.data.map(postItem => <div key={postItem.id}>{postItem.title}</div>);

  const { dataLoading, dataError} = postsData;

  return (
    <div>
      {dataLoading ? <div>Ładowanie...</div> : null}
      {dataError ? <div>Błąd ładowania danych</div> : null}
      {renderPostsList()}
      <Comments />
    </div>
  )
}

export default PostsList;