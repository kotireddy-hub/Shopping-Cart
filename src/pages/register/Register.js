import React from 'react';
import Layout from '../../components/Layout';
import { Button, Input } from 'reactstrap';
import { SetUser } from '../../services/storage.service'
import './register.scss';

class Register extends React.Component {
  constructor() {
      super();
      this.state = {
        fields: {
          "firstname": "",
          "emailid": "",
          "password": "",
          "lastname":""
        },
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submitForm = this.submitForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submitForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["firstname"] = "";
          fields["emailid"] = "";
          fields["lastname"] = "";
          fields["password"] = "";
          if(!SetUser.getUser(this.state.fields["emailid"])) {
            SetUser.saveUser(this.state.fields);
          }
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["firstname"]) {
        formIsValid = false;
        errors["firstname"] = "*Please enter your Firstname.";
      }

      if (typeof fields["firstname"] !== "undefined") {
        if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["firstname"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["lastname"]) {
        formIsValid = false;
        errors["lastname"] = "*Please enter your Lastname.";
      }

      if (typeof fields["lastname"] !== "undefined") {
        if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["lastname"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        // if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        if (!fields["password"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }
    render() {
    return (
        <Layout title="Cart" description="This is the Cart page" >
        <form className="mt-5 col-sm-9">
              <h3>Register / Sign Up</h3>

              <div className="form-group">
                  <label>First name</label>
                  <Input type="text" name="firstname" className="name" placeholder="First name" value={this.state.fields["firstname"]} onChange={this.handleChange} />
                  <div className="errorMsg">{this.state.errors.firstname}</div>
              </div>

              <div className="form-group">
                  <label>Last name</label>
                  <Input type="text" name="lastname" className="name" placeholder="Last name" value={this.state.fields["lastname"]} onChange={this.handleChange} />
                  <div className="errorMsg">{this.state.errors.lastname}</div>
              </div>

              <div className="form-group">
                  <label>Email address</label>
                  <Input type="email" name="emailid" className="email" placeholder="Enter email" value={this.state.fields["emailid"]} onChange={this.handleChange} />
                  <div className="errorMsg">{this.state.errors.emailid}</div>
              </div>

              <div className="form-group">
                  <label>Password</label>
                  <Input type="password" name="password" className="password" placeholder="Enter password" value={this.state.fields["password"]} onChange={this.handleChange} />
                  <div className="errorMsg">{this.state.errors.password}</div>
              </div>

              <Button onClick={(e) => this.submitForm(e)} className="registerBtn">Sign Up</Button>
          </form>
        </Layout>
     );
   }
}

export default Register;
