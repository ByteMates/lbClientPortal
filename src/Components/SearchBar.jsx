import React from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

class searchBarComponent extends React.Component {
  render() {
    return (
      <Form>
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
    );
  }
}

export default searchBarComponent;
