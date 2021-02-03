import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
// import Store from "../../store/store";
import { useDispatch } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";
import { createUser } from "../../actions/createUser";
import { editUser } from "../../actions/editUserAction";
const AddUser = () => {
  const History = useHistory();
  const [firstName, setFirstName] = useState("Test");
  const [lastName, setLastName] = useState("User");
  const [email, setEmail] = useState("testUser@gmail.com");
  const [validEmail, setValidEmail] = useState(true);
  const btnstyle = { margin: "8px 0" };
  const dispatch = useDispatch();
  const fieldStyle = { margin: "10px 0px" };
  const handleUserName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const validateEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const checkForValidEmail = (email) => {
    if (!validateEmail(email)) setValidEmail(false);
    else setValidEmail(true);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const createDivOfActions = () => {
    return (
      <div>
        <IconButton>
          <EditIcon
            onClick={() => {
              dispatch(editUser({ firstName, lastName, email }));
              History.push("/admin/editUser");
            }}
          />
        </IconButton>
        <IconButton>
          <DeleteIcon
            onClick={() => {
              dispatch(editUser({ firstName, lastName, email }));
              History.push("/admin/deleteUser");
            }}
          />
        </IconButton>
      </div>
    );
  };
  const handleRegister = () => {
    const userActions = createDivOfActions();
    createUser(dispatch, { firstName, lastName, email, userActions });

    setFirstName("");
    setEmail("");
    setLastName("");
    History.push("/admin/user");
  };
  const openButton = () => {
    return firstName !== "" && lastName !== "" && validEmail;
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
          <h1>Add User</h1>
        </Grid>
        <TextField
          style={fieldStyle}
          label="First Name"
          value={firstName}
          placeholder="Enter First Name"
          required
          fullWidth
          onChange={(e) => handleUserName(e)}
        />
        <TextField
          style={fieldStyle}
          label="Last Name"
          value={lastName}
          placeholder="Enter Last Name"
          type="text"
          fullWidth
          required
          onChange={handleLastName}
        />
        <TextField
          style={fieldStyle}
          label="Email"
          value={email}
          placeholder="Enter Email"
          error={!validEmail}
          helperText={validEmail ? "" : "Invalid Email "}
          fullWidth
          required
          onChange={handleEmail}
          onBlur={() => {
            checkForValidEmail(email);
          }}
        />

        <Button
          disabled={!openButton()}
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          onClick={handleRegister}
        >
          Add User
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

export default AddUser;
