export const CREATE_USER = "CREATE_USER";
export const UPDATE_USERS = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";
export const createUser = (dispatch, obj) => {
  dispatch({
    type: CREATE_USER,
    payload: obj,
  });
};

export const updateUser = (dispatch, obj) => {
  dispatch({
    type: UPDATE_USERS,
    payload: obj,
  });
};

// export const deleteUser = (user, userData) => (dispatch, getState) => {
//   console.log("REACHEDD");
//   const filteredData = [...userData];
//   const deletedFilteredData = filteredData.filter(
//     (x) =>
//       x.firstName !== user.firstName &&
//       x.lastName !== user.lastName &&
//       x.email !== user.email
//   );
//   dispatch({
//     type: DELETE_USER,
//     payload: deletedFilteredData,
//   });
//   return Promise.resolve(true);
// };
