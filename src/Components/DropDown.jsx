import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const DropdownComp = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={toggle}
      style={{
        borderRadius: "0",
        width: "100px",
        float: "left"
      }}
    >
      <DropdownToggle caret style={{ borderRadius: "0" }}>
        Name
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Id</DropdownItem>
        <DropdownItem>Mobile No</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownComp;
