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
        {props.DropList[0]}
      </DropdownToggle>
      <DropdownMenu>
        {props.DropList.map((item, key) => (
          <DropdownItem>{item}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownComp;
