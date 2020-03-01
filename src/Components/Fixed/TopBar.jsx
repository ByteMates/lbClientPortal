import React from "react";
import profileImg from "../../Images/uni.png";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Row,
  Col,
  Nav,
  NavDropdown,
  Form,
  Button,
  Image
} from "react-bootstrap";

import {
  faHome,
  faUserAlt,
  faSignInAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  gotoLogin = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "white" }}>
        <input
          type="text"
          style={{
            outline: "0",
            borderWidth: "0 0 1px",
            borderColor: "gray"
          }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Button
              className="btn btn-primary"
              style={{
                marginLeft: "20px",
                backgroundColor: "#2A00FF",
                color: "#fff"
              }}
            >
              Copy Link
            </Button>
          </Nav>
          <img
            src={profileImg}
            style={{
              width: "40px",
              height: "40px",
              float: "left",
              borderRadius: "50%",
              border: "1px solid lightgray"
            }}
          />
          <Nav>
            <NavDropdown title="Unilever" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/home/profile">
                <FontAwesomeIcon icon={faUserAlt} />
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="/">
                <FontAwesomeIcon icon={faSignInAlt} />
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopBar;
