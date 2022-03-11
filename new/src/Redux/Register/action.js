import { REGISTER_SUCCESS, REGISTER_FAILURE } from "./actionTypes";

export const registerSuccess = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    token: payload,
  };
};
export const registerFailed = (payload) => {
  return {
    type: REGISTER_FAILURE,
    error: payload,
  };
};
