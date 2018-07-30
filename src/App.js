import React, { Component } from 'react';
// import { render } from "react-dom";
import { makeData } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./App.css";

const columns = [
  {
    Header: "Product",
    columns: [
      {
        Header: "Name",
        id: "name",
        accessor: d => d.name
      }
    ]
  },
  {
    Header: "Info",
    columns: [
      {
        Header: "Items",
        accessor: "items"
      },
      {
        Header: "Status",
        accessor: "status"
      }
    ]
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>Order History</h1>
        <ReactTable
          pageSizeOptions={[Math.floor(data.length/4), Math.floor(data.length/2), data.length]}
          data={data}
          columns={columns}
          defaultPageSize={Math.floor(data.length/4)}
          className="-striped -highlight"
          SubComponent={row => {
            return (
              <div style={{ padding: "20px" }}>
                <em>
                  You can put any component you want here.
                </em>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default App;