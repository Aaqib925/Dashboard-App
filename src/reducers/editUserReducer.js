import { EDIT_USER } from "../actions/editUserAction";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
};

const editUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default editUserReducer;
