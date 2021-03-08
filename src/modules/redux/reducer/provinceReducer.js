const inititaProvince = {
  provinces: [],
  province: [],
};

export const provinceReducer = (state = inititaProvince, action) => {
  switch (action.type) {
    case 'SET_PROVINCES':
      return {
        ...state,
        provinces: action.value,
      };
    case 'SET_PROVINCE':
      return {
        ...state,
        province: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};
