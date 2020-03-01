import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "reactstrap";
import DownloadDataModal from "./ModalPopup";

class DownloadButtonComp extends React.Component {
  showDownloadModal = () => {
    debugger;
    return <DownloadDataModal />;
  };
  render() {
    return (
      <Button
        outline
        color="primary"
        style={{
          float: "left",
          borderRadius: "0",
          marginTop: "20px"
        }}
        onClick={this.props.onClick}
      >
        Download{" "}
        <span aria-hidden>
          <FontAwesomeIcon icon={faDownload} style={{ fontSize: "1em" }} />
        </span>
      </Button>
    );
  }
}
export default DownloadButtonComp;
