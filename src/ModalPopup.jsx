import { faDownload } from "@fortawesome/free-solid-svg-icons";
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
