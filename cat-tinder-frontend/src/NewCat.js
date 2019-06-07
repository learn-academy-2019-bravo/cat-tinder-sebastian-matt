import React, {Component} from 'react'
import {Form, Button} from  'react-bootstrap';

export default class NewCat extends Component{
        constructor(props){
      super(props)
      this.state = {
        form:{
          name: '',
          age: '',
          enjoys: ''
        }
      }
    }
    handleChange=(event)=>{
        let {form} = this.state
        form[event.target.name] = event.target.value
         this.setState({form: form})
    }
    render(){
        return(
            <div>
             <div id='capture-form'>
          <h1>Cat Profile Maker</h1>
              <div>
              <Form id="signup-form">
                <Form.Group controlId="formName">
                  <Form.Label>name</Form.Label>
                  <Form.Control
                      type="text"
                      name="name"
                      onChange={this.handleChange}
                      value={this.state.form.name}
                    />
                </Form.Group>
              
                <Form.Group controlId="formAge">
                  <Form.Label>age</Form.Label>
                   <Form.Control
                      type="number"
                      name="age"
                      min="1"
                      max="100"
                      onChange={this.handleChange}
                      value={this.state.form.age}
                    />
                </Form.Group>
                <Form.Group controlId="formBio">
                  <Form.Label>bio</Form.Label>
                   <Form.Control
                      type="text"
                      name="bio"
                      onChange={this.handleChange}
                      value={this.state.form.bio}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Create Profile
                </Button>
              </Form>
              </div>
          </div>
            </div>
            )
    }
}