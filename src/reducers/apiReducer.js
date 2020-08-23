export const INITIAL_STATE = {
  data: [],
  dataLoading: false,
  dataError: false,
};

export const API_TYPES = {
  DATA_SUCCESS: 'DATA_SUCCESS',
  DATA_LOADING: 'DATA_LOADING',
  DATA_ERROR: 'DATA_ERROR',
};

export function apiReducer(state, action) {
  switch (action.type) {
    case API_TYPES.DATA_SUCCESS:
      return {
        ...state,
        dataLoading: false,
        data: [...action.data],
      };
    case API_TYPES.DATA_LOADING:
      return {
        ...state,
        dataLoading: true
      };
    case API_TYPES.DATA_ERROR:
      return {
        ...state,
        dataLoading: false,
        dataError: true
      };
  }
}