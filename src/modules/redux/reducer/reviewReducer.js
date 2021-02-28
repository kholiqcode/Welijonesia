const inititalReview = {
  reviews: [],
};

export const reviewReducer = (state = inititalReview, action) => {
  switch (action.type) {
    case 'SET_REVIEWS':
      return {
        ...state,
        reviews: [...state.reviews, ...action.value],
      };

    default:
      return {
        ...state,
      };
  }
};
