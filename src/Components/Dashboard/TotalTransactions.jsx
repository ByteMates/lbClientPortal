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

import {
  faHome,
  faUsers,
  faBullhorn,
  faCheckCircle,
  faStickyNote
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TotalTransactions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardHeader style={{ backgroundColor: "#fff" }}>
          <CardTitle tag="h6" style={{ color: "#000" }}>
            <FontAwesomeIcon icon={faBullhorn} style={{ fontSize: "1em" }} />{" "}
            Comapaign Transactions
          </CardTitle>{" "}
          <CardTitle
            tag="h3"
            style={{ textAlign: "center", fontWeight: "bold", color: "#000" }}
          >
            10,253
          </CardTitle>
        </CardHeader>
      </Card>
    );
  }
}
export default TotalTransactions;
