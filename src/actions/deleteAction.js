export const DELETE_USER = "DELETE_USER";

export const deleteUser = (obj) => {
  return {
    type: DELETE_USER,
    payload: obj,
  };
};
