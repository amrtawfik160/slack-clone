import * as actionTypes from "./user.actions.types";

export const setUser = (currentUser) => {
  return {
    type: actionTypes.SET_USER,
    payload: {
      currentUser,
    },
  };
};

export const clearUser = () => {
  return {
    type: actionTypes.CLEAR_USER
  };
};

