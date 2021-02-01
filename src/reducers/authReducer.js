import { REGISTER_SUCCESS } from "../actions/authAction";

const initialState = {
  userName: "",
  password: "",
  email: "",
};

const authLogin = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default authLogin;
