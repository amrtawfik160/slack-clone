import * as actionTypes from "./channel.types";

const INITIAL_STATE = {
  currentChannel: null,
};

export const ChannelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: action.payload,
      };
    default:
      return state;
  }
};
