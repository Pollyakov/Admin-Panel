import React, { Component } from 'react';
import {Container, Table} from 'react-bootstrap'
import axios from 'axios';

class UserManagement extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            users: [],
            filteredUsers: [],
    
                      }
                  
                    }
    componentDidMount() {
    axios.get("https://tabsur.herokuapp.com/api/system/users").then(response => {
      // console.log(response.data);
      this.setState({
        users: response.data
      })
      console.log(response.data);
    })
  }


  sort(category) {
    console.log("Hello", category);
    
}

  
    render() {
       
        let contentToRender =                 
                <Table>
                    <thead>
                        <tr>
                            <th onClick={()=> this.sort("id").bind(this)}>Id</th>
                            <th onClick={()=>this.sort("name").bind(this)}>Name</th>
                            <th>Created</th>
                            <th>Email</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map((user) =>
                    <tr >
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.created_at}</td>
                    <td>{user.email}</td>
                    <td>{JSON.stringify(user.location)}</td>
                  </tr>)};
                    </tbody>
                </Table>

        return (
            <Container>
                {contentToRender}
            </Container>        
        );
    }
}

export default UserManagement;
