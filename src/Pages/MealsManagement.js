import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

import axios from "axios";

class MealsManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://tabsur.herokuapp.com/api/system/meals")
      .then((response) => {
        this.setState({
          meals: response.data,
        });
      });
  }

  render() {
    const columns = [
      {
        dataField: "id",
        text: "meal ID",
        sort: true,
      },
      {
        dataField: "name",
        text: "Meal Name",
        sort: true,
      },
      {
        dataField: "created_at",
        text: "Creation Date",
        sort: true,
      },
      {
        dataField: "address",
        text: "address",
        sort: true,
      },
      {
        dataField: "guest_count",
        text: "guest count",
        sort: true,
      },
      {
        dataField: "host_id",
        text: "host id",
        sort: true,
      }
    ];

    const selectRow = {
      mode: "checkbox",
      clickToSelect: true,
    };

    return (
      <Container>
        <BootstrapTable
          keyField="id"
          data={this.state.meals}
          columns={columns}
          selectRow={selectRow}
        />
      </Container>
    );
  }
}

export default MealsManagement;
