const inititaVillage = {
  villages: [],
  village: [],
};

export const villageReducer = (state = inititaVillage, action) => {
  switch (action.type) {
    case 'SET_VILLAGES':
      return {
        ...state,
        villages: action.value,
      };
    case 'SET_VILLAGE':
      return {
        ...state,
        village: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};
