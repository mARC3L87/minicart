import { FETCH_UPSELL } from './types';
import axios from 'axios';

export const fetchUpsells = () => async (dispatch) => {
  const res = await axios.get('https://fakestoreapi.com/products?limit=2');
  dispatch({
    type: FETCH_UPSELL,
    payload: res.data,
  });
};
