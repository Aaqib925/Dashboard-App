import React, { useState } from "react";
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

  const dispatch = useDispatch();
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
    <div className="container">
      <form>
        <div className="row">
          <div className="col-25">
            <label for="fname">First Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="fname"
              className="inputForm"
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
              type="text"
              id="lname"
              className="inputForm"
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
              type="text"
              id="email"
              className="inputForm"
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
          value="Edit User"
          onClick={() => handleRegister()}
          disabled={!openButton()}
        ></input>
      </div>
    </div>
  );
};

export default EditUser;
