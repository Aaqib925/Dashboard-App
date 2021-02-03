import authLogin from "./authReducer";
import { combineReducers } from "redux";
import signUpReducer from "../reducers/signUpReducer";
import createUserReducer from "./createUserReducer";
import editUserReducer from "./editUserReducer";

const reducers = combineReducers({
  signUpReducer,
  authLogin,
  createUserReducer,
  editUserReducer,
});

export default reducers;
