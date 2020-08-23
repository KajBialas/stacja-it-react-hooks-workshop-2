import { useEffect, useReducer} from 'react';
import { apiReducer, INITIAL_STATE, API_TYPES } from '../reducers/apiReducer';

export function useFetchData(apiUrl) {
  const [ data, dataDispatch ] = useReducer(apiReducer, INITIAL_STATE);

  useEffect(() => {
    dataDispatch({
      type: API_TYPES.DATA_LOADING,
    });

    fetch(apiUrl)
      .then(response => response.json())
      .then((response) =>
        setTimeout(
          () => {
            dataDispatch({
              type: API_TYPES.DATA_SUCCESS,
              data: response,
            });
          },
          3000)
      )
      .catch((e) => dataDispatch({
        type: API_TYPES.DATA_ERROR,
      }));
  }, []);

  return data;
}