import React, { Component } from 'react';
import {Container, Table} from 'react-bootstrap'


import axios from 'axios';
class UserManagement extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            users: []
          }
        // redirectIndex - number - using this state in the render function 
        //  in order to decided if to redirect or not. If value is -1 not redirecting.
        //  otherwise redirecting to '/cars/${redirectIndex}'
        // this.state = {
        //     redirectIndex: -1
        // }
        // this.openCar = this.openCar.bind(this);
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

    render() {
        // if (this.state.redirectIndex !== -1) {
        //     const redirectPath = `/cars/${this.state.redirectIndex}`
        //     return <Redirect to={redirectPath}/>
        // }
        let contentToRender;
            const userTableRows = this.state.users.map((user, index) =>
                <tr >
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.created_at}</td>
                    <td>{user.email}</td>
                    <td>{JSON.stringify(user.location)}</td>
                </tr>);

            contentToRender =                 
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Created</th>
                            <th>Email</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userTableRows}
                    </tbody>
                </Table>

        // } else {
        //     // I don't have cars render a message
        //     contentToRender = 
        //         <p style={{textAlign: "center"}}>No Cars to Show</p>
        // 

        return (
            <Container>
                {contentToRender}
            </Container>        
        );
    }
}

export default UserManagement;
