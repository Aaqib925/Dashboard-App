import React from "react";
// @material-ui/core components
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue("firstName") || ""} ${
        params.getValue("lastName") || ""
      }`,
  },
];
const column2 = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "name", headerName: "Name", width: 160 },
  { field: "country", headerName: "Country", width: 150 },
  {
    field: "city",
    headerName: "City",
    width: 170,
  },
  {
    field: "salary",
    headerName: "Salary",
    width: 130,
  },
];
const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const rows2 = [
  {
    id: 1,
    name: "Abbas",
    country: "Pakistan",
    city: "Islamabad",
    salary: "$78,615",
  },
  {
    id: 2,
    name: "Faiq",
    country: "Pakistan",
    city: "Karachi",
    salary: "$78,615",
  },
  {
    id: 3,
    name: "Ali Rafay",
    country: "India",
    city: "Delhi",
    salary: "$78,615",
  },

  {
    id: 4,
    name: "Ibtesam",
    country: "Japan",
    city: "Tokyo",
    salary: "$78,615",
  },
  {
    id: 5,
    name: "Minerva Hooper",
    country: "Curaçao",
    city: "Sinaai-Waas",
    salary: "$23,789",
  },
  {
    id: 6,
    name: "Sage Rodriguez",
    country: "Netherlands",
    city: "Baileux",
    salary: "$56,142",
  },
  {
    id: 7,
    name: "Philip Chaney",
    country: "Korea, South",
    city: "Overland Park",
    salary: "$38,735",
  },
  {
    id: 8,
    name: "Doris Greene",
    country: "Daenerys",
    city: "Feldkirchen in Kärnten",
    salary: "$63,542",
  },
  {
    id: 9,
    name: "Mason Porter",
    country: "Malawi",
    city: "Gloucester",
    salary: "$78,615",
  },
];

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows2}
                columns={column2}
                pageSize={5}
                checkboxSelection
              />
            </div>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Table on Plain Background
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection
              />
            </div>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
