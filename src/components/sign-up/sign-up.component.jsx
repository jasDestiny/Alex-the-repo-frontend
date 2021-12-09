import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";

const request = require("../../utility/utility-functions");

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: "",
      password: "",
      org: "",
      orgtype: "",
    };
  }

  handleSubmit = async (event) => {
    //console.log("handle submit works");
    event.preventDefault();
    const { userid, password, org, orgtype } = this.state;
    //console.log(email,password,city,usertype)

    const result = await request("/users/signup", {
      userid: userid,
      password: password,
      org: org,
      orgtype: orgtype,
    });

   // console.log(result);
    if (result.status === "200") {
      localStorage.setItem(
        "userAuthData",
        JSON.stringify({
          userid: userid,
          org: org,
          orgtype: orgtype,
          authtoken: result.tokenval,
        })
      );
      this.props.handleSignIn(true);
    } else {
      alert("This email id is already taken");
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { userid, password, org, orgtype } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span className="title">Sign up here</span>
        <form className="form-control" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="userid"
            value={userid}
            onChange={this.handleChange}
            label="Email"
            required
          />
          
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <FormInput
            type="text"
            name="org"
            value={org}
            onChange={this.handleChange}
            label="org"
            required
          />

          <FormInput
            type="text"
            name="orgtype"
            value={orgtype}
            onChange={this.handleChange}
            label="orgtype"
            required
          />


          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
