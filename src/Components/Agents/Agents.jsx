import React from "react";
import tableCss from "./Table.css";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";
import { faPlusCircle, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import DropdownComp from "../DropDown";
import SearchBarComponent from "../SearchBar";
import { CompaignsDetailModal } from "../../ModalPopup";
import SwitchExample from "../Switch";

class Agents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    debugger;
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  render() {
    return (
      <>
        <div className="tableHeader">
          <div
            style={{
              width: "77%",
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
                marginLeft: "10px"
              }}
            >
              Agents
            </h1>
          </div>
          <div
            style={{
              backgroundColor: "white",
              width: "23%",
              float: "right",
              height: "100px",
              display: "flex",
              alignItems: "center"
            }}
          >
            <SearchBarComponent />
            <DropdownComp
              DropList={["Mobile#", "Agent Name", "Agent Id"]}
              style={{
                float: "left",
                marginTop: "20px",
                borderRadius: "0px",
                backgroundColor: "green"
              }}
            />
          </div>
        </div>
        <CompaignsDetailModal
          isOpen={this.state.isModalOpen}
          toggle={this.toggle}
        />
        <table className="customers">
          <tr>
            <td>Name</td>
            <td>Agent ID</td>
            <td>Mobile #</td>
            <td>Joining Date</td>
            <td>Last Active</td>
            <td>Status</td>
            <td colSpan="3">Active Compaigns</td>
          </tr>
          <tr>
            <td>Meher Ali</td>
            <td>AG5454</td>
            <td>034224578</td>
            <td>12:34 Wed,15 Jan 2020</td>
            <td>12:34 Wed,15 Jan 2020</td>
            <td>
              Active <SwitchExample /> InActive
            </td>
            <td>Compaign1</td>
            <td>Compaign2</td>
            <td>
              <Button color="primary" onClick={this.toggle}>
                Edit
              </Button>{" "}
            </td>
          </tr>
          <tr>
            <td>Meher Ali</td>
            <td>AG5454</td>
            <td>034224578</td>
            <td>12:34 Wed,15 Jan 2020</td>
            <td>12:34 Wed,15 Jan 2020</td>
            <td>
              Active <SwitchExample /> InActive
            </td>
            <td>Compaign1</td>
            <td>Compaign2</td>
            <td>
              <Button color="primary" onClick={this.toggle}>
                Edit
              </Button>{" "}
            </td>
          </tr>
          <tr>
            <td>Meher Ali</td>
            <td>AG5454</td>
            <td>034224578</td>
            <td>12:34 Wed,15 Jan 2020 </td>
            <td>12:34 Wed,15 Jan 2020</td>
            <td>
              Active <SwitchExample /> InActive
            </td>
            <td>Compaign1</td>
            <td>Compaign2</td>
            <Button color="primary" onClick={this.toggle}>
              Edit
            </Button>{" "}
          </tr>
        </table>
      </>
    );
  }
}
export default Agents;
