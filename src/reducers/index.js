import authLogin from "./authReducer";
import { combineReducers } from "redux";
import signUpReducer from "../reducers/signUpReducer";
import createUserReducer from "./createUserReducer";
import editUserReducer from "./editUserReducer";
import deleteReducer from "./deleteReducer"
const reducers = combineReducers({
  signUpReducer,
  authLogin,
  createUserReducer,
  editUserReducer,
  deleteReducer
});

export default reducers;
