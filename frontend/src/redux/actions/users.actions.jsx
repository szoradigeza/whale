import { usersConstants } from "../constants";
import axios from "axios";

const APIUrl = "http://localhost:8080";

const getUsersStart = () => {
  return {
    type: usersConstants.USERS_GETALL_REQUEST,
  };
};
const getUsersSuccess = (users) => {
  return {
    type: usersConstants.USERS_GETALL_SUCCESS,
    users,
  };
};
const getUsersFail = (error) => {
  return {
    type: usersConstants.USERS_GETALL_FAILURE,
    error,
  };
};

export const getUsers = () => {
  //TODO make a service
  return (dispatch) => {
    dispatch(getUsersStart());
    axios
      .get(`${APIUrl}/user/users`)
      .then((response) => {
        dispatch(getUsersSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getUsersFail(err.response.data));
      });
  };
};
