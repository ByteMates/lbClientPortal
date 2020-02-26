import React from "react";
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
import mapImage from "../../Images/Map.png";
import {
  faHome,
  faUsers,
  faBullhorn,
  faCheckCircle,
  faStickyNote
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LocationTrack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img
        src={mapImage}
        style={{ width: "100%", height: "95%", marginTop: "20px" }}
      />
    );
  }
}
export default LocationTrack;
