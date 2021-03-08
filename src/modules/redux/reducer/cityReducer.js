const inititaProvince = {
  cities: [],
  city: [],
};

export const cityReducer = (state = inititaProvince, action) => {
  switch (action.type) {
    case 'SET_CITIES':
      return {
        ...state,
        cities: action.value,
      };
    case 'SET_CITY':
      return {
        ...state,
        city: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};
