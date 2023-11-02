import { SET_DATA_TO_USE } from '../actionTypes';

export const initialState = {
  data: [
    {
      fiscalSummary: {
        yearResults: [],
      },
    },
    {
      citizenshipSummary: [],
    },
  ],
};

const persistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_TO_USE:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default persistReducer;
