import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Store from "../store/store";
import { useDispatch } from "react-redux";
import { signUp } from "../actions/signUpAction";
const SignUpForm = () => {
  const [userName, setUserName] = useState("");
  const [validUserName, setValidUserName] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const storeData = Store.getState().signUpReducer;
  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: "50vh",
    margin: "20px auto",
  };

  const avatarStyle = { backgroundColor: "#303f9f" };
  const btnstyle = { margin: "8px 0" };
  const dispatch = useDispatch();
  const fieldStyle = { margin: "10px 0px" };
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateUserName = (userName) => {
    for (let i = 0; i < storeData.length; ++i) {
      if (storeData[i].userName === userName) return true;
    }
    return false;
  };
  const checkForValidUserName = (userName) => {
    if (validateUserName(userName)) setValidUserName(false);
    else setValidUserName(true);
  };

  const checkForValidEmail = (email) => {
    if (!validateEmail(email)) setValidEmail(false);
    else setValidEmail(true);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const openButton = () => {
    return validUserName && validEmail;
  };
  const handleRegister = () => {
    signUp(dispatch, { userName, password, email });
    setUserName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AccountCircleIcon />
            </Avatar>
            <h2>Register Account</h2>
          </Grid>
          <TextField
            style={fieldStyle}
            label="Username"
            value={userName}
            error={!validUserName}
            helperText={validUserName ? "" : "User Already Exist"}
            placeholder="Enter username"
            fullWidth
            required
            variant="outlined"
            onChange={(e) => handleUserName(e)}
            onBlur={() => checkForValidUserName(userName)}
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
            variant="outlined"
            onChange={handleEmail}
            onBlur={() => {
              checkForValidEmail(email);
            }}
          />
          <TextField
            style={fieldStyle}
            label="Password"
            value={password}
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            variant="outlined"
            onChange={handlePassword}
          />
          <Button
            disabled={!openButton()}
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={handleRegister}
          >
            Register
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};

export default SignUpForm;
