import React, { Component } from 'react';
import { Container, Table, Jumbotron, Button, Form} from "react-bootstrap";

class Notifications extends Component {
    render() {
        return (
            <Container>
            <h3>Push Notifications</h3>
            <Jumbotron>
            {/* <p>
            Send a message (push notification):
            </p> */}
            <Form>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Send a message (push notification):</label>
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                 </div>
            </Form>
            
            <p>
              <Button variant="primary">Send</Button>
            </p>
          </Jumbotron>
          </Container>
        );
    }
}

export default Notifications;