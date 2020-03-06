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
  faStickyNote,
  faMapPin,
  faMapMarker
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)"
    }}
  >
    <FontAwesomeIcon icon={faMapMarker} style={{ color: "red" }} />
  </div>
);

class LocationTrack extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    center: { lat: 24.870734, lng: 67.090292 },
    zoom: 14
  };

  render() {
    return (
      <div style={{ width: "100%", height: "470px", marginTop: "30px" }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={24.870734} lng={67.090292} text={"Rider 1"} />
          <AnyReactComponent lat={24.872661} lng={67.087009} text={"Rider 2"} />
          <AnyReactComponent lat={24.879633} lng={67.115254} text={"Rider 3"} />
        </GoogleMapReact>
      </div>
    );
  }
}
export default LocationTrack;
