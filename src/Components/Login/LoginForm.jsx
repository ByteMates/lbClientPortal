import React from "react";
import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
import Logo from "../../Images/logo.png";
import "./Login.css";

import { faUserCircle, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FontAwesomeIcon icon={faUserCircle} />
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Enter email" />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FontAwesomeIcon icon={faKey} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Enter password"
            />
          </InputGroup>
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
