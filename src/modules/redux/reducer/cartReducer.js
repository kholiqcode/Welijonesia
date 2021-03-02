const inititalCart = {
  cart: [],
};

export const cartReducer = (state = inititalCart, action) => {
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        cart: action.value,
      };
    case 'RESET_CART':
      return {
        cart: [],
      };

    default:
      return {
        ...state,
      };
  }
};
