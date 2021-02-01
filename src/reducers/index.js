import authLogin from "./authReducer";
import { combineReducers } from "redux";
import signUpReducer from "../reducers/signUpReducer";

const reducers = combineReducers({
  signUpReducer,
  authLogin,
});

export default reducers;
