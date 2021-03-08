const inititalAddress = {
  addresses: [],
  address: [],
};

export const addressReducer = (state = inititalAddress, action) => {
  switch (action.type) {
    case 'SET_ADDRESSES':
      return {
        ...state,
        addresses: action.value,
      };
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};
