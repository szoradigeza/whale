import { ApiService, authService } from "../../services";
import { userDataConstants } from "../constants";
import { alertActions } from "./alert.actions";
export const userDataActions = {
  initApp,
};

function success(data) {
  return { type: userDataConstants.SUCCES, data };
}

function initApp() {
  console.log("initAppCall");
  return (dispatch) => {
    const apiService = ApiService.getInstance();
    apiService.getReq("/auth/current-user-data").then((data) => {
      console.log(data);
      if (data.permissions) {
        dispatch(success(data));
      } else {
        authService.logout();
        dispatch(alertActions.error("Invalid permission table"));
      }
    });
  };
}
