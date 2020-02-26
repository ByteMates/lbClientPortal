import React from "react";
import BgImage from "../../Images/BgLog.png";
import "../Login/Login.css";
import Logo from "../../Images/logo.png";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
  Container
} from "reactstrap";

class ForgetPasswordForm extends React.Component {
  resendPassword = () => {};
  render() {
    return (
      <Form className="textfieldC">
        <img src={Logo} />
        <h2>Forget Password</h2>
        <FormGroup className="marginForms">
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter Your Registerd Email"
          />
        </FormGroup>
        <p className="paraText">Get reset password via email</p>
        <input
          type="button"
          className="btnLogin"
          value="SEND"
          onClick={this.gotoHome}
        />
        <a href="/" className="linkForget">
          Back to login
        </a>
      </Form>
    );
  }
}
export default ForgetPasswordForm;
