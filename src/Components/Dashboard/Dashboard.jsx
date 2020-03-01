import React from "react";
import { Row, Col } from "reactstrap";
import TotalCompaigns from "./TotalCompaigns";
import TotalAgents from "./TotalAgents";
import TotalTransactions from "./TotalTransactions";
import LocationTrack from "./LocationTrack";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row style={{ backgroundColor: "yellow" }}>
        <Col lg="4">
          <TotalCompaigns />
        </Col>
        <Col lg="4">
          <TotalAgents />
        </Col>
        <Col lg="4">
          <TotalTransactions />
        </Col>
        <Col lg="8">
          <LocationTrack />
        </Col>
      </Row>
    );
  }
}
export default Dashboard;
