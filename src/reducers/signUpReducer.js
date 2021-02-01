let lastID = 0;

const signUpReducer = (state = [], action) => {
  switch (action.type) {
    case "SIGN_UP":
      return [
        ...state,
        {
          id: ++lastID,
          userName: action.payload.userName,
          password: action.payload.password,
          email: action.payload.email,
        },
      ];
    default:
      return state;
  }
};
export default signUpReducer;
