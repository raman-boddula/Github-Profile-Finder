import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as registerReducer } from "./Register/reducer";
import { reducer as loginReducer } from "./Login/reducer";
import { reducer as githubReducer } from "./Github/reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  registerReducer,
  loginReducer,
  githubReducer,
});

export const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
);
