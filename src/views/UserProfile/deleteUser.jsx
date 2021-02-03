import React from "react";
import Store from "../../store/store";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../../actions/createUser";
import { useHistory } from "react-router-dom";
const DeleteUser = () => {
  const History = useHistory();
  const dispatch = useDispatch();
  const StoreData = Store.getState().editUserReducer;
  const handleDelete = () => {
    const cloneData = [...Store.getState().createUserReducer];
    const filtered = cloneData.filter(
      (x) =>
        x.firstName !== StoreData.firstName &&
        x.lastName !== StoreData.lastName &&
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
          <h1>Delete User</h1>
        </Grid>
        <h2>First Name: {StoreData.firstName}</h2>
        <h2>Last Name: {StoreData.lastName}</h2>
        <h2>Email: {StoreData.email}</h2>
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

        <Button variant="outlined" color="primary">
          <Link to="admin/user">Go Back</Link>
        </Button>
      </Grid>
    </div>
  );
};

export default DeleteUser;
