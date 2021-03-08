const inititaDistrict = {
  districts: [],
  district: [],
};

export const districtReducer = (state = inititaDistrict, action) => {
  switch (action.type) {
    case 'SET_DISTRICTS':
      return {
        ...state,
        districts: action.value,
      };
    case 'SET_DISTRICT':
      return {
        ...state,
        district: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};
