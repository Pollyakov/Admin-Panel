import React, { Component } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

class LogPanel extends Component {
    render() {
        return (
            <Container>
            {/* <h2>Server Logs</h2> */}
            <Card>
            <Card.Header>Server Logs</Card.Header>
  <Card.Body>
    {/* <Card.Title>Special title treatment</Card.Title> */}
    <Card.Text>
      Log log log  log loglog loglog loglog loglog loglog log
      log loglog loglog loglog loglog loglog loglog log
      Log log log  log loglog loglog loglog loglog loglog log
      log loglog loglog loglog loglog loglog loglog log
      Log log log  log loglog loglog loglog loglog loglog log
      log loglog loglog loglog loglog loglog loglog log
    </Card.Text>
    <Button variant="primary">Clear</Button>
  </Card.Body>
            </Card>
            </Container>
        );
        }
}

export default LogPanel;