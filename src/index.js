import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import Store from "./store/store";
import { Provider } from "react-redux";
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
// import "assets/css/material-dashboard-react.css?v=1.9.0";
import "antd/dist/antd.css";
const hist = createBrowserHistory();
// console.log(Store.getState());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router history={hist}>
        <Switch>
          <Route path="/admin/landing" exact component={App} />
          <Route path="/admin" component={Admin} />
          <Route path="/rtl" component={RTL} />
          <Route path="/main" component={App} />
          <Redirect from="*" to="/main" />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
