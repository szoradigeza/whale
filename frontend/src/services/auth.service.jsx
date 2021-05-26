import axios from "axios";
import { history } from "../helpers";
import User from "../models/user.model";
import jwt_decode from "jwt-decode";
import { ApiService } from "./api.service";

let apiService = ApiService.getInstance();
let currentUser = null;

export const authService = {
  login,
  logout,
  isLoggedIn,
  getJWT,
  getCurrentUserRole,
};

function login(username, password) {
  return axios
    .post(`${apiService.apiUrl}/auth/login`, { username, password })
    .then((response) => {
      const body = response.data;
      const token = body.access_token;
      localStorage.setItem("user_token", token);
      currentUser = new User(
        body.name,
        jwt_decode(token).role,
        body.phoneNumber
      );
      return body;
    });
}

function logout() {
  localStorage.removeItem("user_token");
  localStorage.removeItem("ps_api_url");
  apiService.setApiUrl(null);
  history.push("/");
}

function isLoggedIn() {
  return localStorage.getItem("user_token") ? true : false;
}

function getJWT() {
  return localStorage.getItem("user_token");
}

function getCurrentUserRole() {
  if (currentUser) {
    return currentUser.right.role;
  } else {
    let token = localStorage.getItem("user_token");
    token = jwt_decode(token);
    return token.role;
  }
}
