import React, { Component } from 'react';
import '../styles/Goals.css';


export class Goals extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit} className="goal-submit">
        <div className="form-group">
          <label>Goal:  &nbsp;&nbsp;
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          &nbsp;&nbsp;   <input className="btn btn-default" type="submit" value="Submit"/>
        </div>
      </form>
    );
  }
}
