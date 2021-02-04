import { DELETE_USER } from "../actions/deleteAction";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
};

const deleteUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_USER:
        return {
          ...action.payload,
        };
      default:
        return state;
    }
  };
  
  export default deleteUserReducer;