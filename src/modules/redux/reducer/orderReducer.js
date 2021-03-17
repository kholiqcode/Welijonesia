const inititalOrder = {
  order: [],
  orders: [],
};

export const orderReducer = (state = inititalOrder, action) => {
  switch (action.type) {
    case 'SET_ORDER':
      return {
        ...state,
        order: action.value,
      };
    case 'SET_ORDERS':
      return {
        ...state,
        orders: [...state.orders, ...action.value],
      };
    case 'RESET_ORDERS':
      return {
        ...state,
        orders: [],
      };

    default:
      return {
        ...state,
      };
  }
};
