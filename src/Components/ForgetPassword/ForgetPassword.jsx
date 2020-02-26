import React from "react";
import BgImage from "../../Images/BgLog.png";
import ForgetPasswordForm from "./ForgetPasswordForm";
import "../Login/Login.css";
class ForgetPassword extends React.Component {
  render() {
    return (
      <div className="loginWrapper">
        <div className="leftBg">
          <img src={BgImage} className="leftBgImg" />
        </div>
        <div className="RightBg">
          <ForgetPasswordForm />
        </div>
      </div>
    );
  }
}
export default ForgetPassword;
