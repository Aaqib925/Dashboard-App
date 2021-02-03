export const EDIT_USER = "EDIT_USER";

export const editUser = (obj) => {
  return {
    type: EDIT_USER,
    payload: obj,
  };
};
