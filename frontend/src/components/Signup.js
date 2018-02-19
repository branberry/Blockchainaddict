import React, { Component } from 'react';
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

    render() {
        return (
            <div><h1>Welcome to the signup page!</h1></div>
        );
    }
}