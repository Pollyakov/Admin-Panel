import React, { Component } from 'react';
import {Container, Table} from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next';

import axios from 'axios';
class UserManagement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
          }
    }

    componentDidMount() {
    axios.get("https://tabsur.herokuapp.com/api/system/users").then(response => {
      this.setState({
        users: response.data
      })
    })
  }

    render() {

        const columns = [{
            dataField: 'id',
            text: 'user ID',
            sort: true
          },{
            dataField: 'name',
            text: 'User Name',
            sort: true
          },
          {
            dataField: 'created_at',
            text: 'Creation Date',
            sort: true
          },
          {
            dataField: 'email',
            text: 'User email',
            sort: true
          }];

          const selectRow = {
            mode: 'checkbox',
            clickToSelect: true
          };

        return (
            <Container>
                <BootstrapTable keyField='id' data={ this.state.users } columns={ columns} selectRow={ selectRow } />
            </Container>        
        );
    }
}

export default UserManagement;
