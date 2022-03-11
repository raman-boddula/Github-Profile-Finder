import { REGISTER_SUCCESS, REGISTER_FAILURE } from "./actionTypes";

const initState = {
  token: "",
  error: false,
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: payload,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
