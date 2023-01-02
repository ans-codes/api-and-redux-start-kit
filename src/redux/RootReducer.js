import { combineReducers } from "redux";

import profile from "./profile/reducer";

const RootReducer = combineReducers({
  profile: profile,
});

export default RootReducer;
