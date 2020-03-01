import React from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import DropdownComp from "./DropDown";

class SearchBarComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Form
        style={{
          width: "200px",
          float: "left"
        }}
      >
        <FormGroup>
          <Input
            type="search"
            name="search"
            id="exampleSearch"
            placeholder="searchBy"
            style={{
              width: "200px",
              float: "left",
              borderRadius: "0",
              marginLeft: "10px"
            }}
          />
        </FormGroup>
      </Form>
    );
  }
}

export default SearchBarComponent;
