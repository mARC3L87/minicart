import { SET_OPEN } from '../actions/types';

const initialState = {
  openSt: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_OPEN:
      return {
        ...state,
        openSt: !state.openSt,
      };
    default:
      return state;
  }
};
