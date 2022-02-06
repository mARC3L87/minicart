import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import openReducer from './openReducer';

export default combineReducers({
  products: cartReducer,
  open: openReducer,
});
