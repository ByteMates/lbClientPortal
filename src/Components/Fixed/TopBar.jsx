import React from "react";
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
          <Nav>
            <NavDropdown title="Unilever" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <FontAwesomeIcon icon={faUserAlt} />
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
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
