const inititalReview = {
  products: [],
  product: [],
};

export const productReducer = (state = inititalReview, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: [...state.products, ...action.value],
      };
    case 'SET_PRODUCT':
      return {
        ...state,
        product: action.value,
      };
    case 'RESET_PRODUCT':
      return {
        products: [],
        product: [],
      };

    default:
      return {
        ...state,
      };
  }
};
