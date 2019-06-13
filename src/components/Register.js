import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from 'react-router-dom';
import { setBalance, setUsername } from '../redux/reducer';
import {connect} from 'react-redux'

class Register extends Component {
  constructor() {
    super(); //runs parent constructor
    this.state = {
      username: "",
      password: "",
      email: "",
      name: "",
      redirect: false,
      error: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.placeholder.toLowerCase()]: e.target.value
      //e accesses info about the event.
      // Target targets the element that triggered the event(the same input field or button).
      // Placeholder accesses the placeholder name from the element.
      // toLowerCase() invoked matches the placeholder to the lowercase variables.
    });
  };

  handleClick = e => {
      Axios.post('/auth/register/user', {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        name: this.state.name
      }).then( () => {
            this.setState({redirect: true});
      }).catch( error => {
          this.setState({error: error.response.data.error});
      })
  }
  render() {

    if(this.state.redirect === true) {
        return <Redirect to='/dashboard' />
    }

    return (
      <div>
        <h1>Register Today!</h1>
        <h3>{this.state.error}</h3>
        <input placeholder="Username" onChange={this.handleChange} />
        <input placeholder="Password" onChange={this.handleChange} />
        <input placeholder="Email" onChange={this.handleChange} />
        <input placeholder="Name" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default connect()(Register); //connect invoked returns a function, and then passes in register
