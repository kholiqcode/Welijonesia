import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { globalReducer } from './globalReducer';

const reducer = combineReducers({
  globalReducer,
  authReducer,
});

export default reducer;
