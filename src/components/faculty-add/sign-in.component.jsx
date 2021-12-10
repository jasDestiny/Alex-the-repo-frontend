import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";

const request = require("../../utility/utility-functions");

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectname: "",
      createdby: "",
      projectype: "",
      githubrepo: "",
      enddate:"",
      projectdescription:"",
      university:"",
      facultyid:""
    };
  }

  alert_projects = (projects)=>{
      for(let i=0;i<projects.length;i++){
        alert(`${projects[i].projectname} uses the same project name, use different one to prevent plagiarism`);
      }
  }

  handleSubmit = async (event) => {
    //console.log("handle submit works");
    event.preventDefault();
    const { projectname, createdby, projectype, githubrepo, enddate, projectdescription, university, facultyid } = this.state;
    //console.log(email,password,city,usertype)

    const req= await request("/allprojects/fuzzysearch",{
      projectname:projectname, 
      createdby:createdby, 
      projectype:projectype, 
      githubrepo:githubrepo, 
      enddate:enddate, 
      projectdescription:projectdescription,
      university:university,
      facultyid:facultyid
    });

    if(req.length!==0){
      this.alert_projects(req);
      return;
    }
    
    const result = await request("/faculty", {
      projectname:projectname, 
      createdby:createdby, 
      projectype:projectype, 
      githubrepo:githubrepo, 
      enddate:enddate, 
      projectdescription:projectdescription,
      university:university,
      facultyid:facultyid
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
          projectdescription:projectdescription,
          university:university,
          facultyid:facultyid
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
    const { projectname, createdby, projectype, githubrepo, enddate, projectdescription, university, facultyid } = this.state;
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

          <FormInput
            type="text"
            name="university"
            value={university}
            onChange={this.handleChange}
            label="University"
            required
          />

          <FormInput
            type="text"
            name="facultyid"
            value={facultyid}
            onChange={this.handleChange}
            label="Faculty ID"
            required
          />

          <CustomButton type="submit">Submit Project</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
