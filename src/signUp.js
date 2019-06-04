import React from 'react';
import {Form, Button} from  'react-bootstrap';

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            test: "helloe"
            
        }
        
    }
    render(){
        return(
          <div id='capture-form'>
          <h1>Cat Profile Maker</h1>
              <div>
              <Form id="signup-form">
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Cat's Name" />
                </Form.Group>
              
                <Form.Group controlId="formAge">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="number"  min="1" max="100"placeholder="Age" />
                </Form.Group>
                <Form.Group controlId="formBio">
                  <Form.Label>Cat's Bio</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Create Profile
                </Button>
              </Form>
              </div>
          </div>
            );
    }
}
export default SignUp