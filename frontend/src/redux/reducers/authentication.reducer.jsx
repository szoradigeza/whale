import { authConstants } from "../constants";

let user = localStorage.getItem("user_token");
// const initiaslState = {
//   loggingIn: false,
//   loggedId: false,
//   user: null,
// }
const initialState = user
  ? {
      loggedIn: true,
    }
  : {};

export function authentication(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
      };
    case authConstants.LOGIN_FAILURE:
      return {
        logging: false,
        user: null,
      };
    case authConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
