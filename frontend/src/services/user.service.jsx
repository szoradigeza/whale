import { ApiService } from "./api.service";
export const userService = {
  getUserData,
};

const apiService = ApiService.getInstance();

function getUserData() {
  return apiService.getReq("http://localhost:3000/user/current-user-data");
}
