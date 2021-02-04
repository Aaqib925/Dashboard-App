export const EDIT_USER = "EDIT_USER";
export const DELETE_USER = "DELETE_USER";
export const editUser = (obj) => {
  return {
    type: EDIT_USER,
    payload: obj,
  };
};

export const deleteUser = (obj) => {
  return {
    type: DELETE_USER,
    payload: obj,
  };
};
