import {
  faDownload,
  faUser,
  faMobile,
  faHashtag
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Button,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter
} from "reactstrap";
import DatePicker from "./Components/DatePicker";
const { forwardRef, useRef, useImperativeHandle } = React;

class DownloadModal extends React.Component {
  constructor(props) {
    super(props);
    debugger;
  }

  downloadForm = () => {
    console.log("jani download krlo ab");
  };
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.isOpen}
          toggle={this.props.toggle}
          className={this.props.className}
        >
          <ModalBody style={{ padding: "20px" }}>
            <h2>Download Data</h2>
            <h6 style={{ textAlign: "center" }}>
              <DatePicker /> <span style={{ color: "#000" }}> TO </span>{" "}
              <DatePicker />
            </h6>
            <h6>
              <FormGroup className="marginForms">
                <Input
                  type="text"
                  name="text"
                  id="exampleEmail"
                  placeholder="Compaign Name"
                />
              </FormGroup>
            </h6>
            <h6>
              <Button
                color="primary"
                style={{
                  borderRadius: "0",
                  width: "100%"
                }}
                onClick={this.downloadForm}
              >
                Download{" "}
                <span aria-hidden>
                  <FontAwesomeIcon
                    icon={faDownload}
                    style={{ fontSize: "1em" }}
                  />
                </span>
              </Button>
            </h6>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.props.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export class CompaignsDetailModal extends React.Component {
  constructor(props) {
    super(props);
    debugger;
  }

  downloadForm = () => {
    console.log("jani download krlo ab");
  };

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.isOpen}
          toggle={this.props.toggle}
          className={this.props.className}
          size="lg"
        >
          <ModalBody style={{ padding: "20px" }}>
            <h2>Active Compaign Details</h2>
            <h6 style={{ textAlign: "center", marginTop: "20px" }}>
              <span style={{ padding: "20px" }}>
                {" "}
                <FontAwesomeIcon icon={faUser} /> Agent Name : Meher Ali
              </span>
              <span style={{ padding: "20px" }}>
                <FontAwesomeIcon icon={faHashtag} /> Agent Id : AG5454
              </span>
              <span style={{ padding: "20px" }}>
                {" "}
                <FontAwesomeIcon icon={faMobile} /> Mobile# 0342245748
              </span>
            </h6>
            <h1
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
                  width: "100%",
                  marginTop: "30px"
                }}
              ></span>
            </h1>
            <h6 style={{ marginTop: "20px" }}>Working On</h6>
            <h6 style={{ marginTop: "30px" }}>
              <span style={{ padding: "10px" }}>
                <Button outline color="primary">
                  Unilever_FOC_1
                </Button>
              </span>
              <span style={{ padding: "10px" }}>
                <Button outline color="primary">
                  Unilever_FOC_2
                </Button>
              </span>
              <span style={{ padding: "10px" }}>
                <Button outline color="primary">
                  Unilever_FOC_3
                </Button>
              </span>
            </h6>
            <h1
              style={{
                width: "100%",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                marginTop: "20px"
              }}
            >
              <span
                style={{
                  backgroundColor: "lightGray",
                  color: "lightGray",
                  height: "0.9px",
                  width: "100%",
                  marginTop: "30px"
                }}
              ></span>
            </h1>
            <h6 style={{ marginTop: "20px" }}>Add New</h6>
            <Input
              type="search"
              name="text"
              id="exampleSearch"
              placeholder="Compaign Name"
              style={{
                width: "200px",
                float: "left",
                borderRadius: "0"
              }}
            />
            <Button
              color="primary"
              style={{ float: "left", borderRadius: "0" }}
            >
              Add
            </Button>

            <Button
              color="primary"
              style={{ float: "right" }}
              onClick={this.props.toggle}
            >
              save Details
            </Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export class DownloadAttendenceModal extends React.Component {
  constructor(props) {
    super(props);
    debugger;
  }

  downloadForm = () => {
    console.log("jani download krlo ab");
  };
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.isOpen}
          toggle={this.props.toggle}
          className={this.props.className}
        >
          <ModalBody style={{ padding: "20px" }}>
            <h2>Download Attendence</h2>
            <h6 style={{ textAlign: "center" }}>
              <DatePicker /> <span style={{ color: "#000" }}> TO </span>{" "}
              <DatePicker />
            </h6>
            <h6>
              <FormGroup
                className="marginForms"
                style={{ width: "45%", float: "left" }}
              >
                <Input
                  type="text"
                  name="text"
                  id="exampleEmail"
                  placeholder="Agent Name"
                />
              </FormGroup>
              <FormGroup
                className="marginForms"
                style={{ width: "45%", float: "right" }}
              >
                <Input
                  type="text"
                  name="text"
                  id="exampleEmail"
                  placeholder="Agent Id"
                />
              </FormGroup>
            </h6>
            <h6>
              <Button
                color="primary"
                style={{
                  borderRadius: "0",
                  width: "100%"
                }}
                onClick={this.downloadForm}
              >
                Download{" "}
                <span aria-hidden>
                  <FontAwesomeIcon
                    icon={faDownload}
                    style={{ fontSize: "1em" }}
                  />
                </span>
              </Button>
            </h6>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.props.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DownloadModal;
