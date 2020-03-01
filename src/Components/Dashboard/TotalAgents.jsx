import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, CardHeader, CardTitle } from "reactstrap";

class TotalAgents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardHeader style={{ backgroundColor: "#fff" }}>
          <CardTitle tag="h6" style={{ color: "#000" }}>
            <FontAwesomeIcon icon={faBullhorn} style={{ fontSize: "1em" }} />{" "}
            Total Agents
          </CardTitle>{" "}
          <CardTitle
            tag="h3"
            style={{ textAlign: "center", fontWeight: "bold", color: "#000" }}
          >
            200
          </CardTitle>
        </CardHeader>
      </Card>
    );
  }
}
export default TotalAgents;
