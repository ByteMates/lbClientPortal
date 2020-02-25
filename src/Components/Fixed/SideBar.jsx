import SideNav, { NavIcon, NavItem, NavText } from "@trendmicro/react-sidenav";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import React from "react";

import {
  faHome,
  faUsers,
  faBullhorn,
  faCheckCircle,
  faStickyNote
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SideBarComp extends React.Component {
  render() {
    return (
      <SideNav
        style={{ backgroundColor: "#000" }}
        onSelect={selected => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <FontAwesomeIcon icon={faHome} style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Dashboard</NavText>
          </NavItem>
          <NavItem eventKey="home">
            <NavIcon>
              <FontAwesomeIcon icon={faUsers} style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Agents</NavText>
          </NavItem>
          <NavItem eventKey="home">
            <NavIcon>
              <FontAwesomeIcon
                icon={faBullhorn}
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Compaigns</NavText>
          </NavItem>
          <NavItem eventKey="home">
            <NavIcon>
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Attendence</NavText>
          </NavItem>
          <NavItem eventKey="home">
            <NavIcon>
              <FontAwesomeIcon
                icon={faStickyNote}
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Bulk</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default SideBarComp;
