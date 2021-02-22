const initialStateLogin = {
  email: '',
  password: '',
};

const loginReducer = (state = initialStateLogin, action) => {
  switch (action.type) {
    case 'SET_LOGIN':
      return {
        ...state,
        email: action.value.name,
        password: action.value.password,
      };

    default:
      return {
        ...state,
      };
  }
};

const initialStateAuth = {
  isLogin: false,
  isRegister: false,
  isActivation: false,
};

const authReducer = (state = initialStateAuth, action) => {
  switch (action.type) {
    case 'SET_LOGIN_DISPLAY':
      return {
        ...state,
        isLogin: true,
        isRegister: false,
        isActivation: false,
      };
    case 'SET_REGISTER_DISPLAY':
      return {
        ...state,
        isRegister: true,
        isLogin: false,
        isActivation: false,
      };
    case 'SET_ACTIVATION_DISPLAY':
      return {
        ...state,
        isActivation: true,
        isRegister: false,
        isLogin: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export { loginReducer, authReducer };
