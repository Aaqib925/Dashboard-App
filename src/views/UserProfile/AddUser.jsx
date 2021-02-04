import React, { useState } from "react";
import { useDispatch } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";
import { createUser } from "../../actions/createUser";
import { editUser } from "../../actions/editUserAction";
import { deleteUser } from "../../actions/deleteAction";
import Store from "../../store/store";
const AddUser = () => {
  const History = useHistory();
  const StoreData = Store.getState().editUserReducer;
  const [firstName, setFirstName] = useState(StoreData.firstName);
  const [lastName, setLastName] = useState(StoreData.lastName);
  const [email, setEmail] = useState(StoreData.email);
  const [validEmail, setValidEmail] = useState(true);
  const dispatch = useDispatch();
  const handleUserName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const changeValues = () => {
    const StoreData = Store.getState().editUserReducer;
    setFirstName(StoreData.firstName);
    setLastName(StoreData.lastName);
    setEmail(StoreData.email);
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
              changeValues();
              History.push("/admin/editUser");
            }}
          />
        </IconButton>
        <IconButton>
          <DeleteIcon
            onClick={() => {
              dispatch(deleteUser({ firstName, lastName, email }));
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
    <div className="container">
      <form>
        <div className="row">
          <div className="col-25">
            <label for="fname">First Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              className="inputForm"
              id="fname"
              value={firstName}
              name="firstName"
              onChange={handleUserName}
            ></input>
          </div>
          <div className="col-25">
            <label for="lname">Last Name</label>
          </div>
          <div className="col-75">
            <input
              className="inputForm"
              type="text"
              id="lname"
              value={lastName}
              name="lastName"
              onChange={handleLastName}
            ></input>
          </div>
          <div className="col-25">
            <label for="emai">Email</label>
          </div>
          <div className="col-75">
            <input
              className="inputForm"
              type="text"
              id="email"
              value={email}
              name="email"
              onChange={handleEmail}
              onBlur={() => checkForValidEmail(email)}
            ></input>
            {validEmail ? "" : "Invalid Email"}
          </div>
        </div>
      </form>
      <div className="row">
        <input
          type="submit"
          value="Add User"
          onClick={handleRegister}
          disabled={!openButton()}
        ></input>
      </div>
    </div>
  );
};

export default AddUser;
