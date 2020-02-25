import "./Home.css";

import React from "react";
import SideBarComp from "../Fixed/SideBar";
import TopBar from "../Fixed/TopBar";
import SideNav, { NavIcon, NavItem, NavText } from "@trendmicro/react-sidenav";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Breadcrumbs from "@trendmicro/react-breadcrumbs";
import styled from "styled-components";
import ensureArray from "ensure-array";

import {
  faHome,
  faUsers,
  faBullhorn,
  faCheckCircle,
  faStickyNote
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = styled.main``;

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    selected: "home",
    expanded: false
  };

  onSelect = selected => {
    this.setState({ selected: selected });
  };
  onToggle = expanded => {
    this.setState({ expanded: expanded });
  };

  pageTitle = {
    home: "Home",
    devices: ["Devices"],
    reports: ["Reports"],
    "settings/policies": ["Settings", "Policies"],
    "settings/network": ["Settings", "Network"]
  };
  renderBreadcrumbs() {
    const { selected } = this.state;
    const list = ensureArray(this.pageTitle[selected]);

    return (
      <Breadcrumbs>
        {list.map((item, index) => (
          <Breadcrumbs.Item
            active={index === list.length - 1}
            key={`${selected}_${index}`}
          >
            {item}
          </Breadcrumbs.Item>
        ))}
      </Breadcrumbs>
    );
  }

  navigate = pathname => () => {
    this.setState({ selected: pathname });
  };

  render() {
    const { expanded, selected } = this.state;
    return (
      <div className="App">
        <div
          style={{
            marginLeft: expanded ? 240 : 64,
            width: expanded ? "85%" : "100%"
          }}
        >
          <TopBar />
        </div>
        <SideNav
          onSelect={this.onSelect}
          onToggle={this.onToggle}
          style={{ backgroundColor: "#000" }}
        >
          <SideNav.Toggle />
          <SideNav.Nav selected={selected}>
            <NavItem eventKey="home">
              <NavIcon>
                <FontAwesomeIcon icon={faHome} style={{ fontSize: "1.75em" }} />
              </NavIcon>
              <NavText style={{ paddingRight: 32 }} title="Home">
                Dashboard
              </NavText>
            </NavItem>
            <NavItem eventKey="devices">
              <NavIcon>
                <FontAwesomeIcon
                  icon={faUsers}
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText style={{ paddingRight: 32 }} title="Devices">
                Agents
              </NavText>
            </NavItem>
            <NavItem eventKey="reports">
              <NavIcon>
                <FontAwesomeIcon
                  icon={faBullhorn}
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText style={{ paddingRight: 32 }} title="Reports">
                Compaigns
              </NavText>
            </NavItem>
            <NavItem eventKey="settings">
              <NavIcon>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText style={{ paddingRight: 32 }} title="Settings">
                Attendence
              </NavText>
            </NavItem>
            <NavItem eventKey="settings">
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
      </div>
    );
  }
}

export default Home;
