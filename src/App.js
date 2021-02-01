import LoginForm from "./components/loginForm";
import SignUpForm from "./components/signUpForm";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import React from "react";
function App() {
  const { TabPane } = Tabs;
  return (
    <div className="App">
      <Tabs centered defaultActiveKey="1" type="card">
        <TabPane tab="Register Account" key="1">
          <SignUpForm />
        </TabPane>
        <TabPane tab="Login" key="2">
          <LoginForm />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
