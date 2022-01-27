import React, { useState } from "react";
import '../utils/Styles.css';
import MaterialTable from "material-table";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import SaveIcon from "@material-ui/icons/Save";
import { Button } from "@material-ui/core";
import { AppBar } from "@mui/material";

export default function MaterialChart() {//to display the table after clicking submit button 
  const [dataStore, setDataStore] = useState([// state to store the data
    { name: "Jon", job: "Software Dev", age: 29 }
  ]);

  return (
    <div className="MaterialChart">
      <AppBar
    
  />
      <h1>TELANGANA STATE SOUTHERN POWER DISTRIBUTION COMPANY LIMITED</h1>
      <a
        target="_blank"
        href="https://smartdevpreneur.com/intro-to-material-table-for-react/"
      >
        Click here for an intro to material-table
      </a>
      <div style={{ maxWidth: "100%", paddingTop: "12px" }}>
        <MaterialTable
          columns={[
            {
              title: "S.No",
              field: "S.No",
              headerStyle: {
                backgroundColor: "blue"
              }
            },
            {
              title: "Date",
              field: "Date",
              headerStyle: {
                backgroundColor: "blue"
              }
            },
            {
              title: "Age",
              field: "age",
              type: "numeric",
              headerStyle: {
                backgroundColor: "blue"
              }
            }
          ]}
          data={dataStore}
          title="Material-Table Demo"
          icons={{
            Clear: (props) => <DeleteIcon />,
            Search: (props) => <SearchIcon />,
            ResetSearch: (props) => <DeleteIcon />
          }}
          actions={[
            {
              icon: () => <SaveIcon />,
              tooltip: "Save User",
              onClick: (event, rowData) => alert("You saved " + rowData.name)
            }
          ]}
          components={{
            Action: (props) => (
              <Button
                onClick={(event) => props.action.onClick(event, props.data)}
                color="primary"
                variant="text"
                style={{ textTransform: "none" }}
                size="small"
              >
                Save
              </Button>
            )
          }}
          options={{
            headerStyle: {
              backgroundColor: "#01579b",
              color: "#FFF"
            }
          }}
        />
      </div>
    </div>
  );
}
