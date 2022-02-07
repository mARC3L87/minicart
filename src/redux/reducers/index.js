import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import openReducer from './openReducer';
import upsellReducer from './upsellReducer';

export default combineReducers({
  products: cartReducer,
  open: openReducer,
  upsells: upsellReducer,
});
