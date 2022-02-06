import { SET_OPEN } from '../actions/types';

const initialState = {
  openSt: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.payload) {
    case SET_OPEN:
      return {
        ...state,
        openSt: true,
      };
    default:
      return state;
  }
};
