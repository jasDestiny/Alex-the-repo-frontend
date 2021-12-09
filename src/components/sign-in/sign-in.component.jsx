import React, { Component } from "react";
import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const request = require("../../utility/utility-functions")

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const path ="/users/login"
    const {userid,password} = this.state
    const data = {
      userid : userid,
      password : password
    }
    const result = await request(path,data)
    console.log(result)
    if(result.status === "200"){
      localStorage.setItem(
        "userAuthData",
        JSON.stringify({
          userid: userid,
          city: result.city,
          authtoken: result.authtoken,
        })
      );
      console.log("signed in")
      this.props.handleSignIn(true)

    }else{
      alert("Invalid Credentials")
    }
    
  };

  handleChange = (event) => {
    event.preventDefault()
    const {name,value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span className="title">Sign in with your email and password</span>

        <form className="form-control"  onSubmit={this.handleSubmit} >
          <FormInput
            name="userid"
            type="email"
            value={this.state.userid}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
