import { SET_OPEN } from './types';

export const openTrue = () => (dispatch) => {
  dispatch({
    type: SET_OPEN,
  });
};
