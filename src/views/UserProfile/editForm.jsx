import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import Store from "../../store/store";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateUser } from "../../actions/createUser";
const EditUser = () => {
  const History = useHistory();
  const StoreData = Store.getState().editUserReducer;
  const [firstName, setFirstName] = useState(StoreData.firstName);
  const [lastName, setLastName] = useState(StoreData.lastName);
  const [email, setEmail] = useState(StoreData.email);
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

  const handleRegister = () => {
    const userData = Store.getState().createUserReducer;
    const indexOfData = userData.findIndex(
      (x) =>
        x.firstName === StoreData.firstName &&
        x.lastName === StoreData.lastName &&
        x.email === StoreData.email
    );
    // console.log(indexOfData);
    const filteredData = [...userData];
    const filteredRow = { ...userData[indexOfData] };
    filteredRow.firstName = firstName;
    filteredRow.lastName = lastName;
    filteredRow.email = email;
    filteredData[indexOfData] = filteredRow;
    console.log(filteredData);
    updateUser(dispatch, filteredData);
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
          <h1>Edit User</h1>
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
          Confirm changes
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

export default EditUser;
