import { GET_USER } from "./actionTypes";

export const getUser = (data) => {
  return {
    type: GET_USER,
    payload: data,
  };
};
export const getUserList = (query, page, page_size) => (dispatch) => {
  console.log("query", query, page, page_size);
  fetch(
    `https://api.github.com/search/users?q=${query}&page=${page}&per_page=${page_size}`
  )
    .then((e) => e.json())
    .then((e) => dispatch(getUser(e)));
};
