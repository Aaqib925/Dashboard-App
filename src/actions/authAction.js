export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

// export const register = (dispatch, obj) => {
//   dispatch({
//     type: REGISTER_SUCCESS,
//     payload: obj,
//   });
//   return Promise.resolve(true);
// };

export const register = (obj) => {
  return {
    type: REGISTER_SUCCESS,
    payload: obj,
  };
};
