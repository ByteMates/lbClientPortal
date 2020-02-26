import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

var items = ["Name", "Id", "Mobile"];
class DropdownComp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ButtonDropdown>
        <DropdownToggle caret>{items[0]}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>{items[0]}</DropdownItem>
          <DropdownItem header>{items[1]}</DropdownItem>
          <DropdownItem header>{items[2]}</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
export default DropdownComp;
