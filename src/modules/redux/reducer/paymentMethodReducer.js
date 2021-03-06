const inititalPaymentMethod = {
  paymentMethods: [],
  paymentMethod: [],
};

export const paymentMethodReducer = (state = inititalPaymentMethod, action) => {
  switch (action.type) {
    case 'SET_PAYMENT_METHODS':
      return {
        ...state,
        paymentMethods: action.value,
      };
    case 'SET_PAYMENT_METHOD':
      return {
        ...state,
        paymentMethod: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};
