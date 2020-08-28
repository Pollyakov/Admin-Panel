import React, { Component } from 'react';
import { Container, Table, Jumbotron, Button, Form, Card} from "react-bootstrap";

class Statistics extends Component {
    render() {
        return (
            <div>
                <h2>Statistics</h2>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Users Today</Card.Title>
    <Card.Text>
      Active users and New users today
    </Card.Text>
    <Button variant="primary">Click me</Button>
  </Card.Body>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Meals today</Card.Title>
    <Card.Text>
       Meals today and Meals created
    </Card.Text>
    <Button variant="primary">Click me</Button>
  </Card.Body>
</Card>
</Card>
                
            </div>
        );
    }
}

export default Statistics;