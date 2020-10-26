import * as actionTypes from "./user.actions.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: true,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        currentUser: action.payload.currentUser,
        isLoading: false,
      };
    case actionTypes.CLEAR_USER:
      return {
        ...INITIAL_STATE,
        isLoading: false,
      };
    default:
      return state;
  }
};
