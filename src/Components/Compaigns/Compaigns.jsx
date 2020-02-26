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
import searchBarComponent from "../SearchBar";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import DropdownComp from "../DropDown";

class Compaigns extends React.Component {
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
              borderStyle: "hidden"
            }}
          >
            Compaigns
          </th>
          <th style={{ borderStyle: "hidden" }}>
            <Button outline color="primary">
              Download
            </Button>{" "}
          </th>
          <th>
            <Button color="primary">Create Compaign</Button>{" "}
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
          <th style={{ borderStyle: "hidden" }}>
            <DropdownComp />
          </th>
        </tr>
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
    );
  }
}
export default Compaigns;
