import { INCREMENT, DECREMENT, REMOVE_PRODUCT, COUNT_TOTAL } from './types';

export const increment = (id) => (dispatch) => {
  dispatch({
    type: INCREMENT,
    payload: id,
  });
};

export const decrement = (id) => (dispatch) => {
  dispatch({
    type: DECREMENT,
    payload: id,
  });
};

export const removeProduct = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_PRODUCT,
    payload: id,
  });
};

export const countTotal = () => (dispatch) => {
  dispatch({
    type: COUNT_TOTAL,
  });
};
