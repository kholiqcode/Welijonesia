const inititalSeller = {
  seller: [],
  sellers: [],
};

export const sellerReducer = (state = inititalSeller, action) => {
  switch (action.type) {
    case 'SET_SELLER':
      return {
        ...state,
        seller: action.value,
      };
    case 'SET_SELLERS':
      return {
        ...state,
        sellers: [...state.sellers, ...action.value],
      };

    default:
      return {
        ...state,
      };
  }
};
