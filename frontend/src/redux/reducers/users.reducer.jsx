import { usersConstants } from "../constants";
import { updateObject } from "../../shared/utility";

const initialState = {
  loading: false,
  users: null,
  error: null,
};

const getUsersStart = (state, action) => {
  return updateObject(state, {
    loading: true,
  });
};

const getUsersSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    users: action.users,
    error: null,
  });
};
const getUsersFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    users: null,
  });
};

export function users(state = initialState, action) {
  switch (action.type) {
    case usersConstants.USERS_GETALL_REQUEST:
      return getUsersStart(state, action);
    case usersConstants.USERS_GETALL_SUCCESS:
      return getUsersSuccess(state, action);
    case usersConstants.USERS_GETALL_FAILURE:
      return getUsersFail(state, action);
    default:
      return state;
  }
}
