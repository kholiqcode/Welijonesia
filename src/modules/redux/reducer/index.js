import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { globalReducer } from './globalReducer';
import { sellerReducer } from './sellerReducer';
import { reviewReducer } from './reviewReducer';
import { productReducer } from './productReducer';
import { cartReducer } from './cartReducer';
import { paymentMethodReducer } from './paymentMethodReducer';
import { addressReducer } from './addressReducer';
import { provinceReducer } from './provinceReducer';
import { cityReducer } from './cityReducer';
import { districtReducer } from './districtReducer';
import { villageReducer } from './villageReducer';

const reducer = combineReducers({
  globalReducer,
  authReducer,
  sellerReducer,
  reviewReducer,
  productReducer,
  cartReducer,
  paymentMethodReducer,
  addressReducer,
  provinceReducer,
  cityReducer,
  districtReducer,
  villageReducer,
});

export default reducer;
