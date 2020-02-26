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

import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import DropdownComp from "../DropDown";

class Agents extends React.Component {
  render() {
    return (
      <table id="customers">
        <tr>
          <th
            colSpan="5"
            style={{
              color: "Blue",
              fontSize: "26px",
              fontWeight: "500",
              textAlign: "left",
              padding: "20px",
              borderStyle: "hidden"
            }}
          >
            Agents
          </th>
          <th colSpan="3" style={{ borderStyle: "hidden" }}>
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
          <td>Active/InActive</td>
          <td>Compaign1</td>
          <td>Compaign2</td>
          <td>
            <Button color="primary">Edit</Button>{" "}
          </td>
        </tr>
        <tr>
          <td>Meher Ali</td>
          <td>AG5454</td>
          <td>034224578</td>
          <td>12:34 Wed,15 Jan 2020</td>
          <td>12:34 Wed,15 Jan 2020</td>
          <td>Active/InActive</td>
          <td>Compaign1</td>
          <td>Compaign2</td>
          <td>
            <Button color="primary">Edit</Button>{" "}
          </td>
        </tr>
        <tr>
          <td>Meher Ali</td>
          <td>AG5454</td>
          <td>034224578</td>
          <td>12:34 Wed,15 Jan 2020</td>
          <td>12:34 Wed,15 Jan 2020</td>
          <td>Active/InActive</td>
          <td>Compaign1</td>
          <td>Compaign2</td>
          <td>
            <Button color="primary">Edit</Button>{" "}
          </td>
        </tr>
      </table>
    );
  }
}
export default Agents;
