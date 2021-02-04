import React from "react";
import Store from "../../store/store";
import { Grid, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { updateUser } from "../../actions/createUser";
import { useHistory } from "react-router-dom";

const DeleteUser = () => {
  const History = useHistory();
  const dispatch = useDispatch();
  const StoreData = Store.getState().deleteReducer;
  const handleDelete = () => {
    const cloneData = [...Store.getState().createUserReducer];
    const filtered = cloneData.filter(
      (x) =>
        x.firstName !== StoreData.firstName ||
        x.lastName !== StoreData.lastName ||
        x.email !== StoreData.email
    );

    updateUser(dispatch, filtered);
  };
  return (
    <div
      style={{
        marginTop: "10%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid>
        <Grid align="left">
          <h1>Are you sure? </h1>
        </Grid>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          onClick={() => {
            handleDelete();
            History.push("/admin/user");
          }}
        >
          Delete User
        </Button>

        <Button
          variant="outlined"
          color="primary"
          onClick={() => History.push("/admin/user")}
        >
          Go back
        </Button>
      </Grid>
    </div>
  );
};

export default DeleteUser;
