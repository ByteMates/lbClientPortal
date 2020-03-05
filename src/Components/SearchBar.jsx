import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

class SearchBarComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Form
        style={{
          width: "200px"
        }}
      >
        <FormGroup>
          <InputGroup style={{ marginLeft: "10px", marginTop: "15px" }}>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              type="search"
              name="search"
              id="exampleSearch"
              placeholder="searchBy"
              style={{
                width: "200px",
                float: "left",
                borderRadius: "0"
              }}
            />
          </InputGroup>
        </FormGroup>
      </Form>
    );
  }
}

export default SearchBarComponent;
