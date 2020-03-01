import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "reactstrap";
import { DownloadAttendenceModal } from "../../ModalPopup";
import "../Agents/Table.css";
import DropdownComp from "../DropDown";
import SearchBarComponent from "../SearchBar";

class Attendence extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
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
              width: "70%",
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
              Attendence
            </h1>
          </div>
          <div
            style={{
              backgroundColor: "white",
              width: "30%",
              float: "right",
              height: "100px",
              display: "flex",
              alignItems: "center"
            }}
          >
            <Button
              color="primary"
              style={{
                float: "left",
                borderRadius: "0"
              }}
              onClick={this.toggle}
            >
              Download{" "}
              <span aria-hidden>
                <FontAwesomeIcon
                  icon={faDownload}
                  style={{ fontSize: "1em" }}
                />
              </span>
            </Button>

            <SearchBarComponent />
            <DropdownComp
              style={{
                float: "left",
                marginTop: "20px",
                borderRadius: "0px",
                backgroundColor: "green"
              }}
            />
          </div>
        </div>
        <DownloadAttendenceModal
          isOpen={this.state.isModalOpen}
          toggle={this.toggle}
        />

        <table className="customers">
          <tr>
            <td>Name</td>
            <td>Agent ID</td>
            <td>Mobile</td>
            <td>Sign In</td>
            <td>Sign Out</td>
            <td>Zone In</td>
            <td>Zone Out</td>
            <td>Active Compaigns</td>
            <td>Active Hours</td>
            <td>Compaigns Count</td>
          </tr>
          <tr>
            <td>Meher Ali</td>
            <td>AG5454</td>
            <td>03412457457</td>
            <td>12:34 Web,15 Jan 2020</td>
            <td>12:34 Web,15 Jan 2020</td>
            <td>Lyari</td>
            <td>Lyari</td>
            <td>Unilever_FOC_5135</td>
            <td>24</td>
            <td>52</td>
          </tr>
          <tr>
            <td>Meher Ali</td>
            <td>AG5454</td>
            <td>03412457457</td>
            <td>12:34 Web,15 Jan 2020</td>
            <td>12:34 Web,15 Jan 2020</td>
            <td>Lyari</td>
            <td>Lyari</td>
            <td>Unilever_FOC_5135</td>
            <td>24</td>
            <td>52</td>
          </tr>
          <tr>
            <td>Meher Ali</td>
            <td>AG5454</td>
            <td>03412457457</td>
            <td>12:34 Web,15 Jan 2020</td>
            <td>12:34 Web,15 Jan 2020</td>
            <td>Lyari</td>
            <td>Lyari</td>
            <td>Unilever_FOC_5135</td>
            <td>24</td>
            <td>52</td>
          </tr>
          <tr>
            <td>Meher Ali</td>
            <td>AG5454</td>
            <td>03412457457</td>
            <td>12:34 Web,15 Jan 2020</td>
            <td>12:34 Web,15 Jan 2020</td>
            <td>Lyari</td>
            <td>Lyari</td>
            <td>Unilever_FOC_5135</td>
            <td>24</td>
            <td>52</td>
          </tr>
        </table>
      </>
    );
  }
}
export default Attendence;
