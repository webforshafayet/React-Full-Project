import React from 'react';
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
 
import './Login.css';
class Login extends React.Component{
    state={
        email:'',
        pwd:''
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        
    }
    render(){
        return(
            <div className='div-login'>
                <h1> Agropedia </h1>
                <Form>
  <Form.Group controlId="formBasicEmail" required>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword required">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="Info" type="submit">
  <Link to='/home'>Submit</Link>
  </Button>
</Form>
            </div>
        )
    }
}

export default Login;