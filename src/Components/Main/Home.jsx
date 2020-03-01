import {
  faBullhorn,
  faCheckCircle,
  faHome,
  faPersonBooth,
  faStickyNote,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumbs from "@trendmicro/react-breadcrumbs";
import SideNav, { NavIcon, NavItem, NavText } from "@trendmicro/react-sidenav";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import ensureArray from "ensure-array";
import React from "react";
import styled from "styled-components";
import Agents from "../Agents/Agents";
import Attendence from "../Attendence/Attendence";
import Compaigns from "../Compaigns/Compaigns";
import Dashboard from "../Dashboard/Dashboard";
import TopBar from "../Fixed/TopBar";
import Profile from "../profile/Profile";
import "./Home.css";

const Main = styled.main`
  position: relative;
  overflow: hidden;
  transition: all 0.15s;
  margin: 30px;
  margin-left: -25px;
`;

const detComponent = item => {
  if (item === "dashboard") {
    return <Dashboard />;
  } else if (item === "Agents") {
    return <Agents />;
  } else if (item === "compaigns") {
    return <Compaigns />;
  } else if (item === "Attendence") {
    return <Attendence />;
  } else if (item === "profile") {
    return <Profile />;
  }
};
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
    home: "dashboard",
    Agents: "Agents",
    compaigns: "compaigns",
    Attendence: "Attendence",
    reports: ["Reports"],
    profile: "profile",
    "settings/policies": ["Settings", "Policies"],
    "settings/network": ["Settings", "Network"]
  };
  renderBreadcrumbs() {
    const { selected } = this.state;
    const list = ensureArray(this.pageTitle[selected]);

    return (
      <Breadcrumbs style={{ color: "#e8e8e8" }}>
        {list.map((item, index) => (
          <Breadcrumbs.Item>{detComponent(item)}</Breadcrumbs.Item>
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
      <>
        <div className="App">
          <div
            style={{
              marginLeft: expanded ? 240 : 64,
              width: expanded ? "85%" : "100%"
            }}
          >
            <div>
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
                    <FontAwesomeIcon
                      icon={faHome}
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText
                    style={{
                      paddingRight: "32"
                    }}
                    title="home"
                  >
                    Dashboard
                  </NavText>
                </NavItem>
                <NavItem eventKey="Agents">
                  <NavIcon>
                    <FontAwesomeIcon
                      icon={faUsers}
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText style={{ paddingRight: 32 }} title="Agents">
                    Agents
                  </NavText>
                </NavItem>
                <NavItem eventKey="compaigns">
                  <NavIcon>
                    <FontAwesomeIcon
                      icon={faBullhorn}
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText style={{ paddingRight: 32 }} title="compaigns">
                    Compaigns
                  </NavText>
                </NavItem>
                <NavItem eventKey="Attendence">
                  <NavIcon>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText style={{ paddingRight: 32 }} title="Attendence">
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
                <NavItem eventKey="profile">
                  <NavIcon>
                    <FontAwesomeIcon
                      icon={faPersonBooth}
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText style={{ paddingRight: 32 }} title="profile">
                    Profile
                  </NavText>
                </NavItem>
              </SideNav.Nav>
            </SideNav>
            <Main expanded={expanded}>{this.renderBreadcrumbs()}</Main>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
