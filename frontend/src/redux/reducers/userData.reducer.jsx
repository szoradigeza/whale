import { userDataConstants } from "../constants";

const initState = null;

export function userData(state = initState, action) {
  console.log(action);
  switch (action.type) {
    case userDataConstants.SUCCES:
      return action.data;
    case userDataConstants.ERROR:
      return {
        userData: null,
      };
    case userDataConstants.REVERTNULL:
      return {
        userData: null,
      };
    default: {
      return state;
    }
  }
}
