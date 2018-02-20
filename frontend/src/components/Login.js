import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import DjangoCSRFToken from 'django-react-csrftoken';
import Signup from './Signup';
import { Link } from 'react-router-dom';
import "../styles/Login.css";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }
    /**
     *  The function logs every keystroke and updates the value of whatever field is being updated
     */
    handleChange = (event) => {
        
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    /**
     * function is called when user submits data and the data is then
     * sent to the backend view which handles the login
     */
    handleSubmit = (event) => {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        const headers = {
            'Content-Type':'application/json',                                                                                                

         }

         const data = {
            email: this.state.email,
            password: this.state.password,
         }

        fetch('http://localhost:8000/crypto/login/', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        })
        console.log(this.state.email);
        console.log(this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <DjangoCSRFToken/>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                         autoFocus
                         type="email"
                         value={this.state.email}
                         onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                         value={this.state.password}
                         onChange={this.handleChange}
                         type="password"
                         />
                    </FormGroup>
                    <Button
                     block
                     bsSize="large"
                     disabled={!this.validateForm()}
                     type="submit"
                     >
                        Login
                    </Button>

                    <h4>Not a registered user? Sign up below</h4>
                    <Button><Link to="/signup"> Sign Up </Link></Button>
                </form>
            </div>
        );
    }
}