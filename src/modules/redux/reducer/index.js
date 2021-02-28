import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { globalReducer } from './globalReducer';
import { sellerReducer } from './sellerReducer';
import { reviewReducer } from './reviewReducer';
import { productReducer } from './productReducer';

const reducer = combineReducers({
  globalReducer,
  authReducer,
  sellerReducer,
  reviewReducer,
  productReducer,
});

export default reducer;
