import { FETCH_UPSELL } from '../actions/types';

const initialState = {
  upsells: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UPSELL:
      return {
        ...state,
        upsells: action.payload,
      };
    default:
      return state;
  }
};
