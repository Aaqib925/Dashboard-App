import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import Store from "../store/store";
import { register } from "../actions/authAction";
import { useHistory } from "react-router-dom";
// import { Redirect } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const dispatch = useDispatch();
  const StoreData = Store.getState().signUpReducer;
  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: "50vh",
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#303f9f" };
  const fieldStyle = { margin: "10px 0px" };
  const btnstyle = { margin: "8px 0" };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const validateEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const checkForValidEmail = (email) => {
    if (!validateEmail(email)) setValidEmail(false);
    else setValidEmail(true);
  };
  const pushHistory = () => {
    history.push("/admin");
  };
  const handleClick = () => {
    const result = StoreData.find((data) => {
      return (
        data.userName === userName &&
        data.password === password &&
        data.email === email
      );
    });
    if (result === undefined) {
      alert("Account doesn't exist, Please Sign up");
    } else {
      dispatch(register({ userName, password, email }));
      pushHistory();
    }
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AccountCircleIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          style={fieldStyle}
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
          onChange={handleUserName}
          variant="outlined"
        />
        <TextField
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
          label="Password"
          style={fieldStyle}
          placeholder="Enter password"
          type="password"
          fullWidth
          onChange={handlePassword}
          variant="outlined"
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          disabled={!validEmail}
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={() => handleClick()}
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
