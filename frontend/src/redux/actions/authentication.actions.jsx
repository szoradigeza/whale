import { authConstants } from "../constants/authentication.constants";
import { ApiService, authService } from "../../services";
import { history } from "../../helpers/history";
import { alertActions } from "./alert.actions";
import { userDataConstants } from "../constants";
export const userActions = {
  login,
};

//show modal or not
const apiService = ApiService.getInstance();

function request(user) {
  return { type: authConstants.LOGIN_REQUEST, user };
}
function success(user) {
  return { type: authConstants.LOGIN_SUCCESS, user };
}
function failure(error) {
  return { type: authConstants.LOGIN_FAILURE, error };
}

function login(username, password) {
  return (dispatch) => {
    dispatch(request({ username }));

    authService.login(username, password).then(
      (userData) => {
        dispatch(success(userData));
        //dispatch({ type: userDataConstants.SUCCES, userData });
        /*
            store selected apiUrl in that case 
            if there are more than 1 available server 
         */
        if (!apiService.isNumberOfServersEqOne()) {
          localStorage.setItem("ps_api_url", apiService.apiUrl);
        }
        history.push("/home");
      },
      (error) => {
        apiService.setApiUrl(null);
        dispatch(failure(error));
        if (error.message === "Network Error") {
          dispatch(alertActions.error("Something went wrong :("));
        } else {
          if (error.response.status === 401) {
            dispatch(alertActions.error("Invalid Username or Password!"));
          } else {
            dispatch(alertActions.error("Something went wrong. :("));
          }
          dispatch(failure(error.toString()));
        }
      }
    );
  };
}
