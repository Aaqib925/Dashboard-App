import { UPDATE_USERS } from "actions/createUser";

let lastID = 0;

const createUserReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_USER":
      return [
        ...state,
        {
          id: ++lastID,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          userActions: action.payload.userActions,
        },
      ];
    case UPDATE_USERS:
      // console.log(action.payload, " payload set");
      return [...action.payload];
    default:
      return state;
  }
};
export default createUserReducer;
