import { GET_USER } from "./actionTypes";

const initialState = {
  data: {},
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER:
      return { ...state, data: payload };
    default:
      return state;
  }
};
