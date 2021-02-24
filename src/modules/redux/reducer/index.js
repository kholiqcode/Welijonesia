import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { globalReducer } from './globalReducer';
import { sellerReducer } from './sellerReducer';

const reducer = combineReducers({
  globalReducer,
  authReducer,
  sellerReducer,
});

export default reducer;
