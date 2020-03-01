import React from "react";
import { Row, Col } from "reactstrap";
import profileImg from "../../Images/uni.png";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, FormGroup, Input } from "reactstrap";
class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col lg="12">
          <div
            style={{
              width: "100%",
              float: "left",
              height: "100px",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center"
            }}
          >
            <h1
              style={{
                color: "Blue",
                fontSize: "30px",
                fontWeight: "500",
                textAlign: "left",
                marginLeft: "15px"
              }}
            >
              Profile
            </h1>
          </div>
          <div
            style={{
              width: "100%",
              float: "left",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center"
            }}
          >
            <img
              src={profileImg}
              style={{
                width: "100px",
                height: "100px",
                float: "left",
                borderRadius: "50%",
                border: "1px solid lightgray",
                marginLeft: "15px"
              }}
            />
            <span
              style={{
                color: "black",
                marginLeft: "15px",
                fontSize: "28px",
                fontWeight: "400"
              }}
            >
              Unilever Pakistan
            </span>
            <FontAwesomeIcon
              icon={faAddressCard}
              style={{ fontSize: "1em", color: "blue", marginLeft: "100px" }}
            />
            <span
              style={{
                color: "black",
                marginLeft: "15px",
                fontSize: "28px",
                fontWeight: "400"
              }}
            >
              60C, main khayaban - e - Ittahad, DHA, Karachi
            </span>
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center"
            }}
          >
            <span
              style={{
                backgroundColor: "lightGray",
                color: "lightGray",
                height: "0.9px",
                width: "95%",
                margin: "0 auto",
                marginTop: "30px"
              }}
            ></span>
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center"
            }}
          >
            <span
              style={{
                fontSize: "24px",
                color: "black",
                marginLeft: "15px",
                marginTop: "30px"
              }}
            >
              Change Password
            </span>
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center"
            }}
          >
            <Form
              style={{
                marginLeft: "15px",
                marginTop: "30px",
                marginBottom: "80px"
              }}
            >
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Current password"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="New password"
                />
              </FormGroup>
              <input
                type="button"
                className="btnLogin"
                value="Update"
                onClick={this.gotoHome}
              />
            </Form>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Profile;
