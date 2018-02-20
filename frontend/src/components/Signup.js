import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import DjangoCSRFToken from 'django-react-csrftoken';
import '../styles/Signup.css';

export default class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username:"",
            email: "",
            password: "",
        };
    }

    /**
     *  ValidateForm() ensures the proper username and logins are used 
     * minimum password length is 6
     */
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 6 && this.state.username.length > 0;
    }

    /**
     *  handleChange logs every keystroke
     */
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    /**
     * This function handles the submission of a new user account
     * to the approriate view
     */
    handleSubmit = (event) => {
        const headers = {
            'Content-Type':'application/json',                                                                                                

         };
        
         // the data for the post request
        const data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        };
        
        /**
         *  send signup information to signup view
         */
        fetch('http://localhost:8000/crypto/signup/',{
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),

        }) 

        event.preventDefault();
    }

    render() {
        return (
            <div>
            <DjangoCSRFToken/>
            <h1>Welcome to the signup page!</h1>
            </div>
        );
    }
}