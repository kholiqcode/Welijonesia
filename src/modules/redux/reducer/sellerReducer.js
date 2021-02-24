const inititalSeller = {
  seller: [],
};

export const sellerReducer = (state = inititalSeller, action) => {
  switch (action.type) {
    case 'SET_SELLER':
      return {
        ...state,
        sellers: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};
