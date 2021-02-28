const inititalStateGlobal = {
  isLoading: false,
  isError: false,
  isLogged: false,
  currentPage: 1,
  lastPage: 2,
};

export const globalReducer = (state = inititalStateGlobal, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        isError: action.value.isError,
        message: action.value.message,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.value,
      };
    case 'SET_LOGGED':
      return {
        ...state,
        isLogged: action.value,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.value,
      };
    case 'SET_LAST_PAGE':
      return {
        ...state,
        lastPage: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};
