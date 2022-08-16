import { combineReducers } from "redux";
import { profileReducer } from "./profile";
import { globalReducer } from "./global";

const rootReducer = combineReducers({
  profileReducer,
  globalReducer,
});

export default rootReducer;
