import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { ChannelReducer } from "./channel/channel.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  channel: ChannelReducer,
});
