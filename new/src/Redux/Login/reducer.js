import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

const initState = { token: "", error: false };

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
