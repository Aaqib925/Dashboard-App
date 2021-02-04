import React from "react";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Store from "../../store/store";
const Table = () => {
  const StoreData = Store.getState().createUserReducer;
  const History = useHistory();

  return (
    <div style={{ maxWidth: "100%" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => History.push("/admin/addUser")}
      >
        Add User
      </Button>
      <MaterialTable
        columns={[
          { title: "First Name", field: "firstName" },
          { title: "Last Name", field: "lastName" },
          { title: "Email", field: "email" },
          { title: "Actions", field: "userActions" },
        ]}
        data={StoreData}
        title="Users in Record"
      />
    </div>
  );
};

export default Table;
