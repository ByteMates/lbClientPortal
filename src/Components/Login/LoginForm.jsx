import React from "react";
import { Form, FormGroup, Input } from "reactstrap";
import Logo from "../../Images/logo.png";
import "./Login.css";

import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  gotoHome = () => {
    this.props.history.push("/home");
  };
  render() {
    return (
      <Form className="textfieldC">
        <img src={Logo} />
        <FormGroup className="marginForms">
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter Email"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Enter password"
          />
        </FormGroup>
        <input
          type="button"
          className="btnLogin"
          value="Login"
          onClick={this.gotoHome}
        />
        <a href="/forgetPassword" className="linkForget">
          Forgot Password
        </a>
      </Form>
    );
  }
}
export default withRouter(LoginForm);
