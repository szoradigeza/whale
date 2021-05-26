import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import { userData } from "./userData.reducer";
import navigation from "./navigation.reducer";

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  navigation,
  userData,
});

export default rootReducer;
