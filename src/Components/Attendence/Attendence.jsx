import React from "react";
import "../Agents/Table.css";
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
import DatePicker from "../DatePicker";
import searchBarComponent from "../SearchBar";
import DropdownComp from "../DropDown";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

class Attendence extends React.Component {
  render() {
    return (
      <table id="customers">
        <tr>
          <th
            colSpan="3"
            style={{
              color: "Blue",
              fontSize: "26px",
              fontWeight: "500",
              textAlign: "left",
              borderStyle: "hidden"
            }}
          >
            Attendence
          </th>
          <th colSpan="2" style={{ borderStyle: "hidden" }}>
            <DatePicker /> <span style={{ color: "#000" }}> TO </span>{" "}
            <DatePicker />
          </th>

          <th style={{ borderStyle: "hidden" }}>
            {" "}
            <Button color="primary">Download</Button>{" "}
          </th>
          <th colSpan="2" style={{ borderStyle: "hidden" }}>
            <Form style={{ width: "400px", float: "right" }}>
              <FormGroup>
                <Label for="exampleSearch">Search</Label>
                <Input
                  type="search"
                  name="search"
                  id="exampleSearch"
                  placeholder="searchBy"
                />
              </FormGroup>
            </Form>
          </th>
          <th>
            <DropdownComp />
          </th>
        </tr>
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
    );
  }
}
export default Attendence;
