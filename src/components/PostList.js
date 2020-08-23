import React, { useState, useEffect } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function PostsList() {
  const [ postsList, setPostsList ] = useState([]);
  const [ postsListLoading, setPostsListLoading ] = useState(false);
  const [ postsListError, setPostsListError ] = useState(false);

  useEffect(() => {
    setPostsListLoading(true);
    fetch(API_URL)
      .then(response => response.json())
      .then((response) =>
        setTimeout(
          () => {
            setPostsListLoading(false);
            setPostsList(response)},
          3000)
      )
      .catch((e) => setPostsListError(true));
  }, []);

  const renderPostsList = () => postsList.map(postItem => <div key={postItem.id}>{postItem.title}</div>);

  return (
    <div>
      {postsListLoading ? <div>Ładowanie...</div> : null}
      {postsListError ? <div>Błąd ładowania danych</div> : null}
      {renderPostsList()}
    </div>
  )
}

export default PostsList;