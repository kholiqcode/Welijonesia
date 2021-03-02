import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { globalReducer } from './globalReducer';
import { sellerReducer } from './sellerReducer';
import { reviewReducer } from './reviewReducer';
import { productReducer } from './productReducer';
import { cartReducer } from './cartReducer';

const reducer = combineReducers({
  globalReducer,
  authReducer,
  sellerReducer,
  reviewReducer,
  productReducer,
  cartReducer,
});

export default reducer;
