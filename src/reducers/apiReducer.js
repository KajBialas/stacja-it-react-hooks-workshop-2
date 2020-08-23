export const INITIAL_STATE = {
  data: [],
  dataLoading: false,
  dataError: false,
};

export function apiReducer(state, action) {
  switch (action.type) {
    case 'DATA_SUCCESS':
      return {
        ...state,
        dataLoading: false,
        data: [...action.data],
      };
    case 'DATA_LOADING':
      return {
        ...state,
        dataLoading: true
      };
    case 'DATA_ERROR':
      return {
        ...state,
        dataLoading: false,
        dataError: true
      };
  }
}