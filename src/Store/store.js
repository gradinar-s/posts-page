import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import postReducer from "./postsReducer";

let rootReducer = combineReducers({
  posts: postReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
