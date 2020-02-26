import React from "react";
import BgImage from "../../Images/BgLog.png";
import "./Login.css";
import LoginForm from "./LoginForm";
class Login extends React.Component {
  render() {
    return (
      <div className="loginWrapper">
        <div className="leftBg">
          <img src={BgImage} className="leftBgImg" />
        </div>
        <div className="RightBg">
          <LoginForm />
        </div>
      </div>
    );
  }
}
export default Login;
