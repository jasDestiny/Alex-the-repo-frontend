import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";

const request = require("../../utility/utility-functions");

class StudentAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectname: "",
      createdby: "",
      projectype: "",
      githubrepo: "",
      enddate:"",
      projectdescription:""
    };
  }

  handleSubmit = async (event) => {
    //console.log("handle submit works");
    event.preventDefault();
    const { projectname, createdby, projectype, githubrepo, enddate, projectdescription } = this.state;
    //console.log(email,password,city,usertype)

    const result = await request("/personal", {
      projectname:projectname, 
      createdby:createdby, 
      projectype:projectype, 
      githubrepo:githubrepo, 
      enddate:enddate, 
      projectdescription:projectdescription
    });

   // console.log(result);
    if (result.status === "200") {
      localStorage.setItem(
        "userAuthData",
        JSON.stringify({
          projectname:projectname, 
          createdby:createdby, 
          projectype:projectype, 
          githubrepo:githubrepo, 
          enddate:enddate, 
          projectdescription:projectdescription
        })
      );
      this.props.handleSignIn(true);

      const reqData= await request("/allprojects",{

      });

      localStorage.setItem("projectKMS", JSON.stringify(reqData));
    } else {
      // alert("This email id is already taken");
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { projectname, createdby, projectype, githubrepo, enddate, projectdescription } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">Students project</h2>
        <span className="title">Add your personalproject here</span>
        <form className="form-control" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="projectname"
            value={projectname}
            onChange={this.handleChange}
            label="Project Name"
            required
          />
          
          <FormInput
            type="text"
            name="createdby"
            value={createdby}
            onChange={this.handleChange}
            label="Created By"
            required
          />

          <FormInput
            type="text"
            name="projectype"
            value={projectype}
            onChange={this.handleChange}
            label="Project Type"
            required
          />

          <FormInput
            type="text"
            name="githubrepo"
            value={githubrepo}
            onChange={this.handleChange}
            label="GH repo link"
            required
          />

          <FormInput
            type="text"
            name="enddate"
            value={enddate}
            onChange={this.handleChange}
            label="End Date"
            required
          />

          <FormInput
            type="text"
            name="projectdescription"
            value={projectdescription}
            onChange={this.handleChange}
            label="Description"
            required
          />

          <CustomButton type="submit">Submit Project</CustomButton>
        </form>
      </div>
    );
  }
}

export default StudentAdd;
