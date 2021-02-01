export const SIGN_UP = "SIGN_UP";

export const signUp = (dispatch, obj) => {
  dispatch({
    type: SIGN_UP,
    payload: obj,
  });
};
