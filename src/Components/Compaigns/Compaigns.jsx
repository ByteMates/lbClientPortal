import { faPlusCircle, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "reactstrap";
import DownloadButtonComp from "../../DownloadButton";
import "../Agents/Table.css";
import SearchBarComponent from "../SearchBar";
import DownloadModal from "../../ModalPopup";
import DropdownComp from "../DropDown";

class Compaigns extends React.Component {
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
              width: "58%",
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
              Compaigns
            </h1>
          </div>
          <div
            style={{
              backgroundColor: "white",
              width: "42%",
              float: "right",
              height: "100px",
              display: "flex",
              alignItems: "center"
            }}
          >
            <Button
              outline
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
            <Button
              color="primary"
              style={{
                float: "left",
                borderRadius: "0",
                marginLeft: "8px"
              }}
            >
              Create Compaign
              <span aria-hidden style={{ marginLeft: "5px" }}>
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  style={{ fontSize: "1em" }}
                />
              </span>
            </Button>{" "}
            <SearchBarComponent />
            <DropdownComp
              DropList={["Name", "ID", "Product"]}
              style={{
                float: "left",
                marginTop: "20px",
                borderRadius: "0px",
                backgroundColor: "green"
              }}
            />
          </div>
        </div>
        <DownloadModal isOpen={this.state.isModalOpen} toggle={this.toggle} />
        <table className="customers">
          <tr>
            <td>Date</td>
            <td>Name</td>
            <td>ID</td>
            <td>Company</td>
            <td>Product</td>
            <td>Order #</td>
            <td>Qty</td>
            <td>Opening</td>
            <td>Closing</td>
            <td>Achieve Qty</td>
            <td>Status</td>
          </tr>
          <tr>
            <td>15 June 2020</td>
            <td>Unilever_Sunsilk_5541</td>
            <td>Unilever_Sunsilk_5541</td>
            <td>Unilever</td>
            <td>Sunsilk</td>
            <td>51554</td>
            <td>500,000</td>
            <td>15 Jan 2020</td>
            <td>15 Jan 2020</td>
            <td>12,000</td>
            <td>Active/Inactive</td>
          </tr>
          <tr>
            <td>15 June 2020</td>
            <td>Unilever_Sunsilk_5541</td>
            <td>Unilever_Sunsilk_5541</td>
            <td>Unilever</td>
            <td>Sunsilk</td>
            <td>51554</td>
            <td>500,000</td>
            <td>15 Jan 2020</td>
            <td>15 Jan 2020</td>
            <td>12,000</td>
            <td>Active/Inactive</td>
          </tr>
          <tr>
            <td>15 June 2020</td>
            <td>Unilever_Sunsilk_5541</td>
            <td>Unilever_Sunsilk_5541</td>
            <td>Unilever</td>
            <td>Sunsilk</td>
            <td>51554</td>
            <td>500,000</td>
            <td>15 Jan 2020</td>
            <td>15 Jan 2020</td>
            <td>12,000</td>
            <td>Active/Inactive</td>
          </tr>
          <tr>
            <td>15 June 2020</td>
            <td>Unilever_Sunsilk_5541</td>
            <td>Unilever_Sunsilk_5541</td>
            <td>Unilever</td>
            <td>Sunsilk</td>
            <td>51554</td>
            <td>500,000</td>
            <td>15 Jan 2020</td>
            <td>15 Jan 2020</td>
            <td>12,000</td>
            <td>Active/Inactive</td>
          </tr>
          <tr>
            <td>15 June 2020</td>
            <td>Unilever_Sunsilk_5541</td>
            <td>Unilever_Sunsilk_5541</td>
            <td>Unilever</td>
            <td>Sunsilk</td>
            <td>51554</td>
            <td>500,000</td>
            <td>15 Jan 2020</td>
            <td>15 Jan 2020</td>
            <td>12,000</td>
            <td>Active/Inactive</td>
          </tr>
        </table>
      </>
    );
  }
}
export default Compaigns;
