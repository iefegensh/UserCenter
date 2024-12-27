import myAxios from "@/request";

// define interface
/*
interface UserRegisterRequest {
  username: string;
  password: string;
}
 */

/*
 * User Register
 * @parama params
 */
export const userRegister = async (params: any) => {
  const res = await myAxios.request({
    url: "/api/user/register",
    method: "POST",
    data: params,
  });
  return res;
};

/*
 * User Login
 * @parama params
 */
export const userLogin = async (params: any) => {
  const res = await myAxios.request({
    url: "/api/user/login",
    method: "POST",
    data: params,
  });
  return res;
};

/*
 * User Logout
 * @parama params
 */
export const userLogout = async (params: any) => {
  const res = await myAxios.request({
    url: "/api/user/logout",
    method: "POST",
    data: params,
  });
  return res;
};

/*
 * Get Current User
 * @parama params
 */
export const getCurrentUser = async (params: any) => {
  const res = await myAxios.request({
    url: "/api/user/current",
    method: "GET",
  });
  return res;
};

/*
 * Search User
 * @parama params
 */
export const searchUsers = async (username: any) => {
  const res = await myAxios.request({
    url: "/api/user/search",
    method: "GET",
    params: {
      username,
    },
  });
  return res;
};

/*
 * User Delete
 * @parama params
 */
export const userDelete = async (id: string) => {
  const res = await myAxios.request({
    url: "/api/user/delete",
    method: "POST",
    data: id,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
